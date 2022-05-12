import styled from "styled-components";

export const Button = styled.button`
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  padding: 12px 24px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;
