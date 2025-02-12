import {
  FormControl,
  FormLabel,
  Stack,
  styled,
  Switch,
  SwitchProps,
  Typography,
} from "@mui/material";
import { useId } from "react";

const CustomSwitch = styled(
  ({ label, ...props }: SwitchProps & { label?: string }) => {
    const id = useId();
    return (
      <Stack
        component={FormControl}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap={1}
      >
        {label && (
          <Typography
            component={FormLabel}
            fontWeight={700}
            htmlFor={id}
            sx={{
              userSelect: "none",
              ["&:active,&.Mui-focused"]: {
                color: (theme) => theme.palette.brand.main,
              },
            }}
          >
            {label}
          </Typography>
        )}
        <Switch id={id} color="brand" {...props} />
      </Stack>
    );
  },
  {
    shouldForwardProp(propName: string) {
      return ["label"].includes(propName);
    },
  }
)();

export default CustomSwitch;
