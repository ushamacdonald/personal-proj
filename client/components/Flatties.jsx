import React from 'react'


const Flatties = ({flatties}) => {
  const renderFlattie = ({id, name, description, at_home, image}, key) => (
    <div key={id} className="flattie">
      <h1>{name}</h1>
      <img className="flattie_pic" src={image} />
      <p className="flattieDescr">{description}</p>
      <button>Home</button>
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
