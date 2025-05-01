import './Body.css'
import Sorteio from './Sorteio'

function Body() {
  return (
    <div className="container-body">
        <h2>Venha para a inauguração da Farmárcia</h2>
        <p>Sua farmácia querida está sob nova direção. Venha para a festa de lançamento no dia dd/mm/aaaa!</p>


        <p>Levantamento interesse no curso gratuito. Link da planilha em "Avisos" no AVA.</p>
        <Sorteio />
    </div>
  )
}

export default Body