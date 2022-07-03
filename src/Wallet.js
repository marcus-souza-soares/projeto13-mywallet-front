import { useContext, useEffect } from "react";
import styled from "styled-components"
import Button from "./components/ButtonOrder"
import Header from "./components/Header";
import RenderOrders from "./components/RenderOrders";
import OrderContext from "./contexts/OrderContext";
import axios from 'axios';
import { useState } from "react";

export default function Wallet() {
    const { token } = useContext(OrderContext);
    const [orderlist, setOrderlist] = useState([]);
    const [name, setName] = useState("");
    // const orderList = [
    //     {
    //         dia: "30/11",
    //         descricao: "Almoço mãe",
    //         type: "Saída",
    //         valor: 39.90
    //     },
    //     {
    //         dia: "30/11",
    //         descricao: "Almoço mãe",
    //         type: "Entrada",
    //         valor: 39.90
    //     },
    //     {
    //         dia: "30/11",
    //         descricao: "Almoço mãe",
    //         type: "Saída",
    //         valor: 39.90
    //     }
    // ]
    
    useEffect(()=>{
        console.log(token)

        const permission = {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          }

        const promise = axios.get("http://localhost:5000/wallet" ,permission);
        promise.then(res => {
            console.log(res.data);
            setOrderlist(res.data.lista);
            setName(res.data.name)
        });
        promise.catch(() => {
            console.log("Não foi possível buscar as ordens!")
        })      
        
    },[token])
    console.log(orderlist)

    return (
        <Container>
            <Header txt={`Olá, ${name}`}>
                <ion-icon name="log-out-outline"></ion-icon>
            </Header>
            <Releases list={orderlist}>
                {orderlist.length > 0 ? <RenderOrders list={orderlist}/>: <h1>Não há registros de entrada ou saída</h1>}
            </Releases>
            <div className="buttons">
                <Button ionicon={"add-circle-outline"} text={"Entrada"} />
                <Button ionicon={"remove-circle-outline"} text={"Saída"} />
            </div>
        </Container>
    )

}

const Container = styled.div`
    width: 100%;
    padding: 20px 20px;

    .buttons{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    ion-icon{
        color: #FFFFFF;
        width: 24px;
        height: 24px;
    }
`

const Releases = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    width: 100%;
    min-height: 65vh;
    display: flex;
    justify-content: ${props => props.list.length > 0 ? 'flex-start' : 'center' };
    align-items: ${props => props.list.length > 0 ? 'flex-start' : 'center' };
    h1{
        width: 180px;
        height: 46px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;

        color: #868686;
    }
`