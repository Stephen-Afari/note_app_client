import './header.component.scss'
import { useSelector } from 'react-redux';
import { selectUsers } from '../../store/users/users.selector';
const Header = ()=>{
  // making use of selectors to extract users
  const users = useSelector(selectUsers);
  console.log(users)
  return (
    <h1 className='headerText'>{`${users.name}'s Dairy`}</h1>
  )
}

export default Header;