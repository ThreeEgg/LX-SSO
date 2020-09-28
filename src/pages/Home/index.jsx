import React, { Component } from 'react'
import { Row, Col } from 'antd';
import styles from './index.less'
import { BaseInfo, LoginInfo, ServicesList } from './components'

class Home extends Component {

  colAdapt = (xs, sm, md, lg, xl, xxl) => {
    return {
      xs, sm, md, lg, xl, xxl
    }
  }

  render() {
    return (
      <div className={styles.Home}>
        <Row gutter={[20, 20]}>
          <Col span={19}>
            <BaseInfo></BaseInfo>
          </Col>
          <Col span={5}>
            <LoginInfo></LoginInfo>
          </Col>
          <Col span={19}>
            <ServicesList></ServicesList>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home
