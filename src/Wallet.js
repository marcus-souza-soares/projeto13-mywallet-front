import { useContext, useEffect } from "react";
import styled from "styled-components"
import Button from "./components/ButtonOrder"
import Header from "./components/Header";
import RenderOrders from "./components/RenderOrders";
import OrderContext from "./contexts/OrderContext";
import axios from 'axios';
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Wallet() {
    const navigate = useNavigate();
    const { token } = useContext(OrderContext);
    const [orderlist, setOrderlist] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {

        const permission = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        console.log(permission)

        const promise = axios.get("http://https://marcus-mywallet.herokuapp.com/wallet", permission);
        promise.then(res => {
            console.log(res.data);
            setOrderlist(res.data.lista);
            setName(res.data.name)
        });
        promise.catch(() => {
            console.log("Não foi possível buscar as ordens!")
        })

    }, [token])
    console.log(orderlist);

    const logout = () => {
        const permission = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const promise = axios.delete('http://https://marcus-mywallet.herokuapp.com/logout', permission)
        promise.then(res => {
            alert(res.data);
            navigate("/");
        })
        promise.catch(e => {
            console.log("Erro")
        })
    }

    return (
        <Container>
            <Header txt={`Olá, ${name}`} >
                <ion-icon onClick={logout} name="log-out-outline"></ion-icon>
            </Header>
            <Releases list={orderlist}>
                {orderlist.length > 0 ? <RenderOrders list={orderlist} setOrderlist={setOrderlist}/> : <h1>Não há registros de entrada ou saída</h1>}
            </Releases>
            <div className="buttons">
                <Link to="/wallet/entrada" style={{ textDecoration: 'none' }}>
                    <Button ionicon={"add-circle-outline"} text={"Entrada"} />
                </Link>
                <Link to="/wallet/saida" style={{ textDecoration: 'none' }}>
                    <Button ionicon={"remove-circle-outline"} text={"Saída"} />
                </Link>
            </div>
        </Container>
    )

}

const Container = styled.div`
    width: 100%;
    padding: 20px 20px;

    .buttons {
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
    position: relative;
    background: #FFFFFF;
    border-radius: 5px;
    width: 100%;
    min-height: 65vh;
    display: flex;
    justify-content: ${props => props.list.length > 0 ? 'flex-start' : 'center'};
    align-items: ${props => props.list.length > 0 ? 'flex-start' : 'center'};
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