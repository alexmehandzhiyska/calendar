import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
    'username': yup.string().required(),
    'password': yup.string().required(),
}).required();

type Inputs = {
  'username': string,
  'password': string,
};

const Login: FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        authService.login(data)
            .then(() => {
                const token = localStorage.getItem('token');
                navigate('/', { state: { token: token } });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    
    return (
        <section className="page-wrapper-centered form-wrapper">
            <h1 className="title">Login</h1>

            <form className="form" action="POST" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-section">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" {...register("username", { required: true })} />
                    {errors.username && <p className="error">{errors.username?.message}</p>}
                </div>

                <div className="form-section">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" {...register("password", { required: true })} />
                    {errors.password && <p className="error">{errors.password?.message}</p>}
                </div>

                <div className="form-section submit-wrapper">
                    <input type="submit" className="btn-big primary-btn" value="Log in" />
                </div>
            </form>
        </section>
    );
};

export default Login