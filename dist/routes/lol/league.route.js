"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.leagueRoute = void 0;
const express_1 = require("express");
const LeagueController = __importStar(require("../../controllers/lol/league.controller"));
const router = (0, express_1.Router)();
exports.leagueRoute = router;
router.get('/', LeagueController.getLeagueApi);
router.get('/exp/:queue/:tier/:division', LeagueController.getLeagueExp);
router.get('/:queue/:tier/:division', LeagueController.getLeague);
router.get('/leaderboard/challenger', LeagueController.getLeaderboardChallenger);
router.get('/leaderboard/grandmaster', LeagueController.getLeaderboardGrandmaster);
router.get('/leaderboard/master', LeagueController.getLeaderboardMaster);
//# sourceMappingURL=league.route.js.map