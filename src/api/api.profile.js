import { instance } from "./api.config.js";
import {Portfolio} from "../components/content/profile/Portfolio";

const ProfileService = {

    getProfileData() {
        return instance.get("/api/profile/");
    },
    putProfileData(data) {
        return instance.put("/api/profile/", data);
    },
    getPortfolioData() {
        return instance.get("/api/portfolio/");
    },
    sendMessage(header, message) {
        return instance.post("/api/message/", {header, message})
    }
}

export default ProfileService;