import About from "../Pages/About";
import Home from "../Pages/Home";
import Footer from "./Footer";
import Main from "./Main";
import NavBar from "./NavBar";

export type setActivePage = React.Dispatch<React.SetStateAction<string>>;

export type Page = {
  name: string;
  element: JSX.Element;
  appBar: boolean;
};

function MainWindow({
  activePage,
  setActivePage,
}: {
  activePage: string;
  setActivePage: setActivePage;
}): JSX.Element {
  const page: Page[] = [
    {
      name: "Home",
      element: <Home />,
      appBar: true,
    },
    {
      name: "About",
      element: <About />,
      appBar: true,
    },
  ];

  const currentPage = () => {
    const currentPage = page.find((p) => p.name === activePage);
    if (currentPage) {
      return <>{currentPage.element}</>;
    }
  };

  return (
    <>
      <NavBar activePage={activePage} setActivePage={setActivePage} pages={page} />
      <Main>{currentPage()}</Main>
      <Footer />
    </>
  );
}

export default MainWindow;
