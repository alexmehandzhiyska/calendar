import { baseUrl } from '../constants';
import { LoginUser, AccountConfirmType, User } from '../interfaces';

const register = async (user: User) => {
    const response = await fetch(`${baseUrl}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    });

    const data = await response.json();

    if (!response.ok) {
        const error = Object.values(data).join('\n')
        throw new Error(error);
    }

    return data;
};

const confirmAccount = async (account: AccountConfirmType) => {
    const response = await fetch(`${baseUrl}/auth/verify`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(account)
    });

    const data = await response.json();

    if (!response.ok) {
        const error = Object.values(data).join('\n')
        throw new Error(error);
    }

    localStorage.setItem('token', data.access);
    return data;
};

const login = async (user: LoginUser) => {
    const response = await fetch(`${baseUrl}/auth/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    });

    const data = await response.json();
    
    if (!response.ok) {
        const error = Object.values(data).join('\n');
        throw new Error(error);
    }
    
    localStorage.setItem('token', data.access);
    
    return data;
}

const authService = { register, login, confirmAccount };

export default authService;