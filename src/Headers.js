import React from 'react'
import PropTypes from 'prop-types'
import './App.css'
import Button from './Button'

const Headers = ({title, onAdd, showAdd}) => {

      // const onClick = () => {
      //       console.log('Click')
      // }

      return (
            <header className='header'>
                  <h1>{title}</h1>
                  <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
            </header>
      )
}

Headers.defaultProps = {
      title:'Task Tracker'
}

Headers.propTypes={
      title:PropTypes.string.isRequired,
}

export default Headers


