import styled from 'styled-components';

const Button = styled.button`
    border-style:${({border})=>border?border:"solid"};
    background: ${({backgroundColor})=>backgroundColor?backgroundColor:"white"};
    color : ${({color})=>color?color:"black"};
    border-radius:5px;
    font-size:1rem;

`;

export {Button}