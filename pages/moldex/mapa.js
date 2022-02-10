import Layout from "../../components/Layout";
import {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import React from 'react';
import Image from 'next/image'
import  {element, Component} from 'react' 
import Animate from "react-move/Animate";

//import Animate from "react-move/Animate";
var n=1;

if (typeof window !== 'undefined') {
    console.log('You are on the browser')  
  } else {
    console.log('You are on the server')
  }

function Mapa(){
  const [name, setName] =useState([])
  let [x,SetX]=useState(22)
  let [y,SetY]=useState(150)
  const px=[22,30,35,40,45,50,55,100]
  const py=[150,160,160,160]
  let i=0


  setInterval(() => {
    console.log(px[1])
    SetX(px[1])
    console.log(py[1])
    SetY(py[1])
    console.log(px[1])
    SetX(px[2])
    console.log(py[1])
    SetY(py[2])
    SetX(px[3])
    SetX(px[4])
    SetX(px[5])
    SetX(px[6])
    SetX(px[7])



   
   }, 5000);

  useEffect(()=>{
    // const configPOST = {method: 'POST', headers:{"Authorization" : 'eyJraWQiOiJBcHgzMW5YRmlcL0o0d1wvZER2d2FMSDVuYytMeVdwaEF4MlYxWlhyRGx1M0k9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJjYTY0MTkwMC1lN2QxLTRjMGYtYmVjYS1kOTBjN2VkZGYwY2UiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfR3lhVGlhTUM2IiwiY29nbml0bzp1c2VybmFtZSI6ImNhbGViIiwib3JpZ2luX2p0aSI6IjhjNjU4ZjBmLWM4NGItNGZhNy05NTQ0LTNmOTdlMzc2M2E0MiIsImF1ZCI6IjFxMnJvY2U2YTE4a3Q5aW9qZzlzN3FvOHBlIiwiZXZlbnRfaWQiOiJlYzgzODFhNi02NjVlLTQ2ZjktOWE3YS04MzMyMDZjNTQzNjgiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY0MjAwNDc4NSwiZXhwIjoxNjQ0NTE1MDgxLCJpYXQiOjE2NDQ1MTE0ODEsImp0aSI6ImU0MTM5ZDcyLWM3ZDYtNGYzYS04MWM2LWZiZDk3NGE5ODBiNyIsImVtYWlsIjoiYzQxZTNvQGdtYWlsLmNvbSJ9.AJOQjmxYV6f2GZq8bB6nJTnAcKO6f90BAALZ6ql8dBCUQ1EpX5ezrtPhO7HsQc9Z04-tPCks9wLUaze0SOsfw9RNwhnp0RuTdH--eTNWs6lxiHRCN8A4OmhrXm4cUK1WFzEBZmd2yAjNoIcvgoAVl08mQHjrDvMKags1E1g5_3ImrG00PimCM0A2iVdbWNyivxai8qgJGPV9t00sxncXwj3LDQxxdoKIkfdXa-CRoWRWBEZoAWL5Z6NSn021LSBu_-rU-f8xXj4PPTmljFP71nulg1NgB5--DpvR3r-GW5o1W0xabVqO138Y66fsVzaRrC014-1kFybknTMEZrg8VA' }, body:JSON.stringify({thing:"M5GPS", datos:["x","y"]})};

    // fetch("https://k9gnk9tdra.execute-api.us-east-1.amazonaws.com/servicios/leer-sombras",configPOST)

    //   .then(res => res.text())

    //   .then(res => {

    //     console.log(res);

    //   });
  
}, []);

  return(
    <Layout>
 
    <div className="container-img absolute z-10" class="mapeo" >
    <svg  width="231" height="625"   class="mapeo"  >
          <Animate  class="mapeo" 
            start={{ cx: 0, cy: 0 }}
            enter={{ cx:x, cy: y }}
            update={{ cx: x, cy: y }}
          >
            {d => <circle cx={d.cx} cy={d.cy} r="10" stroke="black"  fill="red" />}
          </Animate>
        </svg>
        <Image src={require('/image/mprueba.png')}   width="231" height="625" objectFit='cover' />
        
     </div>

        
    </Layout>
  )
}

    
  
  
  export default Mapa
  