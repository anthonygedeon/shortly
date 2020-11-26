import styled from 'styled-components';

import { Text } from '../../styles/helpers';
import { color, breakpoints, spacing } from '../../styles/variables';

export const MainContent = styled.main`
    padding: ${spacing.contentPadding};
    background-color: ${color.mainBackground};
`;

export const Section = styled.section`
    margin-bottom: 5em;
    @media screen and (min-width: ${breakpoints.md}) {
        margin-bottom: 10rem;
    }
`;

export const SectionTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    color: ${color.primaryHeading};

    @media screen and (min-width: ${breakpoints.md}) {
        font-size: 2rem;
    }
`;

export const SectionText = styled(Text)`
    font-size: 1rem;
    margin-top: 1em;
    color: ${color.primaryText};
    text-align: center;
    max-width: 100%;
    margin: 1em auto;
    @media screen and (min-width: ${breakpoints.md}) {
        max-width: 40%;
    }
`;

export const CardTitle = styled.h3`
    font-size: 1.125rem;
    font-weight: 700;
    text-align: center;
    color: ${color.primaryHeading};

    @media screen and (min-width: ${breakpoints.md}) {
        font-size: 1.5rem;
        text-align: left;
        width: 100%;
    }
`;

export const CardText = styled(Text)`
    text-align: center;
    margin: 1em 0 0 0;
    color: ${color.primaryText};
    font-size: 0.9rem;
    line-height: 1.5rem;

    @media screen and (min-width: ${breakpoints.md}) {
        text-align: left;
    }
`;

export const CardImageBg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${color.primaryBackground};
    padding: 1.225em;
    border-radius: 50%;
    position: absolute;
    top: -40px;

    @media screen and (min-width: ${breakpoints.md}) {
        align-self: flex-start;
    }
`;

export const CardImage = styled.img`
    width: 40px;
    height: 40px;
`;
