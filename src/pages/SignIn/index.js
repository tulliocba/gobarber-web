import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

export default function SignIn() {
    return (
        <>
            <img src={logo} alt="GoBarber" />

            <form>
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

                <button type="submit">Accessar</button>
                <Link to="/register">Criar conta gratuita</Link>
            </form>
        </>
    );
}
