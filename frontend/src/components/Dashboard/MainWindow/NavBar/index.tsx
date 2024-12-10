import { Box, Typography } from "@mui/material";
import { Page } from "..";

type setActivePage = React.Dispatch<React.SetStateAction<string>>;

export default function NavBar({
  activePage,
  setActivePage,
  pages,
}: {
  activePage: string;
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
      height={{ sm: "60px", lg: "80px" }}
      position="sticky"
      zIndex={2}
      top="0px"
    >
      <Box marginTop={6} display={"flex"} alignItems={"center"} gap={4}>
        <img className="filter-white" alt="logo" src="logo.svg" width={"100px"} height={"97px"} />
        <Typography fontSize={"36px"} fontWeight={"900"} letterSpacing={"2px"}>
          afterglow
        </Typography>
      </Box>
      <Box display={"flex"} gap={4} marginTop={6}>
        {pages.map((page: Page, index: number) => (
          <Typography
            key={index}
            //fontSize={"14px"}
            fontWeight={"700"}
            letterSpacing={"1px"}
            textTransform={"lowercase"}
            onClick={() => setActivePage(page.name)}
            color={page.name !== activePage ? "#B0B0B0" : "default"}
            sx={{ cursor: "pointer" }}
          >
            {page.name}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
