import React from 'react'
import '../stylesheets/Form.css'

class Form extends React.Component {
    constructor(props) {
        super(props)
    }

    addBlock = (e) => {
        const blockType = e.target.parentNode.parentNode.parentNode.id

        this.props.addObj(blockType)
    }

    delBlock = (e) => {
        const block = e.target.parentNode.parentNode
        const blockType = block.parentNode.id
        const blockIndex = Array.from(block.parentNode.children).indexOf(block) - 1

        console.log(blockType)
        console.log(blockIndex)
        this.props.delObj(blockType, blockIndex)
    }

    updatePersonal = (e) => {
        this.props.updatePersonal(e)
    }

    updateExperience = (e) => {
        this.props.updateExperience(e)
    }

    updateEducation = (e) => {
        this.props.updateEducation(e)
    }

    render() {
        let experiences = []
                    
        for (let i = 0; i < this.props.experience.length; i++) {
            let block
            const addButton = <button type='button' className='add-button' onClick={this.addBlock}>Add</button>
            const delButton = <button type='button' className='del-button' onClick={this.delBlock}>Delete</button>
            let buttonArea
            let exp = this.props.experience[i]
            
            if (this.props.experience.length == 1) {
                buttonArea = <div>{addButton}</div>
            } else if (i != this.props.experience.length - 1 ) {
                buttonArea = <div>{delButton}</div>
            } else {
                buttonArea = <div>{addButton}{delButton}</div>
            }

            block = (
                <div className='exp-block'>
                    <input type='text' placeholder='Company' value={exp.company} onChange={this.updateExperience}/>
                    <input type='text' placeholder='Position' value={exp.position} onChange={this.updateExperience}/>
                    <input type='text' placeholder='Start Date' value={exp.start} onChange={this.updateExperience}/>
                    <input type='text' placeholder='End Date' value={exp.end} onChange={this.updateExperience}/>
                    <input type='text' placeholder='Description' value={exp.descr} onChange={this.updateExperience}/>
                    {buttonArea}
                </div>
            )

            experiences = [...experiences, block]
        }

        let educations = []

        for (let i = 0; i < this.props.education.length; i++) {
            let block
            const addButton = <button type='button' className='add-button' onClick={this.addBlock}>Add</button>
            const delButton = <button type='button' className='del-button' onClick={this.delBlock}>Delete</button>
            let buttonArea
            let edu = this.props.education[i]

            if (this.props.education.length == 1) {
                buttonArea = <div>{addButton}</div>
            } else if (i != this.props.education.length - 1 ) {
                buttonArea = <div>{delButton}</div>
            } else {
                buttonArea = <div>{addButton}{delButton}</div>
            }

            block = (
                <div className='edu-block'>
                    <input type='text' placeholder='Program' value={edu.program} onChange={this.updateEducation}/>
                    <input type='text' placeholder='University' value={edu.uni} onChange={this.updateEducation}/>
                    <input type='text' placeholder='Start Date' value={edu.start} onChange={this.updateEducation}/>
                    <input type='text' placeholder='End Date' value={edu.end} onChange={this.updateEducation}/>
                    {buttonArea}
                </div>
            )

            educations = [...educations, block]
        }

        return (
            <div id='form'>
                <div id='personal'>
                    <h2>Personal Information</h2>
                    <div className='personal-block'>
                        <input type='text' placeholder='Name' value={this.props.personal.name} onChange={this.updatePersonal}/>
                        <input type='text' placeholder='Title' value={this.props.personal.title} onChange={this.updatePersonal}/>
                        <input type='text' placeholder='Email' value={this.props.personal.email} onChange={this.updatePersonal}/>
                        <input type='text' placeholder='Phone' value={this.props.personal.phone} onChange={this.updatePersonal}/>
                        <input type='text' placeholder='Location' value={this.props.personal.location} onChange={this.updatePersonal}/>
                        <input type='text' placeholder='Objective' value={this.props.personal.objective} onChange={this.updatePersonal}/>
                    </div>
                </div>
                <div id='experience'>
                    <h2>Work Experience</h2>
                    {experiences}
                </div>
                <div id='education'>
                    <h2>Education</h2>
                    {educations}
                </div>
            </div>
        )
    }
}

export default Form