import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/footer";
import Final from "@/components/organisms/final";
import Home from "@/pages/Home";
import AboutUsPage from "@/pages/AboutUs";
import ContactUsPage from "@/pages/ContactUs";
import ServicesPage from "@/pages/Services";
import TeamMemberProfile from "@/pages/TeamMember";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/team/:slug" element={<TeamMemberProfile />} />
        <Route path="/case-studies" element={<Navigate to="/#case-studies" replace />} />
        <Route path="/testimonials" element={<Navigate to="/#testimonials" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Final />
      <Footer />
    </>
  );
}
