import styled from 'styled-components';

import { color } from '../../styles/variables';

export const CopyUrlCard = styled.div`
    background-color: ${color.primary};
    margin-top: 1em;
    position: relative;
    padding: 1em 0;
    border-radius: 10px;
`;

export const OriginalUrl = styled.span`
    color: ${color.primaryHeading};
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 98%;
    white-space: nowrap;
    display: block;
`;

export const AvailableUrlCardLine = styled.hr`
    background-color: ${color.primaryText};
    opacity: 0.3;
    width: 100%;
    margin: 1em 0;
`;

export const ShortLink = styled.span`
    color: ${color.primaryAccent};
`;
