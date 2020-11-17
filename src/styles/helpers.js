import styled from 'styled-components';

import { font } from './variables';

export const Title = styled.h1`
    font-size: 2.5rem;
	font-weight: 700;
`;

export const SubTitle = styled.h2`
    font-size: 2rem;
`;

export const Text = styled.p`

    font-size: ${font.sizeBodyText};
    font-weight: ${font.weightMedium};
    line-height: 1.75rem;

`;