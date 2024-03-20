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
exports.getMatchHistory = exports.getMatchData = exports.getMatchList = exports.getMatchApi = void 0;
const riot_service_1 = require("../../services/lol/riot.service");
const riotService = new riot_service_1.RiotService();
const getMatchApi = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = {
        '/match': 'good',
    };
    res.send(data).status(200);
});
exports.getMatchApi = getMatchApi;
const getMatchList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const puuid = req.params.puuid;
        const matchList = yield riotService.getMatchListByPuuid(puuid);
        res.json(matchList);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
            return;
        }
    }
});
exports.getMatchList = getMatchList;
const getMatchData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const matchId = req.params.matchId;
        const matchData = yield riotService.getMatchDataByMatchId(matchId);
        res.json(matchData);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
            return;
        }
    }
});
exports.getMatchData = getMatchData;
const getMatchHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const puuid = req.params.puuid;
        const matchHistory = yield riotService.getMatchHistoryByPuuid(puuid);
        res.json(matchHistory);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
            return;
        }
    }
});
exports.getMatchHistory = getMatchHistory;
//# sourceMappingURL=match.controller.js.map