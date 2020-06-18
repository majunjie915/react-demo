import React from 'react';
import './index.scss';
import Head from '../common/head';
import Foot from '../common/foot';

class Layout extends React.Component {
  render() {
    return (
      <section>
        <Head title="page1的标题" />
        <div className="content"></div>
        <Foot curIndex="recomment" />
      </section>
    );
  }
}

export default Layout;