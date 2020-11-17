import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";

import { Link } from "react-router-dom";

import { UrlButton } from "../Button";
import { Row, Col, Visible } from "react-grid-system";

import {
  CopyUrlCard,
  OriginalUrl,
  AvailableUrlCardLine,
  ShortLink,
} from "./style";

const noMargin = {
  marginRight: "0px",
  marginLeft: "0px",
};

const Url = ({ originalUrl, shortenedUrl }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState("");

  return (
    <CopyUrlCard>
      <Row align="center" justify="around" style={noMargin}>
        <Col sm={12} lg={8}>
          <OriginalUrl>{originalUrl}</OriginalUrl>
        </Col>
        <Visible xs sm md>
          <AvailableUrlCardLine />
        </Visible>
        {/* @todo short link margin right issue */}
        {/*  @todo fix issue with margin bottom  */}
        <Col
          sm={12}
          lg={2}
          style={{
            marginBottom: "1em",
          }}
        >
          <ShortLink>
            <Link to={shortenedUrl} target="_blank">
              {shortenedUrl}
            </Link>
          </ShortLink>
        </Col>
        <Col sm={12} lg={2}>
          <UrlButton>Copy</UrlButton>
        </Col>
      </Row>
    </CopyUrlCard>
  );
};

const UrlList = ({ urls }) => (
  <>
    {urls.map((url) => (
      <Url key={url.id} {...url} />
    ))}
  </>
);

export default UrlList;
