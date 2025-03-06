import { Fade } from 'react-awesome-reveal'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeBlockProps {
    syntax: string
    code: string
}

interface CodeContainerProps extends CodeBlockProps {
    title: string
    description: string
}

function CodeBlock({ syntax, code }: CodeBlockProps) {
    return (
        <div className="syntax-container">
            <SyntaxHighlighter language={syntax} style={atomDark}>{code}</SyntaxHighlighter>
        </div>
    )
}

export default function CodeContainer({ syntax, code, title, description} : CodeContainerProps) {
    const splitDesc = description.split('<br>')

    return (
        <Fade>
            <div className="code-block-container">
                <h5 className="code-block-descr">{title}</h5>
                <div className="syntax description">
                    {splitDesc.map((desc: string, idx: number) => <p key={idx}>{desc}</p>)}
                </div>
                <CodeBlock syntax={syntax} code={code}/>
            </div>
        </Fade>
    )
}
