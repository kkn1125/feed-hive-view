import { Avatar, Stack } from "@mui/material";

interface ProfileProps {
  size?: number;
  src?: string;
  alt?: string;
}
const Profile: React.FC<ProfileProps> = ({ size = 35, src, alt }) => {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <Avatar
        src={src}
        alt={alt}
        sx={{
          width: size,
          height: size,
        }}
      />
    </Stack>
  );
};

export default Profile;
