import React from 'react'


const Flatties = ({flatties}) => {
  const renderFlattie = ({id, name, description, at_home, image}, key) => (
    <div key={id} className="flattie">
      <h1>{name}</h1>
      <img className="flattie_pic" src={image} />
      <p className="flattieDescr">{description}</p>
    </div>
  )
  return (
    <div className="flattiesContainer">
      {flatties.map(renderFlattie)}
    </div>
  )
}

export default Flatties
