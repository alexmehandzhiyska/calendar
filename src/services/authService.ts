import { baseUrl } from '../constants';
import { LoginUser, User } from '../interfaces';

const register = async (data: User) => {
    const response = await fetch(`${baseUrl}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    const responseData = await response.json();

    if (!response.ok) {
        throw new Error(responseData);
    }

    return responseData;
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
        throw new Error(data);
    }

    localStorage.setItem('token', data.access);
    
    return data;
}

const authService = { register, login };

export default authService;