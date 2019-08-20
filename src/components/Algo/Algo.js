import React, { Component } from 'react';
import '../../styles/algo.less';
import DynamicProgramming from './DynamicProgramming';
import SideBar from './SideBar';
import Graphs from './Graphs';
import StacksAndQueues from './StacksAndQueues'
import TopHeader from '../TopHeader';

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
            },
            dijkstras: {
                syntax: 'python'
            },
            directed: {
                syntax: 'python'
            },
            undirected: {
                syntax: 'python'
            },
            flood: {
                syntax: 'python'
            },
            kruskal: {
                syntax: 'python'
            },
            prims: {
                syntax: 'python'
            },
            union: {
                syntax: 'python'
            },
            queue: {
                syntax: 'python'
            },
            min: {
                syntax: 'python'
            },
            matching: {
                syntax: 'python'
            }
        },
        sidebarValues: [
            {
                category: 'Dynamic Programming',
                values: ['Coin Change', 'Strings', 'Counting and Sums']
            },
            {
                category: 'Graphs',
                values: [ 'Dijkstras', 'Flood Fill', 'Directed Graphs', 'Undirected Graphs', 'Weighted Graphs']
            },
            {
                category: 'Stacks and Queues',
                values: ['Queue', 'Stacks']
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
                              <div>
                                  <div className="header-container">
                                      <TopHeader text="Algorithms" lineWidth="line-algo"/>
                                  </div>
                                  <div className="code-blocks">
                                      <DynamicProgramming selected={this.state.selected} codeLanguageDict={this.state.codeLanguageDict}/>
                                      <Graphs selected={this.state.selected} codeLanguageDict={this.state.codeLanguageDict}/>
                                      <StacksAndQueues selected={this.state.selected} codeLanguageDict={this.state.codeLanguageDict}/>
                                  </div>
                            </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
        );
    }
}
