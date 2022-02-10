import { useState, useEffect } from 'react';
import Select from "react-select";
import Image from 'next/image';

export default function ContentFormTar({id, tarima,token}) {
    const [val1, setVal1]=useState(0)
    const [val2, setVal2]=useState(0)
    const [hora, setHora]=useState()
    const [dia2, setDia2]=useState()


    function setValues(a){
        console.log("Hola: "+a)
        setVal1(a)
    }
    async function EnvioDatos(){
        let hora2= hora;
        let day= dia2.replace(/-/g,".");
        let format=day+' '+hora2;
        let unix= parseInt((new Date(format).getTime() / 1000).toFixed(0))
        let ruta=id+"_"+val1

        console.log('Mi fecha: ', format,' a Formato unix: '+unix)
        console.log('Mi token: '+token)
        const requestOptions = {
                method: 'POST',
                headers: { 'Authorization': token },
                body: JSON.stringify({ "AGV":"1", "ruta": ""+ruta+"",  "momento": ""+unix+""  })
            };  
        console.log(requestOptions)
            //  fetch('https://intxgh6og0.execute-api.us-east-1.amazonaws.com/servs/leer', requestOptions)
            // .then(res => res.json()) 
            // .then(res => console.log(res));
    }
    useEffect(()=>{

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
                                        <div className='grid grid-cols-7 top-[10%] left-2 text-center h-[40%] absolute w-[70%] z-10 '>
                                            <button id='Esp1' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(1)} style={{backgroundColor:(val1=='1'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>1</span></button>
                                            <button id='Esp2' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(2)} style={{backgroundColor:(val1=='2'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>2</span></button>
                                            <button id='Esp3' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(3)} style={{backgroundColor:(val1=='3'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>3</span></button>
                                            <button id='Esp4' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(4)} style={{backgroundColor:(val1=='4'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>4</span></button>
                                            <button id='Esp5' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(5)} style={{backgroundColor:(val1=='5'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>5</span></button>
                                            <button id='Esp6' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(6)} style={{backgroundColor:(val1=='6'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>6</span></button>
                                            <button id='Esp7' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(7)} style={{backgroundColor:(val1=='7'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>7</span></button>

                                            <button id='Esp8' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(8)} style={{backgroundColor:(val1=='8'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>8</span></button>
                                            <button id='Esp9' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(9)} style={{backgroundColor:(val1=='9'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>9</span></button>
                                            <button id='Esp10' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(10)} style={{backgroundColor:(val1=='10'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>10</span></button>
                                            <button id='Esp11' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(11)} style={{backgroundColor:(val1=='11'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>11</span></button>
                                            <button id='Esp12' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(12)} style={{backgroundColor:(val1=='12'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>12</span></button>
                                            <button id='Esp13' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(13)} style={{backgroundColor:(val1=='13'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>13</span></button>
                                            <button id='Esp14' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(14)} style={{backgroundColor:(val1=='14'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>14</span></button>

                                            <button id='Esp15' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(15)} style={{backgroundColor:(val1=='15'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>15</span></button>
                                            <button id='Esp16' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(16)} style={{backgroundColor:(val1=='16'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>16</span></button>
                                            <button id='Esp17' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(17)} style={{backgroundColor:(val1=='17'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>17</span></button>
                                            <button id='Esp18' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(18)} style={{backgroundColor:(val1=='18'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>18</span></button>
                                            <button id='Esp19' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(19)} style={{backgroundColor:(val1=='19'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>19</span></button>
                                            <button id='Esp20' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(20)} style={{backgroundColor:(val1=='20'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>20</span></button>
                                            <button id='Esp21' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(21)} style={{backgroundColor:(val1=='21'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>21</span></button>

                                            <button id='Esp22' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(22)} style={{backgroundColor:(val1=='22'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>22</span></button>
                                            <button id='Esp23' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(23)} style={{backgroundColor:(val1=='23'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>23</span></button>
                                            <button id='Esp24' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(24)} style={{backgroundColor:(val1=='24'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>24</span></button>
                                            <button id='Esp25' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(25)} style={{backgroundColor:(val1=='25'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>25</span></button>
                                            <button id='Esp26' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(26)} style={{backgroundColor:(val1=='26'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>26</span></button>
                                            <button id='Esp27' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(27)} style={{backgroundColor:(val1=='27'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>27</span></button>
                                            <button id='Esp28' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(28)} style={{backgroundColor:(val1=='28'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>28</span></button>

                                            <button id='Esp29' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(29)} style={{backgroundColor:(val1=='29'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>29</span></button>
                                            <button id='Esp30' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(30)} style={{backgroundColor:(val1=='30'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>30</span></button>
                                            <button id='Esp31' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(31)} style={{backgroundColor:(val1=='31'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>31</span></button>
                                            <button id='Esp32' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(32)} style={{backgroundColor:(val1=='32'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>32</span></button>
                                            <button id='Esp33' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(33)} style={{backgroundColor:(val1=='33'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>33</span></button>
                                            <button id='Esp34' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(34)} style={{backgroundColor:(val1=='34'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>34</span></button>
                                            <button id='Esp35' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(35)} style={{backgroundColor:(val1=='35'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>35</span></button>

                                            <button id='Esp36' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(36)} style={{backgroundColor:(val1=='36'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>36</span></button>
                                            <button id='Esp37' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(37)} style={{backgroundColor:(val1=='37'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>37</span></button>
                                            <button id='Esp38' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(38)} style={{backgroundColor:(val1=='38'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>38</span></button>
                                            <button id='Esp39' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(39)} style={{backgroundColor:(val1=='39'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>39</span></button>
                                            <button id='Esp40' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(40)} style={{backgroundColor:(val1=='40'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>40</span></button>
                                            <button id='Esp41' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(41)} style={{backgroundColor:(val1=='41'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>41</span></button>
                                            <button id='Esp42' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(42)} style={{backgroundColor:(val1=='42'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>42</span></button>
                                        </div>
                                    )}
                                    {tarima==2&&(
                                        <div className='grid grid-cols-8 top-[10%] left-2 text-center w-[75%] absolute  z-10 '>
                                            <button id='Esp1' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(1)} style={{backgroundColor:(val1=='1'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>1</span></button>
                                            <button id='Esp2' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(2)} style={{backgroundColor:(val1=='2'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>2</span></button>
                                            <button id='Esp3' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(3)} style={{backgroundColor:(val1=='3'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>3</span></button>
                                            <button id='Esp4' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(4)} style={{backgroundColor:(val1=='4'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>4</span></button>
                                            <button id='Esp5' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(5)} style={{backgroundColor:(val1=='5'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>5</span></button>
                                            <button id='Esp6' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(6)} style={{backgroundColor:(val1=='6'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>6</span></button>
                                            <button id='Esp7' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(7)} style={{backgroundColor:(val1=='7'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>7</span></button>
                                            <button id='Esp8' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(8)} style={{backgroundColor:(val1=='8'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>8</span></button>
                                            
                                            <button id='Esp9' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(9)} style={{backgroundColor:(val1=='9'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>9</span></button>
                                            <button id='Esp10' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(10)} style={{backgroundColor:(val1=='10'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>10</span></button>
                                            <button id='Esp11' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(11)} style={{backgroundColor:(val1=='11'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>11</span></button>
                                            <button id='Esp12' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(12)} style={{backgroundColor:(val1=='12'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>12</span></button>
                                            <button id='Esp13' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(13)} style={{backgroundColor:(val1=='13'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>13</span></button>
                                            <button id='Esp14' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(14)} style={{backgroundColor:(val1=='14'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>14</span></button>
                                            <button id='Esp15' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(15)} style={{backgroundColor:(val1=='15'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>15</span></button>
                                            <button id='Esp16' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(16)} style={{backgroundColor:(val1=='16'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>16</span></button>
                                            
                                            <button id='Esp17' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(17)} style={{backgroundColor:(val1=='17'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>17</span></button>
                                            <button id='Esp18' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(18)} style={{backgroundColor:(val1=='18'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>18</span></button>
                                            <button id='Esp19' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(19)} style={{backgroundColor:(val1=='19'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>19</span></button>
                                            <button id='Esp20' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(20)} style={{backgroundColor:(val1=='20'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>20</span></button>
                                            <button id='Esp21' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(21)} style={{backgroundColor:(val1=='21'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>21</span></button>
                                            <button id='Esp22' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(22)} style={{backgroundColor:(val1=='22'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>22</span></button>
                                            <button id='Esp23' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(23)} style={{backgroundColor:(val1=='23'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>23</span></button>
                                            <button id='Esp24' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(24)} style={{backgroundColor:(val1=='24'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>24</span></button>
                                            
                                            <button id='Esp25' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(25)} style={{backgroundColor:(val1=='25'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>25</span></button>
                                            <button id='Esp26' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(26)} style={{backgroundColor:(val1=='26'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>26</span></button>
                                            <button id='Esp27' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(27)} style={{backgroundColor:(val1=='27'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>27</span></button>
                                            <button id='Esp28' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(28)} style={{backgroundColor:(val1=='28'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>28</span></button>
                                            <button id='Esp29' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(29)} style={{backgroundColor:(val1=='29'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>29</span></button>
                                            <button id='Esp30' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(30)} style={{backgroundColor:(val1=='30'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>30</span></button>
                                            <button id='Esp31' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(31)} style={{backgroundColor:(val1=='31'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>31</span></button>
                                            <button id='Esp32' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(32)} style={{backgroundColor:(val1=='32'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>32</span></button>
                                            
                                            <button id='Esp33' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(33)} style={{backgroundColor:(val1=='33'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>33</span></button>
                                            <button id='Esp34' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(34)} style={{backgroundColor:(val1=='34'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>34</span></button>
                                            <button id='Esp35' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(35)} style={{backgroundColor:(val1=='35'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>35</span></button>
                                            <button id='Esp36' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(36)} style={{backgroundColor:(val1=='36'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>36</span></button>
                                            <button id='Esp37' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(37)} style={{backgroundColor:(val1=='37'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>37</span></button>
                                            <button id='Esp38' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(38)} style={{backgroundColor:(val1=='38'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>38</span></button>
                                            <button id='Esp39' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(39)} style={{backgroundColor:(val1=='39'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>39</span></button>
                                            <button id='Esp40' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(40)} style={{backgroundColor:(val1=='40'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>40</span></button>
                                            
                                            <button id='Esp41' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(41)} style={{backgroundColor:(val1=='41'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>41</span></button>
                                            <button id='Esp42' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(42)} style={{backgroundColor:(val1=='42'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>42</span></button>
                                            <button id='Esp43' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(43)} style={{backgroundColor:(val1=='43'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>43</span></button>
                                            <button id='Esp44' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(44)} style={{backgroundColor:(val1=='44'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>44</span></button>
                                            <button id='Esp45' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(45)} style={{backgroundColor:(val1=='45'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>45</span></button>
                                            <button id='Esp46' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(46)} style={{backgroundColor:(val1=='46'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>46</span></button>
                                            <button id='Esp47' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(47)} style={{backgroundColor:(val1=='47'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>47</span></button>
                                            <button id='Esp48' className='border-4 border-solid border-indigo-50' onClick={(e)=>setValues(48)} style={{backgroundColor:(val1=='48'?'#4F91BB':val2=='1'?'#923128':'')}}><span className='text-white text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>48</span></button>
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