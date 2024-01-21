import { instance } from "./api.config.js";

const TradeService = {

    getStockData(id) {
        return instance.get(`/api/stock/${id}`);
    },
    stockBuy(id, amount) {
        return instance.post("api/stock/buy", {id, amount});
    },
    stockSell(id, amount) {
        return instance.post("api/stock/sell", {id, amount});
    },
    getCategory() {
        return instance.get("/api/category");
    },
    getAllStock() {
        return instance.get("/api/all_stock");
    },
}

export default TradeService;