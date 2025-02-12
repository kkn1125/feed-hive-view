import GuestForm from "@moleculars/GuestForm";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

interface MainSectionProps {
  isUser?: boolean;
}
const MainSection: React.FC<MainSectionProps> = ({ isUser = false }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <Stack
      direction={{ md: "row", xs: "column" }}
      alignItems={{ md: "flex-start", xs: "center" }}
      justifyContent={{ md: "center", xs: "flex-start" }}
      gap={theme.typography.pxToRem(50)}
      mx={theme.typography.pxToRem(isMdUp ? 72 : 5)}
    >
      <Stack
        flex={1}
        alignItems={isUser ? "center" : "space-between"}
        gap={theme.typography.pxToRem(14)}
        py={isMdUp ? 3 : 0}
        pl={isMdUp ? 8 : 0}
      >
        <Typography
          fontSize={`clamp(calc(${theme.typography.pxToRem(
            64
          )} / 1.5), 5vw, ${theme.typography.pxToRem(64)})`}
          fontWeight={700}
          align={!isMdUp || isUser ? "center" : "left"}
          sx={{
            wordBreak: "auto-phrase",
            whiteSpace: !isMdUp || isUser ? "inherit" : "pre",
          }}
        >
          {"나만의 피드,\n모두의 인사이트"}
        </Typography>
        <Typography
          variant="h3"
          fontWeight={900}
          align={!isMdUp || isUser ? "center" : "left"}
          sx={{
            wordBreak: "auto-phrase",
            whiteSpace: !isMdUp || isUser ? "inherit" : "pre",
          }}
        >
          {
            "FeedHive에서 취향에 맞는 콘텐츠를 구독하고,\n새로운 시각을 넓혀보세요."
          }
        </Typography>
      </Stack>
      {!isUser && <GuestForm />}
    </Stack>
  );
};

export default MainSection;
