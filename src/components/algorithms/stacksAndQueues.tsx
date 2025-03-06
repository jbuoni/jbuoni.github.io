import Python from '../../codeExamples/stacksQueuesPython'
import CodeContainer from './codeContainer'
import { AlgorithmTypeProps } from './shared'

function Queue({ codeLanguageDict }: AlgorithmTypeProps) {
    return (
        <>
            <CodeContainer syntax={codeLanguageDict.queue.syntax} code={Python.queue} title={'Next Greatest Element'}
                           description={`Given an array, print the Next Greater Element (NGE) for every element. The Next greater Element
                           for an element x is the first greater element on the right side of x in array. Elements for which no greater
                           element exist, consider next greater element as -1.`}
            />
        </>
    )
}

function Stacks({ codeLanguageDict }: AlgorithmTypeProps) {
    return (
        <>
            <CodeContainer syntax={codeLanguageDict.matching.syntax} code={Python.matching} title={'Matching'}
                           description={`Given an expression string, write a python program to find whether a given string has balanced parentheses or not.
<br>
Examples:<br>
<br>
Input : {[]{()}}<br>
Output : Balanced<br>
<br>
Input : [{}{}(]<br>
Output : Unbalanced`}
            />

            <CodeContainer syntax={codeLanguageDict.min.syntax} code={Python.min} title={'Minimum Stack'}
                           description={'Return the minimum value from the stack.'}
            />
        </>
    )
}


export default function StacksAndQueues ({ selected, codeLanguageDict }: AlgorithmTypeProps) {
    return (
        <>
            { selected === 'Queue' && <Queue codeLanguageDict={codeLanguageDict}/> }
            { selected === 'Stacks' && <Stacks codeLanguageDict={codeLanguageDict}/> }
        </>
    )
}
