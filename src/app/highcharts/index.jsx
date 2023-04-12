import React, { useMemo } from 'react';
import LayoutPage from '@src/components/layouts/layout-page';
import HeaderContainer from '@src/containers/header-container';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import useInit from '@src/utils/hooks/use-init';
import useServices from '@src/utils/hooks/use-services';
import useSelector from '@src/utils/hooks/use-selector';
import { Spin } from 'antd';

function HighchartsPage() {
  const services = useServices();
  const select = useSelector((state) => ({
    wait: state.repos.wait,
    repos: state.repos.items,
  }));

  useInit(() => {
    services.store.repos.loadRepos('BiZiK-R');
  }, []);

  const options = useMemo(() => ({
    chart: {
      type: 'column',
    },
    xAxis: {
      type: 'category',
    },
    title: {
      text: 'BiZiK-R',
    },
    series: [
      {
        type: 'column',
        name: 'size',
        data: select.repos.map((el) => ({
          name: el.name,
          y: el.size,
        })),
      },
    ],
  }));

  return (
    <LayoutPage
      header={
        <HeaderContainer />
      }
    >
      <h1>Highcharts</h1>
      <Spin spinning={select.wait}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Spin>
    </LayoutPage>
  );
}

export default React.memo(HighchartsPage);
