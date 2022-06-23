import Layout from "../../components/Layout";
import {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import React from 'react';
import Image from 'next/image'
import  {element, Component} from 'react' 
import Animate from "react-move/Animate";

const trackStyles = {
  borderRadius: 4,
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  position: 'relative',
  margin: '5px 3px 10px',
  width: 250,
  height: 250,
}


 
  let rplazo
  let separarD
  let i=0

  const Errors = [
    { id: 1, name: 'E_BUTTON', Descripcion:'Emergency stop button'},
    { id: 2, name: 'WD_MANUAL', Descripcion:'AGV in manual mode'},
    { id: 3, name: 'WD_NAV', Descripcion:'Lost AGV'},
    { id: 4, name: 'WD_NAV_CONN', Descripcion:'Navegation sensor connection error'},
    { id: 5, name: 'WD_DIR', Descripcion:'Steering error'},
    { id: 6, name: 'WD_UNAS', Descripcion:'Fork raise/lower error'},
    { id: 7, name: 'WD_RUTA', Descripcion:'Route error'},
    { id: 8, name: 'WD_MOVE', Descripcion:'AGV not Moving'},
    { id: 9, name: 'WD_SPEED', Descripcion:'Speed monitoring fault'},
    { id: 10, name: 'WD_P_UNREACHED', Descripcion:'Point not reached'},
    { id: 11, name: 'WD_CHARGER', Descripcion:'Autocharging error'},
    { id: 12, name: 'WD_BATTERY_CRIT', Descripcion:'Critical battery level'},
    { id: 13, name: 'WD_BATTERY_OVER', Descripcion:'Battery overvoltage detected'},
    { id: 14, name: 'WD_OS32_LEFTH', Descripcion:'Left safety scanner detects obstruction'},
    { id: 15, name: 'WD_OS32_RIGTH', Descripcion:'Right safety scanner detects obstruction'},
    { id: 16, name: 'E_STOP', Descripcion:' Safety stop'},
    { id: 17, name: 'WD_TAG_IP', Descripcion:'Safety scanner/camera ethernet disconected'},
    { id: 18, name: 'WD_LASTPOINT', Descripcion:'AGV route ended'},
    { id: 19, name: 'BB_STOP', Descripcion:'Traffic stop'}
  ];

  const ErrorsDec = [
    { id: 1.1, Descripcion:'Contactors activated'},
    { id: 3.1, Descripcion:'Can not establish connection with the navegation se...'},
    { id: 3.2, Descripcion:'The location is not being updated'},
    { id: 3.3, Descripcion:'Not enough reflectors in sight'},
    { id: 3.4, Descripcion:'The navegation sensor is not responding'},
    { id: 3.5, Descripcion:'The navegation sensor is disabled'},
    { id: 5.1, Descripcion:'Error while raising the forks'},
    { id: 5.2, Descripcion:'Error while loweing the forks'},
    { id: 8.1, Descripcion:'Position reading out of limits'},
    { id: 8.2, Descripcion:'Position sequence error'},
    { id: 8.3, Descripcion:'FWD/REV consistency error'},
    { id: 8.4, Descripcion:'Speed consistency error'},
    { id: 8.5, Descripcion:'Over speed limit'},
    { id: 11.1, Descripcion:'Battery level too low'},
    { id: 11.2, Descripcion:'Battery voltage too high'},
    { id: 12.1, Descripcion:'Obstruction in left scanner safety zone'},
    { id: 12.2, Descripcion:'Obstruction in left scanner warning zone'},
    { id: 12.3, Descripcion:'Obstruction in right scanner safety zone'},
    { id: 12.4, Descripcion:'Obstruction in right scanner warning zone'},
    { id: 12.5, Descripcion:'Left scanner is dirty'},
    { id: 12.6, Descripcion:'right scanner is dirty'}
  ];


class prueba1 extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {apiResponse:"", x1: '', y1: ''}
    
  }

  pedirDatos(){
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({ "thing":"M5GPS" })
    };
    fetch('http://localhost:5000/estadoagv', requestOptions)
    .then(res => res.json()) 
    .then(res => {
        console.log('nueva conn')
        console.log(res.body);//.reported      JSON.parse()
        console.log('si jala')
        let obj = JSON.parse(res.body)
        //let x = obj.reported.x
        console.log(obj.X)
      
          if(res.body==undefined){
            console.log('sin datos brooooo')
          }else{
            console.log('Mi X: ',obj.X,' Mi Y: ',obj.Y)  
            const  xssa = (((obj.X)/100)+22.4)*(1)
            const  yssa = (((obj.Y)/100)-496)*(-1)
            console.log('mi xssa:',xssa)
        
            //SetX((((obj.state.reported.x)/100)+678)*(1) )
        
            console.log('mi yssa:',yssa)
            //SetY((((obj.state.reported.y)/100)-531)*(-1))
            this.setState({x1: xssa, y1: yssa});
          }
    })

    .catch(() => {
      console.log('ERROR DE CONEXION *********************')
      i=i+1
      console.log(i)
      if(i==40){
        window.location.reload();
      }
    });     
  }

  
    
  componentWillMount(){
    //const tokenMontse = "eyJraWQiOiJBSlpUVjNGOEpaS003dVIwcXk4ZFwvaXFvRVQzQlwvQ3VMT1dHaVoxN0U0NlU9IiwiYWxnIjoiUlMyNTYifQ.eyJvcmlnaW5fanRpIjoiMDY2Y2IyODQtZDBjZi00YmFkLTkxZWMtNjA0YjdlZmE3YTBkIiwic3ViIjoiMzlhYTdiOGItM2Y1Yy00NWMyLTljMzItNmU2OTZlOTdmZmJiIiwiYXVkIjoiMWJjcjdrYjRuNWFnYmFwcXNia3RpYWY4aHEiLCJldmVudF9pZCI6ImI0MGQyYTI1LTg5NGQtNGFmNS04MWIwLWNiMzUwNzliOWMyZCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ0NTMyMjE0LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9RTVh0M3ZDN3EiLCJjb2duaXRvOnVzZXJuYW1lIjoiMTAxMDg0MDYiLCJleHAiOjE2NDQ1MzU4MTQsImlhdCI6MTY0NDUzMjIxNCwianRpIjoiYmIwZWQ1YzAtN2U1Yi00ZTM2LTk0MzItMjk1NDdmMzgyYWYyIn0.shwkj4xh5CE98PpTcvAYj6Xjq6Nd2mOwp6ns0e1cqVcrrGiPLLkTYTAoezHEPHkIOjkItcn27pJmNr3kKjixKAVBRKRS8g6u1KdfHLUIp4gMxKbU0XGd1id5pUmos7GN4eeqbVvHqye1XBHnhupqMPDmfr8vGp7ktnPmcL9gi0-99ZoxreQcq13qGFtAHYDbDkppFw0E1ijLU_bzKiv15b3wOLm4AQ14nxhrW1EtUsH081OFJ9UuTHW0bP61WEiP3kN7kOA8yEF97T9S6ksT5Gd_ayYWOuGsvkqCI1VbBxnE_3DG1MaY9AyNvI4ke6zmvlsLnlS-DGAn6Xkr0oCUzQ";
    //var ultimoTime = 0;
    
    //const configPOST = {method: 'POST', headers:{"Authorization" : tokenMontse }, body:JSON.stringify({thing:"M5GPS", datos:["x","y"]})};

    setInterval(() => {
      //console.log(miToken);
      this.pedirDatos()
      console.log('state x1: ', this.state.x1, 'state y1: ', this.state.y1)
    }, 500);
    //this.actualizarValoresAG(miToken, ultimoTime);
  }

 

  render(){
   
    return (
      <Layout>
 
      <div className="container-img absolute z-10" class="mapeo" >
      <svg  width="232" height="626"   class="mapeo"  >
            <Animate  class="mapeo" 
              start={{ cx: 0, cy: 0 }}
              enter={{ cx: this.state.x1, cy: this.state.y1 }}
              update={{ cx: this.state.x1, cy: this.state.y1,timing: { duration: 1000} }}
              
            >
              {d => <circle cx={d.cx} cy={d.cy} r="8" stroke="black" fill="red" > <title>AGV1:</title></circle> }
            </Animate>
          </svg>
          <Image src={require('/image/mprueba.png')}   width="232" height="626" objectFit='cover' />
          
       </div>
  
  
          
      </Layout>
    );
  }
}

export default prueba1;