import React from 'react'
import './stylesheets/App.css'
import Header from './components/Header.js'
import Form from './components/Form.js'
import Preview from './components/Preview.js'
import './stylesheets/App.css'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      personal: {
        name: '',
        title: '',
        phone: '',
        email: '',
        location: '',
        objective: ''
      },
      experience: [{
        company: '',
        position: '',
        start: '',
        end: '',
        descr: ''
      }],
      education: [{
        program: '',
        uni: '',
        start: '',
        end: '',
        descr: ''
      }]
    }
  }

  updatePersonal = (e) => {
    const form = e.target.parentNode

    this.setState({
      personal: {
        name: form.children[0].value,
        title: form.children[1].value,
        phone: form.children[2].value,
        email: form.children[3].value,
        location: form.children[4].value,
        objective: form.children[5].value
      }
    })
  }

  updateExperience = (e) => {
    const form = e.target.parentNode.parentNode
    let experiences = []

    for (let i = 1; i < form.children.length; i++) {
      const section = form.children[i]

      const exp = {
        company: section.children[0].value,
        position: section.children[1].value,
        start: section.children[2].value,
        end: section.children[3].value,
        descr: section.children[4].value,
      }

      experiences = [...experiences, exp]
    }

    this.setState({
      experience: experiences
    })
  }

  updateEducation = (e) => {
    const form = e.target.parentNode.parentNode
    let educations = []

    for (let i = 1; i < form.children.length; i++) {
      const section = form.children[i]

      const edu = {
        program: section.children[0].value,
        uni: section.children[1].value,
        start: section.children[2].value,
        end: section.children[3].value,
        descr: section.children[4].value,
      }

      educations = [...educations, edu]
    }

    this.setState({
      education: educations
    })
  }

  addObj = (selection) => {
    if (selection == 'experience') {
        const prevExp = this.state.experience
        const newExp = {
          company: '',
          position: '',
          start: '',
          end: '',
          descr: ''
        }

        this.setState({
            experience: [...prevExp, newExp]
        })
    } else if (selection == 'education') {
        const prevEdu = this.state.education
        const newEdu = {
          program: '',
          uni: '',
          start: '',
          end: '',
          descr: ''
        }

        this.setState({
            education: [...prevEdu, newEdu]
        })
    }
  }

  delObj = (selection, index) => {
    if (selection == 'experience') {
        const oldExp = this.state.experience
        const experiences = [...oldExp.slice(0, index), ...oldExp.slice(index + 1)]

        this.setState({
          experience: experiences
        })
    } else if (selection == 'education') {
        const oldEdu = this.state.education
        const educations = [...oldEdu.slice(0, index), ...oldEdu.slice(index + 1)]

        this.setState({
          education: educations
        })
    }
  }

  render() {
    return (
      <div id='main'>
        <Header />
        <Form 
          updatePersonal={this.updatePersonal}
          personal={this.state.personal}
          updateExperience={this.updateExperience}
          experience={this.state.experience}
          updateEducation={this.updateEducation}
          education={this.state.education}
          addObj={this.addObj}
          delObj={this.delObj}
        />
        <Preview />
      </div>
    )
  }
}

export default App