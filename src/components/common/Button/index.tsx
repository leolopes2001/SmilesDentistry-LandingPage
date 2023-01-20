import { IButtonProps } from "./Button";
import { ButtonStyled } from "./style";


const Button = ({ type = "button", children, ...rest }: IButtonProps) => {
  return (
    <ButtonStyled></ButtonStyled>
  );
};

export default Button;
