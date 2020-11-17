import React from "react";
import { css } from "styled-components/macro";
import UrlShortener from "../UrlShortener/index";

import { color, breakpoints, spacing } from "../../styles/variables";
import { Container, Row, Col } from "react-grid-system";
import { Text } from "../../styles/helpers";

import BrandRecognitionIcon from "../../images/icon-brand-recognition.svg";
import DetailRecordIcon from "../../images/icon-detailed-records.svg";
import CustomizableIcon from "../../images/icon-fully-customizable.svg";

import Card from "../Card";

import {
  MainContent,
  Section,
  SectionTitle,
  SectionText,
  CardTitle,
  CardText,
  CardImageBg,
  CardImage,
} from "./style";

const bar = `
    &::before {
		content: '';
        width: 6px;
		height: 89%;
		background-color: ${color.primaryAccent};
		position: absolute;
	}

    // @todo blue bar is shown in md breakpoint

	@media screen and (min-width: ${breakpoints.lg}) {
		justify-content: space-between;
		flex-direction: row;
		&::before {
			content: '';
			width: 90%;
			height: 6px;
			background-color: ${color.primaryAccent};
			position: absolute;
            top: 150px;
            right: 20px;
		}
	}
`;

const CardSpace = `

    margin-bottom: 5rem;

    @media screen and (min-width: ${breakpoints.lg}) {
        margin-bottom: 0;
    }

`;

const Main = () => {
  return (
    <MainContent>
      <Container>
        <UrlShortener />

        <Section>
          <SectionTitle>Advanced Statistics</SectionTitle>
          <SectionText>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </SectionText>
        </Section>

        <Row
          align="stretch"
          justify="center"
          style={{ marginBottom: "10rem", position: "relative" }}
          css={bar}
        >
          <Col sm={12} lg={4} css={CardSpace}>
            <Card>
              <CardImageBg>
                <CardImage src={BrandRecognitionIcon} alt="Bar chart icon" />
              </CardImageBg>
              <CardTitle>Brand Recognition</CardTitle>
              <CardText>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </CardText>
            </Card>
          </Col>

          <Col
            sm={12}
            lg={4}
            css={`
              ${CardSpace}
              @media screen and (min-width: ${breakpoints.lg}) {
                position: relative;
                top: 50px;
              }
            `}
          >
            <Card>
              <CardImageBg>
                <CardImage src={DetailRecordIcon} alt="Speedometer icon" />
              </CardImageBg>
              <CardTitle>Detailed Records</CardTitle>
              <CardText>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </CardText>
            </Card>
          </Col>

          <Col
            sm={12}
            lg={4}
            css={`
              @media screen and (min-width: ${breakpoints.lg}) {
                position: relative;
                top: 100px;
              }
            `}
          >
            <Card>
              <CardImageBg>
                <CardImage src={CustomizableIcon} alt="Customization icon" />
              </CardImageBg>
              <CardTitle>Fully Customizable</CardTitle>
              <CardText>
                Improve brand awareness and content recoverability through
                customizable links, supercharging audience engagement.
              </CardText>
            </Card>
          </Col>
        </Row>
      </Container>
    </MainContent>
  );
};

export default Main;
