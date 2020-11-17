import React, { useState } from "react";
import { css } from "styled-components/macro";
import { Link } from "react-router-dom";

import { Visible } from "react-grid-system";
import { color } from "../../styles/variables";
import { PillButton } from "../Button";

import { Panel, PanelContainer, PanelItem } from "./style";

const Menu = () => {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <>
      {menuShow ? (
        <Panel>
          <PanelContainer>
            <PanelItem>
              <Link to="/features">Features</Link>
            </PanelItem>
            <PanelItem>
              <Link to="/pricing">Pricing</Link>
            </PanelItem>
            <PanelItem>
              <Link to="/resources">Resources</Link>
            </PanelItem>
            <hr
              css={`
                width: 100%;
                opacity: 0.2;
                margin-bottom: 2em;
              `}
            />
            <PanelItem>
              <Link to="/login">Login</Link>
            </PanelItem>
            <PanelItem
              css={`
                width: 100%;
              `}
            >
              <Link to="/sign-up">
                <PillButton
                  css={`
                    width: 100%;
                    padding: 1em 0;
                  `}
                >
                  Sign Up
                </PillButton>
              </Link>
            </PanelItem>
          </PanelContainer>
        </Panel>
      ) : null}

      <button
        style={{ outline: "0", float: "right" }}
        onClick={() => {
          setMenuShow(!menuShow);
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color.primaryText}
          strokeWidth="3"
          strokeLinecap="square"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="4" x2="21" y2="4"></line>
          <line x1="3" y1="20" x2="21" y2="20"></line>
        </svg>
      </button>
    </>
  );
};

export default Menu;
