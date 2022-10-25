import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import authService from '../../services/authService';

const schema = yup.object({
    'first_name': yup.string().max(150, 'First name cannot be longer than 150 characters.'),
    'last_name': yup.string().max(150, 'Last name cannot be longer than 150 characters.'),
    'username': yup.string().required('Username is required.').matches(/^[\w.@+-]+$/, 'Username can contain only letters, numbers, and @/./+/-/_ characters.').max(150, 'Username cannot be longer than 150 characters.'),
    'email': yup.string().required('Email is required.').max(254, 'Email cannot be longer than 254 characters.'),
    'password': yup.string().required('Password is required.').min(8, 'Password must be at least 8 characters long.'),
    'confirm_password': yup.string().required('Password confirmation is required.')
}).required();

type Inputs = {
  'first_name': string,
  'last_name': string,
  'username': string,
  'email': string,
  'password': string,
  'confirm_password': string
};

const Register: FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
      });
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        authService.register(data)
            .then(() => {
               navigate('/register/confirm-account', { state: { username: data.username } });
            })
            .catch((err) => {
                console.log(err);
            });
    };
    
    return (
        <section className="page-wrapper-centered form-wrapper">
            <h1 className="title">Register</h1>

            <form className="form" action="POST" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-section">
                    <label htmlFor="first_name">First name</label>
                    <input type="text" id="first_name" {...register("first_name")} />
                    {errors.first_name && <p className="error">{errors.first_name?.message}</p>}
                </div>

                <div className="form-section">
                    <label htmlFor="last_name">Last name</label>
                    <input type="text" id="last_name" {...register("last_name")} />
                    {errors.last_name && <p className="error">{errors.last_name?.message}</p>}
                </div>

                <div className="form-section">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" {...register("username", { required: true })} />
                    {errors.username && <p className="error">{errors.username?.message}</p>}
                </div>

                <div className="form-section">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register("email", { required: true })} />
                    {errors.email && <p className="error">{errors.email?.message}</p>}
                </div>

                <div className="form-section">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" {...register("password", { required: true })} />
                    {errors.password && <p className="error">{errors.password?.message}</p>}
                </div>

                <div className="form-section">
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input type="password" id="confirm_password" {...register("confirm_password", { required: true })} />
                    {errors.confirm_password && <p className="error">{errors.confirm_password?.message}</p>}
                </div>

                <div className="form-section submit-wrapper">
                    <input type="submit" className="btn-big primary-btn" value="Register" />
                </div>
            </form>
        </section>
    );
};

export default Register;