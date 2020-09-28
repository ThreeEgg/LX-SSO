// import { Alert } from 'antd';
import React, { useState } from 'react';
import { connect } from 'umi';
import logo from '@/assets/images/logo.png'
import LoginForm from './components/Login';
import styles from './style.less';

const { UserName, Password, Submit } = LoginForm;



const Login = (props) => {
  const { userLogin = {}, submitting } = props;
  // const { status, type: loginType } = userLogin;
  // const [autoLogin, setAutoLogin] = useState(true);
  const [type, setType] = useState('account');

  const handleSubmit = (values) => {
    const { dispatch } = props;
    dispatch({
      type: 'login/login',
      payload: { ...values, type },
    });
  };

  return (
    <div className={styles.main}>
      <div className={styles.imgBox}>
        <img src={logo} alt="logo" />
      </div>
      <LoginForm activeKey={type} onTabChange={setType} onSubmit={handleSubmit}>
        <div className={styles.title}>
          <p>欢迎使用</p>
          <p>联信单点登录系统</p>
        </div>
        <div className="loginForm">
          <UserName
            name="userName"
            placeholder="请输入账号!"
            rules={[
              {
                required: true,
                message: '请输入账号!',
              },
            ]}
          />
          <Password
            name="password"
            placeholder="请输入密码！"
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />

          <Submit loading={submitting}>登录</Submit>
        </div>
      </LoginForm>
    </div>
  );
};

export default connect(({ login, loading }) => ({
  userLogin: login,
  submitting: loading.effects['login/login'],
}))(Login);
