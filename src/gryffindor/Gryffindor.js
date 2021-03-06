import Header from '../header/Header'
import './Gryffindor.scss'
import { useSelector } from 'react-redux'
import Userhome from '../userhome/Userhome'
import Popup from '../popup/Popup';
import SearchUser from '../searchuser/SearchUser';

function Gryffindor () {
	const pop = useSelector((state) => state.popupReducer);
	const stat = useSelector((state) => state.popupstatusReducer);
	const chang = useSelector((state) => state.changeReducer);
	return ( 
		<div className='Gryffindor'>
			<Header />
			{chang.length > 0 ? <SearchUser /> : <Userhome />}
			{Object.keys(pop).length > 0 && stat && <Popup />}
		</div>
	)
}

export default Gryffindor