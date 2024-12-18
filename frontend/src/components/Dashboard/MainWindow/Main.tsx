import { Box } from "@mui/material";
import { ReactNode } from "react";

export default function Main({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <Box
      padding={{ sm: 5, md: 6 }}
      paddingInlineStart={{ lg: 12 }}
      paddingInlineEnd={{ lg: 12 }}
      minHeight={{ sm: "calc(100vh - 220px)", lg: "calc(100vh - 240px)" }}
    >
      {children}
    </Box>
  );
}
