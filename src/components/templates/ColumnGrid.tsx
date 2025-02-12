import { Box } from "@mui/material";

interface ColumnGridProps {}
const ColumnGrid: React.FC<ColumnGridProps> = () => {
  return (
    <Box
      sx={(theme) => ({
        pointerEvents: "none",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "inherit",
        display: "grid",
        gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
        gap: theme.typography.pxToRem(24), // 기존 `24px` → MUI `spacing(3)`으로 조정
        mx: theme.typography.pxToRem(72), // 72px → theme.spacing 사용
        // [theme.breakpoints.down("md")]: { mx: theme.spacing(6) }, // 1024px 이하
        // [theme.breakpoints.down("sm")]: { mx: theme.spacing(3) }, // 600px 이하
      })}
    >
      {Array.from({ length: 12 }).map((_, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: "#ff00000c",
          }}
        />
      ))}
    </Box>
  );
};

export default ColumnGrid;
