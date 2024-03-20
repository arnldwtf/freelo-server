"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiotService = void 0;
const axiosInstance_1 = require("../../utils/lol/axiosInstance");
class RiotService {
    getSummonerByName(summonerName) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axiosInstance_1.axiosInstancePlatformUrl.get(`/lol/summoner/v4/summoners/by-name/${summonerName}?&api_key=${process.env.RIOT_API_KEY}`);
            return response.data;
        });
    }
    getLeagueExpByQueueTierDivision(queue, tier, division) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axiosInstance_1.axiosInstancePlatformUrl.get(`/lol/league-exp/v4/entries/${queue}/${tier}/${division}?&api_key=${process.env.RIOT_API_KEY}`);
            return response.data;
        });
    }
    getLeagueByQueueTierDivision(queue, tier, division) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axiosInstance_1.axiosInstancePlatformUrl.get(`/lol/league/v4/entries/${queue}/${tier}/${division}?&api_key=${process.env.RIOT_API_KEY}`);
            return response.data;
        });
    }
    getLeaderboardChallengerByQueue() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axiosInstance_1.axiosInstancePlatformUrl.get(`/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?&api_key=${process.env.RIOT_API_KEY}`);
            return response.data;
        });
    }
    getLeaderboardGrandmasterByQueue() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axiosInstance_1.axiosInstancePlatformUrl.get(`/lol/league/v4/grandmasterleagues/by-queue/RANKED_SOLO_5x5?&api_key=${process.env.RIOT_API_KEY}`);
            return response.data;
        });
    }
    getLeaderboardMasterByQueue() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axiosInstance_1.axiosInstancePlatformUrl.get(`/lol/league/v4/masterleagues/by-queue/RANKED_SOLO_5x5?&api_key=${process.env.RIOT_API_KEY}`);
            return response.data;
        });
    }
    getSummonerLeagueDataById(summonerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axiosInstance_1.axiosInstancePlatformUrl.get(`/lol/league/v4/entries/by-summoner/${summonerId}?&api_key=${process.env.RIOT_API_KEY}`);
            return response.data;
        });
    }
    getMatchListByPuuid(puuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axiosInstance_1.axiosInstanceRegionUrl.get(`/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5&api_key=${process.env.RIOT_API_KEY}`);
            return response.data;
        });
    }
    getMatchDataByMatchId(matchId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axiosInstance_1.axiosInstanceRegionUrl.get(`/lol/match/v5/matches/${matchId}?&api_key=${process.env.RIOT_API_KEY}`);
            return response.data;
        });
    }
    getMatchHistoryByPuuid(puuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const matchList = yield this.getMatchListByPuuid(puuid);
            const matchHistory = matchList.map((matchId) => this.getMatchDataByMatchId(matchId));
            return yield Promise.all(matchHistory);
        });
    }
}
exports.RiotService = RiotService;
//# sourceMappingURL=riot.service.js.map