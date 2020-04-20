import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/logo.svg';

export default function SignUp() {
    function handleSubmit(data) {
        console.tron.log(data);
    }

    return (
        <>
            <img src={logo} alt="GoBarber" />

            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="Nome completo"
                />
                <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Seu e-mail"
                />

                <Input
                    type="password"
                    name="senha"
                    id="senha"
                    placeholder="Sua senha"
                />

                <button type="submit">Criar conta</button>
                <Link to="/">Já tenho conta</Link>
            </Form>
        </>
    );
}
