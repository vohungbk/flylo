import { StyledCard } from "./styled/Card.styled";
import User from "./User";

const Card = () => {
  return (
    <StyledCard>
      <img src="./images/icon-quotes.svg" alt="" />
      <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
      <User />
    </StyledCard>
  );
};

export default Card;
