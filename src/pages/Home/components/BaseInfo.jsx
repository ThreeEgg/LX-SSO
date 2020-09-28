import React, { Component } from 'react'
import { Avatar, Row, Col } from 'antd'
import { connect } from 'umi';

import styles from './BaseInfo.less'

class BaseInfo extends Component {
  render() {
    const {
      currentUser = {
        avatar: '',
        name: '',
      },
    } = this.props;
    console.log('currentUser', currentUser)
    return (
      <div className={styles.BaseInfo}>
        <div className="content-top">
          <div className="avatarBox">
            <Avatar size={64} className={styles.avatar} src={currentUser.avatar} alt="avatar"></Avatar>
            <div className="userInfo">
              {currentUser.userid || '暂无'}
            </div>
          </div>
        </div>
        <Row className="content-btm">
          <Col span={8} className="infoItem">
            <p>姓名:</p>
            <p>{currentUser.name || '暂无'}</p>
          </Col>
          <Col span={8} className="infoItem">
            <p>手机号:</p>
            <p>{currentUser.phone || '暂无'}</p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(BaseInfo);
