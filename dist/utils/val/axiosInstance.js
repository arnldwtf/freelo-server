"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosInstancePlatformUrl = void 0;
const axios_1 = __importDefault(require("axios"));
const PLATFORM_BASE_URL = `https://na.api.riotgames.com`;
exports.axiosInstancePlatformUrl = axios_1.default.create({
    baseURL: PLATFORM_BASE_URL,
    headers: {
        'X-Riot-Token': process.env.RIOT_API_KEY,
    },
});
//# sourceMappingURL=axiosInstance.js.map