import Avisos from './Avisos'
import './Body.css'
import Demo1 from './Demo1'
import Demo2 from './Demo2'

function Body() {
  return (
    <div className='container-body'>
        <h1>Empresa de logos</h1>
        <Demo1 />
        <Avisos />
        <Demo2 />
    </div>
  )
}

export default Body