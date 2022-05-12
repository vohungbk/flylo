import styled from "styled-components";

export const StyledContentNoImage = styled.div`
  background: ${({ bg }) => bg || ""};
  height: 100%;
  color: #fff;

  padding: 50px 0;
  margin-top: ${({ mgTop }) => mgTop || 0};
  input {
    margin-bottom: 10px;
    width: 100%;
  }
  h4 {
    font-size: 20px;
  }
  p {
    opacity: 1;
    font-size: 16px;
  }
`;

export const Access = styled.div`
  display: grid;
  grid-template-columns: 45% 40%;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: block;
    text-align: center;
  }
`;

export const Action = styled.div`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 24px;
    input,
    button {
      width: calc(100% - 48px);
    }
  }
`;
