import FeedForm from "@moleculars/FeedForm";
import { Stack, useMediaQuery } from "@mui/material";

interface FeedUploadSectionProps {}
const FeedUploadSection: React.FC<FeedUploadSectionProps> = () => {
  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <Stack mx={(theme) => theme.typography.pxToRem(isMdUp ? 72 : 20)}>
      <FeedForm actionName="피드 올리기" />
    </Stack>
  );
};

export default FeedUploadSection;
