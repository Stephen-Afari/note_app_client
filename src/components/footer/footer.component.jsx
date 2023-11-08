import './footer.component.scss'
import { selectUsers } from '../../store/users/users.selector';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
const Footer = ()=>{
const user = useSelector(selectUsers)
    return(
        <div className='footer'>
            <p className='footertext'>{ `${user.name}'s Email:${user.email}`}</p>
        </div>
    )
}

export default Footer;