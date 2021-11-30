import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import Sponsors from 'sections/Sponsors';

import TestimonialCard from '../sections/testimonial';
import BlogSection from '../sections/blog-section';
import Subscribe from '../sections/subscribe';
import OurTeam from 'sections/our-team';
import Clients from 'sections/Clients';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Startup Landing 005" />
          <Banner />
          <KeyFeature />
          <ServiceSection />
          
          <CoreFeature />
          <WorkFlow />
          <OurTeam />
          <Clients/>
          <Sponsors />

          <TestimonialCard />
          <BlogSection />
          <Subscribe />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
