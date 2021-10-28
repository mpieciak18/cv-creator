import React from 'react'
import '../stylesheets/Header.css'

class Header extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div id='header'>
                <img src={process.env.PUBLIC_URL + '/images/icon.png'} alt='page icon' width='35' height='35' />
                <h1>Résumé Maker</h1>
            </div>
        )
    }
}

export default Header