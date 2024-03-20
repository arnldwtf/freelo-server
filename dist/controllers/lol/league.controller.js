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
exports.getLeaderboardMaster = exports.getLeaderboardGrandmaster = exports.getLeaderboardChallenger = exports.getLeague = exports.getLeagueExp = exports.getLeagueApi = void 0;
const riot_service_1 = require("../../services/lol/riot.service");
const riotService = new riot_service_1.RiotService();
const getLeagueApi = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = {
        '/league': 'good',
    };
    res.send(data).status(200);
});
exports.getLeagueApi = getLeagueApi;
const getLeagueExp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queue = req.params.queue;
        const tier = req.params.tier;
        const division = req.params.division;
        const league = yield riotService.getLeagueExpByQueueTierDivision(queue, tier, division);
        res.json(league);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
            return;
        }
    }
});
exports.getLeagueExp = getLeagueExp;
const getLeague = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queue = req.params.queue;
        const tier = req.params.tier;
        const division = req.params.division;
        const league = yield riotService.getLeagueByQueueTierDivision(queue, tier, division);
        res.json(league);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
            return;
        }
    }
});
exports.getLeague = getLeague;
const getLeaderboardChallenger = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leaderboard = yield riotService.getLeaderboardChallengerByQueue();
        res.json(leaderboard);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
            return;
        }
    }
});
exports.getLeaderboardChallenger = getLeaderboardChallenger;
const getLeaderboardGrandmaster = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leaderboard = yield riotService.getLeaderboardGrandmasterByQueue();
        res.json(leaderboard);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
            return;
        }
    }
});
exports.getLeaderboardGrandmaster = getLeaderboardGrandmaster;
const getLeaderboardMaster = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leaderboard = yield riotService.getLeaderboardMasterByQueue();
        res.json(leaderboard);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
            return;
        }
    }
});
exports.getLeaderboardMaster = getLeaderboardMaster;
//# sourceMappingURL=league.controller.js.map