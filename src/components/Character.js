import Axios from 'axios';
// Write your Character component here
import React from 'react'
import styled from 'styled-components'



const StyledCharacter = styled.div`
    background-color:rgba(70, 130, 180, 0.4);
    color:white;
    border: 1px solid rgba(70, 130, 180);
    width:50%;
    margin:auto;
    padding:.7rem 3rem;
    margin-bottom:.5rem;
    text-align:left;

    h2, p {
        margin:0;
        padding:0;
    }

    h2 {
        font-size:1.2rem;
        font-weight:600;
    }
    p {
        font-weight:300;
    }

`



export default function Character({ info }) {

    // const homeworldUrl = info.homeworld;
    // const speciesUrl = info.species;

    // let homeworldName = "Earth"
    let species = "human"
    let homeworldName = "Earth"

    // Axios.get(homeworldUrl)
    //     .then(res => {
    //         // homeworldName = res.data.name
    //         homeworldName = res
    //     })
    //     .catch(err => {
    //         console.log("CHARACTER: There was a problem with the Axios call ---------")
    //         console.log(err)
    //         debugger
    //     })


    function getHomeworld(url){
        return Axios.get(url)
            .then(res => {
                return res.data.name
            })
            .catch(err => {
                console.log("CHARACTER: There was a problem with the Axios call------")
                console.log(err)
                debugger
            })
    }

    // getHomeworld(info.homeworld)
    //     .then(data => {
    //         // console.log("Homeworld Data:")
    //         homeworldName = data
    //         console.log(homeworldName)
    //     })

    return (
        <StyledCharacter>
            <h2>{info.name}</h2>
            <p>is a {info.species.length === 0 ? 'human' : species} from {homeworldName}</p>
        </StyledCharacter>

    )

}




