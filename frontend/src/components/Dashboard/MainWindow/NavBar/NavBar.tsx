import { Box, Typography } from "@mui/material";
import { Page } from "..";

type setActivePage = React.Dispatch<React.SetStateAction<string>>;

export default function NavBar({
  setActivePage,
  pages,
}: {
  setActivePage: setActivePage;
  pages: Page[];
}): JSX.Element {
  return (
    <Box
      display={"flex"}
      alignItems="center"
      justifyContent="space-between"
      paddingInlineStart={6}
      paddingInlineEnd={6}
      height={{ base: "60px", lg: "80px" }}
      position="sticky"
      zIndex={2}
      top="0px"
      color={"white"}
    >
      <Box marginTop={6}>
        <img alt="logo" src="logo.svg" width={"100px"} height={"97px"} />
      </Box>
      <Box display={"flex"} gap={4}>
        {pages.map((page: Page, index: number) => (
          <Typography
            key={index}
            textTransform={"lowercase"}
            onClick={() => setActivePage(page.name)}
          >
            {page.name}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
