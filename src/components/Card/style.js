import styled from "styled-components";

import { color, breakpoints } from "../../styles/variables";

const StyledCard = styled.section`
  background-color: ${color.primary};
  position: relative;
  padding: 4em 1.5em 2em 1.5em;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & + & {
    margin-top: 5em;
  }

  @media screen and (min-width: ${breakpoints.md}) {
    & + & {
      margin-top: 0;
      margin-left: 2em;
    }
  }
`;

export default StyledCard;
