import { Box, Button, Typography } from "@mui/material";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { setActivePage } from "../MainWindow";

export default function Home({
  setActivePage,
}: {
  setActivePage: setActivePage;
}): JSX.Element {
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
      height={{ xs: "100vh", sm: "80vh", lg: "76vh" }}
      display={"flex"}
      justifyContent={"end"}
      alignItems={"center"}
    >
      <Box textAlign={"right"}>
        <Typography
          textAlign={"end"}
          fontSize={{ xs: "40px", md: "80px" }}
          letterSpacing={"5px"}
          fontWeight={300}
          sx={{ lineHeight: 1.2 }}
        >
          Don't let anything be left
          <Typography
            marginTop={{ md: -4 }}
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
          mt={{ md: -4 }}
        >
          Leave behind what matters most, and let it reach those who
          <Typography fontSize={{ xs: "16px", md: "24px" }} color={"#676666"}>
            need to hear it.
          </Typography>
        </Typography>
        <Box display={"flex"} justifyContent={"end"} gap={2} mt={4}>
          <Button variant="contained">Save Your Light</Button>
          <Button
            endIcon={<FaArrowUpRightFromSquare />}
            onClick={() => setActivePage("About")}
          >
            Know More
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
