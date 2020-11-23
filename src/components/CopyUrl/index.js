import React, {
    useState,
    useEffect,
    useCallback,
    useMemo,
    useRef,
} from 'react';
import { css } from 'styled-components/macro'

import { Link } from 'react-router-dom';
import { color, breakpoints } from '../../styles/variables';

import { UrlButton } from '../Button';
import { Row, Col, Visible } from 'react-grid-system';

import {
    CopyUrlCard,
    OriginalUrl,
    AvailableUrlCardLine,
    ShortLink,
} from './style';

const noMargin = {
    marginRight: '0px',
    marginLeft: '0px',
};

const Url = ({ longUrl, shortUrl }) => {
    const [isPressed, setIsPressed] = useState(false);
    const [copiedUrl, setCopiedUrl] = useState('');

    return (
        <CopyUrlCard>
            <Row align="center" justify="around" style={noMargin}>
                <Col sm={12} lg={6}>
                    <OriginalUrl>{longUrl}</OriginalUrl>
                </Col>
                <Visible xs sm md>
                    <AvailableUrlCardLine />
                </Visible>
                {/* @todo short link margin right issue */}
                {/*  @todo fix issue with margin bottom  */}
                <Col
                    sm={12}
                    lg="content"
                    css={`
                        margin-bottom: 1em;

                        @media screen and (min-width: ${breakpoints.lg}) {
                            margin-bottom: 0;
                            /* margin-right: 1em; */
                        }
                    `}
                >
                    <ShortLink>
                        <a href={shortUrl} target="_blank"  rel="noopener noreferrer">
                            {shortUrl}
                        </a>
                    </ShortLink>
                </Col>
                <Col sm={12} lg={2}>
                    <UrlButton>Copy</UrlButton>
                </Col>
            </Row>
        </CopyUrlCard>
    );
};

const UrlList = ({ urls }) => {
    return (<>
        {urls.map((url) => (
            <Url key={url.data.hashId} {...url.data} />
        ))}
    </>
    )
        };

export default UrlList;
