import { useEffect } from 'react'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import {supprimerFruit} from './Actions/actionsFruit'
import './listFruits.css'
export default function ListFruits2(){

const fruits=useSelector(data=>data.fruits)
const dispatch= useDispatch()
useEffect(()=>console.log('la liste est mis ajour'))

return (<div className='fruits'>
    <h2><i>*Composant liste fruits*</i> </h2>
     <ul>
    {fruits.map((fruit,index)=>{ return (<div>
    <li key={index}>{fruit}</li>
    <button onClick={()=>dispatch(supprimerFruit(fruit))}>Supprimer</button>
    </div>)
})}
    
    
    </ul>
</div>)
}