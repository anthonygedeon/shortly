import React, {
    useState,
    useEffect,
    useCallback,
    useMemo,
    useRef,
} from 'react';
import { css } from 'styled-components/macro';

import { color, breakpoints } from '../../styles/variables';

import { CopyButton } from '../Button';
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
    const SUCCESS_COPY_STATE = 'Copied';
    const NORMAL_COPY_STATE = 'Copy';

    const [isPressed, setIsPressed] = useState(false);
    const [copiedUrl, setCopiedUrl] = useState(NORMAL_COPY_STATE);

    const shortLinkText = useRef();

    const copyElementToClipboard = (node) => {
        window.getSelection().removeAllRanges();

        const range = document.createRange();

        range.selectNode(typeof node === 'string' ? null : node);

        window.getSelection().addRange(range);

        document.execCommand('copy');

        window.getSelection().removeAllRanges();
    };

    const copyToClipBoard = () => {
        copyElementToClipboard(shortLinkText.current);

        setCopiedUrl(SUCCESS_COPY_STATE);

        setIsPressed(true);

        setTimeout(() => {
            setCopiedUrl(NORMAL_COPY_STATE);
            setIsPressed(false);
        }, 2000);
    };

    return (
        <CopyUrlCard>
            <Row align="center" justify="around" style={noMargin}>
                <Col sm={12} lg={6}>
                    <OriginalUrl>{longUrl}</OriginalUrl>
                </Col>
                <Visible xs sm md>
                    <AvailableUrlCardLine />
                </Visible>
                <Col
                    sm={12}
                    lg="content"
                    css={`
                        margin-bottom: 1em;

                        @media screen and (min-width: ${breakpoints.lg}) {
                            margin-bottom: 0;
                        }
                    `}
                >
                    <ShortLink>
                        <a
                            href={shortUrl}
                            ref={shortLinkText}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {shortUrl}
                        </a>
                    </ShortLink>
                </Col>
                <Col sm={12} lg={2}>
                    <CopyButton copied={isPressed} onClick={copyToClipBoard}>
                        {copiedUrl}
                    </CopyButton>
                </Col>
            </Row>
        </CopyUrlCard>
    );
};

const UrlList = ({ urls }) => {
    return (
        <>
            {urls.map((url) => (
                <Url key={url.data.hashId} {...url.data} />
            ))}
        </>
    );
};

export default UrlList;
