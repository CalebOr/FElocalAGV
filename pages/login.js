import React, {useState, useEffect} from 'react';
import {Auth} from 'aws-amplify';
import { useRouter } from 'next/dist/client/router';
import BgImage from '../image/bg-login.png';
import Image from 'next/image'
import {withSSRContext, Storage, API} from 'aws-amplify';
import MoldexLogo from '../image/SVG/moldex-svg.svg';
import MoldexLogoVertival from '../image/SVG/moldex-color.svg';
import {VscLoading} from 'react-icons/vsc';
import Header from '../components/Header';
import Swal from 'sweetalert2';
function login(token) {
    const router = useRouter()
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [empleado, setEmpleado]=useState()
    const [name, setName] =useState([])
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Authorization': 'eyJraWQiOiJBSlpUVjNGOEpaS003dVIwcXk4ZFwvaXFvRVQzQlwvQ3VMT1dHaVoxN0U0NlU9IiwiYWxnIjoiUlMyNTYifQ.eyJvcmlnaW5fanRpIjoiZWNmNTk1NTQtMDA5MS00Mjk1LTg5YWUtZTQ1OWIxNzk5ZWIxIiwic3ViIjoiMzlhYTdiOGItM2Y1Yy00NWMyLTljMzItNmU2OTZlOTdmZmJiIiwiYXVkIjoiMWJjcjdrYjRuNWFnYmFwcXNia3RpYWY4aHEiLCJldmVudF9pZCI6ImFlNmRiYjJiLTRkODItNDUyOS05YTgwLWI3MWY0NGU5M2FkNiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQyMDkyNTk3LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9RTVh0M3ZDN3EiLCJjb2duaXRvOnVzZXJuYW1lIjoiMTAxMDg0MDYiLCJleHAiOjE2NDIwOTYxOTcsImlhdCI6MTY0MjA5MjU5NywianRpIjoiOWI2NTYzOGUtMzBiMy00NTlmLWE4MjEtZGQ2OWU5MDIxNDcyIn0.YKL0U1-nv3OAruIqBinHN9uAxNegr5St87z_ZebmfJRXzrLFvghEr-1hdi9hOUYiOOmt1jca2yIFxzqQpSpiLFkb5mBEt1dxEEqMQslt5k-JEzEG7whKc8cl94SQlYjIECc7Z0_gffrg48MQagIRKFHTF3OKse8kd6kdT5bauXVS54gVBDk-ix5GaUJOq0nUHyqn2UzK4QCVf0rVyq2V-F0uGtpgTqwpGVo1UQ6E4StBL_FQNl6BXmdTiGzdzIsCYwu8MX-HWIMO9frDQ8hDQh9BbYdYREWGRmTqcuj4TeDF_0-cDNKU_YFUw-JtwQcAkX07VssMl2PK0Zl5bgEaHg' },
        //     body: JSON.stringify({ "thing":"M5GPS" })
        // };  
        //  fetch('https://intxgh6og0.execute-api.us-east-1.amazonaws.com/servs/leer', requestOptions)
        // .then(res => res.json()) 
        // .then(res => setName(res));
        // fetch('https://pokeapi.co/api/v2/pokemon/ditto') 
        // .then(res => res.json()) 
        // .then(res => setName(res));
    }, []);
    const something=(event)=> {
        if (event.keyCode === 13) {
            console.log('enter')
            Login()
        }
    }
  
    async function Login(){
        setLoading(true)
        console.log('Iniciando sesion')
        console.log(user, pass)
        Auth.signIn(user, pass).then(response=>{
            console.log(response.username)
            setEmpleado(response.data)
            if(response.challengeName === 'NEW_PASSWORD_REQUIRED'){
                router.push('/register')
            }else{
                console.log('Repaso para mi login: ',user, pass,response.signInUserSession.idToken.jwtToken)
                Swal.fire({
                    icon: 'success',
                    title: 'Iniciando Sesión',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  console.log(name)
                  router.push('/moldex/mapa')
                // API.post('smpmoldexapi', '/user', {body:{action : 'userFind', idempleado: user }, headers:{Authorization: response.signInUserSession.idToken.jwtToken}})
                // .then(response2=>{
                //     if(response2.status === 200){
                //         console.log('Datos encontrados')
                //         console.log(response2.data[5])
                //         if (response2.data[5]=='1'){
                //             router.push('/home')
                //         }else if (response2.data[5]=='3'){
                //             if (response2.data[9]=='1'){
                //                 router.push('/')
                //             }else{
                //                 router.push('/admin/personas/indexpersonas')
                //             }
                //         }else if(response2.data[5]=='4'){
                //             router.push('/super/graficas')
                //         }
                //     }else{
                //         console.log('Datos no encontrados')
                //     }
                // })
                // .catch(error=>{
                //     console.log(error)
                // }) 
                //router.push('/')
            }
        }).catch(error=>{
            setLoading(false)
            Swal.fire({
                icon: 'error',
                title: 'Error - '+error.message,
                showConfirmButton: false,
                timer: 2000
              })
        })
    }
    return (
        <div className='flex relative h-[100vh] gap-[5vh] w-[100vw] overflow-hidden items-center justify-center flex-col'>
            <Header location='Login'/>
            <div className='h-[100vh] w-[100vw] bg-gray-200 absolute z-0'>
                <Image src={BgImage} layout='fill' objectFit='cover'/>
            </div>
            <div className='relative flex flex-col w-[100%] items-center justify-center gap-5 lg:flex-row'>
                <div className='h-[20vh] w-[20vh] p-2 hidden lg:inline lg:h-[40vh] lg:w-[40vh]'>
                    <Image src={MoldexLogo} layout='responsive' objectFit='cover'/>
                </div>
                <div className='flex flex-col items-center w-[70%] gap-5 rounded-3xl border-[1px] p-10 lg:w-[50vh] bg-white lg:py-20'>
                    <div className='h-[20vh] w-[20vh] p-2 lg:hidden'>
                        <Image src={MoldexLogoVertival} layout='responsive' objectFit='cover'/>
                    </div>
                    <h1 className='text-3xl text-[gray-500]'>Bienvenido</h1>
                    <input onChange={(e)=>setUser(e.target.value)} value={user}  className='border-[1px] px-2 border-[#525050ce] h-10 w-[80%] rounded-md' type='number' placeholder='Nombre de usuario'></input>
                    <input onChange={(e)=>setPass(e.target.value)} onKeyDown={(e) => something(e)} value={pass} className='border-[1px] px-2 border-[#525050ce] h-10 w-[80%] rounded-md' type='password' placeholder='Contraseña'></input>
                    <button onClick={()=>Login()} className='border-[1px] h-10 w-[80%] bg-[#2e59d9] border-[#2653d4] hover:bg-[#4e73df] rounded-md text-white flex items-center justify-center relative' type='button'>Ingresar {(loading && (<VscLoading className='absolute right-2'/>))}</button>
                    <div className='py-2 border-t-[1px] border-b-[1px] border-[#525050ce] w-[80%] flex items-center justify-center'>
                        {/* <a className='text-blue-900 cursor-pointer'> */}
                            {/* ¿Olvidaste tu contraseña? */}
                        {/* </a> */}
                    </div>
                    <p className='text-center lg:py-2'>
                        2022 MOLDEX © - Innovating with you. Derechos reservados.
                    </p>
                    <a className='text-blue-900 cursor-pointer lg:py-2'>
                        Aviso de Privacidad y Confidencialidad
                    </a>
                </div>
            </div>
        </div>
    )
}

export default login
