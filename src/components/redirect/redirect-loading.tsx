import { Box, Typography, CircularProgress } from '@mui/material';

export default function Redirect() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      p={3}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
      >
        Redirecting...
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ maxWidth: 300 }}
      >
        Please wait a moment while we securely log you in.
      </Typography>

      <CircularProgress sx={{ mt: 3 }} />
    </Box>
  );
}
