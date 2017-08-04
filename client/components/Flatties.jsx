import React from 'react'


const Flatties = ({flatties, setColour}) => {
  const renderFlattie = ({id, name, description, at_home, image}, key) => (
    <div key={id} className="flattie">
      <h1 className="title is-3">{name}</h1>
      <img className="flattie_pic" src={image} />
      <p className="flattieDescr">{description}</p>
      <button id="button" onClick={() => setColour(button)}>Home</button>
    </div>
  )
  return (
    <div className="flattiesContainer columns">
      <div className="column"></div>
      <div className="column is-two-thirds">
        {flatties.map(renderFlattie)}
      </div>
      <div className="column"></div>
    </div>
  )
}

export default Flatties
