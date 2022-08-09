import styled from "styled-components";

export const IconImage = styled.img`
    
    display: flex;
    justify-content: end;
    width: 40px;

    margin-right: 10px;
    cursor: pointer;
    position: fixed;
    right: 3%;
    bottom: 40px;
    /* background-color:#fcc401 ;
    border-radius: 50%;
    box-shadow:  0px 0px 4px black;
    padding: 1%; */
    
    &:hover {
        opacity: 0.7;
    }

    &:active {
        opacity: 0.7;
    }

    &:focus {
        outline: none;
    }

    @media screen and (max-width: 480px) {
        width: 10%;
        right: 3%;
        bottom: 15px;
    }

`;

