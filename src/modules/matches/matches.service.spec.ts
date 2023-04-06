import { MatchMock, MatchResponse, Sports } from '../../types/match';
import { MatchesService } from './matches.service';

describe('MatchesService', () => {
  let matchesService: any;

  beforeEach(() => {
    matchesService = new MatchesService();
  });

  it('should be defined', () => {
    expect(matchesService).toBeDefined();
  });

  describe('get', () => {
    const result: MatchResponse[] = [{ name: 'testName', score: '12:6' }];

    it('should return matches', () => {
      jest.spyOn(matchesService, 'filter').mockImplementation(() => result);

      expect(matchesService.get()).toBe(result);
    });

    it('should call console.log', () => {
      const logSpy = jest.spyOn(global.console, 'log');
      jest.spyOn(matchesService, 'filter').mockImplementation(() => result);

      matchesService.get();

      expect(logSpy).toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalledTimes(1);
      expect(logSpy).toHaveBeenCalledWith(result);
    });
  });

  describe('format', () => {
    it('should return object', () => {
      const result = {
        name: 'formattedTestName',
        score: 'formattedTestScore: 4:9',
      };

      jest
        .spyOn(matchesService, 'formatName')
        .mockImplementation(() => result.name);

      jest
        .spyOn(matchesService, 'formatScore')
        .mockImplementation(() => result.score);

      const response = matchesService.format();

      expect(response).toStrictEqual(result);
      expect(response).toMatchObject(result);
    });
  });

  describe('formatName', () => {
    const participant1 = 'firstParticipantName';
    const participant2 = 'secondParticipantName';

    it('should format name by sport', () => {
      type Data = { params: MatchMock; expected: string }[];
      const data: Data = [
        {
          params: {
            participant1,
            participant2,
            sport: Sports.basketball,
          },
          expected: 'firstParticipantName - secondParticipantName',
        },
        {
          params: {
            participant1,
            participant2,
            sport: Sports.handball,
          },
          expected: 'firstParticipantName vs secondParticipantName',
        },
        {
          params: {
            participant1,
            participant2,
            sport: Sports.skiJumping,
          },
          expected: null,
        },
        {
          params: {
            participant1,
            participant2,
            sport: Sports.soccer,
          },
          expected: 'firstParticipantName - secondParticipantName',
        },
        {
          params: {
            participant1,
            participant2,
            sport: Sports.tennis,
          },
          expected: 'firstParticipantName vs secondParticipantName',
        },
        {
          params: {
            participant1,
            participant2,
            sport: Sports.volleyball,
          },
          expected: 'firstParticipantName - secondParticipantName',
        },
      ];

      data.forEach((_data) => {
        expect(matchesService.formatName(_data.params)).toBe(_data.expected);
      });
    });

    it('should return null', () => {
      const data: MatchMock[] = [
        {
          participant1,
          sport: Sports.basketball,
        },
        {
          participant2,
          sport: Sports.basketball,
        },
        {
          sport: Sports.basketball,
        },
        {
          participant1,
          participant2,
          sport: 'randomSport' as Sports,
        },
      ];

      data.forEach((params) => {
        expect(matchesService.formatName(params)).toBe(null);
      });
    });
  });

  describe('formatScore', () => {
    it('should format score by sport', () => {
      type Data = { params: MatchMock; expected: string }[];
      const data: Data = [
        {
          params: {
            score: [
              ['9:7', '2:1'],
              ['5:3', '9:9'],
            ],
            sport: Sports.basketball,
          },
          expected: '9:7,2:1,5:3,9:9',
        },
        {
          params: {
            score: '34:26',
            sport: Sports.handball,
          },
          expected: '34:26',
        },
        {
          params: {
            sport: Sports.skiJumping,
          },
          expected: null,
        },
        {
          params: {
            score: '2:1',
            sport: Sports.soccer,
          },
          expected: '2:1',
        },
        {
          params: {
            score: '2:1,7:6,6:3,6:7',
            sport: Sports.tennis,
          },
          expected: 'Main score: 2:1 (set1 7:6, set2 6:3, set3 6:7)',
        },
        {
          params: {
            score: '3:0,25:23,25:19,25:21',
            sport: Sports.volleyball,
          },
          expected: 'Main score: 3:0 (set1 25:23, set2 25:19, set3 25:21)',
        },
        {
          params: {
            score: '3:0',
            sport: Sports.volleyball,
          },
          expected: 'Main score: 3:0',
        },
        {
          params: {
            score: '3:0,25:23',
            sport: Sports.volleyball,
          },
          expected: 'Main score: 3:0 (set1 25:23)',
        },
      ];

      data.forEach((_data) => {
        expect(matchesService.formatScore(_data.params)).toBe(_data.expected);
      });
    });

    it('should return null', () => {
      const scoreString = '12:22';
      const scoreEmptyString = '';
      const score2DArray = [
        ['21:22', '55:64'],
        ['21:22', '55:64'],
      ];
      const scoreNull = null;
      const scoreUndefined = undefined;

      const data: MatchMock[] = [
        {
          score: scoreString,
          sport: Sports.basketball,
        },
        {
          score: scoreEmptyString,
          sport: Sports.basketball,
        },
        {
          score: scoreNull,
          sport: Sports.basketball,
        },
        {
          score: scoreUndefined,
          sport: Sports.basketball,
        },
        {
          sport: Sports.basketball,
        },
        {
          score: score2DArray,
          sport: Sports.handball,
        },
        {
          score: scoreEmptyString,
          sport: Sports.handball,
        },
        {
          score: scoreNull,
          sport: Sports.handball,
        },
        {
          score: scoreUndefined,
          sport: Sports.handball,
        },
        {
          sport: Sports.handball,
        },
        {
          score: score2DArray,
          sport: Sports.tennis,
        },
        {
          score: scoreEmptyString,
          sport: Sports.tennis,
        },
        {
          score: scoreNull,
          sport: Sports.tennis,
        },
        {
          score: scoreUndefined,
          sport: Sports.tennis,
        },
        {
          sport: Sports.tennis,
        },
        {
          score: scoreString,
          sport: 'randomSport' as Sports,
        },
      ];

      data.forEach((params) => {
        expect(matchesService.formatScore(params)).toBe(null);
      });
    });
  });

  describe('filter', () => {
    it('should filter matches', () => {
      const paramsData: MatchResponse[] = [
        { name: 'testName', score: '12:6' },
        { name: undefined, score: '12:6' },
        { name: 'testName', score: undefined },
        { name: undefined, score: undefined },
        { name: 'testName', score: '12:6' },
        { name: 'testName', score: null },
      ];
      const expectedData: MatchResponse[] = [
        { name: 'testName', score: '12:6' },
        { name: 'testName', score: '12:6' },
      ];

      expect(matchesService.filter(paramsData)).toStrictEqual(expectedData);
    });
  });
});
