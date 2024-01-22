import axios from "axios";

export const instance = axios.create({
    baseURL: "https://8abe-95-161-221-55.ngrok-free.app/",

});

instance.interceptors.request.use(
    (config) => {
        config.headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
        };
        return config;
    }
);

instance.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequest = {...error.config};
        originalRequest._isRetry = true;
        if (
            error.response.status === 401 &&
            error.config && !error.config._isRetry
        ) {
            try {
                const resp = await instance.get("/api/refresh");
                localStorage.setItem("token", resp.data.accessToken);

                return instance.request(originalRequest);
            } catch (error) {
                console.log("AUTH ERROR");
            }
        }

        throw error;
    }
);