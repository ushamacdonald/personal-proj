import React from 'react'


const Flatties = ({flatties}) => {
  const renderFlattie = ({name, description, at_home, image}, key) => (
    <div className="flattie">
      <h1>{name}</h1>
      <img src={image} />
    </div>
  )
  return (
    <div className="container">
      <h2>ppl</h2>
      {flatties.map(renderFlattie)}
    </div>
  )
}

export default Flatties
