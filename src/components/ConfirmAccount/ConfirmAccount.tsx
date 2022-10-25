import { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import authService from '../../services/authService';
import { errorNotification, successNotification } from '../../notifications';
import './ConfirmAccount.css';

const schema = yup.object({
    'token': yup.string().required().min(6, 'The code must be exactly 6 digits long.').max(6, 'The code must be exactly 6 digits long.'),
}).required();

type Inputs = {
  'token': string,
};

type stateType = {
    'username': string
}

const ConfirmAccount: FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });

    const location = useLocation();
    const state = location.state as stateType;

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        authService.confirmAccount({ username: state.username, token: data.token })
            .then((res) => {
                successNotification('Successfully created account!');
                navigate('/', { state: { token: res.access } });
            })
            .catch((err) => {
                errorNotification(err.message);
            });
    };
    
    return (
        <section className="page-wrapper-centered form-wrapper">
            <h1 className="title">Confirm Account</h1>
            <p>Your account is pending. We've sent you an email with a confirmation code. Please check your inbox and enter the code in the input field below.</p>

            <form className="form" action="POST" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-section">
                    <label htmlFor="token">Confirmation code</label>
                    <input type="text" id="token" {...register("token", { required: true })} />
                    {errors.token && <p className="error">{errors.token?.message}</p>}
                </div>

                <div className="form-section submit-wrapper">
                    <input type="submit" className="btn-big primary-btn" value="Submit code" />
                </div>
            </form>
        </section>
    );
};

export default ConfirmAccount;