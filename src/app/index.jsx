import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Main from '@src/app/main';
import Page1 from '@src/app/page1';
import Page2 from '@src/app/page2';
import NotFound from '@src/app/not-found';
import HighchartsPage from '@src/app/highcharts';

function App() {
  return (
    <>
      <Helmet>
        <title>Example</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/highcharts" element={<HighchartsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default React.memo(App);
