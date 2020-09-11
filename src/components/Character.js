// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.div`
    background-color:white;
    border: 3px solid red;
    border-radius:10px;
`

export default function Character({ info }) {
    return (
        <StyledCharacter>
            {/* <h2>{info.name}</h2> */}
            <h2>Test Character</h2>
        </StyledCharacter>

    )

}