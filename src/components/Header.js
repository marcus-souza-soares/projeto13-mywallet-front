import styled from "styled-components"


export default function Header({txt, children}){
    return (
        <Container>
            <div className="titulo">{txt}</div>
            {children}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    .titulo{
        font-size: 26px;
        font-weight: 700;
        color: #FFFFFF;
    }
    img {
        width: 24px;
        height: 24px;
    }

`