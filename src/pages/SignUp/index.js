import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

export default function SignUp() {
    return (
        <>
            <img src={logo} alt="GoBarber" />

            <form>
                <input
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="Nome completo"
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Seu e-mail"
                />

                <input
                    type="password"
                    name="senha"
                    id="senha"
                    placeholder="Sua senha"
                />

                <button type="submit">Criar conta</button>
                <Link to="/">Já tenho conta</Link>
            </form>
        </>
    );
}
