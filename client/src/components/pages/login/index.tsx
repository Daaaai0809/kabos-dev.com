import { LoginForm } from '@/components/templates/LoginForm';
import { loginPageStyles } from './index.css';

export const LoginPage = () => {
    return (
        <div className={loginPageStyles.mainDiv}>
            <h1 className={loginPageStyles.h1}>Login</h1>
            <div className={loginPageStyles.innerDiv}>
                <LoginForm />
            </div>
        </div>
    );
}
