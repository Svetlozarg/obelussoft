import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Home from '../sections/home';
import KeyFeature from '../sections/key-feature';
import Services from '../sections/services';
import Expertise from '../sections/expertise';
import AboutUs from '../sections/about-us';
import Approach from '../sections/approach';
import Package from '../sections/package';
import Technologies from '../sections/technologies';
import Testimonials from '../sections/testimonials';
import Portfolio from '../sections/portfolio';
import Subscribe from '../sections/subscribe';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title='ObelusSoft' />
          <Home />
          <AboutUs />
          {/* <KeyFeature /> */}
          <Services />
          <Expertise />
          <Approach />
          {/* <Package /> */}
          <Technologies />
          <Testimonials />
          <Portfolio />
          <Subscribe />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
