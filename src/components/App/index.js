import React from "react";
import { ScreenClassProvider } from "react-grid-system";

import Header from "../Header";
import MainSection from "../MainSection";
import Cta from "../CTA";
import Footer from "../Footer";

function App() {
  return (
    <div className="app">
      <ScreenClassProvider>
        <Header />
        <MainSection />
        <Cta />
        <Footer />
      </ScreenClassProvider>
    </div>
  );
}

export default App;
