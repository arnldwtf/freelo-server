"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosInstanceDDragonUrl = exports.axiosInstanceRegionUrl = exports.axiosInstancePlatformUrl = void 0;
const axios_1 = __importDefault(require("axios"));
const PLATFORM_BASE_URL = `https://na1.api.riotgames.com`;
const REGION_BASE_URL = `https://americas.api.riotgames.com`;
const DDRAGON_BASE_URL = `https://ddragon.leagueoflegends.com`;
exports.axiosInstancePlatformUrl = axios_1.default.create({
    baseURL: PLATFORM_BASE_URL,
    headers: {
        'X-Riot-Token': process.env.RIOT_API_KEY,
    },
});
exports.axiosInstanceRegionUrl = axios_1.default.create({
    baseURL: REGION_BASE_URL,
    headers: { 'X-Riot-Token': process.env.RIOT_API_KEY },
});
exports.axiosInstanceDDragonUrl = axios_1.default.create({
    baseURL: DDRAGON_BASE_URL,
});
//# sourceMappingURL=axiosInstance.js.map