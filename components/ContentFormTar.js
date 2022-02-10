import { useState } from 'react';
import Select from "react-select";
import Image from 'next/image';

export default function ContentFormTar({id}) {
    const [exh, setExh] = useState('')
    const [std, setStd] = useState('')
    const [rq, setRq] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [costo, setCosto] = useState('')
    const [item, setItem] = useState('')
    const [l1, setL1] = useState('')
    const [ma, setMa] = useState('')
    const [mie, setMie] = useState('')
    const [jue, setJue] = useState('')
    const [vie, setVie] = useState('')
    const [sab, setSab] = useState('')
    const [dom, setDom] = useState('')
    const [l2, setL2] = useState('')
    const [acum, setAcum] = useState('')
    const [rest, setRest] = useState('') 
    const options=[
        {label:'Tarimas 1.4x1.2 mts', value:'1'},
        {label:'Tarimas 1.2x1.2 mts', value:'2'}
    ]


    return (
        <div> 
            <div className="text-colors p-10 rounded"> 
                <div className='flex items-center gap-3 flex-col'>
                    <div className=' items-center w-[105%] p-1 border-indigo-400 rounded-md border-[2px]'>
                        <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 w-[100%]">
                            <div className="grid justify-items-center m-1">
                                <div className='flex flex-col items-center  w-[100%]'>
                                    <p>AGV 1</p>
                                    <p>Nivel de batería 100%</p>
                                </div>
                                <div className="">
                                    <label className="p-[10px] font-light">Tipo de tarima</label><br/>
                                    <Select className="w-[200px] h-[25px] focus:outline-none focus:shadow-outline border-[1px] border-[#c5c6d8] dark:text-black dark:bg-[whitesmoke] rounded" 
                                    options={options}
                                    getOptionLabel={(option)=>option.label}
                                    getOptionValue={(option)=>option.value}
                                    onChange={(e)=>setExh(e.value)} />
                                    
                                </div><br/>
                                <div className="i">
                                    <label className="font-light">Seleccione el destino</label><br/>
                                    <Image src={require('../image/posicion.png')}></Image><br/>
                                </div>
                                <div className=" ">
                                    <label className="font-light">Fecha de inicio </label><br/>
                                    <input type="date"  onChange={(e)=>setCosto(e.target.value)} className="w-[200px] h-[25px] focus:outline-none focus:shadow-outline border-[1px] border-[#c5c6d8] dark:text-black dark:bg-[whitesmoke] rounded "/><br/>
                                </div>
                                
                                
                            </div>
                        </div>
                        <div className='flex flex-col items-center p-1'>
                                <button  type='button' className='h-8 border-[1px] border-yellow-400 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md px-2'>Continuar</button>
                            </div>
                    </div>
                    
                </div>
            </div> 
        </div>
    )
}