import styled from "styled-components";


export default function RenderOrders({ orderList }) {
    return (
        <Container>
            {orderList.map(oder => {
                const { dia, descricao, type, valor } = oder;
                let value = valor.toFixed(2)?.replace(".",",")
                return (
                    <Order type={type}>
                        <span>
                            <h2 className="dia">{dia}&nbsp;</h2>
                            <h2 className="descricao">{descricao}</h2>
                        </span>
                        <span>
                            <h2 className="valor">{value}</h2>
                        </span>
                    </Order>
                )
            })}
        </Container>
    )
}
const Container = styled.div`
    width: 100%;
    padding: 15px 10px;
`

const Order = styled.div`
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
    .dia {
        color: #C6C6C6;
    }
    .valor {
        color: ${props => props.type === "Entrada" ? "#03AC00": "#C70000"};
    }
`