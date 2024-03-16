import { apiRoute, apiRouters } from "@/constants/apiRouters";
import { LoginRequest } from "./type";

export const login = async (req: LoginRequest) => {
    const res = await fetch(apiRoute + apiRouters.auth.login, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
    });

    return res;
};

// export const logout = async () => {
//     const res = await fetch(apiRoute + apiRouters.auth.logout, {
//         mode: 'cors',
//         method: 'GET',
//     });

//     return res;
// };

export const checkAuth = async () => {
    const res = await fetch(apiRoute + apiRouters.auth.check, {
        mode: 'cors',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${window.localStorage.getItem('access_token')}`,
        },
    });

    return res;
}
