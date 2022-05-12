import { SocialIcon } from "./SocialIcon";
import { StyledContainer } from "./styled/Container.styled";
import { StyledFlex } from "./styled/Flex.styled";
import { StyledFooter } from "./styled/Footer.styled";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <img src="./images/logo-white.svg" alt="" />
        <StyledFlex justify="space-between" align="flex-start">
          <ul>
            <li>
              <img src="./images/icon-phone.svg" alt="" />
              Phone: +1-543-123-4567
            </li>
            <li>
              <img src="./images/icon-email.svg" alt="" />
              example@fylo.com
            </li>
          </ul>
          <ul>
            <li> About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
          <ul>
            <li> Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
          <SocialIcon />
        </StyledFlex>
      </StyledContainer>
    </StyledFooter>
  );
};
