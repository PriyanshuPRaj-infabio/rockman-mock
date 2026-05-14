// src/App.jsx

import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCards from "./components/ProductCards";
import Section from "./components/Section";
import Accreditation from "./components/Accreditation";
import Clientele from "./components/Clientele";
import Legacy from "./components/Legacy";
import CSR from "./components/CSR";
import Footer from "./components/Footer";

import SmoothScroll from "./components/SmoothScroll";
import ScrollDots from "./components/ScrollDots";

export default function App() {
  return (
    <>
      <SmoothScroll />

      <ScrollDots />

      <Header />

      <Hero />

      <ProductCards />

      <Section
        title="A Hallmark Of Excellent Production System"
        text="Our infrastructure is built as per international standards, compliant with global quality systems, with strict adherence to quality practices established by leading regulatory bodies of quality manufacturing."
        isProductionSystem={true}
      />

      <Accreditation />

      <Clientele />

      <Legacy />

      <Section isPeopleLeadership={true} />

      <CSR />

      <Footer />
    </>
  );
}