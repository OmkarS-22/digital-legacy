import { List, ListItem, ListItemButton, SwipeableDrawer } from "@mui/material";
import { Page, setActivePage } from "../..";

interface MenuProps {
  isOpen: boolean;
  toggleMenu: (value: boolean) => void;
  pages: Page[];
  setActivePage: setActivePage;
}

export default function Menu({
  isOpen,
  toggleMenu,
  pages,
  setActivePage,
}: MenuProps): JSX.Element {
  return (
    <SwipeableDrawer
      open={isOpen}
      onOpen={() => toggleMenu(true)}
      onClose={() => toggleMenu(false)}
      anchor="right"
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "#000000",
          paddingY: 6,
        },
      }}
    >
      <List>
        {pages.map((item: Page, index: number) => (
          <ListItem key={index}>
            <ListItemButton
              key={item.name}
              onClick={() => {
                setActivePage(item.name);
                toggleMenu(false);
              }}
            >
              {item.icon}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  );
}
