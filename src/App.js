import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const Header = lazy(() => import("./components/Header"));
const Body = lazy(() => import("./components/Body"));
const Footer = lazy(() => import("./components/Footer"));
const About = lazy(() => import("./components/About"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const ErrorPage = lazy(() => import("./components/ErrorPage"));
const RestaurentMenu = lazy(() => import("./components/RestaurentMenu"));
// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On demand loading

const AppLayout = () => {
  return (
    <div className="app">
      <Suspense fallback={<h2>Loading Header...</h2>}>
        <Header />
      </Suspense>

      <Outlet />

      <Suspense fallback={<h2>Loading Footer...</h2>}>
        <Footer />
      </Suspense>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h2>Loading Body...</h2>}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h2>Loading About...</h2>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h2>Loading Contact...</h2>}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "/restaurent/:resId",
        element: (
          <Suspense fallback={<h2>Loading Restaurant Menu...</h2>}>
            <RestaurentMenu />
          </Suspense>
        ),
      },
    ],
    errorElement: (
      <Suspense fallback={<h2>Loading Error Page...</h2>}>
        <ErrorPage />
      </Suspense>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
