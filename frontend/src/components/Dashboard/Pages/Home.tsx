import { Box, Typography } from "@mui/material"

export default function Home(): JSX.Element {
  return (
    <Box
      sx={{
        backgroundImage: `
          radial-gradient(circle, rgba(0,0,0,0) 40%, #000 90%), 
          url(/img/bg.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      width={{ xs: "auto", md: "90vw" }}
      height={{ xs: "100vh", md: "76vh" }}
      display={"flex"}
      justifyContent={"end"}
      alignItems={"center"}
    >
      <Box
        textAlign={"right"}
      >
        <Typography
          textAlign={"end"}
          fontSize={{ xs: "40px", md: "80px" }}
          letterSpacing={"5px"}
          fontWeight={300}
          sx={{ lineHeight: 1.2 }}
        >
          Don't let anything be left
          <Typography
            marginTop={-4}
            fontSize={{ xs: "40px", md: "80px" }}
            letterSpacing={"5px"}
            fontWeight={800}
            sx={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
          >
            unsaid.
          </Typography>
        </Typography>
        <Typography
          fontSize={{ xs: "16px", md: "24px" }}
          color={"#676666"}
          mt={-4}
        >
          Leave behind what matters most, and let it reach those who
          <Typography
            fontSize={{ xs: "16px", md: "24px" }}
            color={"#676666"}
          >
            need to hear it.
          </Typography>
        </Typography>
      </Box>
    </Box>
  )
}
