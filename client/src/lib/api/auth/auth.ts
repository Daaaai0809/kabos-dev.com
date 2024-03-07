import { LoginRequest } from "./type";

export const login = async (req: LoginRequest) => {
    const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
    });

    return res;
};

export const logout = async () => {
    const res = await fetch('/api/admin/auth/logout', {
        method: 'POST',
    });

    return res;
};

export const checkAuth = async () => {
    const res = await fetch('/api/admin/auth/check', {
        method: 'GET',
    });

    return res;
}
