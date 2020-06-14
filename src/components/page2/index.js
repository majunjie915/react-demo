import React from 'react';
import ReactDOM from 'react-dom';
import Head from '../common/head';

class Page2 extends React.Component {
  render() {
    return (
      <section>
        <Head title="page2的标题" />
      </section>
    );
  }
}

ReactDOM.render(<Page2 />, document.getElementById('root'));