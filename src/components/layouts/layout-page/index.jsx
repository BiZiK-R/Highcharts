import React from 'react';
import { Layout, theme } from 'antd';
import './style.css';
import PropTypes from 'prop-types';

const { Header, Content, Footer } = Layout;

function LayoutPage(props) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        {props.header}
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          {props.children || props.content}
        </div>
      </Content>
      {props.footer &&
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          {props.footer}
        </Footer>
      }
    </Layout>
  );
}

LayoutPage.propTypes = {
  header: PropTypes.node,
  content: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.node,
};

export default React.memo(LayoutPage);
