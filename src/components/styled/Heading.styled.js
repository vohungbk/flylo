import styled from "styled-components";

export const StyledHeading = styled.h3`
  font-size: 32px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 26px;
  }
`;
