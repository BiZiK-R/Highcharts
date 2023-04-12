import React from 'react';
import LayoutPage from '@src/components/layouts/layout-page';
import HeaderContainer from '@src/containers/header-container';

function Main() {

  return (
    <LayoutPage
      header={
        <HeaderContainer />
      }
    >
      Главная
    </LayoutPage>
  );
}

export default React.memo(Main);
