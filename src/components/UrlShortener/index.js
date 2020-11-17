import React, {
    useState,
    useEffect,
    useCallback,
    useMemo,
    useRef,
} from 'react';

import UrlList from '../CopyUrl';
import { UrlButton } from '../Button';
import { Row, Col } from 'react-grid-system';

import {
    ShortLinkContainer,
    ShortLinkForm,
    FormInput,
    Warning,
    MessageContainer,
} from './style';

const UrlShortener = () => {
    const [inputValue, setInputValue] = useState('');
    const [urls, setUrls] = useState([
        {
            id: '0',
            originalUrl: 'https://www.frontendmentor.io',
            shortenedUrl: 'http://rel.ink/k41Ikyk',
        },

        {
            id: '1',
            originalUrl: 'https://www.frontendmentor.io',
            shortenedUrl: 'http://rel.ink/k41Ikyk',
        },

        {
            id: '2',
            originalUrl: 'https://www.frontendmentor.io',
            shortenedUrl: 'http://rel.ink/k41Ikyk',
        },
    ]);

    const handleInputChange = (event) => {


    };

    return (
        <ShortLinkContainer>
            <ShortLinkForm method="POST" action="/api">
                <Row justify="between">
                    <Col sm={12} md={8} lg={10}>
                        <MessageContainer>
                            <FormInput
                                tabIndex="-1"
                                type="text"
                                placeholder="Shorten a link here..."
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                            {/* <Warning>Please add a link</Warning> */}
                        </MessageContainer>
                    </Col>

                    <Col sm={12} md={4} lg={2}>
                        <UrlButton type="button">Shorten it!</UrlButton>
                    </Col>
                </Row>
            </ShortLinkForm>

            <UrlList urls={urls} />
        </ShortLinkContainer>
    );
};

export default UrlShortener;
