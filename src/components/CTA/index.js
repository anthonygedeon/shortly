import React from 'react';
import { css } from 'styled-components/macro';

import { PillButton } from '../Button';

import { Container, Row } from 'react-grid-system';

import { CtaSection, CtaHeading } from './style';

const Cta = () => {
    return (
        <CtaSection>
            <Container>
                <Row justify="center">
                    <CtaHeading>Boost your links today</CtaHeading>
                </Row>

                <Row justify="center">
                    <PillButton
                        css={`
                            width: 10rem;
                        `}
                    >
                        Get started
                    </PillButton>
                </Row>
            </Container>
        </CtaSection>
    );
};

export default Cta;
