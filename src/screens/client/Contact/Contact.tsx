import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";

import { useMutation } from '@apollo/client';
import { CREATE_MESSAGE } from '../../../graphql/message'
import { message_cookie } from '../../../utils/constants/app';
import { emailTemplate } from '../../../utils/helpers/text'
import { msgRecievedIcon } from '../../../assets/icons/widgets'

import { Message } from '../../../types/site'
import { nameValidator, emailValidator, phoneValidator, messageValidator } from '../../../utils/validators'
// items
import { ClientContainer } from '../../../components/client'
import { Input, ErrMsg, SubmitError } from '../../../components/form'
import { Content, Title, FormContent, FormButton, EmailInstead } from './ContactStyle'
import { appRoutes } from '../../../utils/routes';

export default () => {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState({
        attempts: 0,
        bool: false,
    })
    const [msgId, setMsgId] = useState(null)
    const [form, setForm] = useState<any>({})
    const { register, handleSubmit, errors, reset } = useForm();
    const formDisabled = submitted.attempts >= 3 && !loading

    const [createMessage] = useMutation(CREATE_MESSAGE, {
        onCompleted: (data) => handleCompleted(data.insert_message),
        onError: () => {
            console.error('Error submitting contact form')
            setError(true)
            setLoading(false)
            setSubmitted({ ...submitted, bool: false })
        }
    });

    const submit = (formData: Message) => {
        window.scrollTo(0, 0)
        setForm(formData)
        setSubmitted({ ...submitted, attempts: submitted.attempts + 1 })
        setLoading(true)
        createMessage({
            variables: {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message
            }
        })
    }

    const handleCompleted = (data: any) => {
        const id = data.returning[0].id
        setMsgId(id)
        reset()
        setLoading(false)
        Cookies.set(message_cookie, id);
        setSubmitted({ ...submitted, bool: true })
    }

    if (submitted.bool) return <Redirect to={`${appRoutes.contact}/${msgId}`} />

    return (
        <ClientContainer
            hideFooter
            pageTitle={'Contact'}
        >
            <Content>
                <Title>
                    <h1>Contact</h1>
                    <span>Got an app idea or just want to say hi? Leave a message, and I will get back to you!</span>
                </Title>
                {error && !loading && (
                    <SubmitError 
                        attempts={submitted.attempts}
                        maxAttempts={3} 
                    />
                )}
                <form action="POST" onSubmit={handleSubmit(submit)}>
                    <FormContent>
                        <div>
                            <Input
                                element={'input'}
                                name={'name'}
                                refs={register(nameValidator)}
                                disabled={formDisabled}
                            />
                            {errors.name && <ErrMsg msg={'Name must be 2-25 characters'} />}
                        </div>
                        <div>
                            <Input
                                element={'input'}
                                name={'email'}
                                refs={register(emailValidator)}
                                disabled={formDisabled}
                            />
                            {errors.email && <ErrMsg msg={'Please enter a valid email'} />}
                        </div>
                        <div>
                            <Input
                                element={'input'}
                                name={'phone'}
                                refs={register(phoneValidator)}
                                disabled={formDisabled}
                            />
                            {errors.phone && <ErrMsg msg={'Please enter a valid phone number'} />}
                        </div>
                        <div>
                            <Input
                                element={'textarea'}
                                name={'message'}
                                refs={register(messageValidator)}
                                disabled={formDisabled}
                            />
                            {errors.message && <ErrMsg msg={'Message must be 30-500 characters'} />}
                        </div>
                    </FormContent>
                    {!formDisabled && (
                        <FormButton
                            text={'Submit'}
                            loading={loading}
                            disabled={formDisabled}
                        />
                    )}
                </form>
                {formDisabled && (
                    <EmailInstead>
                        <a href={emailTemplate(formDisabled ? form : null)}>
                            <div>
                                <div>{msgRecievedIcon}</div>
                                <div>Email Instead</div>
                            </div>
                        </a>
                    </EmailInstead>
                )}
            </Content>
        </ClientContainer>
    )
}