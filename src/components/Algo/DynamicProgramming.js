import React, { Component } from 'react';
import Python from '../../codeExamples/dynamicProgrammingPython';
import CodeBlock from './CodeBlock';
import SideBar from './SideBar';

function CodeContainer({ syntax, code, title, description}) {
    const splitDesc = description.split('<br>');

    return (
      <div className="code-block-container">
          <h5 className="code-block-descr">{title}</h5>
          <div className="syntax description">
              {splitDesc.map((desc, idx) => <p key={idx}>{desc}</p>)}
          </div>
          <CodeBlock syntax={syntax} code={code}/>
      </div>
    );
}

function CoinChange({ codeLanguageDict }) {
    return (
        <>
            <CodeContainer syntax={codeLanguageDict.coinChange.syntax} code={Python.coinChange} title={'Coin Change'}
                           description={`Given a value N, if we want to make change for N cents, and we have infinite supply of each of
                                            S = { S1, S2, .. , Sm} valued coins, how many ways can we make the change? The order of coins doesn’t matter.
                            `}
            />
            <CodeContainer syntax={codeLanguageDict.coinChangeNoRepeat.syntax} code={Python.coinChangeNoRepeat} title={'Coin Change No Repeat'}
                           description={`Given a value N, if we want to make change for N cents, and we have finite supply of each of S = { S1, S2, .. , Sm}
                                         valued coins, how many ways can we make the change? The order of coins doesn’t matter.`}
            />
            <CodeContainer syntax={codeLanguageDict.leastCoins.syntax} code={Python.leastCoins} title={'Least Coins'}
                           description={`Given a value N, if we want to make change for N cents, and we have infinite supply of each of S = { S1, S2, .. , Sm}
                                         valued coins, what are the least amount of coins to make change?`}
            />
        </>
    )
}

function Strings({ codeLanguageDict }) {
    return (
        <>
            <CodeContainer syntax={codeLanguageDict.longestPalindromeSubstring.syntax} code={Python.longestPalindromeSubstring} title={'Longest Palindrome Substring'}
                           description={'Given a string, find the longest substring which is palindrome. For example, if the given string is “jbuonracecarol”, the output should be “racecar”.'}
            />
            <CodeContainer syntax={codeLanguageDict.longestPalindromeSubsequence.syntax} code={Python.longestPalindromeSubsequence} title={'Longest Palindrome Subsequence'}
                           description={`Given a sequence, find the length of the longest palindromic subsequence in it. <br>
                                            As another example, if the given sequence is “BBABCBCAB”, then the output should be 7 as “BABCBAB” is the longest palindromic subseuqnce in it. “BBBBB” and “BBCBB” are also palindromic subsequences of the given sequence, but not the longest ones.`}
            />
            <CodeContainer syntax={codeLanguageDict.longestCommonSubstring.syntax} code={Python.longestCommonSubstring} title={'Longest Common Substring'}
                           description={'Given two strings ‘X’ and ‘Y’, find the length of the longest common substring.'}
            />
        </>
    )
}

export default class DynamicProgramming extends Component {
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
            }
        },
        sidebarValues: ['Coin Change', 'Strings', 'Counting and Sums', 'Partitions'],
        selected: 'Coin Change'
    };

    onSelectedChanged(selected) {
        this.setState({ selected });
    }

    render() {
        return (
            <div className="a-continer">
                <div className="code-containers">
                  <div className="algo-content">
                    <SideBar sidebarValues={this.state.sidebarValues} selected={this.state.selected} onSidebarChange={this.onSelectedChanged}/>
                    <div className="dp-intro">
                    </div>
                      <div className="code-blocks">
                          { this.state.selected === 'Coin Change' && <CoinChange codeLanguageDict={this.state.codeLanguageDict}/> }
                          { this.state.selected === 'Strings' && <Strings codeLanguageDict={this.state.codeLanguageDict}/> }
                      </div>
                  </div>
                </div>
            </div>
        );
    }

}


