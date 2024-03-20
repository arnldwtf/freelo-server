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
exports.getActiveLeaderboard = exports.getLeaderboard = exports.getRankedApi = void 0;
const riot_service_1 = require("../../services/val/riot.service");
const riotService = new riot_service_1.RiotService();
const getRankedApi = (_req, res) => {
    const data = {
        '/ranked': 'good',
    };
    res.send(data).status(200);
};
exports.getRankedApi = getRankedApi;
const getLeaderboard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actId = req.params.actId;
        const leaderboard = yield riotService.getLeaderboardByActId(actId);
        res.json(leaderboard);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
            return;
        }
    }
});
exports.getLeaderboard = getLeaderboard;
const getActiveLeaderboard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const locale = req.params.locale;
        const activeLeaderboard = yield riotService.getLeaderboardByActiveActId(locale);
        res.json(activeLeaderboard);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
            return;
        }
    }
});
exports.getActiveLeaderboard = getActiveLeaderboard;
//# sourceMappingURL=ranked.controller.js.map