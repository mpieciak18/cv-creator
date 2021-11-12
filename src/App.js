import React from 'react'
import Header from './components/Header.js'
import Form from './components/Form.js'
import Preview from './components/Preview.js'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import './stylesheets/App.css'

class App extends React.Component {
  constructor() {
    super()

    this.printRef = React.createRef()

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
      }],
      previewOn: false
    }
  }

  updatePersonal = (e) => {
    const form = e.target.parentNode

    this.setState({
      personal: {
        name: form.children[0].value,
        title: form.children[1].value,
        email: form.children[2].value,
        phone: form.children[3].value,
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

  togglePreview = () => {
    if (this.state.previewOn == false) {
      this.setState({
        previewOn: true
      })
    } else {
      this.setState({
        previewOn: false
      })
    }
  }

  downloadPreview = async () => {
    const preview = document.querySelector("#preview")

    const canvas = await html2canvas(preview)

    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF({
      orientation: 'portrait',
      format: 'letter'
    })

    const imgProps= pdf.getImageProperties(imgData)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
    console.log(pdfWidth, pdfHeight)
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('download.pdf')
  }

  render() {
    let pageContents

    if (this.state.previewOn == false) {
      pageContents = <Form 
        updatePersonal={this.updatePersonal}
        personal={this.state.personal}
        updateExperience={this.updateExperience}
        experience={this.state.experience}
        updateEducation={this.updateEducation}
        education={this.state.education}
        addObj={this.addObj}
        delObj={this.delObj}
      />
    } else {
      pageContents = 
        <div id='preview-box'>
          <Preview
            personal={this.state.personal}
            experience={this.state.experience}
            education={this.state.education}
            border="hasBorder"
            ref={this.printRef}
          />
        </div>
    }

    return (
      <div id='main'>
        <Header 
          togglePreview={this.togglePreview}
          previewOn={this.state.previewOn}
          downloadPreview={this.downloadPreview}
        />
        {pageContents}
      </div>
    )
  }
}

export default App