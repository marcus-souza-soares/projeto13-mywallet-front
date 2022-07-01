import { Link } from "react-router-dom";
import styled from "styled-components";

import Loading from "./components/Loading";

export default function SignUp() {
    return (
        <>
            <Container>
                <header>
                    <h1>MyWallet</h1>
                </header>
                <form>
                    <input type="text" placeholder="Nome" required/>
                    <input type="email" placeholder="E-mail" required/>
                    <input type="password" placeholder="Senha" required/>
                    <input type="password" placeholder="Confirme a senha" required/>
                    <button><Loading/></button>
                </form>
                <Link to={"/"}>
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