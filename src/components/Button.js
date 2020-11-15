import styled from 'styled-components';
import { color, breakpoints } from '../styles/variables';

export const Button = styled.button`
	padding: 0.75em 0;
	text-align: center;
	font-weight: 700;
	background-color: ${color.primaryAccent};
	color: ${color.primary};
	cursor: pointer;
    transition: background-color 0.2s linear;
    text-transform: capitalize;

	&:hover,
	&:active,
	&:focus {
		background-color: hsl(180deg, 66%, 79%);
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