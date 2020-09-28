import React, { Component } from 'react';
import { Avatar, Button } from 'antd'
import styles from './Services.less';

class ServicesItem extends Component {
  render() {
    const { propsItem } = this.props;
    return (
      <div className={styles.ServicesItem}>
        <div className="content-top">
          <div className="avatarBox">
            <Avatar size={40} src={propsItem.image}></Avatar>
            <span className="itemTitle">{propsItem.name || '暂无'}</span>
          </div>
          <div className="btnBox">
            <Button type="primary">进入</Button>
          </div>
        </div>
        <div className="content-btm">
          {propsItem.desc}
        </div>
      </div>
    )
  }
}

export default ServicesItem
