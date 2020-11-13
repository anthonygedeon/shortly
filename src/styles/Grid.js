import styled from 'styled-components';
import { breakpoints } from './variables';

export const Container = styled.div`
    width: 100%;
	max-width: 80%;
	margin: 0 auto;

	@media screen and (min-width: ${breakpoints.lg}) {
		max-width: 65%;
	}
`;

export const Col = styled.div`
    flex: 1 0 100%;

    @media screen and (min-width: ${breakpoints.md}) {
        flex-basis: 50%;
    }

    @media screen and (min-width: ${breakpoints.md}) {
        order: 0 !important;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Visible = styled.div`

    display: ${(props) => props.isVisible ? 'block' : 'none' };

    @media screen and (min-width: ${(props) => props.breakpoint}) {
        display: ${(props) => props.isVisible ? 'none' : 'block' };
    }

`;