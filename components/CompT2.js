import { useState, useEffect } from 'react';
import Select from "react-select";
import axios from "axios";
import Image from 'next/image';
import Swal from 'sweetalert2';
import ReactDOM from "react-dom";

export default function ContentFormTar({id, tarima}) {
    const [val1, setVal1]=useState(0)
    const [val2, setVal2]=useState(0)
    const [val3, setVal3]=useState(0)
    const [val4, setVal4]=useState(0)
    const [val5, setVal5]=useState(0)
    const [val6, setVal6]=useState(0)
    const [val7, setVal7]=useState(0)
    const [val8, setVal8]=useState(0)
    const [val9, setVal9]=useState(0)
    const [val10, setVal10]=useState(0)
    const [val11, setVal11]=useState(0)
    const [val12, setVal12]=useState(0)
    const [hora, setHora]=useState()
    const [dia2, setDia2]=useState('2022-03-04')
    const [inputList, setInputList] = useState([]);


    function setValues(a){
        console.log("Hola: "+a)
        setVal1(a)
    }
    async function LiberarE(){
        setVal2(0)
        setVal3(0)
        setVal4(0)
        setVal5(0)
        setVal6(0)
        setVal7(0)
        setVal8(0)
        setVal9(0)
        setVal10(0)
        setVal11(0)
        setVal12(0)
    }
    async function EnvioDatos(){
        if (dia2==undefined || hora==undefined || val1==undefined){
            Swal.fire({
                icon: 'error',
                title: 'Falta fecha, hora o seleccionar el espacio',
                showConfirmButton: false,
                timer: 1500
              })
        }else{
            if (val1=='1'){
                setVal2(1)
            }else if (val1=='5'){
                setVal3(1)
            }else if (val1=='8'){
                setVal4(1)
            }else if (val1=='8'){
                setVal5(1)
            }else if (val1=='9'){
                setVal6(1)
            }else if (val1=='10'){
                setVal7(1)
            }else if (val1=='11'){
                setVal8(1)
            }else if (val1=='12'){
                setVal9(1)
            }else if (val1=='13'){
                setVal10(1)
            }else if (val1=='14'){
                setVal11(1)
            }else if (val1=='15'){
                setVal12(1)
            }
            let hora2= hora;
            let day= dia2.replace(/-/g,".");
            let format=day+' '+hora2;
            let unix= parseInt((new Date(format).getTime() / 1000).toFixed(0))
            let ruta=id+"_"+val1

            console.log('Mi fecha: ', format,' a Formato unix: '+unix)
            const requestOptions = {
                    method: 'POST',
                    body: JSON.stringify({
                        "tabla": "misiones",
                        "datos": {
                        "objetivo":id ,
                        "prioridad": 0,
                        "idagv": 2,
                        "timestamp": unix}
                        },
                        )
                };  
            const requestOptions2 = {
                method: 'POST',
                body: JSON.stringify({
                    "tabla": "misiones",
                    "datos": {
                    "objetivo":val1 ,
                    "prioridad": 0,
                    "idagv": 2,
                    "timestamp": unix}
                    },
                    )
            }; 
            console.log(requestOptions)
                fetch('http://localhost:5000/enviarruta', requestOptions)
                .then(res => res.json()) 
                .then(function(res2){
                        fetch('http://localhost:5000/enviarruta', requestOptions2)
                        .then(res2 => res2.json()) 
                        .then(res2 => console.log(res2));
                });
                // fetch('https://intxgh6og0.execute-api.us-east-1.amazonaws.com/servs/enviarruta', requestOptions2)
                // .then(res => res.json()) 
                // .then(res => console.log(res));
                Swal.fire({
                    icon: 'success',
                    title: 'Envio de Ruta',
                    showConfirmButton: false,
                    timer: 1500
                  })
        }
    }

    useEffect(()=>{
        axios.post('http://localhost:5000/asknodes')
        .then(res => {
            var listTemp = [];
            for(const x in res.data){
                const description = res.data[x].Description;
                const id = res.data[x].Id;
                if(res.data[x].Description.length>12){
                    continue;
                }
                listTemp.push(<button id={'Esp'+id} className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(id)} style={{backgroundColor:(val1=='1'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>{description}</span></button>);
            }
            setInputList(listTemp);
        });
    }, []);

    return (
        <div>
            <div className="text-colors p-10 rounded">
                <div className='flex items-center gap-3 flex-col'>
                    <div className=' items-center w-[105%] p-1 border-indigo-400 rounded-md border-[2px]'>
                        <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 w-[100%]">
                            <div className="grid justify-items-center m-1">
                                <div className=" justify-between text-justify grid-cols-2 flex ">
                                    <label className="font-light text-center">Fecha de inicio: &nbsp;&nbsp; </label><br/>
                                    <input type="date"  onChange={(e)=>setDia2(e.target.value)} className="w-[200px] h-[25px] focus:outline-none focus:shadow-outline border-[1px] border-[#c5c6d8] dark:text-black dark:bg-[whitesmoke] rounded "/>&nbsp;
                                    <input type="time"  onChange={(e)=>setHora(e.target.value)} className="w-[200px] h-[25px] focus:outline-none focus:shadow-outline border-[1px] border-[#c5c6d8] dark:text-black dark:bg-[whitesmoke] rounded "/>
                                    <br/>
                                </div><br/>
                                <div className="i relative text-center">
                                    <h1 className="text-center">Seleccione el destino</h1>
                                    {tarima==1&&(
                                        <div className='grid grid-cols-3 top-[10%] left-2 text-center h-[40%] absolute w-[70%] z-10 '>
                                            {inputList}
                                        </div>
                                    )}
                                    
                                    
                                    <Image  src={require('../image/posicion.png')}></Image><br/>
                                </div>



                            </div>
                        </div>
                        <br/>
                        <div className='flex flex-col items-center p-1'>
                                <button  type='button' onClick={(e)=>EnvioDatos()} className='h-8 border-[1px] border-yellow-400 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md px-2'>Continuar</button>
                            </div>
                    </div>

                </div>
            </div>
        </div>
    )
}