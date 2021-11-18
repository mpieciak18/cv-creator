import React from 'react'
import '../stylesheets/Preview.css'
import phone from '../images/phone.png'
import email from '../images/email.png'
import location from '../images/location.png'

const Preview = (props) => {
    const { personal, experience, education, id } = props

    let personalBlock
    personalBlock = (
        <div class='personal'>
            <div class='contact-info'>
                <div class='personal-left'>
                    <div class='pName'>{personal.name}</div>
                    <div class='pTitle'>{personal.title}</div>
                </div>
                <div class='personal-right'>
                    <div class='personal-right-line'>
                        <img class='personal-icon' src={phone} />
                        <div class='pPhone'>{personal.phone}</div>
                    </div>
                    <div class='personal-right-line'>
                        <img class='personal-icon' src={email} />
                        <div class='pEmail'>{personal.email}</div>
                    </div>
                    <div class='personal-right-line'>
                        <img class='personal-icon' src={location} />
                        <div class='pLocation'>{personal.location}</div>
                    </div>
                </div>
            </div>
            <div class='dividing-line'></div>
            <div class='pObjective'>{personal.objective}</div>
        </div>
    )
    
    let experienceBlock
    experienceBlock = (
        <div class='experience'>
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
        <div class='education'>
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
        <div id={id}>
            {personalBlock}
            {experienceBlock}
            {educationBlock}
        </div>
    )
}

export default Preview