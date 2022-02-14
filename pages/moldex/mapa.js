import Layout from "../../components/Layout";
import {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import React from 'react';
import Image from 'next/image'
import {Auth, withSSRContext,API} from 'aws-amplify';
import  {element, Component} from 'react' 
import Animate from "react-move/Animate";

//import Animate from "react-move/Animate";
var n=1;

if (typeof window !== 'undefined') {
    console.log('You are on the browser')  
  } else {
    console.log('You are on the server')
  }

function Mapa({token}){
  //console.log(token)
  const [name, setName] =useState([])
  let [x,SetX]=useState(0)//x- origen -224
  let [y,SetY]=useState(0)//y- origen -496
  let[bateria,setBateria]=useState()
  let rplazo
  let separarD
  let i=0


//   function AGVDatos(e){
//     console.log(e)
//     let rplazo= e.replace(/["{}]/g,"")
//     let separarD=rplazo.split(',')
//     console.log("Mis datos: "+separarD)
//     //let Bateria2=separarD[12].split(':');
//     let x=separarD[1].split(':');
//     let y=separarD[2].split(':');
//     console.log('Mi X: ',x[1],' Mi Y: ',y[1])
//     console.log((x[1]/1000))
//     console.log((x[1]/1000)-224)
//     SetX((x[1]/1000)-224)
//     console.log((y[1]/1000))
//     console.log((y[1]/1000)-496)
//     SetX((y[1]/1000)-496)
//     //console.log('Mi bateria es: '+ Bateria2[1])
// }
  setInterval(() => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Authorization': token },
      body: JSON.stringify({ "thing":"M5GPS" })
  };  
  fetch('https://intxgh6og0.execute-api.us-east-1.amazonaws.com/servs/leer', requestOptions)
  .then(res => res.json()) 
    .then(res => {
      
        console.log(res.body);
        if(res.body==undefined){
          console.log('sin datos brooooo')
        }else{
        rplazo= res.body.replace(/["{}]/g,"")
     separarD=rplazo.split(',')
    console.log("Mis datos: "+separarD)
    let x=separarD[1].split(':');
    let y=separarD[2].split(':');
    let bat=separarD[12].split(':');
    console.log('Mi X: ',x[1],' Mi Y: ',y[1])
    console.log('bateria:',bat[1])
    setBateria(bat[1])
    //crear set para bateria
    console.log('mi xssa:',(((x[1])/100)-224)*(-1))
  
    SetX((((x[1])/100)-224)*(-1) )

    console.log('mi yssa:',(((y[1])/100)-496)*(-1))
    SetY((((y[1])/100)-496)*(-1))

  }

     })
     
     .catch(() => {
      //alert('failed to fetch');
      console.log('ERROR DE CONEXION *********************')
      i=i+1
      console.log(i)
      if(i==40){
        window.location.reload();
      }
    });
     
     
     ;
  
  
    // const configPOST = {method: 'POST', headers:{"Authorization" : token }, body:JSON.stringify({thing:"M5GPS"})};

    // fetch("https://intxgh6og0.execute-api.us-east-1.amazonaws.com/servs/estadoagv",configPOST)

    //   .then(res => res.json())
    //   .then(res => {

    //     console.log(res.body);
    //     let rplazo= res.body.replace(/["{}]/g,"")
    // let separarD=rplazo.split(',')
    // console.log("Mis datos: "+separarD)
    // let x=separarD[1].split(':');
    // let y=separarD[2].split(':');
    // console.log('Mi X: ',x[1],' Mi Y: ',y[1])
    // console.log('mi xssa:',((y[1])/1000)-496)

    //  });

   
   }, 2000);

   function imprime(){
     console.log('lalalalalalallalalalalal')
     
   }

  useEffect(()=>{
    
  
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
            {d => <circle cx={d.cx} cy={d.cy} r="10" stroke="black" fill="red" onclick={imprime()}> <title>AGV1: {bateria}</title></circle> }
          </Animate>
        </svg>
        <Image src={require('/image/mprueba.png')}   width="231" height="625" objectFit='cover' />
        
     </div>


        
    </Layout>
  )
}

    
  
  
  export default Mapa

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
