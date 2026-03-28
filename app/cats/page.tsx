"use client";

import useSWR from "swr";
import { useState } from "react";
import CatCard from "../components/catCard";
import styled from "styled-components";
import {Data} from "@/app/interfaces/data";

const CatContentWrapper = styled.main`
    width: 80vw;
    margin: auto;
    background-color: #d6cde6;
`;

const StyleTitle = styled.h1`
    color: #765895;
    text-align: center;
    padding-top: 20px;
    
`;
const Button = styled.button`
    display: block;
    margin: 10px auto;
`

const CatCardsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    
`;

export default function CatPage() {

    const [refresh, setRefresh] = useState(0);

    const {data, error} = useSWR(
        `/api/getData?refresh=${refresh}`,
        (url) => fetch(url).then((res) => res.json())
    );

    // Handle error and loading states
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;


    return (
        <CatContentWrapper>
            <StyleTitle>Kitty Cats</StyleTitle>
            {/*googled*/}
            <Button onClick={() => setRefresh(refresh + 1)}>More Cats!</Button>
            <CatCardsContainer>
                {
                    data.map((cat: Data) =>
                        (
                            <CatCard
                                key={cat.id}
                                id={cat.id}
                                url={cat.url}
                                width={cat.width}
                                height={cat.height}
                            />
                        )
                    )
                }
            </CatCardsContainer>
        </CatContentWrapper>
    );
}
