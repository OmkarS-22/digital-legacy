import {
  Box,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function Login(): JSX.Element {
  return (
    <Box
      display={"flex"}
      minHeight={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ position: "relative", overflow: "hidden" }}
    >
      <Box sx={{ position: "fixed", top: 60, right: 0 }}>
        <img
          alt="astronaut"
          src="/img/astronaut.svg"
          style={{ height: "50%", width: "50%" }}
        />
      </Box>
      <Container maxWidth={"sm"}>
        <Paper
          elevation={8}
          sx={{
            backgroundColor: "#2e2e3e",
            padding: { xs: "2rem 1rem", sm: 8 },
          }}
        >
          <form>
            <Stack spacing={2}>
              <Typography variant="h2" color="primary" mb={2}>
                Welcome back!
              </Typography>
              <Typography variant="body2" color="#B0B0B0">
                Enter your email and password to sign in
              </Typography>
              <Stack spacing={4}>
                <TextField variant="outlined" label="Email" name="email" />
                <TextField
                  variant="outlined"
                  label="Password"
                  name="password"
                  type="password"
                />
              </Stack>
            </Stack>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
