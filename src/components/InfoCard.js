import React, { useState } from 'react';
import styled from 'styled-components';

import { color, breakpoints } from '../styles/variables';


const Card = styled.section`
    background-color: ${color.primary};
    position: relative;
    padding: 0 1em 2em 1em;
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
        }
    }
`;

const InfoCard = ({ children }) => <Card>{children}</Card>;

export default InfoCard