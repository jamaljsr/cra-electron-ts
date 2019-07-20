import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { HOME, COUNTER } from '../Routes';
import './AppLayout.less';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

interface Props {
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = (props: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed(!collapsed);

  return (
    <Layout className="layout">
      <Sider collapsible collapsed={collapsed} trigger={null} data-tid="sider">
        <Link to={HOME} data-tid="logo">
          <div className="logo" />
        </Link>
        <Menu theme="dark" mode="inline" selectable={false}>
          <Menu.Item key="1">
            <Link to={HOME}>
              <Icon type="pie-chart" />
              <span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={COUNTER} data-tid="counter-link">
              <Icon type="desktop" />
              <span>Counter</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="team" />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="header">
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle}
            data-tid="trigger"
          />
        </Header>
        <Content className="content">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="container">{props.children}</div>
        </Content>
        <Footer className="footer">React App &copy; 2018 Fomo Bros</Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;