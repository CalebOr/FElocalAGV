import Layout from "../../components/Layout";
import Modal from "../../components/Modal";
import { InfoTwoTone } from "@material-ui/icons";
import CompTarima from "../../components/CompTarima";
import ContentFormTar from "../../components/CompT2";
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
    const [val1, setVal1]=useState(1)
    const [val2, setVal2]=useState(1)
    const [val3, setVal3]=useState(1)
    const [Home, setHome] = useState()

    const [Espacio, setEspacio] =useState(10)
    
    async function changeModal(){
        setModal(!modal)
    }
    async function changeModal2(e,id){
        setTitle(e)
        setInicio(id)
        setModal2(!modal2)
        if(id==2){
            setVal1(0)
        }else if (id==0){
            setVal2(0)
        }else if (id==13){
            setVal3(0)
        }
    }
    async function Liberar(){
        setVal1(1)
        setVal2(1)
        setVal1(1)
    }
    function AGVDatos(e){
        console.log(e)
        const dataJSON = e.data[0];
        let Bateria2 = dataJSON['bat'];
        let IdAGV = dataJSON['bat'];
        console.log('Mi AGV es: '+IdAGV)
        setHome(IdAGV)
        console.log('Mi bateria es: '+ Bateria2)
        if (Bateria2[1]==' BAT1'){
            setBateria('25% (Recarga pronto)')
        }else if(Bateria2[1]==' BAT2'){
            setBateria('50%')
        }else if(Bateria2[1]==' BAT3'){
            setBateria('75%')
        }else if(Bateria2[1]==' BAT4'){
            setBateria('100%')
            console.log('Bateria al 100')
        }else{
            setBateria('Recargando AGV ## %')
        }
    }
    async function RegresarHome(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Authorization': token },
            body: JSON.stringify({
                "tabla": "misiones",
                "datos": {
                "objetivo":1 ,
                "prioridad": 0,
                "idagv": 2,
                "timestamp": 5}
                },
                )
        };  
        console.log('Sending new route',requestOptions)
        fetch('http://localhost:5000/nuevaruta', requestOptions)
        .then(res => res.json())
        .then(res => console.log(res));
    }
   
    useEffect(() => {  
        const requestOptions = {
            method: 'POST',
            headers: { 'Authorization': token },
            body: JSON.stringify({ "thing":"M5GPS" })
        };
        fetch('http://localhost:5000/estadoagv', requestOptions)
        .then(res => res.json())
        .then(res =>AGVDatos(res));

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
            <div className="grid-col-3 flex ">
                <button
                    className="text-[black] text-5xl"
                    onClick={changeModal} 
                ><InfoTwoTone className="text-[#3e84b3]"/></button>
                <div className='flex flex-col items-center text-black w-[100%]'>
                    <p className="text-5xl text-black">AGV 1</p>
                    <p className="text-xl text-gray-600">Nivel de batería: {Bateria}</p>
                    <br/>
                </div>
                <button
                    className="text-[white]  border-[#2ca577] bg-[#3b9174] h-[15%] rounded-md"
                    onClick={()=>RegresarHome()} >Regresar a Home</button>
            </div>
            

            <div className=" w-[75vw] h-[80vh] ">
                    <div className="grid grid-cols-3 gap-4 h-[22vh]">
                        <div className="bg-[#4E5255] border-[white] border-solid border-2" style={{backgroundColor:(val1=='0'?'#923128':'')}}>
                            <CompTarima id={'posE'} aux={1} letra={'Inicio'} action={()=>changeModal2('Ocupar espacio 1','2')} />
                        </div>
                        {/* <div className="bg-[#65686B] border-[white] border-solid border-2" style={{backgroundColor:(val2=='0'?'#923128':'')}}>
                            <CompTarima id={'posF'} aux={1} letra={'2'} action={()=>changeModal2('Ocupar espacio 2','10')}/>
                        </div>
                        <div className="bg-[#4E5255] border-[white] border-solid border-2" style={{backgroundColor:(val3=='0'?'#923128':'')}}>
                            <CompTarima id={'posG'} aux={1} letra={'3'} action={()=>changeModal2('Ocupar espacio 3','13')}/>
                        </div> */}
                    </div>
                    <br/>
                    <br/>
                    <div></div>
                    <button
                        className="text-[white]  border-[#2ca577] bg-[#3b9174] w-[10%] h-[10%] rounded-md"
                        onClick={()=>Liberar()} >Liberar Espacios</button>
                    
                    <div className="text-[black] text-5xl text-right">
                        <span>{Espacio} Espacios Disponibles</span>
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