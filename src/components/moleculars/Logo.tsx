import { Box, Stack, Typography } from "@mui/material";

interface LogoProps {
  url: string;
  type: string;
  size?: number;
  label?: string;
}
const Logo: React.FC<LogoProps> = ({ size = 48, url, type, label }) => {
  return (
    <Stack direction="row" alignItems="center" gap={2}>
      <Box component="img" src={url} alt={type} width={size} height={size} />
      {label && (
        <Typography
          fontSize={(theme) => theme.typography.h4.fontSize}
          fontWeight={700}
          textTransform="uppercase"
        >
          {label}
        </Typography>
      )}
    </Stack>
  );
};

export default Logo;
