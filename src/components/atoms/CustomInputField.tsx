import {
  FormControl,
  FormLabel,
  Stack,
  styled,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { useId } from "react";

const CustomInputField = styled(({ label, ...props }: TextFieldProps) => {
  const id = useId();

  return (
    <Stack component={FormControl} gap={1}>
      <Typography
        component={FormLabel}
        fontWeight={700}
        htmlFor={id}
        sx={{ userSelect: "none" }}
      >
        {label}
      </Typography>
      <TextField id={id} {...props} />
    </Stack>
  );
})();

export default CustomInputField;
