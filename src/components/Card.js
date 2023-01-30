import data from '../datas/logements.json' 
import {Link} from 'react-router-dom'

// export function Card({children}) {
// 	console.log(children)
// 	return 	children
// }

export function Card() {
	return 	<div>
    <ul className='houseListContainer'>
    {data.map((house) => (
       <li key={house.id} className='houseListCard'>
          <Link to ={house.id} className='houseLink'>
             <img className="img" src={house.cover} alt="logement" />
             <p className='houseTitles'>{house.title}</p>
          </Link>
       </li>
))}
    </ul>
</div>
}


