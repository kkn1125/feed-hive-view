import BaseButton from "@atoms/BaseButton";
import FeedItem from "@moleculars/FeedItem";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

interface FeedListSectionProps {
  feeds: Feed[];
}
const FeedListSection: React.FC<FeedListSectionProps> = ({ feeds }) => {
  // const amount = 3;
  const theme = useTheme();
  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const navigate = useNavigate();
  const renderComponents = useMemo(() => {
    if (feeds.length === 0) {
      return <Typography fontWeight={500}>작성된 피드가 없습니다.</Typography>;
    }
    // const sliceByAmount = feeds.reduce<Feed[][]>((acc, feed) => {
    //   const lastArray = acc[acc.length - 1];
    //   if (lastArray && lastArray.length < amount) {
    //     lastArray.push(feed);
    //   } else {
    //     acc.push([feed]);
    //   }
    //   return acc;
    // }, []);
    // return sliceByAmount.map((row) =>
    //   row.map((feed) => <FeedItem key={feed.id} feed={feed} />)
    // );
    return feeds.map((feed) => <FeedItem key={feed.id} feed={feed} />);
  }, [feeds]);

  function handleViewFeed() {
    navigate("/feeds");
  }

  return (
    <Stack mx={theme.typography.pxToRem(isMdUp ? 72 : 20)}>
      <Stack direction="row" gap={2} alignItems="center">
        <Typography
          color="brand"
          fontSize={theme.typography.h3.fontSize}
          fontWeight={900}
        >
          새 피드
        </Typography>
        <BaseButton
          color="caption"
          label="+ 더보기"
          // fontSize={theme.typography.caption.fontSize}
          // fontWeight={700}
          onClick={handleViewFeed}
        />
      </Stack>
      <Box
        py={2}
        sx={{
          display: "grid",
          gridTemplateColumns: {
            md: "repeat(3, 1fr)",
            sm: "repeat(2, 1fr)",
            xs: "repeat(1, 1fr)",
          },
          rowGap: theme.typography.pxToRem(24),
          columnGap: theme.typography.pxToRem(24),
        }}
      >
        {renderComponents}
      </Box>
    </Stack>
  );
};

export default FeedListSection;
