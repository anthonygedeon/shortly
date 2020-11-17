import styled from "styled-components";

import { color, font } from "../../styles/variables";

export const NavContainer = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  margin-right: ${(props) => props.push || "2em"};
  color: ${color.primaryText};
  font-weight: ${font.weightBold};
`;
