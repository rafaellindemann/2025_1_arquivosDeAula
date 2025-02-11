import React, { useState } from 'react'

function Story() {
    const [emoji, setEmoji] = useState('Clique aqui')
    const emojis=['😂', '😎', '🌎', '👌', '😶‍🌫️'];
    const icones=['flor.svg','sol.svt']
    const [icone, setIcone] = useState('')

    const reactIcons = [<Icone1 />, <Icone2 />]
    const [reactIcon, setReactIcon] = useState()


    function sortear(){
        let n = Math.floor(Math.random()* emojis.length)
        setEmoji(emojis[n])

        setUsados([...usados, atual])
    }
  return (
    
    <div>
        {reactIcon}
        <button onClick={sortear}>{emoji}</button>
        <img src={icone} alt="" />
    </div>
  )
}

export default Story