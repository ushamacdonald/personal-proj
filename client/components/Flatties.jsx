import React from 'react'


const Flatties = ({flatties, setColour}) => {
  const renderFlattie = ({id, name, description, at_home, image}, key) => (
    <div key={id} className="flattie column">
      <h1 className="title is-3 flattie_title">{name}</h1>
      <img className="flattie_pic" src={image} />
      <p className="flattieDescr">{description}</p>
      <a className="button is-primary" onClick={() => setColour(button)}>Home</a>
    </div>
  )
  return (
    <div className="flattiesContainer columns">
      <div className="column"></div>
      <div className="column is-7 box">
        <div className="columns">
          {flatties.map(renderFlattie)}
        </div>

      </div>
      <div className="column"></div>
    </div>
  )
}

export default Flatties
