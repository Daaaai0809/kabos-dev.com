import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { loginFormStyle } from './index.css';
import { login } from '@/lib/api/auth/auth';
import { useRouter } from 'next/router';
import { LoginResponse } from '@/lib/api/auth/type';

export const LoginForm = () => {
    const router = useRouter();
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const loginFunc = async () => {
            try {
                const res = await login({ password });
                if (res.status === 200) {
                    const response = await res.json() as LoginResponse;

                    window.localStorage.setItem('access_token', response.access_token);
                    router.push('/admin');
                }
            } catch (error) {
                console.error(error);
            };
        };

        loginFunc();
        setPassword('');
    };

    return (
        <div className={loginFormStyle.div}>
            <form className={loginFormStyle.form}>
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={loginFormStyle.input}
                />
                <Button className={loginFormStyle.button} onClick={handleLogin}>
                    Login
                </Button>
            </form>
        </div>
    );
}
