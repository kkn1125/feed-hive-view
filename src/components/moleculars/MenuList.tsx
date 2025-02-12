import MenuButton from "@atoms/MenuButton";
import {
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import Profile from "./Profile";
import MenuIcon from "@mui/icons-material/Menu";

const settings: string[] = [];

interface MenuListProps {
  isUser?: boolean;
}
const MenuList: React.FC<MenuListProps> = ({ isUser = false }) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Stack direction="row" gap={2}>
      {isMdUp ? (
        <>
          <MenuButton
            color="brand"
            variant="outlined"
            label="FeedHive란"
            path="/about"
          />
          {isUser && (
            <>
              <MenuButton color="fontGray" label="알림" path="/notifications" />
              <MenuButton color="fontGray" label="피드" path="/feeds" />
              <MenuButton color="fontGray" label="프로필" path="/profile" />
              <Profile />
            </>
          )}
        </>
      ) : (
        <>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography sx={{ textAlign: "center" }}>{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </Stack>
  );
};

export default MenuList;
