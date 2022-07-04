import styled from "styled-components";
import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export default function RenderOrders({ list, setOrderlist }) {
    
    let saldo = 0;

    if (list.length > 0){
        list.forEach(element => {
            if(element.type === "entrada"){
                saldo += element.valor;
            } else {
                saldo -= element.valor;
            }
        });
    }

    function Order({ order }) {
        const { dia, descricao, type, valor } = order;
        const value = valor.toFixed(2)?.replace(".", ",");

        const deleteOrder = ({ setOrderlist }) => {
            const promise = axios.delete(`http://https://marcus-mywallet.herokuapp.com/wallet/delete`, {...order})
            promise.then(res => {
                console.log("Deletou");
                console.log(res.data)
            })
            promise.catch(() => {
                console.log("Não deletou. Erro")
            })
        }
        return (
            <ContainerOrder type={type}>
                <span>
                    <h2 className="cinza">{dia}&nbsp;</h2>
                    <h2 className="descricao">{descricao}</h2>
                </span>
                <span>
                    <h2 className="valor">{value}&nbsp;&nbsp;</h2>
                    <h2 className="cinza" onClick={deleteOrder}>x</h2>
                </span>
            </ContainerOrder>
        )
    }
    return (
        <Container saldo={saldo}>
            <div className="orders">
            {list.map((order, index) => {
                return <Order key={index} order={order} setOrderlist={() => setOrderlist()} />
            })}
            </div>
            <div className="saldo" >
                <span>SALDO</span>
                <span className="total">{saldo.toFixed(2).replace(".",",")}</span>
            </div>
        </Container>
    )
}
const Container = styled.div`
    width: 100%;
    padding: 15px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

    .saldo{
        position: absolute;
        display: flex;
        justify-content: space-between;
        padding-right: 80px;
        width: 95%;
        bottom: 20px;
        font-weight: 700;
        font-size: 17px;
    }
    .total {
        color: ${props => {
            if(props.saldo > 0 ){
                return "#03AC00";
            } else if (props.saldo === 0){
                return "#C6C6C6";
            }else {
                return "#C70000"
            }
        }};
    }
`

const ContainerOrder = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    span {
        display: flex;
        flex-direction: row;
        font-weight: 400;
        font-size: 16px;
        margin-bottom: 22px;
    }
    .cinza {
        color: #C6C6C6;
    }
    .valor {
        color: ${props => props.type === "entrada" ? "#03AC00" : "#C70000"};
    }
`