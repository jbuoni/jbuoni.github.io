interface RepoLinkProps {
    repoType: string
    link: string
}

const RepoLink = ({ repoType, link }: RepoLinkProps) => {
    const onClick = () => {
        const win = window.open(link, '_blank');
        win?.focus();
    };

    const className = repoType === 'github' ? 'fa-github-alt' : 'fa-bitbucket';


    return (
        <div className="project-link item-hover" onClick={onClick}>
            <i className={`fab ${className} fa-2x icon`} aria-hidden="true"></i>
        </div>
    )
}

export default RepoLink