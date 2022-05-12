import { StyledUser } from "./styled/User.styled";

const User = () => {
  return (
    <StyledUser>
      <img src="./images/avatar-testimonial.jpg" alt="" />
      <div>
        <h4> Kyle Burton</h4>
        <span>Founder & CEO, Huddle</span>
      </div>
    </StyledUser>
  );
};

export default User;
