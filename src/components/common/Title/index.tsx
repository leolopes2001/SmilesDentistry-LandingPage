import { ReactNode } from "react";

import { BaseTitle } from "./style";

export interface IBaseTitleProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: ReactNode;
  variant:
    | "logo"
    | "title1"
    | "title2"
    | "title3"
    | "title4"
    | "title5"
    | "title6";

  animation?: boolean;
}

export const Title = ({
  animation = true,
  children,
  ...rest
}: IBaseTitleProps) => {
  const getAnimation = () => animation && { "data-aos": "fade-right" };

  return (
    <>
      <BaseTitle {...rest} {...getAnimation()}>
        {children}
      </BaseTitle>
    </>
  );
};

export default Title;
