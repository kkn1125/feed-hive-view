import { Button, ButtonProps, styled } from "@mui/material";

export type BaseButtonProps = ButtonProps & {
  label?: string;
  rounded?: boolean;
  normalize?: boolean;
};

const BaseButton = styled(
  ({ label, ...props }: BaseButtonProps) => <Button {...props}>{label}</Button>,
  {
    shouldForwardProp: (propName: string) =>
      !["rounded", "normalize"].includes(propName),
  }
)<BaseButtonProps>(({ theme, rounded = false, normalize = false }) => ({
  ...(rounded && {
    borderRadius: theme.shape.borderRadius * 2,
  }),
  ...(normalize && {
    textTransform: "none",
  }),
}));

export default BaseButton;
