import React from "react";
import Picture from "../../images/anselsunglasses.jpg";
import styled from "styled-components";

const Image = styled.img`
    width: auto;
    height: 100%;
    max-height: 350px;
    opacity: .8;
    border: 1px solid var(--fireTeal);
    transition: .3s ease-in-out all;
    position: relative;

    &::before {
        content: '';
        height: 15px;
        width: 15px;
        background: white;
        position: absolute;
        bottom: 0;
        right: 0;
        display: block;
    }

    &:hover {
        opacity: .9;
        box-shadow: 0 0 10px var(--fireTeal);
    }

    @media (max-width: 1024px) {
        display: none;
    }
`

const Portrait = () => {
    return (
        <Image src={Picture} />
    )
}

export default Portrait;