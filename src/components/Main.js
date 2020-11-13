import React, { useState } from 'react';
import styled from 'styled-components';

import { color, breakpoints } from '../styles/variables';
import { Container } from '../styles/Grid';
import { Text } from '../styles/helpers';

import BrandRecognitionIcon from '../images/icon-brand-recognition.svg';
import DetailRecordIcon from '../images/icon-detailed-records.svg';
import CustomizableIcon from '../images/icon-fully-customizable.svg';

import InfoCard from './InfoCard';

const Content = styled.main`
	background-color: ${color.mainBackground};
`;

const MainSection = styled.section`
`;

const SectionTitle = styled.h3`
	font-size: 1.5rem;
	font-weight: 700;
	text-align: center;
	color: ${color.primaryHeading};

	@media screen and (min-width: ${breakpoints.md}) {
		font-size: 2rem;
	}
`;

const SectionText = styled(Text)`
	font-size: 1rem;
	margin-top: 1em;
	color: ${color.primaryText};
	text-align: center;
    margin: 1em auto;
	@media screen and (min-width: ${breakpoints.md}) {
		max-width: 40%;
	}
`;

const CardLayout = styled.div`

    margin: 3em 0;

    @media screen and (min-width: ${breakpoints.md}) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

`;

const CardTitle = styled.h3`
	font-size: 1.125rem;
	font-weight: 700;
	text-align: center;
	color: ${color.primaryHeading};

	@media screen and (min-width: ${breakpoints.md}) {
        font-size: 1.5rem;
		text-align: left;
	}

`;

const CardText = styled(Text)`

    text-align: center;
	margin: 1em 0;
    color: ${color.primaryText};
    font-size: 1rem;

	@media screen and (min-width: ${breakpoints.md}) {
		text-align: left;
	}

	@media screen and (min-width: ${breakpoints.xl}) {
		max-width: 80%;
	}
`;

const CardImageBg = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${color.primaryBackground};
    padding: 1em;
    border-radius: 50%;
    position: relative;
    top: -40px;

    @media screen and (min-width: ${breakpoints.md}) {
        align-self: flex-start;
    }
`;

const Main = () => {
	return (
		<Content>
			<Container>
				<MainSection>
					<SectionTitle>Advanced Statistics</SectionTitle>
					<SectionText>
						Track how your links are performing across the web with
						our advanced statistics dashboard.
					</SectionText>
				</MainSection>

				<CardLayout>
					<InfoCard>
						<CardImageBg>
							<img src={BrandRecognitionIcon} alt="Icon" />
						</CardImageBg>
						<CardTitle>Brand Recognition</CardTitle>
						<CardText>
							Boost your brand recognition with each click.
							Generic links don’t mean a thing. Branded links help
							instil confidence in your content.
						</CardText>
					</InfoCard>

					<InfoCard>
						<CardImageBg>
							<img src={DetailRecordIcon} alt="Icon" />
						</CardImageBg>
						<CardTitle>Detailed Records</CardTitle>
						<CardText>
							Gain insights into who is clicking your links.
							Knowing when and where people engage with your
							content helps inform better decisions.
						</CardText>
					</InfoCard>

					<InfoCard>
						<CardImageBg>
							<img src={CustomizableIcon} alt="Icon" />
						</CardImageBg>
						<CardTitle>Fully Customizable</CardTitle>
						<CardText>
							Improve brand awareness and content recoverability
							through customizable links, supercharging audience
							engagement
						</CardText>
					</InfoCard>
				</CardLayout>
			</Container>
		</Content>
	);
};

export default Main;
