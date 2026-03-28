"use client";

import styled from "styled-components";

import Link from "next/link";

const StyledDiv=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export default function Home() {


  return (
      <StyledDiv>
        <h1>Cute Kitties</h1>
        <p>press to see some precious cats!</p>

        <Link href="/cats">Get Cats</Link>
      </StyledDiv>
  );
}