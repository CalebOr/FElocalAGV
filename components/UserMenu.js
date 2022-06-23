import Fade from 'react-reveal/Fade';
import CloseIcon from '@material-ui/icons/Close';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const ListItem = styled.div`
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
function UserMenu({active, setUserMenu, dark}) {
  const router = useRouter()
    async function Logout(){
        router.push('/login')
    }

    return (
        <div className={('absolute right-2 top-[9vh] dark:text-white ' + (!active && 'hidden')) }>
            <Fade right>
                <div className='relative w-[40vw] lg:w-[20vw] border-[2px] z-50 rounded-md bg-white border-[#98bbec] dark:bg-[#1b2635]'>
                    <ListItem className='px-2'>
                        <p>Usuario</p>
                        <div onClick={()=>setUserMenu(!active)} className='dark:hover:bg-[#293c57] hover:bg-[#98bbec] cursor-pointer'>
                            <CloseIcon/>
                        </div>
                    </ListItem>
                    <ListItem onClick={()=>router.push('/profile')} className='dark:hover:bg-[#293c57] hover:bg-[#98bbec] cursor-pointer px-2 rounded-md'>
                        <p>Mi perfil</p>
                        <AccountBoxIcon/>
                    </ListItem>
                    <ListItem onClick={()=>Logout()} className='dark:hover:bg-[#293c57] hover:bg-[#98bbec] cursor-pointer px-2 rounded-md'>
                        <p>Cerrar sesión</p>
                        <ExitToAppIcon/>
                    </ListItem>
                </div>
            </Fade>
        </div>
    )
}

export default UserMenu
