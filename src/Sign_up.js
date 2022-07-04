import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import styled from "styled-components";
import axios from 'axios';

import Loading from "./components/Loading";

export default function SignUp() {
    const navigate = useNavigate();

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState('');
    const [password01, setPassword01] = useState('');
    const [password02, setPassword02] = useState('');
    const [loading, setLoading] = useState(false)
    const [desativado, setDesativado] = useState(false);



    const cadastrar = e => {
        e.preventDefault();
        const validaNome = /^[a-zA-Z]{3,}$/;
        const validaEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/;
        const validaSenha = /^[0-9a-zA-Z$*&@#]{6,}$/;

        if (!validaNome.test(nome)) {
            return alert("Nome inválido")
        }
        if (!validaEmail.test(email)) {
            return alert('E-mail inválido!');
        }
        if (!validaSenha.test(password01)) {
            return alert('Senha inválida! Mínimo de 6 caracteres.');
        }
        if (password01 !== password02) {
            return alert("As senhas se diferem!")
        }
        const body = {
            name: nome,
            email,
            password: password01
        }

        setDesativado(true);
        setLoading(true);

        const promise = axios.post("http://192.168.0.133:5000/sign-up", body)
        promise.then(res => {
            console.log(res.data);
            setLoading(false);
            setDesativado(false);
            navigate('/');
        });
        promise.catch(res => {
            console.log(res.data);
            setLoading(false);
            setDesativado(false);
        });
    }

    return (
        <>
            <Container>
                <header>
                    <h1>MyWallet</h1>
                </header>
                <form onSubmit={cadastrar}>
                    <input
                        type="test"
                        placeholder="Nome"
                        onChange={(e) => setNome(e.target.value)}
                        value={nome}
                        disabled={desativado}
                        required />
                    <input
                        type="email"
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        disabled={desativado}
                        required />
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={(e) => setPassword01(e.target.value)}
                        value={password01}
                        disabled={desativado}
                        required />
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={(e) => setPassword02(e.target.value)}
                        value={password02}
                        disabled={desativado}
                        required />
                    <button type="submit" disabled={desativado}>{loading ? <Loading></Loading> : 'Cadastrar'}</button>
                </form>
                <Link to={"/"} style={{ textDecoration: 'none' }}>
                    <h3>Já tem uma conta? Entre agora!</h3>
                </Link>
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 10px;
    margin-top: 25vh;
    
    header{
        margin-bottom: 20px;
    }
    
    h1{
        font-family: 'Saira Stencil One', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        color: #FFFFFF;
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    input{
        font-family: "Raleway", sans-serif;
        padding-left: 15px;
        height: 58px;
        background: #FFFFFF;
        border-radius: 5px;
        border: none;
        margin-bottom: 15px;
        ::placeholder{
            font-weight: 400;
            font-size: 18px;
            color: #000000;
        }
    }
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #A328D6;
        height: 46px;
        background: #A328D6;
        border-radius: 5px;
        border: none;

        font-weight: 700;
        font-size: 20px;
        color: #FFFFFF;
    }
    h3{
        margin-top: 20px;
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        color: #FFFFFF;
    }
    
`