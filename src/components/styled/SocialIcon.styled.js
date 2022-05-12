import styled from "styled-components";

export const StyledSocialIcon = styled.div`
  margin-top: 18px;
  li {
    list-style: none;
  }
  a {
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    li {
      text-align: center;
    }
  }
`;
