import styled from 'styled-components';

import bgBoostMobile from '../../images/bg-boost-mobile.svg';
import bgBoostDesktop from '../../images/bg-boost-desktop.svg';

import { color, breakpoints } from '../../styles/variables';
import { SubTitle } from '../../styles/helpers';

export const CtaSection = styled.section`
    padding: 5em 0;
    background-color: ${color.primaryBackground};
    background-image: url(${bgBoostMobile});
    background-repeat: no-repeat;
    background-position: 20%;
    background-size: cover;

    @media screen and (min-width: ${breakpoints.md}) {
        background-image: url(${bgBoostDesktop});
    }
`;

export const CtaHeading = styled(SubTitle)`
    color: ${color.primary};
    text-align: center;
    margin-bottom: 1em;
    font-size: 1.5rem;

    @media screen and (min-width: ${breakpoints.md}) {
        font-size: 2.5rem;
    }
`;
