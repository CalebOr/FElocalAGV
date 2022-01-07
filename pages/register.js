import {useState} from 'react';
import {Auth} from 'aws-amplify';
import BgImage from '../image/bg-login.png';
import Image from 'next/image';
import Header from '../components/Header';
import { useRouter } from 'next/dist/client/router';
import MoldexLogoVertival from '../image/SVG/moldex-color.svg';
import Swal from 'sweetalert2';

function register() {
    const router = useRouter()
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [newp, setNewp] = useState('')

    async function Login(){
        console.log('Iniciando sesion')
        console.log(user, pass)
        Auth.signIn(user, pass).then(response=>{
            if(response.challengeName == 'NEW_PASSWORD_REQUIRED'){
                Auth.completeNewPassword(response, newp).then(res=>{
                    console.log(res)
                    Swal.fire({
                        icon: 'success',
                        title: 'Cambio de contraseña exitoso',
                        showConfirmButton: false,
                        timer: 2000
                      })
                      setTimeout(function(){
                        router.push('/')
                     }, 2000);
                    
                }).catch(error=>{
                    Swal.fire({
                        icon: 'error',
                        title: 'Error en el cambio de contraseña, '+error,
                        showConfirmButton: false,
                        timer: 3000
                      })
                })
            }else{
                Swal.fire({
                    icon: 'info',
                    title: 'Ya se realizó el cambio de contraseña',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  setTimeout(function(){
                    router.push('/')
                 }, 1500);
            }
        }).catch(error=>{
            Swal.fire({
                icon: 'error',
                title: error,
                showConfirmButton: false,
                timer: 2000
              })
        })
    }
    return (
        <div className='flex relative h-[100vh] gap-[5vh] w-[100vw] overflow-hidden items-center justify-center flex-col'>
            <Header location='Login'/>
            {/* <Alertas setAlert={setAlert} severity={alert.severity} title={alert.title} message={alert.message} messageStrong={alert.messageStrong} isOpen={alert.isOpen}/> */}
            <div className='h-[100vh] w-[100vw] bg-gray-200 absolute z-0'>
                <Image src={BgImage} layout='fill' objectFit='cover'/>
            </div>
            <div className='relative flex flex-col w-[100%] items-center justify-center gap-5 lg:flex-row'>
                <div className='flex flex-col items-center w-[70%] gap-5 rounded-3xl border-[1px] p-10 lg:w-[50vh] bg-white lg:py-20'>
                    <div className='h-[20vh] w-[20vh] p-2 '>
                        <Image src={MoldexLogoVertival} layout='responsive' objectFit='cover'/>
                    </div>
                    <h1 className='text-3xl text-[gray-500]'>Cambio de contraseña</h1>
                    <input onChange={(e)=>setUser(e.target.value)} value={user}  className='border-[1px] px-2 border-[#525050ce] h-10 w-[80%] rounded-md' type='number' placeholder='Ingresa tu usuario'></input>
                    <input onChange={(e)=>setPass(e.target.value)} value={pass} className='border-[1px] px-2 border-[#525050ce] h-10 w-[80%] rounded-md' type='password' placeholder='Ingresa tu contraseña temporal'></input>
                    <input onChange={(e)=>setNewp(e.target.value)} value={newp} className='border-[1px] px-2 border-[#525050ce] h-10 w-[80%] rounded-md' type='password' placeholder='Ingesa una nueva contraseña (8 caracteres minimo, al menos 1 número y un caracter especial)'></input>
                    <button onClick={()=>Login()} className='border-[1px] h-10 w-[80%] bg-[#2e59d9] border-[#2653d4] hover:bg-[#4e73df] rounded-md text-white flex items-center justify-center relative' type='button'>Ingresar</button>
                    <p className='text-center lg:py-2'>
                        2022 MOLDEX © - Innovating with you. Derechos reservados.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default register