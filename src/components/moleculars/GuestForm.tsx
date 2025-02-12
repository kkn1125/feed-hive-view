import BaseButton from "@atoms/BaseButton";
import CustomInputField from "@atoms/CustomInputField";
import CustomSwitch from "@atoms/CustomSwitch";
import { Paper, Stack, useTheme } from "@mui/material";

interface GuestFormProps {}
const GuestForm: React.FC<GuestFormProps> = () => {
  const theme = useTheme();
  return (
    <Paper elevation={10}>
      <Stack
        maxWidth={theme.typography.pxToRem(460)}
        width="80vw"
        justifyContent="space-between"
        p={theme.typography.pxToRem(20)}
        gap={theme.typography.pxToRem(60)}
      >
        <Stack gap={theme.typography.pxToRem(10)}>
          <CustomInputField
            variant="outlined"
            size="small"
            label="아이디"
            type="text"
            autoFocus
            focused
            placeholder="입력"
            color="caption"
          />
          <CustomInputField
            variant="outlined"
            size="small"
            label="비밀번호"
            type="password"
            focused
            placeholder="********"
            color="caption"
          />
          <CustomSwitch label="로그인 기억하기" />
        </Stack>
        <Stack gap={theme.typography.pxToRem(10)}>
          <BaseButton
            size="large"
            variant="contained"
            color="brand"
            label="로그인하기"
          />
          <BaseButton
            size="large"
            variant="contained"
            color="caption"
            label="계정이 없어요"
          />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default GuestForm;
