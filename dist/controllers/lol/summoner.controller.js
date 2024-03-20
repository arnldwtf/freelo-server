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
exports.getSummonerLeagueData = exports.getSummonerProfileIcon = exports.getSummonerData = exports.getSummonerApi = void 0;
const riot_service_1 = require("../../services/lol/riot.service");
const ddragon_service_1 = require("../../services/lol/ddragon.service");
const riotService = new riot_service_1.RiotService();
const ddragonService = new ddragon_service_1.DdragonService();
const getSummonerApi = (_req, res) => {
    const data = {
        '/summoner': 'good',
    };
    res.send(data).status(200);
};
exports.getSummonerApi = getSummonerApi;
const getSummonerData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const summonerName = req.params.summonerName;
        const summonerData = yield riotService.getSummonerByName(summonerName);
        res.json(summonerData);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
            return;
        }
    }
});
exports.getSummonerData = getSummonerData;
const getSummonerProfileIcon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const summonerName = req.params.summonerName;
        const summonerData = yield riotService.getSummonerByName(summonerName);
        const profileIconId = summonerData.profileIconId;
        const profileIcon = yield ddragonService.getProfileIcon(profileIconId);
        res.json({ profileIcon });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
            return;
        }
    }
});
exports.getSummonerProfileIcon = getSummonerProfileIcon;
const getSummonerLeagueData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const summonerLeagueData = yield riotService.getSummonerLeagueDataById(id);
        res.json(summonerLeagueData);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
            return;
        }
    }
});
exports.getSummonerLeagueData = getSummonerLeagueData;
//# sourceMappingURL=summoner.controller.js.map