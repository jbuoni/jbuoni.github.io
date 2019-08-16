import React, { Component } from 'react';
import '../../styles/algo.less';
import DynamicProgramming from './DynamicProgramming';
import SideBar from './SideBar';

export default class Algo extends Component {
    constructor(props) {
        super(props);
        this.onSelectedChanged = this.onSelectedChanged.bind(this);
    }

    state = {
        codeLanguageDict: {
            coinChange: {
                syntax: 'python'
            },
            coinChangeNoRepeat: {
                syntax: 'python'
            },
            leastCoins: {
                syntax: 'python'
            },
            longestPalindromeSubstring: {
                syntax: 'python'
            },
            longestPalindromeSubsequence: {
                syntax: 'python'
            },
            longestCommonSubstring: {
                syntax: 'python'
            },
            kadanes: {
                syntax: 'python'
            },
            maxSubarray: {
                syntax: 'python'
            },
            missing: {
                syntax: 'python'
            },
            substringSum: {
                syntax: 'python'
            }
        },
        sidebarValues: [
            {
                category: 'Dynamic Programming',
                values: ['Coin Change', 'Strings', 'Counting and Sums']
            }

        ],
        selected: 'Coin Change'
    };

    onSelectedChanged(selected) {
        this.setState({ selected });
    }

    render() {
        return (
          <div className="a-continer">
              <div className="code-containers">
                  <div className="a-continer">
                      <div className="code-containers">
                          <div className="algo-content">
                              <SideBar sidebarValues={this.state.sidebarValues} selected={this.state.selected} onSidebarChange={this.onSelectedChanged}/>
                              <div className="dp-intro">
                              </div>
                              <div className="code-blocks">
                                  <DynamicProgramming selected={this.state.selected} codeLanguageDict={this.state.codeLanguageDict}/>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
        );
    }
}
