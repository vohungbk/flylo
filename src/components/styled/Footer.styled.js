import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;
  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 20px;
    display: flex;
    align-items: flex-start;
  }

  ul li img {
    margin-right: 10px;
  }
`;
