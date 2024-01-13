import React from "react";
import Navbar from "../navbar";
import { Box, } from "@chakra-ui/react";
import GetStartSection from "./get-start/get-start-section";
import DashboardImg from "./dashboard-img";
import TrustedByLeaders from "./trusted-leaders/trusted-leaders";
import ProductFeatures from "./product-features/product-features";
import ManyFeatures from "./many-features/many-features";
import OtherFeatures from "./other-features/other-features";
import MuchFeatures from "./much-features/much-features";
import WorkflowFeatures from "./workflow-features/workflow-features";
import Pricing from "./pricing/pricing";
import Testimonials from "./testimonials/testimonials";
import Faq from "./faq/faq";
import WaitList from "./waitlist/wait-list";
import Footer from "./footer";
import FixButton from "../core/home-page/fix-button";

const HomePage = () => {
  return (
    <Box >
      <Navbar />
      <FixButton />
      <GetStartSection />
      <DashboardImg />
      <TrustedByLeaders />
      <ProductFeatures />
      <ManyFeatures />
      <OtherFeatures />
      <MuchFeatures />
      <WorkflowFeatures />
      <Pricing />
      <Testimonials />
      <Faq />
      <WaitList />
      <Footer />
    </Box>
  );
};

export default HomePage;
