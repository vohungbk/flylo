import { Button } from "./styled/Button.styled";
import { StyledFlex } from "./styled/Flex.styled";
import { Action, Image, Logo, StyledHeader, StyledNav } from "./styled/Header.styled";
import { StyledHeading } from "./styled/Heading.styled";
import { Input } from "./styled/Input.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <Logo src="./images/logo.svg" alt="" />
        <ul>
          <li>Features</li>
          <li>Team</li>
          <li>Sign in</li>
        </ul>
      </StyledNav>
      <StyledFlex direction="column-reverse">
        <div>
          <StyledHeading>All your files in one secure location, accessible anywhere.</StyledHeading>
          <p>
            Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and
            co-workers.
          </p>
          <Action>
            <Input placeholder="Enter your email..." type="email" />
            <Button bg="hsl(224, 93%, 58%)" color="#fff">
              Get Started
            </Button>
          </Action>
        </div>
        <Image src="./images/illustration-1.svg" alt="" />
      </StyledFlex>
    </StyledHeader>
  );
};
