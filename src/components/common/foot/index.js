import React from 'react';
import './index.scss';

class Foot extends React.Component {
  render() {
    return (
      <ul className="foot-items">
        <li className="foot-item active">推荐页</li>
        <li className="foot-item">首页</li>
        <li className="foot-item">活动页</li>
        <li className="foot-item">我的</li>
      </ul>
    );
  }
}

export default Foot;