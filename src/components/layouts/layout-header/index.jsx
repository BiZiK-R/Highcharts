import React from 'react';
import { Layout } from 'antd';
import './style.css';
import PropTypes from 'prop-types';

const { Header } = Layout;

function LayoutHeader(props) {

  return (
    <Header className='header'>
      {props.children}
    </Header>
  );
}

LayoutHeader.propTypes = {
  children: PropTypes.node,
};

export default React.memo(LayoutHeader);
