import React, { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import useServices from '@src/utils/hooks/use-services';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

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
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={items}
        onClick={callbacks.onClick}
      />
    </Header>
  );
}

export default React.memo(HeaderContainer);
