import styled from "styled-components";

export const StyledContent = styled.div`
  position: relative;
  background-color: hsl(240, 75%, 98%);

  padding: 60px 0 40px;
  margin-top: 160px;
  &::before {
    position: absolute;
    content: "";
    background: url("./images/bg-curve-desktop.svg") center no-repeat;
    background-size: cover;
    width: 100%;
    height: 8rem;
    top: 0;
    left: 50%;
    transform: translate(-50%, -70%);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    background-color: hsl(240, 75%, 98%);
    padding: 40px 0 80px;
    &::before {
      background: url("./images/bg-curve-mobile.svg") center no-repeat;
    }
  }
`;

export const StyledHowItWork = styled.div`
  a {
    color: hsl(170, 45%, 43%);
    padding-bottom: 8px;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    position: relative;
    display: inline-flex;
    align-items: center;
    margin-bottom: 3rem;
    text-decoration: none;
    border-bottom: thin solid hsl(170, 45%, 43%);
  }
  a:hover {
    opacity: 0.9;
    cursor: pointer;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 20px;
    text-align: center;
  }
`;
