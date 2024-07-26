import { publicRequest } from "../utils/requestMethods"

export const register = async (data) => {
    console.log("api me")
    const res = await publicRequest.post("/auth/register", data);
    console.log(res)
    return res;
}

export const login = async (data) => {
    const res = await publicRequest.post("/auth/login", data);
    return res;
}