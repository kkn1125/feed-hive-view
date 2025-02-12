import Profile from "@moleculars/Profile";
import { Stack, Typography, useTheme } from "@mui/material";
import { DATETIME_FORMAT } from "@utils/constant";
import dayjs from "dayjs";

interface AuthorProps {
  name?: string;
  datetime?: string | Date;
}
const Author: React.FC<AuthorProps> = ({ name, datetime }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <Profile size={35} />
      <Stack>
        <Typography fontSize={theme.typography.body1.fontSize} fontWeight={900}>
          {name}
        </Typography>
        <Typography
          color="caption"
          fontSize={theme.typography.body1.fontSize}
          fontWeight={500}
        >
          {dayjs(datetime).format(DATETIME_FORMAT)}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Author;
