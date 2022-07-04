import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useContext } from "react";
import OrderContext from "./contexts/OrderContext";

import Loading from "./components/Loading";

export default function SigIn() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const [desativado, setDesativado] = useState();
    const { setToken } = useContext(OrderContext);



    const login = e => {
        e.preventDefault();
        const validaEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/;
        const validaSenha = /[0-9a-zA-Z$*&@#]{6,}/;

        if (!validaEmail.test(email)) {
            return alert('E-mail inválido!');
        }
        if (!validaSenha.test(password)) {
            return alert('Senha inválida! Mínimo de 6 caracteres.');
        }
        const body = {
            email, 
            password
        }
        setDesativado(true);
        setLoading(true);
        const promise = axios.post("https://marcus-mywallet.herokuapp.com/login", body)
        promise.then(async res => {
            console.log(res.data);
            setToken(res.data.token)
            navigate('/wallet');
        });
        promise.catch(e => {
            setDesativado(false);
            setLoading(false);
            alert("Ops! Não conseguimos encontrar seu cadastro...");
            navigate("/sign-up");
        })
    }

    return (
        <>
            <Container>
                <header>
                    <h1>MyWallet</h1>
                </header>
                <form onSubmit={login}>
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
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        disabled={desativado}
                        required />
                    <button type="submit" disabled={desativado}>{loading ? <Loading></Loading> : 'Entrar'}</button>
                </form>
                <Link to={"/sign-up"} style={{ textDecoration: 'none' }}>
                    <h3>Primeira vez? Cadastre-se!</h3>
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