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

    const baseUrl = 'http://localhost:5000'

    const [inputValue, setInputValue] = useState('');
    const [urls, setUrls] = useState([]);


    const handleInputChange = (event) => {

        setInputValue(event.target.value);

    };

    const handleButton = async (event) => {

        console.log(event)

        event.preventDefault();
        
        const response = await fetch(
            `${baseUrl}/api/v1/shorten?long_url=${inputValue}`, {
            method: 'POST'
        });

        const data = await response.json();

        console.log(data)

        setUrls(oldState => [...oldState, data]);
        
        setInputValue('');
    }

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
                            {/* <Warning>Please add a link</Warning> */}
                        </MessageContainer>
                    </Col>

                    <Col sm={12} md={4} lg={2}>
                        <UrlButton 
                        onClick={handleButton}
                        type="button">Shorten it!</UrlButton>
                    </Col>
                </Row>
            </ShortLinkForm>

            <UrlList urls={urls} />
        </ShortLinkContainer>
    );
};

export default UrlShortener;
