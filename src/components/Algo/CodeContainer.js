import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeBlock({ syntax, code }) {
    return (
        <div className="syntax-container">
            <SyntaxHighlighter language={syntax} style={atomDark}>{code}</SyntaxHighlighter>
        </div>
    );
}

export default function CodeContainer({ syntax, code, title, description}) {
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
