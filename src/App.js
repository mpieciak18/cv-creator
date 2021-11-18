import React, {useState} from 'react'
import Header from './components/Header.js'
import Form from './components/Form.js'
import Preview from './components/Preview.js'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import './stylesheets/App.css'

const App = () => {
  const [personal, setPersonal] = useState({
    name: '',
    title: '',
    phone: '',
    email: '',
    location: '',
    objective: ''
  })
  const [experience, setExperience] = useState([{
    company: '',
    position: '',
    start: '',
    end: '',
    descr: ''
  }])
  const [education, setEducation] = useState([{
    program: '',
    uni: '',
    start: '',
    end: ''
  }])
  const [previewOn, setPreviewOn] = useState(false)

  const updatePersonal = (e) => {
    const form = e.target.parentNode
    setPersonal({
      name: form.children[0].value,
      title: form.children[1].value,
      email: form.children[2].value,
      phone: form.children[3].value,
      location: form.children[4].value,
      objective: form.children[5].value
    })
  }

  const updateExperience = (e) => {
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

    setExperience(experiences)
  }

  const updateEducation = (e) => {
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

    setEducation(educations)
  }

  const addObj = (selection) => {
    if (selection == 'experience') {
        const prevExp = experience
        const newExp = {
          company: '',
          position: '',
          start: '',
          end: '',
          descr: ''
        }

        setExperience([...prevExp, newExp])

    } else if (selection == 'education') {
        const prevEdu = education
        const newEdu = {
          program: '',
          uni: '',
          start: '',
          end: '',
          descr: ''
        }

        setEducation([...prevEdu, newEdu])
    }
  }

  const delObj = (selection, index) => {
    if (selection == 'experience') {
        const oldExp = experience
        const experiences = [...oldExp.slice(0, index), ...oldExp.slice(index + 1)]

        setExperience(experiences)
    } else if (selection == 'education') {
        const oldEdu = education
        const educations = [...oldEdu.slice(0, index), ...oldEdu.slice(index + 1)]

        setEducation(educations)
    }
  }

  const togglePreview = () => {
    if (previewOn == false) {
      setPreviewOn(true)
    } else {
      setPreviewOn(false)
    }
  }

  const downloadPreview = async () => {
    const preview = document.querySelector("#preview")

    const canvas = await html2canvas(preview, {
      onclone: (clonedDoc) => {
        clonedDoc.getElementById('preview').style.height = '11in'
        clonedDoc.getElementById('preview').style.width = '8.5in'
        clonedDoc.getElementById('preview').style.visibility = 'visible'
        clonedDoc.getElementById('preview').style.padding = '1in'        
      }
    })

    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF({
      orientation: 'portrait',
      format: 'letter'
    })

    const imgProps= pdf.getImageProperties(imgData)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('download.pdf')
  }

  let pageContents

  if (previewOn == false) {
    pageContents = <Form 
      updatePersonal={updatePersonal}
      personal={personal}
      updateExperience={updateExperience}
      experience={experience}
      updateEducation={updateEducation}
      education={education}
      addObj={addObj}
      delObj={delObj}
    />
  } else {
    pageContents = 
      <div id='preview-box'>
        <Preview
          personal={personal}
          experience={experience}
          education={education}
          id="preview"
        />
        <Preview
          personal={personal}
          experience={experience}
          education={education}
          id="mobile-preview"
        />
      </div>
  }

  return (
    <div id='main'>
      <Header 
        togglePreview={togglePreview}
        previewOn={previewOn}
        downloadPreview={downloadPreview}
      />
      {pageContents}
    </div>
  )
}

export default App