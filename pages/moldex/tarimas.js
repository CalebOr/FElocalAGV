import Layout from "../../components/Layout";
import Modal from "../../components/Modal";
import { InfoTwoTone } from "@material-ui/icons";
import CompTarima from "../../components/CompTarima";
import ContentFormTar from "../../components/ContentFormTar";
import {Auth, withSSRContext,API} from 'aws-amplify';
import Image from "next/image";
import Select from "react-select";
import { useEffect, useState } from "react";
function Tarimas({token}){
    const [modal, setModal]= useState(false);
    const [modal2, setModal2]= useState(false);
    const [modalT, setModalT]=useState(false);
    const [inicio, setInicio] =useState('')
    const [tarima, setTarima]=useState(1)
    const [title, setTitle] =  useState('')
    const [Bateria, setBateria] = useState('')
    const options=[
        {label:'Tarimas 1.4x1.2 mts', value:'1'},
        {label:'Tarimas 1.2x1.2 mts', value:'2'}
    ]
    async function changeModal(){
        setModal(!modal)
    }
    async function changeModal2(e,id){
        setTitle(e)
        setInicio(id)
        setModal2(!modal2)
    }
    function AGVDatos(e){
        console.log(e)
        let rplazo= e.replace(/["{}]/g,"")
        let separarD=rplazo.split(',')
        console.log("Mis datos: "+separarD)
        let Bateria2=separarD[12].split(':');
        let x=separarD[1].split(':');
        let y=separarD[2].split(':');
        console.log('Mi X: ',x[1],' Mi Y: ',y[1])
        console.log('Mi bateria es: '+ Bateria2[1])
    }
    async function changeModal3(e){
        setTarima(e)
        setModalT(!modalT)
        AGVDatos()
    }
    useEffect(() => {  
        const requestOptions = {
            method: 'POST',
            headers: { 'Authorization': token },
            body: JSON.stringify({ "thing":"M5GPS" })
        };  
        fetch('https://intxgh6og0.execute-api.us-east-1.amazonaws.com/servs/leer', requestOptions)
        .then(res => res.json()) 
        .then(res =>AGVDatos(res.body));

        
    }, [])
    return(
        <Layout>
            <Modal active={modal} title='Posición de las Tarimas' action={changeModal}>
                <br/>
                <Image src={require('../../image/tarimas.png')}></Image>
                <br/>
                <br/>
            </Modal>
            <Modal active={modal2} title={title} action={changeModal2}>
                <ContentFormTar id={inicio} tarima={tarima} token={token}/>
            </Modal>
            <Modal active={modalT} title='Escoge el tipo de Tarima a acomodar' action={changeModal3}>
                <br/>
                <div className="grid-cols-2 flex">
                    <label className="font-light w-[15%] text-center">Tipo de tarima: </label><br/>
                    <Select className=" w-[80%] border-[1px] border-[#c5c6d8] rounded"
                    options={options}
                    getOptionLabel={(option)=>option.label}
                    getOptionValue={(option)=>option.value}
                    onChange={(e)=>changeModal3(e.value)} />
                </div>
                <br/>
            </Modal>
            <button
                className="text-[black]"
                onClick={changeModal} 
            ><InfoTwoTone className="text-[#3e84b3]"/></button>
            <div className='flex flex-col items-center text-black w-[100%]'>
                <p>AGV 1</p>
                <p>Nivel de batería 100%</p>
            </div>
            <div className=" w-[75vw] h-[80vh] ">
                <div className="grid grid-cols-4 gap-3 h-[22vh]">
                        <div className="bg-[#4E5255] border-[white] border-solid border-2">
                            <CompTarima id={'posA'} aux={1} letra={'A'} action={()=>changeModal2('Ocupar espacio A','A')}/>
                        </div>
                        <div className="bg-[#65686B] border-[white] border-solid border-2">
                            <CompTarima id={'posB'} aux={1} letra={'B'} action={()=>changeModal2('Ocupar espacio B','B')}/>
                        </div>
                        <div className="bg-[#4E5255] border-[white] border-solid border-2">
                            <CompTarima id={'posC'} aux={1} letra={'C'} action={()=>changeModal2('Ocupar espacio C','C')}/>
                        </div>
                        <div className="bg-[#65686B] border-[white] border-solid border-2">
                            <CompTarima id={'posD'} aux={1} letra={'D'} action={()=>changeModal2('Ocupar espacio D','D')}/>
                        </div>
                    </div>
                    <br/>
                    <div className="grid grid-cols-3 gap-4 h-[22vh]">
                        <div className="bg-[#4E5255] border-[white] border-solid border-2">
                            <CompTarima id={'posE'} aux={1} letra={'E'} action={()=>changeModal2('Ocupar espacio E','E')}/>
                        </div>
                        <div className="bg-[#65686B] border-[white] border-solid border-2">
                            <CompTarima id={'posF'} aux={1} letra={'F'} action={()=>changeModal2('Ocupar espacio F','F')}/>
                        </div>
                        <div className="bg-[#4E5255] border-[white] border-solid border-2">
                            <CompTarima id={'posG'} aux={1} letra={'G'} action={()=>changeModal2('Ocupar espacio G','G')}/>
                        </div>
                    </div>
                    <br/>
                    <div className="grid grid-cols-4 gap-4 h-[22vh]">
                        <div className="bg-[#65686B] border-[white] border-solid border-2">
                            <CompTarima id={'posH'} aux={1} letra={'H'} action={()=>changeModal2('Ocupar espacio H','H')}/>
                        </div>
                        <div className="bg-[#4E5255] border-[white] border-solid border-2">
                            <CompTarima id={'posI'} aux={1} letra={'I'} action={()=>changeModal2('Ocupar espacio I','I')}/>
                        </div>
                        <div className="bg-[#65686B] border-[white] border-solid border-2">
                            <CompTarima id={'posJ'} aux={1} letra={'J'} action={()=>changeModal2('Ocupar espacio J','J')}/>
                        </div>
                        <div className="bg-[#4E5255] border-[white] border-solid border-2">
                            <CompTarima id={'posK'} aux={1} letra={'K'} action={()=>changeModal2('Ocupar espacio K','K')}/>
                        </div>
                    </div>
                    <br/>
                    <div className="text-[black] text-5xl text-right">
                        <span>48 Espacios Disponibles</span>
                    </div>
            </div>

        </Layout>
    )
}
  
  export default Tarimas
  export async function getServerSideProps({req}) {
    const {Auth,API} = withSSRContext({req});
    try{
        const user = await Auth.currentAuthenticatedUser();
        
        return{
            props:{
                authenticated: true,
                user: user.username,
                token: user.signInUserSession.idToken.jwtToken
            }
        }
    }catch(err){
        return{
            props:{authenticated: false}
        }
    }
  }
  