import React, { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import useServices from '@src/utils/hooks/use-services';
import { Menu } from 'antd';
import LayoutHeader from '@src/components/layouts/layout-header';

function HeaderContainer() {
  const location = useLocation();
  const services = useServices();

  const items = [
    {
      label: 'Главная',
      key: '/',
    },
    {
      label: 'Страница 1',
      key: '/page1',
    },
    {
      label: 'Страница 2',
      key: '/page2',
    },
    {
      label: 'Highcharts',
      key: '/highcharts',
    },
  ];

  const callbacks = {
    onClick: useCallback((e) => {
      services.navigation.push(e.key);
    }, []),
  };

  return (
    <LayoutHeader>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={items}
        onClick={callbacks.onClick}
      />
    </LayoutHeader>
  );
}

export default React.memo(HeaderContainer);
