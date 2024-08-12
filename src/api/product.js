import { publicRequest } from "../utils/requestMethods"

export const getAllReagents = async () => {
    const res = await publicRequest.get("/product/reagents");
    return res;
}

export const getAllAnalyzers = async () => {
    const res = await publicRequest.get("/product/analyzers");
    return res;
} 