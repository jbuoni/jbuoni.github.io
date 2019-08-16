import React  from 'react';
import Python from '../../codeExamples/dynamicProgrammingPython';
import CodeContainer from './CodeContainer';

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

function Counting({ codeLanguageDict }) {
    return (
        <>
            <CodeContainer syntax={codeLanguageDict.longestPalindromeSubstring.syntax} code={Python.kadanes} title={'Kadanes'}
                           description={'Find the sum of contiguous subarray within a one-dimensional array of numbers which has the largest sum.'}
            />
            <CodeContainer syntax={codeLanguageDict.longestPalindromeSubsequence.syntax} code={Python.maxSubarray} title={'Max Subarray'}
                           description={'Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.'}
            />
            <CodeContainer syntax={codeLanguageDict.longestCommonSubstring.syntax} code={Python.missing} title={'Find the Missing Number'}
                           description={'You are given a list of n-1 integers and these integers are in the range of 1 to n. There are no duplicates in the list. One of the integers is missing in the list. Write an efficient code to find the missing integer.'}
            />
            <CodeContainer syntax={codeLanguageDict.longestCommonSubstring.syntax} code={Python.substringSum} title={'Substring Sum'}
                           description={'You are given a one dimensional array that may contain both positive and negative integers, find the sum of contiguous subarray of numbers which has the largest sum.'}
            />
        </>
    )
}

export default function DynamicProgramming ({ selected, codeLanguageDict }) {
    return (
        <>
            { selected === 'Coin Change' && <CoinChange codeLanguageDict={codeLanguageDict}/> }
            { selected === 'Strings' && <Strings codeLanguageDict={codeLanguageDict}/> }
            { selected === 'Counting and Sums' && <Counting codeLanguageDict={codeLanguageDict}/> }
        </>
    );
}


