import React from 'react';
import { Router, Route, History, Link } from 'dva/router';
import { connect } from 'dva';
import { Button } from 'antd';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Welcome to Your Homepage</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><Link to="products">Goto another page</Link></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
