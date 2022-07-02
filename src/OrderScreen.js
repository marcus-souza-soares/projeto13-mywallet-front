import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ReleasesContext from "./contexts/OrderContext";


import Header from "./components/Header"


export default function ReleasesScreen(){

    const saveRelease = (e) => {
        e.preventDefault();
        navigate("/wallet")
    }
    
    const { release } = useContext(ReleasesContext);
    const navigate = useNavigate();
    const { type } = release;

    return(
        <Container>
            <Header txt={`Nova ${type}`}/>
            <form onClick={saveRelease}>
                <input type="number" 
                placeholder="Valor"
                required/>
                <input type="text"
                placeholder="Descrição"
                required />

                <button type="submit">{`Salvar ${type}`}</button>

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