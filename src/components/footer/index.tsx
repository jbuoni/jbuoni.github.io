import {
    onBitbucketClick,
    onFacebookClick,
    onGithubClick,
    onLinkedInClick,
    onStackOverflowClick,
    onInstagramClick
} from '../../utils/outsideSiteUtils';

const Footer = () => {

    const onEmailButtonClick = () => {
        const link = 'https://mail.google.com/mail/?view=cm&fs=1&to=buoni.jason@gmail.com';
        window.open(link, 'Mailer');
        return false;
    }

    return (
        <div className="footer">
            <span onClick={onEmailButtonClick}><i className="far fa-envelope-open fa-2x icon"></i></span>
            <span onClick={onLinkedInClick}><i className="fab fa-linkedin-in fa-2x icon"></i></span>
            <span onClick={onGithubClick}><i className="fab fa-github-alt fa-2x icon" aria-hidden="true"></i></span>
            <span onClick={onBitbucketClick}><i className="fab fa-bitbucket fa-2x icon" aria-hidden="true"></i></span>
            <span onClick={onStackOverflowClick}><i className="fab fa-stack-overflow fa-2x icon"></i></span>
            <span onClick={onFacebookClick}><i className="fab fa-facebook fa-2x icon"></i></span>
            <span onClick={onInstagramClick}><i className="fab fa-instagram fa-2x icon"></i></span>
        </div>
    )
}

export default Footer
