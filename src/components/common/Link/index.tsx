import { IDefaultProps } from "../../../contexts/types";
import { LinkStyled } from "./style";

export interface ILinkProps extends IDefaultProps {
  href?: string;
  variant?: "primary" | "secondary";
  color?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export default function Link({ href, children, ...rest }: ILinkProps) {
  return (
    <LinkStyled href={href ? `href` : "agendaconsulta.com"}  {...rest}>
      {children}
    </LinkStyled>
  );
}
