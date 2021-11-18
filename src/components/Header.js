import React from 'react'
import '../stylesheets/Header.css'

const Header = (props) => {
    const { previewOn, togglePreview, downloadPreview } = props
    let toggleText
    let downloadButton

    if (previewOn == false) {
        toggleText = <p>Preview Off</p>
        downloadButton = (
            <button id='download-button' type='button' className='preview-off'>
                Enable Preview
            </button>
        )
    } else {
        toggleText = <p>Preview On</p>
        downloadButton = (
            <button id='download-button' type='button' onClick={downloadPreview}>
                Download Résumé
            </button>
        )   
    }

    return(
        <div id='header'>
            <div id='header-left'>
                <img id='icon' src={process.env.PUBLIC_URL + '/images/icon.png'} alt='page icon' />
                <h1 id='title'>Résumé Maker</h1>
            </div>
            <div id='header-right'>
                <div id='preview-area'>
                    {toggleText}
                    <input type="checkbox" id="preview-button" class="toggle-input" onClick={togglePreview} />
                    <label class="preview-button toggle-label" for="preview-button">Toggle</label>
                </div>
                {downloadButton}
            </div>
        </div>
    )
}

export default Header