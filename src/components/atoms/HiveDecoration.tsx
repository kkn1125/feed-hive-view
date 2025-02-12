import { Box, SxProps, Theme } from "@mui/material";
import { HIVE_DECO } from "@utils/constant";

interface HiveDecorationProps {
  rotate?: number;
  size?: number;
  gradientDeg?: number;
  guideline?: boolean;
  sx?: SxProps<Theme>;
}
const HiveDecoration: React.FC<HiveDecorationProps> = ({
  rotate = 0,
  size = 200,
  gradientDeg = 125,
  guideline = false,
  sx,
  ...props
}) => {
  const guideLineWidth = 0;
  return (
    <Box
      {...props}
      sx={{
        width: (theme) =>
          theme.typography.pxToRem(size) /* 컨테이너에 맞게 자동 조정 */,
        height: "auto",
        aspectRatio: 1 /* 정비율 유지 */,
        background: `linear-gradient(${gradientDeg}deg, #F89A1C 30%, #FDC644 90%)`,
        WebkitMaskImage: `url('${HIVE_DECO}')`,
        maskImage: `url('${HIVE_DECO}')`,
        maskSize: "fit",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskSize: "fit",
        rotate: `${rotate}deg`,
        position: "relative",
        ...(guideline && {
          ["&::before"]: {
            content: '""',
            position: "absolute",
            width: guideLineWidth,
            height: "100%",
            top: `calc(50% - 100% / 2)`,
            left: `calc(50% - ${guideLineWidth / 2}px)`,
            transform: `translate(-calc(50% - ${
              guideLineWidth / 2
            }px), -calc(50% - 100% / 2))`,
            borderLeft: "1px solid #ff00f056",
            rotate: `${180 + gradientDeg}deg`,
          },
        }),
        ...sx,
      }}
    />
  );
};

export default HiveDecoration;
