import React from "react";
import { TopNavBar } from "../../components/navbar/TopNavBar";
import { Contact } from "../../components/contact/Contact";

import { Footer } from "../../components/sections/footer/Footer";

export const DefaultLayout = ({ children }) => {
  return (
    <div>
      <TopNavBar />
      {children}
      <Contact />
      <Footer />
    </div>
  );
};
