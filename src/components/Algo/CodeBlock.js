import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeBlock({ syntax, code }) {
    return (
        <div className="syntax-container">
            <SyntaxHighlighter language={syntax} style={atomDark}>{code}</SyntaxHighlighter>
        </div>
    );
}
