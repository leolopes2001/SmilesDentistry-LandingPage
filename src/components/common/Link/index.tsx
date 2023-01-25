import { IDefaultProps } from "../../../contexts/types";
import { LinkStyled } from "./style";

export interface ILinkProps extends IDefaultProps {
  href?: string;
  variant?: "primary" | "secondary";
  color?: "primary" | "secondary";
  target?: "_blank" | "_self";
  className?: string;
  onClick?: () => void;
}

export default function Link({
  target = "_self",
  href,
  children,
  ...rest
}: ILinkProps) {
  return (
    <LinkStyled
      href={href ? `#${href}` : "https://agendaconsulta.com/"}
      {...rest}
      target={target}
    >
      {children}
    </LinkStyled>
  );
}
