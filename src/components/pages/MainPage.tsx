import HiveDecoration from "@atoms/HiveDecoration";
import { Stack, useTheme } from "@mui/material";
import FeedListSection from "@organisms/FeedListSection";
import FeedUploadSection from "@organisms/FeedUploadSection";
import MainSection from "@organisms/MainSection";
import { DATETIME_FORMAT } from "@utils/constant";
import { krFaker } from "@utils/krFaker";
import dayjs from "dayjs";

const mockFeeds = [
  {
    id: 1,
    content: krFaker.lorem.sentence(25),
    author: krFaker.person.fullName(),
    created_at: dayjs(krFaker.date.recent()).format(DATETIME_FORMAT),
    updated_at: dayjs(krFaker.date.recent()).format(DATETIME_FORMAT),
  },
  {
    id: 2,
    content: krFaker.lorem.sentence(25),
    author: krFaker.person.fullName(),
    created_at: dayjs(krFaker.date.recent()).format(DATETIME_FORMAT),
    updated_at: dayjs(krFaker.date.recent()).format(DATETIME_FORMAT),
  },
  {
    id: 3,
    content: krFaker.lorem.sentence(25),
    author: krFaker.person.fullName(),
    created_at: dayjs(krFaker.date.recent()).format(DATETIME_FORMAT),
    updated_at: dayjs(krFaker.date.recent()).format(DATETIME_FORMAT),
  },
  {
    id: 4,
    content: krFaker.lorem.sentence(25),
    author: krFaker.person.fullName(),
    created_at: dayjs(krFaker.date.recent()).format(DATETIME_FORMAT),
    updated_at: dayjs(krFaker.date.recent()).format(DATETIME_FORMAT),
  },
] as Feed[];

interface MainPageProps {}
const MainPage: React.FC<MainPageProps> = () => {
  const theme = useTheme();
  return (
    <Stack gap={theme.typography.pxToRem(50)}>
      <HiveDecoration
        size={900}
        rotate={-15}
        sx={{
          position: "absolute",
          top: -390,
          left: 180,
          zIndex: -1,
        }}
      />
      <HiveDecoration
        size={280}
        rotate={5}
        sx={{
          position: "absolute",
          top: 100,
          left: 50,
          zIndex: -2,
        }}
      />
      <MainSection />
      <FeedUploadSection />
      <FeedListSection feeds={mockFeeds} />
    </Stack>
  );
};

export default MainPage;
