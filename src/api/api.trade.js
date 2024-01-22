import { instance } from "./api.config.js";

const TradeService = {

    getStockPrice(id) {
        return instance.get(`/api/stocks/${id}/price`);
    },
    getStockData(id) {
        return instance.get(`/api/stocks/${id}`);
    },
    stockBuy(id, amount) {
        return instance.post("api/stock/buy", {id, amount});
    },
    stockSell(id, amount) {
        return instance.post("api/stock/sell", {id, amount});
    },
    getCategory() {
        return instance.get("/api/categories");
    },
    getAllStock() {
        return instance.get("/api/stocks");
    },
}

export default TradeService;