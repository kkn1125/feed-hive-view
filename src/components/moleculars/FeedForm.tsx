import BaseButton from "@atoms/BaseButton";
import { Paper, Stack, TextField, useTheme } from "@mui/material";

interface FeedFormProps {
  isUser?: boolean;
  actionName: string;
}
const FeedForm: React.FC<FeedFormProps> = ({ isUser = false, actionName }) => {
  const placeholder = isUser
    ? "어떤 생각을 공유하고 싶나요?"
    : "로그인 후 피드를 작성할 수 있습니다.";
  const theme = useTheme();
  return (
    <Paper elevation={5}>
      <Stack
        flex={1}
        p={theme.typography.pxToRem(20)}
        gap={theme.typography.pxToRem(60)}
      >
        <Stack gap={1}>
          <TextField
            disabled={!isUser}
            variant="standard"
            size="small"
            type="text"
            multiline
            rows={5}
            autoFocus={isUser}
            focused={isUser}
            placeholder={placeholder}
            color="caption"
            slotProps={{
              htmlInput: {
                style: {
                  resize: isUser ? "block" : "none",
                },
              },
            }}
            sx={{
              p: 2,
              backgroundColor: "background.caption",
              borderRadius: 2,
              ["& .MuiInputBase-input.MuiInput-input:disabled"]: {
                cursor: "not-allowed",
                pointerEvents: "initial",
              },
              ["& .MuiInputBase-root.MuiInput-root"]: {
                p: 0,
                ["&::before,&:hover::before,&:focus::before"]: {
                  borderBottom: "none",
                },
                ["& .MuiInputBase-input"]: {
                  overflow: "auto",
                  "&::-webkit-scrollbar": {
                    width: 10,
                  },
                  "&::-webkit-scrollbar-track": {
                    background: "transparent",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    borderRadius: "10px",
                  },
                  "&::-webkit-scrollbar-corner": {
                    backgroundColor: "transparent",
                    width: 10,
                    height: 10,
                  },
                  "&::-webkit-scrollbar-resizer": {
                    display: "none",
                  },
                },
              },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 15,
                right: 15.3,
                width: 0,
                height: 0,
                pointerEvents: "none",
                borderRight: "10px solid #FDC644a6",
                borderBottom: "10px solid #FDC644a6",
                borderLeft: "10px solid transparent",
                borderTop: "10px solid transparent",
                // background: "linear-gradient(135deg, #F89A1C 0%, #FDC644 100%)", // ✅ 코너 디자인 추가
                borderRadius: 1,
                zIndex: 1,
              },
            }}
          />
          <Stack direction="row" justifyContent="flex-end">
            <BaseButton
              variant="contained"
              color="brand"
              label={actionName}
              disabled={!isUser}
              sx={{
                ["&:disabled"]: {
                  cursor: "not-allowed",
                  pointerEvents: "initial",
                },
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default FeedForm;
