import styled from "styled-components"
import Button from "./components/ButtonReleases"
import Header from "./components/Header"

export default function Wallet(){
    return(
        <Container>
            <Header txt={"Olá, Fulano"}/>
            <Releases>
                <h1>Não há registros de entrada ou saída</h1>
            </Releases>
            <div className="buttons">
                <Button ionicon={"add-circle-outline"} text={"Entrada"}/>
                <Button ionicon={"remove-circle-outline"} text={"Saída"}/>
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
`

const Releases = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    width: 100%;
    min-height: 65vh;
    display: flex;
    justify-content: center;
    align-items: center;
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