import React from 'react';
import styled from 'styled-components';

import { PillButton } from './Button';

import { color, breakpoints } from '../styles/variables';
import { Container } from '../styles/Grid';
import { Text } from '../styles/helpers';


import bgBoostMobile from '../images/bg-boost-mobile.svg';
import bgBoostDesktop from '../images/bg-boost-desktop.svg';

const CtaSection = styled.section`
    padding: 5em 0;
    background-color: ${color.primaryBackground};
    background-image: url(${bgBoostMobile});
    background-repeat: no-repeat;
	background-position: 20%;
    background-size: cover;
    
    @media screen and (min-width: ${breakpoints.md}) {
		background-image: url(${bgBoostDesktop});
	}
`;

const Cta = () => {
    return (
        <CtaSection>
            <Container>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <h2 style={{
                        color: color.primary,
                        fontSize: '2rem',
                        marginBottom: '1em',
                        textAlign: 'center'
                    }}>Boost your links today</h2>
                    <PillButton style={{
                        width: '10rem'
                    }}>Get started</PillButton>
                </div>
            </Container>
        </CtaSection>
    );
};

export default Cta;