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
exports.DdragonService = void 0;
const axiosInstance_1 = require("../../utils/lol/axiosInstance");
class DdragonService {
    getLatestVersion() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axiosInstance_1.axiosInstanceDDragonUrl.get(`/api/versions.json`);
            return response.data[0];
        });
    }
    getProfileIcon(profileIconId) {
        return __awaiter(this, void 0, void 0, function* () {
            const version = yield this.getLatestVersion();
            const response = `https://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${profileIconId}.png`;
            return response;
        });
    }
}
exports.DdragonService = DdragonService;
//# sourceMappingURL=ddragon.service.js.map