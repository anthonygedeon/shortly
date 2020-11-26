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
    const baseUrl = 'https://shortly-restful-api.herokuapp.com';

    const MAX_SHORT_LINKS = 5;
    const DEFAULT_ERROR_MESSAGE = 'Please add a link';

    const [errorMessage, setErrorMessage] = useState(DEFAULT_ERROR_MESSAGE);
    const [isError, setIsError] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [urls, setUrls] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const removeShortLink = () => {
        setUrls((oldState) => [...oldState.slice(0, MAX_SHORT_LINKS)]);
    }

    const handleButton = async (event) => {
        setIsError(false);

        event.preventDefault();

        try {
            const response = await fetch(
                `${baseUrl}/api/v1/shorten?long_url=${inputValue}`,
                {
                    method: 'POST',
                }
            );

            const data = await response.json();

            if (data.error) {
                console.log(data.error)
                setErrorMessage(data.error);
                throw errorMessage;
            }

            setUrls((oldState) =>  [data, ...oldState]);

            if (urls.length === MAX_SHORT_LINKS) {
                removeShortLink();
            }

        } catch (error) {
            setIsError(true);

            setTimeout(() => {
                setIsError(false);
            }, 4000);
        }

        setInputValue('');
    };

    return (
        <ShortLinkContainer>
            <ShortLinkForm>
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
                            {isError ? (
                                <Warning>{errorMessage}</Warning>
                            ) : null}
                        </MessageContainer>
                    </Col>

                    <Col sm={12} md={4} lg={2}>
                        <UrlButton onClick={handleButton} type="button">
                            Shorten it!
                        </UrlButton>
                    </Col>
                </Row>
            </ShortLinkForm>

            <UrlList urls={urls} />
        </ShortLinkContainer>
    );
};

export default UrlShortener;
