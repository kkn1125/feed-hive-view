import { Button, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { BaseButtonProps } from "./BaseButton";

type MenuButtonProps = {
  path?: string;
  normalize?: boolean;
};

const MenuButton = styled(
  ({ label, path, ...props }: BaseButtonProps & MenuButtonProps) => (
    <Button component={Link} to={path || "/"} {...props}>
      {label}
    </Button>
  )
)``;

export default MenuButton;
