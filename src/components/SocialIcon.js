import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { StyledSocialIcon } from "./styled/SocialIcon.styled";

export const SocialIcon = () => {
  return (
    <StyledSocialIcon>
      <li>
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
        <a href="https://facebook.com">
          <FaInstagram />
        </a>
      </li>
    </StyledSocialIcon>
  );
};
