import { Fade } from 'react-awesome-reveal';

interface TopHeaderProps {
    text: string
    lineWidth?: string
}

const TopHeader = ({ text, lineWidth }: TopHeaderProps) => {
    return (
        <Fade>
            <div className="header-top">
                <h1 className="header-h3">{text}</h1>
                <div className={`header-bar ${lineWidth}`}></div>
            </div>
        </Fade>
    );
};

export default TopHeader;

