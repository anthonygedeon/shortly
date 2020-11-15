import React, {
	useState,
	useEffect,
	useCallback,
	useMemo,
	useRef,
} from 'react';
import styled from 'styled-components';

import { UrlButton } from '../Button';
import { Container, Row, Col } from '../../styles/Grid';
import { color, breakpoints } from '../../styles/variables';

import bgShortenMobile from '../../images/bg-shorten-mobile.svg';
import bgShortenDesktop from '../../images/bg-shorten-desktop.svg';

// @todo mobile bg blob pushed more to right
const CreateUrlCard = styled.form`
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

const CopyUrlCard = styled.div`
	background-color: ${color.primary};
	margin-top: 1em;
	position: relative;
	padding: 1em 0;
	border-radius: 10px;
`;

const CopyOriginalUrl = styled.span`
	color: ${color.primaryHeading};
`;

const CopyShortenedUrl = styled.a`
	color: ${color.primaryAccent};
	margin-bottom: 1em;
	display: block;

	@media screen and (min-width: ${breakpoints.md}) {
		margin-bottom: 0;
		margin-right: 1em;
	}
`;

// @todo error outline
const UrlInput = styled.input`
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

const UrlInputContainer = styled.div`
	margin-bottom: 1em;

	@media screen and (min-width: ${breakpoints.md}) {
		margin-bottom: 0;
		margin-right: 2em;
	}
`;

const Warning = styled.span`
	font-style: italic;
	color: ${color.warning};
	font-weight: 500;
	font-size: 0.715rem;
	margin-top: 1em;
	display: block;
`;

const ColTemp = styled(Col)`
	@media screen and (min-width: ${breakpoints.md}) {
		flex: 0 0 16%;
	}
`;

const AvailableUrlCard = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: ${breakpoints.md}) {
		flex-direction: row;
	}
`;

const AvailableUrlCardContainer = styled.div`
	padding: 0 1em;

	

	@media screen and (min-width: ${breakpoints.md}) {
		display: flex;
		align-items: center;

		&:first-child {
			margin-right: auto;
        }
        
        &:nth-child(4) {
        width: 20%;
    }
	}
`;

const AvailableUrlCardLine = styled.hr`
	background-color: ${color.primaryText};
	opacity: 0.3;
	width: 100%;
	margin: 1em 0;

	@media screen and (min-width: ${breakpoints.md}) {
		display: none;
	}
`;

const Url = ({ originalUrl, shortenedUrl }) => {
	const [isPressed, setIsPressed] = useState(false);
	const [copiedUrl, setCopiedUrl] = useState('');

	return (
		<CopyUrlCard>
			<AvailableUrlCard>
				<AvailableUrlCardContainer>
					<CopyOriginalUrl>{originalUrl}</CopyOriginalUrl>
				</AvailableUrlCardContainer>
				<AvailableUrlCardLine />
				<AvailableUrlCardContainer>
					<CopyShortenedUrl href={shortenedUrl} target="_blank">
						{shortenedUrl}
					</CopyShortenedUrl>
				</AvailableUrlCardContainer>
				<AvailableUrlCardContainer>
					<UrlButton>Copy</UrlButton>
				</AvailableUrlCardContainer>
			</AvailableUrlCard>
		</CopyUrlCard>
	);
};

const UrlList = ({ urls }) => (
	<>
		{urls.map((url) => (
			<Url key={url.id} {...url} />
		))}
	</>
);

const UrlShortener = () => {
	const [urls, setUrls] = useState([
		{
			id: '0',
			originalUrl: 'https://www.frontendmentor.io',
			shortenedUrl: 'http://rel.ink/k41Ikyk',
		},

		{
			id: '1',
			originalUrl: 'https://www.frontendmentor.io',
			shortenedUrl: 'http://rel.ink/k41Ikyk',
		},

		{
			id: '2',
			originalUrl: 'https://www.frontendmentor.io',
			shortenedUrl: 'http://rel.ink/k41Ikyk',
		},
	]);

	return (
		<div style={{
            position: 'relative',
            top: '-70px',
            marginBottom: '4em'
        }}>
			<CreateUrlCard method="GET">
				<Row>
					<Col>
						<UrlInputContainer>
							<UrlInput
								tabIndex="0"
								type="text"
								placeholder="Shorten a link here..."
								autoFocus
							/>
							{/* <Warning>Please add a link</Warning> */}
						</UrlInputContainer>
					</Col>

					<ColTemp>
						<UrlButton type="button">Shorten it!</UrlButton>
					</ColTemp>
				</Row>
			</CreateUrlCard>

			<UrlList urls={urls} />
		</div>
	);
};

export default UrlShortener;
