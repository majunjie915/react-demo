import React from 'react';
import Head from '../common/head';
import Foot from '../common/foot';

class Activity extends React.Component {
  render() {
    return (
      <section>
        <Head title="page3的标题" />
        <Foot curIndex="activity" />
      </section>
    );
  }
}

export default Activity;
