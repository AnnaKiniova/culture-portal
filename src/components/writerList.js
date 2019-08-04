import React from 'react';
import { Divider, Col, Row } from 'antd';
import PropTypes from 'prop-types';

import '../styles/writers.css';
import WriterPreview from './writerPreview';

const WriterList = ({ t, writers, colAmount = 4 }) => {
  const col = [];// подмассив в котором будут массивы по colAmount элемента.
  let i = 0;
  while (i < writers.length) {
    col.push(writers.slice(i, i += colAmount));
  }

  return (
    <div className="writers-list">
      {col.map((items, i) => (
        <div key={i}>
          <Row gutter={16}>
            {items.map((item, j) => (
              <Col xs={24} sm={12} md={8} lg={6} key={j}>
                <WriterPreview {...item} t={t} />
                <Divider className="show-small author-devider"/>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
};

WriterList.propTypes = {
  t: PropTypes.func.isRequired,
  colAmount: PropTypes.number,
  writers: PropTypes.array.isRequired,
};

export default WriterList;
