import styled from "styled-components";

export const Input = styled.input`
  color: hsl(0, 0%, 75%);
  background-color: #ffffff;
  border: 1px solid hsl(0, 0%, 75%);
  padding: 12px 24px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;
