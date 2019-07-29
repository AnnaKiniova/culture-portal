import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import { Layout, Row, Col } from 'antd';

import '../styles/layout.css';

const Layer = ({ children, path }) => {
  const { Footer } = Layout;
  return (
  <div>
    <Header path={path} />
    <main>{children}</main>
    <Footer style={{ textAlign: 'center' }}>
      <div>Разработчики</div>
      <Row className="developers">
        <Col span={4}><a href='https://github.com/eugenio7779' rel="noopener noreferrer" target='_blank'>eugenio7779</a></Col>
        <Col span={4}><a href='https://github.com/georgpandeh' rel="noopener noreferrer" target='_blank'>georgpandeh</a></Col>
        <Col span={4}><a href='https://github.com/venul' rel="noopener noreferrer" target='_blank'>venul</a></Col>
        <Col span={4}><a href='https://github.com/moiseenokv' rel="noopener noreferrer" target='_blank'>moiseenokv</a></Col>
        <Col span={4}><a href='https://github.com/annakiniova' rel="noopener noreferrer" target='_blank'>annakiniova</a></Col>
        <Col span={4}><a href='https://github.com/yevgeniyaa' rel="noopener noreferrer" target='_blank'>yevgeniyaa</a></Col>
      </Row>
    </Footer>
  </div>
  )
}

Layer.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string,
};

export default Layer;
