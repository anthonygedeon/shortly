import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import userWorking from '../images/illustration-working.svg';

import Navigation from './Navigation';

import { PillButton } from './Button';
import { Container, Col } from '../styles/Grid';
import { color, breakpoints } from '../styles/variables';
import { Text } from '../styles/helpers';

const Row = styled.div`
	display: flex;
	justify-content: ${(props) => (props.between ? 'space-between' : null)};
	align-items: ${(props) => (props.center ? 'center' : null)};
	position: relative;
`;

const HeaderSection = styled.section`
	display: flex;
	margin-top: 2em;
	flex-direction: column;
	align-items: center;

	@media screen and (min-width: ${breakpoints.md}) {
		align-items: flex-start;
	}
`;

const HeaderTitle = styled.h1`
	font-size: 2.5rem;
	font-weight: 700;
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

const HeaderText = styled(Text)`
	text-align: center;
	margin: 1em 0;
	color: ${color.primaryText};

	@media screen and (min-width: ${breakpoints.md}) {
		text-align: left;
	}

	@media screen and (min-width: ${breakpoints.xl}) {
		max-width: 80%;
	}
`;

const Header = () => (
	<header style={{ padding: '2em 0 7em 0' }}>
		<Container>
			<Row between center={true}>
				<div style={{ marginRight: '2em' }}>
					<Logo color={color.primaryHeading} />
				</div>
				<Navigation />
			</Row>

			<Row between center style={{ flexWrap: 'wrap', margin: '2em 0' }}>
				<Col style={{ order: 10 }}>
					<HeaderSection>
						<HeaderTitle>More than just shorter links</HeaderTitle>
						<HeaderText>
							Build your brand’s recognition and get detailed
							insights on how your links are performing.
						</HeaderText>
						<PillButton
							style={{
								width: '11rem',
							}}
						>
							Get Started
						</PillButton>
					</HeaderSection>
				</Col>
				<Col>
					<img src={userWorking} alt="User on computer" />
				</Col>
			</Row>
		</Container>
	</header>
);

export default Header;
