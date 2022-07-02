import styled from "styled-components";
import { useContext } from "react";
import ReleasesContext from "../contexts/OrderContext.js";
import { useNavigate } from "react-router-dom";

export default function Buttons({ ionicon, text }) {
    const { setRelease } = useContext(ReleasesContext);
    const navigate = useNavigate();

    const newRelease = () => {
        setRelease({ type: text });
        navigate('/release');
    }
    return (
        <Container onClick={newRelease}>
            <ion-icon name={ionicon}></ion-icon>
            <span>
                <h3 className="static">Nova</h3>
                <h3>{text}</h3>
            </span>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 20px;
    width: 48%;
    height: 114px;
    left: 25px;
    top: 537px;

    background: #A328D6;
    border-radius: 5px;

    ion-icon {
        margin-top: 10px;
        margin-left: 10px;
        width: 25px;
        height: 25px;
        color: #FFFFFF;
    }
    h3{ 
        margin-left: 10px;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
    }
    .static{
        margin-top: 17%;
    }
`