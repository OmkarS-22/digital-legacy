import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4C8CBE", // Soft blue for buttons, links, etc.
      contrastText: "#FFFFFF", // Text on primary color
    },
    secondary: {
      main: "#A1A1A1", // Muted gray
      contrastText: "#000000", // Text on secondary color
    },
    background: {
      default: "#F9F9F9", // Overall background
      paper: "#FFFFFF", // Cards or modals
    },
    text: {
      primary: "#E8E8E8", // Main text
      secondary: "#B0B0B0", // Subdued text
    },
  },
  typography: {
    allVariants: {
      color: "#E8E8E8"
    },
    fontFamily: '"Roboto", "Open Sans", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem", // Headlines
      fontWeight: 500,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem", // Regular body text
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem", // Smaller text
      lineHeight: 1.5,
    },
    button: {
      textTransform: "none", // Avoid all-uppercase buttons
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8, // Softer rounded corners for cards, buttons
  },
});

export default theme;
