import React from 'react';
import { Link } from 'react-router-dom'
import './index.scss';

class Foot extends React.Component {
  render() {
    let curIndex = this.props.curIndex;
    return (
      <ul className="foot-items">
        <li className={curIndex === 'recomment' && 'active'}><Link to="/">推荐页</Link></li>
        <li className={curIndex === 'home' && 'active'}><Link to="/home">首页</Link></li>
        <li className={curIndex === 'activity' && 'active'}><Link to="/activity">活动页</Link></li>
        <li className={curIndex === 'mine' && 'active'}><Link to="/mine">我的</Link></li>
      </ul>
    );
  }
}

export default Foot;