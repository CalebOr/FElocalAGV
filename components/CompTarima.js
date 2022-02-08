import Modal from "./Modal"
import Image from "next/image";
import { useState } from "react";
function CompTarima({id, aux, letra, action}) {
    const [modal, setModal]= useState(false);
    async function changeModal(){
        setModal(!modal)
    }
    return (
        <div className="border-solid border-2 border-[#ffffff] relative w-[90%] h-[90%] justify-items-center top-2 left-3 ">
            {aux=='1'&&(
                <div className="text-center">
                    <span className="relative top-5 text-7xl" >{letra}</span>
                    <br/><br/><br/>
                    <button id={id} className='border-2 border-[#316e77] bg-[#42929F] w-[10vw] rounded-md' onClick={()=>action()}>Ocupar espacio</button>
                </div>
            )}

           
        </div>
    )
}

export default CompTarima
