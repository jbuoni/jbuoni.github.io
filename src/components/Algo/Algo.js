import React, { useState } from 'react';
import '../../styles/algo.less';
import DynamicProgramming from './DynamicProgramming';
import SideBar from './SideBar';
import Fade from 'react-reveal/Fade';
import Graphs from './Graphs';
import StacksAndQueues from './StacksAndQueues'


const codeLanguageDictDefault = {
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
};

const sidebarValuesDefault = [
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

];

const Algo = () => {
    const [sidebarValues, ] = useState(sidebarValuesDefault);
    const [selected, onSelectChange] = useState('Coin Change');
    const [codeLanguageDict, ] = useState(codeLanguageDictDefault);
    
    return (
        <div className="a-continer">
            <div className="code-containers">
                <div className="a-continer">
                    <div className="code-containers">
                        <div className="algo-content">
                            <Fade left>
                              <SideBar sidebarValues={sidebarValues} selected={selected} onSidebarChange={onSelectChange}/>
                            </Fade>
                            <div>
                                <div className="code-blocks">
                                    <DynamicProgramming selected={selected} codeLanguageDict={codeLanguageDict}/>
                                    <Graphs selected={selected} codeLanguageDict={codeLanguageDict}/>
                                    <StacksAndQueues selected={selected} codeLanguageDict={codeLanguageDict}/>
                                </div>
                          </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Algo;
