import Author from "@atoms/Author";
import BaseButton from "@atoms/BaseButton";
import { Paper, Stack, Typography, useTheme } from "@mui/material";

interface FeedItemProps {
  feed: Feed;
}
const FeedItem: React.FC<FeedItemProps> = ({ feed }) => {
  const theme = useTheme();
  return (
    <Paper>
      <Stack
        p={theme.typography.pxToRem(15)}
        gap={theme.typography.pxToRem(15)}
      >
        <Stack>
          {/* <Typography>{feed.title}</Typography> */}
          <Typography>{feed.content}</Typography>
        </Stack>
        <Stack
          direction={{ md: "row", xs: "column" }}
          justifyContent={{ md: "space-between", xs: "center" }}
          alignItems={{ md: "center", xs: "stretch" }}
          gap={3}
        >
          <Author name={feed.author} datetime={feed.created_at} />
          <BaseButton
            color="caption"
            variant="contained"
            size="large"
            label="읽기"
          />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default FeedItem;
