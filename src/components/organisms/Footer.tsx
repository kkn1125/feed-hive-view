import Logo from "@moleculars/Logo";
import { Divider, Stack, Typography } from "@mui/material";
import {
  AUTHOR,
  INSTAGRAM,
  LINKEDIN,
  LOGO_BLACK,
  TWITTER,
  YOUTUBE,
} from "@utils/constant";
import { Link } from "react-router-dom";

interface FooterProps {}
const Footer: React.FC<FooterProps> = () => {
  return (
    <Stack
      gap={3}
      pt={2}
      px={(theme) => theme.typography.pxToRem(72)}
      pb={10}
      position="relative"
    >
      <Divider sx={{ position: "absolute", top: 0, left: 0, right: 0 }} />
      {/* navigation */}
      <Stack direction="row" justifyContent="space-between">
        <Stack gap={(theme) => theme.typography.pxToRem(15)}>
          <Logo size={35} url={LOGO_BLACK} type="black" />
          <Stack direction="row" gap={(theme) => theme.typography.pxToRem(16)}>
            <Logo size={24} url={TWITTER} type="icon" />
            <Logo size={24} url={INSTAGRAM} type="icon" />
            <Logo size={24} url={YOUTUBE} type="icon" />
            <Logo size={24} url={LINKEDIN} type="icon" />
          </Stack>
        </Stack>
        <Stack>
          <Typography
            color="textDisabled"
            fontSize={(theme) => theme.typography.caption.fontSize}
            fontWeight={700}
          >
            INFO
          </Typography>
          <Typography
            className="link"
            component={Link}
            to="/about"
            color="textSecondary"
          >
            FeedHive란
          </Typography>
        </Stack>
        <Stack>
          <Typography
            color="textDisabled"
            fontSize={(theme) => theme.typography.caption.fontSize}
            fontWeight={700}
          >
            CONTACT
          </Typography>
          <Typography
            className="link"
            component={Link}
            to={`mailto:${AUTHOR.EMAIL}`}
            color="textSecondary"
          >
            {AUTHOR.EMAIL}
          </Typography>
        </Stack>
      </Stack>
      {/* copyright */}
      <Typography
        align="center"
        fontSize={(theme) => theme.typography.button.fontSize}
      >
        Copyright 2023 FeedHive All rights reserved.
      </Typography>
    </Stack>
  );
};

export default Footer;
