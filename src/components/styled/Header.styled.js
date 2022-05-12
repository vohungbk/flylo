import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 30px 0;

  ul {
    list-style: none;
    display: flex;
  }
  ul li {
    margin-right: 20px;
  }

  p {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    text-align: center;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    img {
      width: 20%;
    }
    ul {
      margin: 0;
      font-size: 14px;
    }
  }
`;

export const Logo = styled.img``;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0;
  }
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 65%;
  }
  button {
    width: 35%;
    margin-left: 20px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    padding: 24px;
    input,
    button {
      width: calc(100% - 48px);
    }
    button {
      margin: 0;
      margin-top: 10px;
    }
  }
`;
