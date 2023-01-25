export interface IButtonProps {
  type?: "button" | "submit";
  children: ReactNode;
  variant: "form_button" | "fotter" | "primary"
  color?: "primary" | "secondary"
  onClick?: () => void
}
