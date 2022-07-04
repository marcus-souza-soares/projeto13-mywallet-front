import styled from "styled-components";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderContext from "./contexts/OrderContext";
import axios from "axios";

import Header from "./components/Header"

export default function Entrada() {
    const { token } = useContext(OrderContext);
    //const { order, setOrder } = useContext(OrderContext);
    const navigate = useNavigate();

    const [valor, setValor] = useState();
    const [descricao, setDescricao] = useState('');

    const saveOrder = async (e) => {
        e.preventDefault();
        //const valorRegex = //
        const body = {
            valor: Number(valor),
            type: "entrada",
            descricao
        }
        console.log(body)
        console.log(token)

        const promise = axios.post("http://192.168.0.133:5000/wallet", {
            valor: Number(valor),
            type: "entrada",
            descricao
        }, {
            headers: {
              "Authorization": `Bearer ${token}`
            }
        })
        promise.then(res => {
            console.log(res.data);
            navigate("/wallet");
        })
        promise.catch(() => {
            console.log("Não deu certo")
        })
        
    }

    return (
        <Container>
            <Header txt={`Nova Entrada`} />
            <form onSubmit={saveOrder}>
                <input type="number"
                    placeholder="Valor"
                    min={0}
                    step={0.01}
                    onChange={(e) => setValor(e.target.value)}
                    required />
                <input type="text"
                    placeholder="Descrição"
                    onChange={(e) => setDescricao(e.target.value)}
                    value={descricao}
                    required />

                <button type="submit">{`Salvar Entrada`}</button>

            </form>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding: 20px 20px;
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
    
   
`