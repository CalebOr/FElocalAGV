import { useState, useEffect } from 'react';
import Select from "react-select";
import axios from "axios";
import Image from 'next/image';
import Swal from 'sweetalert2';
import ReactDOM from "react-dom";

export default function ContentFormTar({id, childToParent}) {
    const [inputList, setInputList] = useState([]);

    useEffect(()=>{
        axios.post('http://localhost:5000/asknodes')
        .then(res => {
            var listTemp = [];
            for(const x in res.data){
                const description = res.data[x].Description;
                if(res.data[x].Description.length>12){
                    continue;
                }
                res.data[x].caller = id;
                listTemp.push(<button className='border-4 border-solid border-indigo-50' onClick={(e)=>childToParent(res.data[x])}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>{description}</span></button>);
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
                                <div className="i relative text-center">
                                    <h1 className="text-center">Seleccione el destino</h1>
                                    <div className='grid grid-cols-3 top-[10%] left-2 text-center h-[40%] absolute w-[70%] z-10 '>
                                        {inputList}
                                    </div>
                                    <Image  src={require('../image/posicion.png')}></Image><br/>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}