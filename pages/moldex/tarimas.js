import Layout from "../../components/Layout";
import Modal from "../../components/Modal";
import { InfoTwoTone } from "@material-ui/icons";
import CompTarima from "../../components/CompTarima";
import ContentFormTar from "../../components/ContentFormTar";
import Image from "next/image";
import { useState } from "react";
function Tarimas({}){
    const [modal, setModal]= useState(false);
    const [modal2, setModal2]= useState(false);
    const [title, setTitle] =  useState('')
    async function changeModal(){
        setModal(!modal)
    }
    async function changeModal2(e){
        setTitle(e)
        setModal2(!modal2)
    }
    return(
        <Layout>
            <Modal active={modal} title='Posición de las Tarimas' action={changeModal}>
                <br/>
                <Image src={require('../../image/tarimas.png')}></Image>
                <br/>
                <br/>
            </Modal>
            <Modal active={modal2} title={title} action={changeModal2}>
                <ContentFormTar/>
            </Modal>
            <button
                className="text-[black]"
                onClick={changeModal} 
            ><InfoTwoTone className="text-[#3e84b3]"/></button>
            <div className=" w-[75vw] h-[80vh] ">
                <div className="grid grid-cols-4 gap-3 h-[22vh]">
                        <div className="bg-[#4E5255] border-[white] border-solid border-2">
                            <CompTarima id={'posA'} aux={1} letra={'A'} action={()=>changeModal2('Ocupar espacio A')}/>
                        </div>
                        <div className="bg-[#65686B] border-[white] border-solid border-2">
                            <CompTarima id={'posB'} aux={1} letra={'B'} action={()=>changeModal2('Ocupar espacio B')}/>
                        </div>
                        <div className="bg-[#4E5255] border-[white] border-solid border-2">
                            <CompTarima id={'posC'} aux={1} letra={'C'} action={()=>changeModal2('Ocupar espacio C')}/>
                        </div>
                        <div className="bg-[#65686B] border-[white] border-solid border-2">
                            <CompTarima id={'posD'} aux={1} letra={'D'} action={()=>changeModal2('Ocupar espacio D')}/>
                        </div>
                    </div>
                    <br/>
                    <div className="grid grid-cols-3 gap-4 h-[22vh]">
                        <div className="bg-[#4E5255] border-[white] border-solid border-2">
                            <CompTarima id={'posE'} aux={1} letra={'E'} action={()=>changeModal2('Ocupar espacio E')}/>
                        </div>
                        <div className="bg-[#65686B] border-[white] border-solid border-2">
                            <CompTarima id={'posF'} aux={1} letra={'F'} action={()=>changeModal2('Ocupar espacio F')}/>
                        </div>
                        <div className="bg-[#4E5255] border-[white] border-solid border-2">
                            <CompTarima id={'posG'} aux={1} letra={'G'} action={()=>changeModal2('Ocupar espacio G')}/>
                        </div>
                    </div>
                    <br/>
                    <div className="grid grid-cols-4 gap-4 h-[22vh]">
                        <div className="bg-[#65686B] border-[white] border-solid border-2">
                            <CompTarima id={'posH'} aux={1} letra={'H'} action={()=>changeModal2('Ocupar espacio H')}/>
                        </div>
                        <div className="bg-[#4E5255] border-[white] border-solid border-2">
                            <CompTarima id={'posI'} aux={1} letra={'I'} action={()=>changeModal2('Ocupar espacio I')}/>
                        </div>
                        <div className="bg-[#65686B] border-[white] border-solid border-2">
                            <CompTarima id={'posJ'} aux={1} letra={'J'} action={()=>changeModal2('Ocupar espacio J')}/>
                        </div>
                        <div className="bg-[#4E5255] border-[white] border-solid border-2">
                            <CompTarima id={'posK'} aux={1} letra={'K'} action={()=>changeModal2('Ocupar espacio K')}/>
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
  