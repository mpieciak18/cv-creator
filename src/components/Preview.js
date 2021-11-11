import React from 'react'
import '../stylesheets/Preview.css'
import phone from '../images/phone.png'
import email from '../images/email.png'
import location from '../images/location.png'

class Preview extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { personal, experience, education} = this.props

        let personalBlock
        personalBlock = (
            <div id='personal'>
                <div id='contact-info'>
                    <div id='personal-left'>
                        <div id='pName'>{personal.name}</div>
                        <div id='pTitle'>{personal.title}</div>
                    </div>
                    <div id='personal-right'>
                        <div class='personal-right-line'>
                            <img class='personal-icon' src={phone} />
                            <div id='pPhone'>{personal.phone}</div>
                        </div>
                        <div class='personal-right-line'>
                            <img class='personal-icon' src={email} />
                            <div id='pEmail'>{personal.email}</div>
                        </div>
                        <div class='personal-right-line'>
                            <img class='personal-icon' src={location} />
                            <div id='pLocation'>{personal.location}</div>
                        </div>
                    </div>
                </div>
                <div id='dividing-line'></div>
                <div id='pObjective'>{personal.objective}</div>
            </div>
        )
        
        let experienceBlock
        experienceBlock = (
            <div id='experience'>
                <h2>Work Experience</h2>
                {experience.map((exp) => {
                    return (
                        <div className='expBlock'>
                            <div className='expLineOne'>
                                <div className='expPosition'>{exp.position}</div>
                                <div className='expLineOne-right'>
                                    <div className='expCompany'>{exp.company} |</div>
                                    <div className='expDates'> {exp.start} - {exp.end}</div>
                                </div>
                            </div>
                            <div className='expDescr'>{exp.descr}</div>
                        </div>
                    )
                })}
            </div>
        )

        let educationBlock
        educationBlock = (
            <div id='education'>
                <h2>Education</h2>
                {education.map((edu) => {
                    return (
                        <div className='eduBlock'>
                            <div className='eduProgram'>{edu.program}</div>
                            <div className='eduBlock-right'>
                                <div className='eduUni'>{edu.uni} |</div>
                                <div className='eduDates'>{edu.start} - {edu.end}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )

        return (
            <div id='preview' className={this.props.border}>
                {personalBlock}
                {experienceBlock}
                {educationBlock}
            </div>
        )
    }
}

export default Preview