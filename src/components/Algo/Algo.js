import React, { Component } from 'react';
import '../../styles/algo.less';
import DynamicProgramming from './DynamicProgramming';
// import SideBar from './SideBar';

export default class Algo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="a-continer">
              <div className="code-containers">
                  <DynamicProgramming />
              </div>
          </div>
        );
    }
}
