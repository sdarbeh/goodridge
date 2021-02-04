import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import { Redirect } from 'react-router-dom';

import { adminRoutes } from '../../../utils/routes';
import { useLoginAdmin } from '../../../hooks'

import { backArrowIcon } from '../../../assets/icons/widgets';
import { moji_selfies } from '../../../assets/public';
import { emailValidator } from '../../../utils/validators';
import { LinkButton } from '../../../components/widgets';
// items
import { Input, PasswordInput, ErrMsg, FormButton } from '../../../components/form'
import { Container, Content, Title } from './LoginStyle'

interface login {
    email: string;
    password: string
}

export default (props: any) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const { register, handleSubmit, errors, reset } = useForm();
    const { login } = useLoginAdmin()

    const submit = ({ email, password }: login) => {
        if (email === process.env.REACT_APP_MASTER_EMAIL) {
            if (password === process.env.REACT_APP_MASTER_PASSWORD || password === process.env.REACT_APP_MASTER_KEY) {
                login()
                setLoggedIn(true)
            }
        }
        reset()
    }

    if (loggedIn) return <Redirect to={adminRoutes.dashboard} />

    return (
        <Container>
            <img
                src={moji_selfies[2].src}
                alt={`${moji_selfies[2].name} | Goodridge.io`}
            />
            <Content>
                <Title>
                    <LinkButton to={'/'}>{backArrowIcon}</LinkButton>
                    <h1>Welcome back!</h1>
                </Title>
                <form action="POST" onSubmit={handleSubmit(submit)}>
                    <div>
                        <Input
                            element={'input'}
                            name={'email'}
                            refs={register(emailValidator)}
                        />
                        {errors.email && <ErrMsg msg={'Please enter a valid email'} />}
                    </div>
                    <div>
                        <PasswordInput
                            name={'password'}
                            refs={register}
                        />
                        {errors.password && <ErrMsg msg={'Please enter a password'} />}
                    </div>
                    <FormButton
                        text={'Enter'}
                    />
                </form>
            </Content>
        </Container>
    )
}