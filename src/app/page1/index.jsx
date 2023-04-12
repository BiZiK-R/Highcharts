import React from 'react';
import LayoutPage from '@src/components/layouts/layout-page';
import HeaderContainer from '@src/containers/header-container';

function Page1() {

  return (
    <LayoutPage
      header={
        <HeaderContainer />
      }
    >
      Страница 1
    </LayoutPage>
  );
}

export default React.memo(Page1);
