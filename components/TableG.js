import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {useState, useEffect} from 'react'
import {TiEdit, TiDeleteOutline} from 'react-icons/ti'
import { useFilters, useSortBy, useTable } from 'react-table';

const columns = [
    { id: 'item', label:'ITEM', minWidth: 120 },
    { id: 'product', label: 'Producto', minWidth: 120 },
    { id: 'time', label: 'Tiempo de producción individual', minWidth: 120 },
    { id: 'people', label: 'Personas necesarias', minWidth: 120 },
    { id: 'line', label: 'Linea', minWidth: 100 },
    { id: 'tamanio', label: 'Tamaño', minWidth: 100 },
    { id: 'noAccesorios', label: 'Cantidad de Accesorios extra', minWidth: 100 },
    { id: 'actions', label: 'Acciones', minWidth: 100}
];
const data=[
    {item:'uno', product:'1', time:'1 hr', people:'1', line:'1', tamanio:'1', noAccesorios:'1'},
    {item:'dos', product:'2', time:'2 hr', people:'2', line:'2', tamanio:'2', noAccesorios:'2'}
]
function TableG({token}) {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(50);
    const [modal, setModal] =useState(false)
    const [modal2, setModal2] =useState(false)
    const [estandar, setEstandar]=useState('')
    const [name, setName]=useState('')
    const [line, setLine]=useState('')
    const [searchedData, setSearchedDate] = useState([])
    const [colors, setColors] = useState(['#222b36', 'whitesmoke'])
    const [filterInput, setFilterInput] = useState("");
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setFilter
      } = useTable(
        {
          columns,
          data
        },
        useFilters,
        useSortBy 
    );

    async function recarga() {
        window.location.reload();
    }
    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }
    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        console.log(value)
        setFilter("item", value);
        console.log(setFilter)
        setFilterInput(value);

      };

    useEffect(() => {
        
    }, [])
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', color: colors[1]}}>
            <input
                Value={filterInput}
                onChange={handleFilterChange}
                placeholder={"Search name"}
            />
            <br/>
            <TableContainer sx={{ maxHeight: 800 }}>
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render("label")}</th>
                            ))}
                        </tr>
                        ))}
                    </thead>
                    <tbody>
                                
                    </tbody>
                </table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[50, 100, 150]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{bgcolor: colors[0],color: colors[1]}}
            />
            </Paper>
    )
}

export default TableG
