import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HOME, COUNTER } from 'components/Routes';
import logo from 'resources/logo.png';
import styles from './AppLayout.module.less';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

interface Props {
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = (props: Props) => {
  const { t, i18n } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed(!collapsed);
  const setEnglish = () => i18n.changeLanguage('en-US');
  const setSpanish = () => i18n.changeLanguage('es');

  return (
    <Layout className={styles.layout}>
      <Sider collapsible collapsed={collapsed} trigger={null} data-tid="sider">
        <div className={styles.logo}>
          <Link to={HOME} data-tid="logo">
            <img src={logo} alt="logo" />
            {!collapsed && <span>Electron App</span>}
          </Link>
        </div>
        <Menu theme="dark" mode="inline" selectable={false}>
          <Menu.Item key="1">
            <Link to={HOME} data-tid="nav-home">
              <Icon type="pie-chart" />
              <span>{t('cmps.app-layout.home', 'Home')}</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={COUNTER} data-tid="nav-counter">
              <Icon type="desktop" />
              <span>{t('cmps.app-layout.counter', 'Counter')}</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>{t('cmps.app-layout.menu', 'Menu')}</span>
              </span>
            }
          >
            <Menu.Item key="3">{t('cmps.app-layout.item1', 'Item 1')}</Menu.Item>
            <Menu.Item key="4">{t('cmps.app-layout.item2', 'Item 2')}</Menu.Item>
            <Menu.Item key="5">{t('cmps.app-layout.item3', 'Item 3')}</Menu.Item>
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
            <Breadcrumb.Item>{t('cmps.app-layout.home', 'Home')}</Breadcrumb.Item>
            <Breadcrumb.Item>{t('cmps.app-layout.counter', 'Counter')}</Breadcrumb.Item>
          </Breadcrumb>
          <div className={styles.container}>{props.children}</div>
        </Content>
        <Footer className={styles.footer}>
          React App &copy; 2019 Fomo Bros{' '}
          <a href="/#" data-tid="english" onClick={setEnglish}>
            EN
          </a>{' '}
          |{' '}
          <a href="/#" data-tid="spanish" onClick={setSpanish}>
            ES
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
