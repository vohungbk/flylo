import styled from "styled-components";

export const StyledCard = styled.div`
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin-top: 20px;
  padding: 20px;
  max-width: 75%;
  p {
    margin: 10px 0;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0 auto;
  }
`;
