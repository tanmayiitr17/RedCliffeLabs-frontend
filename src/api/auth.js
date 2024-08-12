import { publicRequest } from "../utils/requestMethods"

export const register = async (data) => {
    const res = await publicRequest.post("/auth/register", data);
    return res;
}

export const login = async (data) => {
    const res = await publicRequest.post("/auth/login", data);
    return res;
}