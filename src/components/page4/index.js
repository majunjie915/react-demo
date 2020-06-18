import React from 'react';
import Head from '../common/head';
import Foot from '../common/foot';

class Mine extends React.Component {
  render() {
    return (
      <section>
        <Head title="page4的标题" />
        <Foot curIndex="mine" />
      </section>
    );
  }
}

export default Mine;
