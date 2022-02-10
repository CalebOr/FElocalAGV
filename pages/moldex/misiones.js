import Layout from "../../components/Layout";
import DataTable from "../../components/DataTable";
import { useState } from "react";
import Table from "../../components/TableG";
import CustomBox from "../../components/CustomBox";

function Mision ({}){
  const columns =  [
    { accessor: 'idMision', Header:'ID MISIÓN', minWidth: 150 },
    { accessor: 'fechaEje', Header: 'FECHA DE EJECUCIÓN', minWidth: 200 },
    { accessor: 'posicion', Header: 'POSICIÓN', minWidth: 200 },
    { accessor: 'tipoTarima', Header: 'TIPO DE TARIMA', minWidth: 200 },
    { accessor: 'estado', Header: 'ESTADO', minWidth: 200 }
];
const data=[
    {idMision:"Uno", fechaEje:'10/12/21', posicion:'A-15', tipoTarima:'Tarima 1.20 x 1.20 (56)', estado:'Completado'},
    {idMision:"Dos", fechaEje:'10/12/22', posicion:'B-21', tipoTarima:'Tarima 1.20 x 1.20 (56)', estado:'Planeado'},
    {idMision:"Tres", fechaEje:'01/11/21', posicion:'A-11', tipoTarima:'Tarima 1.20 x 1.20 (56)', estado:'Cancelado'},
    {idMision:"Cuatro", fechaEje:'03/12/21', posicion:'A-12', tipoTarima:'Tarima 1.20 x 1.20 (56)', estado:'Completado'}
]

    return (
        <Layout>
            <CustomBox especialClass='flex items-center flex-col'>
              <Table columns={columns} data={data} filter="fechaEje" acciones={true}/>
            </CustomBox>
        </Layout>
      )
}

  
  export default Mision
  