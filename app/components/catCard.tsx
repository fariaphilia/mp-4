import styled from "styled-components";
import {Data} from "@/app/interfaces/data";

const CatCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
    background-color: #f0f0f0;
    border: 10px ridge #d6cde6;
    margin: 1rem;
    width: 300px;
    border-radius: 10px;
`;

const CatImg = styled.img`
    width: 100%;
    height: 300px;
    object-fit: contain;
    border-radius: 15px;
    
`

export default function CatCard(props:Data){
    return(
        <CatCardWrapper>
            <CatImg src={props.url} alt="kitty" width={props.width} height={props.height}
            />
        </CatCardWrapper>
    )
}

