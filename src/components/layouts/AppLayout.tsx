import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { HOME, COUNTER } from '../Routes';
import styles from './AppLayout.module.less';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

interface Props {
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = (props: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed(!collapsed);

  return (
    <Layout className={styles.layout}>
      <Sider collapsible collapsed={collapsed} trigger={null} data-tid="sider">
        <Link to={HOME} data-tid="logo">
          <div className={styles.logo} />
        </Link>
        <Menu theme="dark" mode="inline" selectable={false}>
          <Menu.Item key="1">
            <Link to={HOME} data-tid="nav-home">
              <Icon type="pie-chart" />
              <span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={COUNTER} data-tid="nav-counter">
              <Icon type="desktop" />
              <span>Counter</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>Menu</span>
              </span>
            }
          >
            <Menu.Item key="3">Item 1</Menu.Item>
            <Menu.Item key="4">Item 2</Menu.Item>
            <Menu.Item key="5">Item 3</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header className={styles.header}>
          <Icon
            className={styles.trigger}
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle}
            data-tid="trigger"
          />
        </Header>
        <Content className={styles.content}>
          <Breadcrumb className={styles.breadcrumb}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Counter</Breadcrumb.Item>
          </Breadcrumb>
          <div className={styles.container}>{props.children}</div>
        </Content>
        <Footer className={styles.footer}>React App &copy; 2018 Fomo Bros</Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
