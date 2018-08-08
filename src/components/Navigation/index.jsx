import React, { Component } from "react";
import { Button, NavigationDrawer, FontIcon } from "react-md";
import Link from "gatsby-link";
import styles from "./Navigation.scss";

function getNavList() {
  const navList = [{
    primaryText: "Home",
    leftIcon: <FontIcon>home</FontIcon>,
    component: Link,
    to: "/"
  }, {
    divider: true
  }, {
    primaryText: "Encoding Converter",
    leftIcon: <FontIcon>book</FontIcon>,
    component: Link,
    to: "/enconv/"
  }, {
    divider: true
  }, {
    primaryText: "About",
    leftIcon: <FontIcon>person</FontIcon>,
    component: Link,
    to: "/about/"
  }];

  return navList;
}

class Navigation extends Component {
  render () {
    const { children } = this.props;

    return (
      <NavigationDrawer
        drawerTitle="drawer title"
        toolbarTitle="toolbar title"
        contentClassName={styles['main-content']}
        navItems={getNavList()}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        desktopDrawerType={NavigationDrawer.DrawerTypes.FLOATING}
      >

        <div className={styles['main-container'] }>{ children }</div>

      </NavigationDrawer>
    );
  }
};

export default Navigation;
