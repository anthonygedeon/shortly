import styled from 'styled-components';

import bgShortenMobile from '../../images/bg-shorten-mobile.svg';
import bgShortenDesktop from '../../images/bg-shorten-desktop.svg';

import { color, breakpoints } from '../../styles/variables';

export const ShortLinkContainer = styled.div`
    position: relative;
    top: -110px;
    margin-bottom: 4em;
`;

// @todo mobile bg blob pushed more to right
export const ShortLinkForm = styled.form`
	padding: 1.125rem;
	background-color: ${color.primaryBackground};
	border-radius: 10px;
	background-image: url(${bgShortenMobile});
	background-repeat: no-repeat;
	background-position: 20%;
	background-size: cover;

	@media screen and (min-width: ${breakpoints.md}) {
		background-image: url(${bgShortenDesktop});
		padding: 3em;
	}
`;

// @todo error outline
export const FormInput = styled.input`
    border-radius: 5px;
	width: 100%;
	height: 3rem;
	padding-left: 1rem;
	outline: 0;

	&:focus {
		transition: box-shadow 0.2s ease-in;
		box-shadow: 1px 0px 0px 6px #60528e;
		outline: none;
	}

	&::placeholder {
		opacity: 0.7;
		color: ${(props) =>
			props.warning ? color.warning : color.primaryText};
	}

	@media screen and (min-width: ${breakpoints.md}) {
		margin-bottom: 0;
		height: 3.125rem;
	}
`;

export const Warning = styled.span`
    font-style: italic;
	color: ${color.warning};
	font-weight: 500;
	font-size: 0.715rem;
	margin-top: 1em;
	display: block;
`;

export const MessageContainer = styled.div`
	margin-bottom: 1em;

	@media screen and (min-width: ${breakpoints.md}) {
		margin-bottom: 0;
		margin-right: 2em;
	}
`;