import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export default function Login(): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
          <form
            onSubmit={(event) => {
              event.preventDefault();
              console.log("submitted");
            }}
          >
            <Stack spacing={4}>
              <Typography variant="h2" color="primary" mb={2}>
                Welcome back!
              </Typography>
              <Typography variant="body2" color="#B0B0B0">
                Enter your email and password to sign in
              </Typography>
              <Stack spacing={4}>
                <TextField variant="outlined" label="Email" name="email" />
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword
                              ? "hide the password"
                              : "display the password"
                          }
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                          sx={{ color: "white" }}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Stack>
            </Stack>
            <Box display={"flex"} justifyContent={"end"}>
              <Button
                type="submit"
                variant="contained"
                sx={{ marginY: "1rem" }}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
