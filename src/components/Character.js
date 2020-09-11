// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.div`
    background-color:white;
    border: 1px solid teal;
    border-radius:10px;
    width:50%;
    margin:auto;
    margin-bottom:.5rem;
`

export default function Character({ info }) {
    return (
        <StyledCharacter>
            <h2>{info.name}</h2>
        </StyledCharacter>

    )

}