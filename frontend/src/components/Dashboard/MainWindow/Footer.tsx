import { Box, Typography, Link } from "@mui/material";

export default function Footer(): JSX.Element {
  return (
    <Box
      display="flex"
      justifyContent={{ xs: "center", lg: "end" }}
      alignItems="center"
      height="60px"
      px={3}
    >
      <Typography variant="body2" fontSize={{ xs: "0.75rem", md: "0.875rem" }}>
        Created by
        <Link
          href="https://github.com/OmkarS-22"
          target="_blank"
          rel="noopener"
          underline="hover"
          ml={0.5}
        >
          Omkar Sathe
        </Link>
      </Typography>
    </Box>
  );
}
