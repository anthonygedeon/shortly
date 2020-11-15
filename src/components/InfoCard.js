import React, { useState } from 'react';
import styled from 'styled-components';

import { color, breakpoints } from '../styles/variables';


const Card = styled.section`
    background-color: ${color.primary};
    position: relative;
    padding: 4em 1.5em 2em 1.5em;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & + & {
        margin-top: 5em;
    }

    @media screen and (min-width: ${breakpoints.md}) {
        
        & + & {
            margin-top: 0;
            margin-left: 2em;
        }

        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
            flex: 1 0 0;
        }

        &:nth-child(2) {
            top: 50px
        }

        &:nth-child(3) {
            top: 100px;
        }

    }
`;

const InfoCard = ({ children }) => <Card>{children}</Card>;

export default InfoCard