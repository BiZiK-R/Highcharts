import React from 'react';
import { Layout } from 'antd';
import './style.css';
import PropTypes from 'prop-types';

const { Content } = Layout;

function LayoutPage(props) {

  return (
    <Layout className="layout">
      {props.header}
      <Content className='content'>
        <div className="site-layout-content">
          {props.children || props.content}
        </div>
      </Content>
      {props.footer}
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
