import Layout from "../../components/Layout";
import Modal from "../../components/Modal";
import { InfoTwoTone } from "@material-ui/icons";
import CompTarima from "../../components/CompTarima";
import ContentFormTar from "../../components/CompT2";
import Image from "next/image";
import Select from "react-select";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';


function Tarimas(){
    const [modal, setModal]= useState(false);
    const [modal2, setModal2]= useState(false);
    const [modal3, setModal3]= useState(false);
    const [start, setStart]= useState();
    const [end, setEnd]= useState();
    const [tarima, setTarima]=useState(1)
    const [title, setTitle] =  useState('')
    const [Bateria, setBateria] = useState('')
    const [val1, setVal1]=useState(1)
    const [val2, setVal2]=useState(1)
    const [Home, setHome] = useState()
    const [data, setData] = useState('')
    const [selectingStart, setSelectingStart] = useState(true)

    const [Espacio, setEspacio] =useState(10)
    
    async function changeModal(){
        setModal(!modal)
    }
    async function changeModal2(e){
        console.log("e: "+e)
        setTitle(e)
        setModal2(!modal2)
        if(e == 'Inicio'){
            setVal1(0)
        }else if(e == 'Fin'){
            setVal2(0)
        }
    }
    async function changeModal3(e){
        console.log("e: "+e)
        setTitle(e)
        setModal3(!modal3)
        if(e == 'Inicio'){
            setVal1(0)
            setSelectingStart(true)
        }else if(e == 'Fin'){
            setVal2(0)
            setSelectingStart(false)
        }
    }

    async function sendMission(){
        axios.post('http://localhost:5000/nuevaruta',{
            "start": start,
            "end": end
        })
        .then(res => {
            console.log(res.data)
            Swal.fire({
                icon: 'success',
                title: 'Ruta enviada',
                showConfirmButton: false,
                timer: 1500
            })
        })
        .catch(err => {
            console.log(err)
            Swal.fire({
                icon: 'error',
                title: 'Error al crear ruta',
                showConfirmButton: false,
                timer: 1500
              })
        });
    }

    const childToParent = (childdata) => {
        console.log("Child says: ",childdata);
        if(childdata.caller == 'start'){
            setStart(childdata.Id)
        }else if(childdata.caller == 'end'){
            setEnd(childdata.Id)
        }
        setModal2(false);
        setModal3(false);
    }

    function AGVDatos(e){
        console.log("AGVDatos(e):",e)
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
   
    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({ "thing":"M5GPS" })
        };
        fetch('http://localhost:5000/estadoagv', requestOptions)
        .then(res => res.json())
        .then(res =>AGVDatos(res));
        const requestOptions2 = {
            method: 'POST',
            body: JSON.stringify({ "thing":"M5GPS" })
        };
        fetch('http://localhost:5000/actualizarNodos', requestOptions2)
        .then(res => res.json())
        .then(res =>console.log(res));
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
                <ContentFormTar id={"start"} childToParent={childToParent}/>
            </Modal>
            <Modal active={modal3} title={title} action={changeModal3}>
                <ContentFormTar id={"end"} childToParent={childToParent}/>
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
                {/* <button
                    className="text-[white]  border-[#2ca577] bg-[#3b9174] h-[15%] rounded-md"
                    onClick={()=>RegresarHome()} >Regresar a Home</button> */}
            </div>
            
            <div className=" w-[75vw] h-[80vh] ">
                <div className="grid grid-cols-3 gap-4 h-[22vh]">
                    <div className="bg-[#4E5255] border-[white] border-solid border-2" style={{backgroundColor:(val1=='0'?'#4F91BB':'')}}>
                        <CompTarima id={'posE'} aux={1} letra={'Inicio'} action={()=>changeModal2('Inicio')} />
                    </div>
                    <div className="bg-[#65686B] border-[white] border-solid border-2" style={{backgroundColor:(val2=='0'?'#4F91BB':'')}}>
                        <CompTarima id={'posF'} aux={1} letra={'Fin'} action={()=>changeModal3('Fin')}/>
                    </div>
                </div>
                <br/>
                <br/>
                <div></div>
                <button
                    className="text-[white]  border-[#2ca577] bg-[#3b9174] w-[10%] h-[10%] rounded-md"
                    onClick={()=>sendMission()} >Enviar misión</button>
                
                <div className="text-[black] text-5xl text-right">
                    <span>{Espacio} Espacios Disponibles</span>
                </div>
            </div>

        </Layout>
    )
}
  
  export default Tarimas