import ProgressBar from "@ramonak/react-progress-bar";

interface CustomBarProps {
    language: string
    skillValue: number
}

function CustomBar({ language, skillValue }: CustomBarProps) {
    return (
        <div className="exp-bar-label">
            <ProgressBar
                customLabel={language}
                completed={skillValue}
                bgColor="#04C2C9"
                baseBgColor="#E31B6D"
            />
        </div>
    )
}

export default function Experience() {
    return(
        <div className="about-panel">
            <h3 className="home-h3">Experience</h3>
            <div className="exp">
                <CustomBar language={'JavaScript'} skillValue={95}/>
                <CustomBar language={'TypeScript'} skillValue={95}/>
                <CustomBar language={'NodeJS'} skillValue={95}/>
                <CustomBar language={'React'} skillValue={90}/>
                <CustomBar language={'Python'} skillValue={80}/>
                <CustomBar language={'CSS'} skillValue={80}/>
                <CustomBar language={'AWS'} skillValue={70}/>
                <CustomBar language={'Angular'} skillValue={70}/>
                <CustomBar language={'Java'} skillValue={50}/>
                <CustomBar language={'C#'} skillValue={50}/>
                <CustomBar language={'Scala'} skillValue={50}/>
                <CustomBar language={'Mongo'} skillValue={40}/>
                <CustomBar language={'Docker / Kubernetes'} skillValue={20}/>
                <CustomBar language={'SQL / Postgres'} skillValue={70}/>
                <CustomBar language={'Ruby'} skillValue={70}/>
            </div>
        </div>
    )
}
