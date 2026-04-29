import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import BusinessActivitiesPage from "./pages/BusinessActivitiesPage";
import ClientsPage from "./pages/ClientsPage";
import ContactPage from "./pages/ContactPage";
import DownloadsPage from "./pages/DownloadsPage";
import FaqPage from "./pages/FaqPage";
import FinancialPerformancePage from "./pages/FinancialPerformancePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NetworkPage from "./pages/NetworkPage";
import ServicesPage from "./pages/ServicesPage";
import TimelinePage from "./pages/TimelinePage";

const rootRoute = createRootRoute({ component: Layout });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});
const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});
const businessRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/business-activities",
  component: BusinessActivitiesPage,
});
const financialRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/financial-performance",
  component: FinancialPerformancePage,
});
const networkRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/network",
  component: NetworkPage,
});
const timelineRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/timeline",
  component: TimelinePage,
});
const clientsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/clients",
  component: ClientsPage,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});
const downloadsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/downloads",
  component: DownloadsPage,
});
const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faq",
  component: FaqPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  servicesRoute,
  businessRoute,
  financialRoute,
  networkRoute,
  timelineRoute,
  clientsRoute,
  contactRoute,
  loginRoute,
  downloadsRoute,
  faqRoute,
]);

const router = createRouter({ routeTree, scrollRestoration: true });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
