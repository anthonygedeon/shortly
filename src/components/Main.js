import React, { useState } from 'react';
import styled from 'styled-components';

import UrlShortener from './UrlShortener/index';

import { color, breakpoints, spacing } from '../styles/variables';
import { Container } from '../styles/Grid';
import { Text } from '../styles/helpers';

import BrandRecognitionIcon from '../images/icon-brand-recognition.svg';
import DetailRecordIcon from '../images/icon-detailed-records.svg';
import CustomizableIcon from '../images/icon-fully-customizable.svg';

import InfoCard from './InfoCard';

const Content = styled.main`
    padding: ${spacing.contentPadding};
	background-color: ${color.mainBackground};
`;

const MainSection = styled.section`
    margin-bottom: 5em;
    @media screen and (min-width: ${breakpoints.md}) {
        margin-bottom: 10rem;
    }
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
    max-width: 100%;
    margin: 1em auto;
	@media screen and (min-width: ${breakpoints.md}) {
		max-width: 40%;
	}
`;

const CardLayout = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 8em;

    &::before {
        content: '';
        width: 6px;
        height: 99%;
        background-color: ${color.primaryAccent};
        position: absolute;
    }

    @media screen and (min-width: ${breakpoints.md}) {
        justify-content: space-between;
        flex-direction: row;
        &::before {
            content: '';
            width: 99%;
            height: 6px;
            background-color: ${color.primaryAccent};
            position: absolute;
            top: 150px;
        }
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
        width: 100%;
	}

`;

const CardText = styled(Text)`

    text-align: center;
	margin: 1em 0 0 0;
    color: ${color.primaryText};
    font-size: 0.9rem;
    line-height: 1.5rem;

	@media screen and (min-width: ${breakpoints.md}) {
		text-align: left;
	}

`;

const CardImageBg = styled.div`

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

const CardImg = styled.img`
    width: 40px;
    height: 40px;
`;

const Main = () => {

    
	return (
		<Content>
			<Container>

                <UrlShortener />

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
							<CardImg src={BrandRecognitionIcon} alt="Bar chart icon" />
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
							<CardImg src={DetailRecordIcon} alt="Speedometer icon" />
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
							<CardImg src={CustomizableIcon} alt="Customization icon" />
						</CardImageBg>
						<CardTitle>Fully Customizable</CardTitle>
						<CardText>
							Improve brand awareness and content recoverability
							through customizable links, supercharging audience
							engagement.
						</CardText>
					</InfoCard>
				</CardLayout>
			</Container>
		</Content>
	);
};

export default Main;
