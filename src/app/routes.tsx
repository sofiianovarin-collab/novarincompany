import { Route, Routes } from "react-router-dom";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { ApproachPage } from "../pages/ApproachPage";
import { HomePage } from "../pages/HomePage";
import { InvestmentFocusPage } from "../pages/InvestmentFocusPage";
import { LeadershipPage } from "../pages/LeadershipPage";
import { PerspectivesPage } from "../pages/PerspectivesPage";
import { PrivacyPage } from "../pages/PrivacyPage";
import { TermsPage } from "../pages/TermsPage";
import { RouteEntrance } from "./RouteEntrance";
import { ScrollManager } from "./ScrollManager";

export function AppRoutes() {
  return (
    <>
      <ScrollManager />
      <RouteEntrance />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/investment-focus" element={<InvestmentFocusPage />} />
        <Route path="/approach" element={<ApproachPage />} />
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/perspectives" element={<PerspectivesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
      <SiteFooter />
    </>
  );
}
