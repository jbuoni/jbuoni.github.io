interface IconProps {
    faIcon: string
    title: string
    exp: string

}
const Icon = ({ faIcon, title, exp}: IconProps)=> {
    return (
        <div className="icon-container">
            <div className="circle">
                <i className={`${faIcon} fa-4x mid-icon`}></i>
            </div>
            <div className="middle-text">{title}</div>
            <div className="middle-exp">{exp}</div>
        </div>
    )
}

export default Icon