import Logo from "@moleculars/Logo";
import MenuList from "@moleculars/MenuList";
import { Box, Stack, useMediaQuery } from "@mui/material";
import { BRAND_NAME, LOGO_COLOR } from "@utils/constant";
import { Link } from "react-router-dom";

interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      position="fixed"
      top={0}
      left={0}
      right={0}
      py={(theme) => theme.typography.pxToRem(4)}
      px={(theme) => theme.typography.pxToRem(72)}
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper + 26,
        backdropFilter: "blur(5px)",
        zIndex: 5,
      }}
    >
      {!isMdUp && <Box />}
      <Box component={Link} to="/" className="link" color="inherit">
        <Logo
          url={LOGO_COLOR}
          type="color"
          label={isMdUp ? BRAND_NAME : undefined}
        />
      </Box>
      <MenuList />
      {/* <Divider sx={{ position: "absolute", bottom: 0, left: 0, right: 0 }} /> */}
    </Stack>
  );
};

export default Header;
