import styled from 'styled-components';
import { color, breakpoints, spacing } from '../../styles/variables';
import { Title, Text } from '../../styles/helpers';

export const HeaderContent = styled.header`
    padding: ${spacing.contentPadding};
    margin-bottom: 8em;
`;

export const Hero = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: ${breakpoints.md}) {
        align-items: flex-start;
    }
`;

export const HeroHeading = styled(Title)`
    text-align: center;
    color: ${color.primaryHeading};

    @media screen and (min-width: ${breakpoints.md}) {
        text-align: left;
    }

    @media screen and (min-width: ${breakpoints.xl}) {
        text-align: left;
        font-size: 4rem;
    }
`;

export const HeroText = styled(Text)`
    text-align: center;
    margin: 1em 0;
    color: ${color.primaryText};

    @media screen and (min-width: ${breakpoints.md}) {
        text-align: left;
        max-width: 80%;
    }
`;
