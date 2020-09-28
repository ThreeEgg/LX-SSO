import React, { Component } from 'react'
import styles from './LoginInfo.less'
class LoginInfo extends Component {

  state = {

  }

  render() {
    return (
      <div className={styles.LoginInfo}>
        <div className="title">最近登陆</div>
        <div className="loginDisplay">
          <div className="displayItem">
            <div className="itemTitle">
              <span></span>
              当前登录情况
            </div>
            <div className="info">
              <div className="ip">
                IP: 198.0.0.1
              </div>
              <div className="city">
                地区: 我的世界
              </div>
            </div>
          </div>
          <div className="displayItem">
            <div className="itemTitle">
              <span></span>
              上次登录情况(2022-07-18 13:29)
            </div>
            <div className="info">
              <div className="ip">
                IP: 198.9.116.10
              </div>
              <div className="city">
                地区: 三亚
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginInfo
