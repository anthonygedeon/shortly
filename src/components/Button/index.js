import styled from 'styled-components';
import { color, breakpoints } from '../../styles/variables';

export const Button = styled.button`
    padding: 0.75em 0;
    text-align: center;
    font-weight: 700;
    background-color: ${color.primaryAccent};
    color: ${color.primary};
    cursor: pointer;
    transition: background-color 0.2s linear;
    text-transform: capitalize;
    outline: none;

    &:hover,
    &:active {
        background-color: hsl(180deg, 66%, 59%);
    }

    &:focus {
        transition: box-shadow 0.2s ease-in;
        box-shadow: 1px 0px 0px 6px hsl(180deg, 66%, 79%);
        outline: none;
    }
`;

export const PillButton = styled(Button)`
    width: 7rem;
    border-radius: 5rem;
`;

export const UrlButton = styled(Button)`
    border-radius: 5px;
    width: 100%;

    @media screen and (min-width: ${breakpoints.md}) {
        padding: 1rem 0;
    }
`;

export const CopyButton = styled(Button)`
    border-radius: 5px;
    width: 100%;

    background-color: ${(props) =>
        props.copied ? color.primaryBackground : color.primaryAccent};

    &:hover,
    &:active {
        background-color: ${(props) =>
            props.copied ? 'hsl(257, 27%, 56%)' : 'hsl(180, 66%, 59%)'};
    }

    &:focus {
        box-shadow: 1px 0px 0px 6px
            ${(props) =>
                props.copied ? 'hsl(257, 27%, 56%)' : 'hsl(180, 66%, 59%)'};
    }

    @media screen and (min-width: ${breakpoints.md}) {
        padding: 1rem 0;
    }
`;
