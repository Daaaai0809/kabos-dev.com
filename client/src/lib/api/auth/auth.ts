import { apiRoute, apiRouters } from "@/constants/apiRouters";
import { LoginRequest } from "./type";

export const login = async (req: LoginRequest) => {
    const res = await fetch(apiRoute + apiRouters.auth.login, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
    });

    return res;
};

export const logout = async () => {
    const res = await fetch(apiRoute + apiRouters.auth.logout, {
        method: 'POST',
        credentials: 'include',
    });

    return res;
};

export const checkAuth = async () => {
    const res = await fetch(apiRoute + apiRouters.auth.check, {
        method: 'GET',
        credentials: 'include',
    });

    return res;
}
