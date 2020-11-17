import React from "react";
import { Link } from "react-router-dom";
import { css } from "styled-components/macro";
import { Container, Row, Col } from "react-grid-system";

import Logo from "../Logo";
import { HeaderContent, Hero, HeroHeading, HeroText } from "./style";
import userWorking from "../../images/illustration-working.svg";

import Navigation from "../Navigation";

import { PillButton } from "../Button";
import { color, breakpoints } from "../../styles/variables";

const Header = () => (
  <HeaderContent>
    <Container>
      <Row
        justify="between"
        align="center"
        nowrap
        nogutter
        css={`
          position: relative;
        `}
      >
        {/*  @todo Split column in halves for logo and menu icon  */}
        <Col
          sm="content"
          lg="content"
          css={`
            @media screen and (min-width: ${breakpoints.lg}) {
              margin-right: 1rem;
            }
          `}
        >
          <Link to="/">
            <Logo color={color.primaryHeading} />
          </Link>
        </Col>
        <Col
          style={{
            position: "static",
          }}
        >
          <Navigation />
        </Col>
      </Row>

      <Row
        align="center"
        justify="between"
        gutterWidth={5}
        css={`
          margin: 2em 0 0 0;
        `}
      >
        <Col
          md={6}
          css={`
            order: 10;

            @media screen and (min-width: ${breakpoints.md}) {
              order: 0;
            }
          `}
        >
          <Hero>
            <HeroHeading>More than just shorter links</HeroHeading>
            <HeroText>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </HeroText>
            <Link to="/pricing"></Link>
            <PillButton
              css={`
                width: 11rem;
              `}
            >
              Get Started
            </PillButton>
          </Hero>
        </Col>
        <Col
          md={6}
          css={`
            margin-bottom: 2rem;

            @media screen and (min-width: ${breakpoints.md}) {
              margin-bottom: 0;
            }
          `}
        >
          <img src={userWorking} alt="User on computer" />
        </Col>
      </Row>
    </Container>
  </HeaderContent>
);

export default Header;
