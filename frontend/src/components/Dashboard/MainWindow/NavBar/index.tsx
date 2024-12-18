import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Page, setActivePage } from "..";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import Menu from "./elements/Menu";

export default function NavBar({
  activePage,
  setActivePage,
  pages,
}: {
  activePage: string;
  setActivePage: setActivePage;
  pages: Page[];
}): JSX.Element {
  const theme = useTheme();
  const isTitleVisible = useMediaQuery(theme.breakpoints.up("md"));
  const isHamburger = useMediaQuery(theme.breakpoints.only("xs"));

  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleMenu(value: boolean) {
    setIsOpen(value);
  }

  return (
    <>
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
          <img
            className="filter-white"
            alt="logo"
            src="logo.svg"
            width={"100px"}
            height={"97px"}
          />
          {isTitleVisible && (
            <Typography
              fontSize={"36px"}
              fontWeight={"900"}
              letterSpacing={"4px"}
            >
              afterglow
            </Typography>
          )}
        </Box>
        {!isHamburger && (
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
        )}
        {isHamburger && (
          <Box marginTop={6}>
            <IconButton color="primary" onClick={() => toggleMenu(true)}>
              {<FaBars />}
            </IconButton>
          </Box>
        )}
      </Box>
      <Menu
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        pages={pages}
        setActivePage={setActivePage}
      />
    </>
  );
}
