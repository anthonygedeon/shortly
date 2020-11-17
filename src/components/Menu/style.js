import styled from "styled-components";

import { color, font } from "../../styles/variables";

export const Panel = styled.div`
  border-radius: 10px;
  width: 100%;
  padding: 2.5em 2em;
  display: block;
  position: absolute;
  margin-top: 2em;
  left: 0;
  z-index: 10;
  background-color: ${color.primaryBackground};
`;

export const PanelContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PanelItem = styled.li`
  margin-bottom: 2em;
  font-weight: ${font.weightBold};
  color: ${color.primary};
`;
