import { Outlet, ScrollRestoration, useMatches } from "react-router";
import Header from "../common/Header";
import Footer from "../common/Footer";
import BackgroundUi from "../common/BackgroundUi";

const RootLayout = () => {
  const matches = useMatches();
  const hideFooter = matches.some((match) => match.handle?.hideFooter);

  return (
    <section id="root">
      <Header />
      <ScrollRestoration />
      <main id="content" className="z-10 relative">
        <Outlet />
      </main>
      <BackgroundUi />
      {!hideFooter && <Footer />}
    </section>
  );
};

export default RootLayout;

// ----------------------------------------------------------------------------
// useNavigate : navigates to a route
// useParams : u can get a value of route (like value of /courseId route)
// useLocation : getting all the route path in one
// useMatches : having route sections seperate in array.
// u can also use useMatches for breadcrumbs.
