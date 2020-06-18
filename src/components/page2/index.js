import React from 'react';
import Head from '../common/head';
import Foot from '../common/foot';

class Home extends React.Component {
  render() {
    return (
      <section>
        <Head title="page2的标题" />
        <Foot curIndex="home" />
      </section>
    );
  }
}

export default Home