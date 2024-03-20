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
const axiosInstance_1 = require("../../utils/val/axiosInstance");
class RiotService {
    getContentByLocale(locale) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axiosInstance_1.axiosInstancePlatformUrl.get(`/val/content/v1/contents?locale=${locale}&api_key=${process.env.RIOT_API_KEY}`);
            return response.data;
        });
    }
    getLeaderboardByActId(actId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axiosInstance_1.axiosInstancePlatformUrl.get(`/val/ranked/v1/leaderboards/by-act/${actId}?size=200&startIndex=0&api_key=${process.env.RIOT_API_KEY}`);
            return response.data;
        });
    }
    getActiveActIdByLocale(locale) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axiosInstance_1.axiosInstancePlatformUrl.get(`/val/content/v1/contents?locale=${locale}&api_key=${process.env.RIOT_API_KEY}`);
            const activeAct = response.data.acts.find((act) => act.isActive);
            const activeActId = activeAct === null || activeAct === void 0 ? void 0 : activeAct.id;
            return activeActId;
        });
    }
    getLeaderboardByActiveActId(locale) {
        return __awaiter(this, void 0, void 0, function* () {
            const actId = yield this.getActiveActIdByLocale(locale);
            const leaderboard = yield this.getLeaderboardByActId(actId);
            return leaderboard;
        });
    }
}
exports.RiotService = RiotService;
//# sourceMappingURL=riot.service.js.map