import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { IconButton } from '@material-ui/core';
import MoldexLogoLigth from '../image/SVG/moldex-logo-color.svg'
import MoldexLogoDark from '../image/SVG/moldex-logo-white.svg'
import {useState, useEffect} from 'react'
import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles';
import { green, pink, yellow } from '@material-ui/core/colors';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import { useTheme } from 'next-themes'
import { useRouter } from 'next/dist/client/router';
import Tooltip from '@material-ui/core/Tooltip';
import UserMenu from './UserMenu';
import Header from '../components/Header'
import MenuIcon from '@material-ui/icons/Menu'
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
        },
        pink: {
        color: theme.palette.getContrastText(pink[500]),
        backgroundColor: pink[500],
        },
        green: {
        color: '#fff',
        backgroundColor: green[500],
    },
}));

function Topbar(props) {
    const router = useRouter()
    const classes = useStyles();
    const [dark, setDark] = useState(false)
    const [logo, setLogo] = useState(MoldexLogoLigth)
    const {systemTheme, theme, setTheme} = useTheme();
    const [userMenu, setUserMenu] = useState(false)
    const [userName, setUserName] = useState('')
    const [avatarImage, setAvatarImage] = useState('')
    async function getname(){
        // const user = await Auth.currentAuthenticatedUser()
        // API.post('smpmoldexapi', '/user', {body:{action : 'userFind', idempleado: user.username }, headers:{Authorization: user.signInUserSession.idToken.jwtToken}})
        // .then(response2=>{
        //     if(response2.status === 200){
        //         const name= response2.data[1]+' '+response2.data[2];
        //         setUserName(name)
        //     }
        // })
        // .catch(error=>{
        //     console.log(error)
        // }) 
        setUserName('Montserrath Olivo')
    }
    useEffect(() => {
        getname()
    }, [])
    useEffect(() => {
        if(theme === 'dark')
            setDark(true)
        else
            setDark(false)
    }, [theme])
    useEffect(() => {
        if(dark){
            setLogo(MoldexLogoDark)
        }else{
            setLogo(MoldexLogoLigth)
        }
    }, [dark])
    return (
        <div className='flex relative justify-between items-center dark:bg-[#1b2635] topbar'>
            <Header location={props.location}/>
            <UserMenu active={userMenu} setUserMenu={setUserMenu} dark={dark}/>
            <Tooltip title='Inicio' className='sm:my-0 md:inline lg:inline  sm:my-0'> 
                <div className='logo-container px-5 cursor-pointer   ' onClick={()=>router.push('/')}>
                    <Image src={logo} objectFit='contain'/>
                </div> 
            </Tooltip>
            
            <div className='hidden lg:flex'>
                <p className='text-black dark:text-white'>{props.location}</p>
            </div>
            <div className='flex justify-around items-center px-2 gap-1'>
            <Tooltip title='icono' className="">
                <div>
                    <IconButton 
                        className="mx-1 "
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={()=>props.action()}
                        
                        sx={{ mr: 2, display: {xs: 'block', sm: 'block',md:'block',lg:'none'}}}
                    >
                        <MenuIcon className="" />
                    </IconButton>
                    
                </div>
            </Tooltip>

            <Tooltip title='User' > 
                <label>{userName}</label>
            </Tooltip>
            <Tooltip title='Notificaciones'> 
                <IconButton>
                    <NotificationsIcon style={{ color: (dark ? '#fff' : '#2c387e') }}/>
                </IconButton>
            </Tooltip>
            <Tooltip title='Usuario'> 
                <IconButton onClick={()=>setUserMenu(!userMenu)}>
                    <Avatar alt="Remy Sharp"  className={classes.green}>
                        AGV
                    </Avatar>
                </IconButton>
            </Tooltip>
        </div>
    </div>
    )
}

export default Topbar
