import './Mojis.css'
import { useState } from 'react';
function Mojis() {

    // 🗺️😺🐙❤️😒🤢👽

    const [emoji, setEmoji] = useState('🫵')
    // const emojis=['😂', '😎', '🌎', '👌', '😶‍🌫️','🤷‍♀️'];
    const emojis = [
        '😂', '😎', '🌎', '👌', '😶‍🌫️', '🤷‍♀️', // Emojis originais
        '🐉', '🦄', '🌈', '🌊', '🔥', '❄️', // Natureza e fantasia
        '👻', '💀', '👽', '🤖', '🎃', '🕷️', // Criaturas e mistério
        '👑', '🎩', '💍', '🕶️', '👠', '👒', // Acessórios e moda
        '🍕', '🍔', '🍣', '🍩', '🍭', '🍫', // Comidas e doces
        '🚀', '🚁', '🚲', '🚤', '🛸', '🚗', // Transportes
        '🏰', '🌉', '🏕️', '🏝️', '🏞️', '🌋', // Lugares e paisagens
        '🎭', '🎨', '🎤', '🎧', '🎮', '🎲', // Entretenimento
        '💖', '💔', '💘', '💝', '💌', '💎', // Emoções e objetos
        '⚔️', '🛡️', '🏹', '🔫', '💣', '🔮', // Ação e aventura
        '🌱', '🌻', '🍀', '🌵', '🌴', '🌺', // Plantas e flores
        '🐶', '🐱', '🐼', '🦁', '🐧', '🐝', // Animais
        '👨‍🚀', '👩‍🎤', '🧙‍♂️', '🧝‍♀️', '🧛‍♂️', '🧟‍♀️', // Personagens
        '🌞', '🌜', '⭐', '☄️', '🌙', '🌛', // Espaço e astros
        '⏳', '⌛', '🕰️', '⏰', '📅', '🎉', // Tempo e celebrações
        '📚', '📖', '🔍', '🖋️', '📝', '📜', // Escrita e conhecimento
        '🔑', '🗝️', '🚪', '🪟', '🏺', '🛏️', // Objetos cotidianos
        '⚡', '🌀', '🌪️', '🌈', '🌊', '🌫️', // Fenômenos naturais
        '🪐', '🚨', '🎡', '🎢', '🏟️', '🗼', // Diversos
        '🧩', '🎯', '🪀', '🪁', '🎣', '🛒', // Brinquedos e hobbies
        '🛠️', '⚙️', '🔧', '🔨', '⛏️', '🪚', // Ferramentas
        '🧭', '📡', '🛰️', '🔭', '🧲', '🧪', // Ciência e tecnologia
        '🦠', '🧬', '🧫', '🧮', '🧿', '🪄', // Simbolos e magia
        '🏴‍☠️', '🏳️‍🌈', '🏴', '🚩', '🎌', '🏁', // Bandeiras e símbolos
        '🪐', '🌌', '🌠', '🛎️', '🧸', '🪆' // Miscelânea
      ];

    function trocarEmoji(){
        let n = Math.floor(Math.random()* emojis.length)
        setEmoji(emojis[n])
    }
    return (
        <div className='container-mojis background'>
            {/* <div class="background"> */}
            <div className='emoji' onClick={trocarEmoji}>{emoji}</div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            {/* </div> */}
        </div>
    )
}

export default Mojis