import React from 'react'

class Welcome extends React.Component {
  render () {
    const {handleChange, handleClick} = this.props
    return (
      <section>
        <label htmlFor="userName">Ingresa tu nombre</label>
        <input id="userName" name="name" type="text" onChange={handleChange} />
        <button onClick={handleClick}>Comenzar</button>
      </section>
    )
  }
}

export default Welcome