import React from 'react'
import './checkbox.css'

const Checkbox = () => {
    return (
        <label className="container">Запомнить
          <input type="checkbox"/>
          <span className="checkmark"></span>
        </label>
    )
}

export default Checkbox 