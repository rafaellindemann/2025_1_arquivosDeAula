import React from 'react'

function Usuario(props) {
  return (
    <div>
        {console.log(props)}
        Nome de usuário: {props.username}
    </div>
  )
}

export default Usuario