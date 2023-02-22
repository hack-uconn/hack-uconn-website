import React from "react";
import AboutPage from "./pages/AboutPage/AboutPage";
import FAQPage from "./pages/FAQPage/FAQPage";
import HomePage from "./pages/HomePage/HomePage";
import PastProjectsPage from "./pages/PastProjectsPage/PastProjectsPage";
import MentorPage from "./pages/MentorPage/MentorPage";
import TestimonialsPage from "./pages/TestimonialsPage/TestimonialsPage";
import SponsorsPage from "./pages/SponsorsPage/SponsorsPage";

import { Routes, Route } from "react-router-dom";
import NavbarPage from "./pages/NavbarPage/NavbarPage";
import PseudoRoot from "./components/PseudoRoot/PseudoRoot";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PseudoRoot />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/past-projects" component={PastProjectsPage} />
        <Route path="/mentor" element={<MentorPage />} />
        <Route path="/testimonials" component={TestimonialsPage} />
        <Route path="/sponors" component={SponsorsPage} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
