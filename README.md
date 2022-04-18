# Make-a-Resume

"Create and download your own resume in seconds."

This project is from the [the Odin Project](https://www.theodinproject.com) (specifically, from their [Full Stack Javascript](https://www.theodinproject.com/paths/full-stack-javascript) curriculum). 

[Click here](https://www.theodinproject.com/lessons/node-path-javascript-cv-application) to read more about the project specifications.

![Live preview of the Make-a-Resume app](./public/images/sample.gif)

## Live App

[Click here](https://mpieciak18.github.io/make-a-resume/) to check out the live version of the app!

## Project Objectives

1. To create an application that allows a user to input their contact info, work history, and education, and turn it into a US-Letter-sized single-page resume that can be downloaded as a PDF.
2. To implement React.js with class components.

## Technologies Used

<p align="left"> 
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50"/> </a> 
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50"/> </a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/> </a>
<a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg" alt="react" width="50" height="50"/> </a>
</p>

## App Features

1. Desktop & mobile styling for responsiveness.
2. A modular form that accepts a user's contact info, work history, and education.
3. The ability to add multiple work history and education blocks.
4. A toggle button to preview the resume.
5. A download button to download the resume as a PDF file.

## Instructions

1. Fill out the form with your contact info, work history, and education. Add & delete as many "blocks" for work and/or education as necessary.
2. Preview your résumé right in the browser by toggling the preview button in the top-right corner.
3. Make any changes as needed by toggling the preview off and editing the fields in the form.
4. When satisfied with the résumé, you can download it as a PDF by clicking the download button above the preview-toggle (note: preview must be enabled to download).

## Areas for Improvement

1. Biggest area for improvement: currently, the libraries used to convert the resume preview to a downloadable PDF only take a snapshot of the DOM and render it as an image, as opposed to rendering it as searchable text. Other libraries exist that would render the resume as searchable text, but would require significant rewriting of the code to make it happen.
2. Adding additional sections for skills and personal projects would make the app more valuable to job-seekers.
3. Currently there are no options for styling. Simply even adding a font-family selection could be a good start for user customization.
4. A dark mode for the app would be a nice touch.

## Known Issues

1. There's nothing stopping the user from entering in so much data that the blocks spill off the preview. Right now, there's just a lot of room that a user should be able to make it work for their situation.