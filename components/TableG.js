import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import {useState, useEffect} from 'react'
import {TiEdit, TiDeleteOutline} from 'react-icons/ti'
import { useFilters, useSortBy, useTable } from 'react-table';

function TableG({data, columns,filter, acciones}) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(50);
    const [colors, setColors] = useState(['#222b36', 'whitesmoke'])
    const [filterInput, setFilterInput] = useState("");
    const [name, setName] = useState([])
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
    
    async function handleFilterChange(e) {
        let value = e || undefined
        console.log(value)
        setFilterInput(value)
        setFilter(filter, value);
      };
    useEffect(() => {  
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Authorization': 'eyJraWQiOiJBSlpUVjNGOEpaS003dVIwcXk4ZFwvaXFvRVQzQlwvQ3VMT1dHaVoxN0U0NlU9IiwiYWxnIjoiUlMyNTYifQ.eyJvcmlnaW5fanRpIjoiMWJjOWFiODctMGQwMy00MDQ5LTlhNWQtYzIwNTJmOGJhYTE0Iiwic3ViIjoiMzlhYTdiOGItM2Y1Yy00NWMyLTljMzItNmU2OTZlOTdmZmJiIiwiYXVkIjoiMWJjcjdrYjRuNWFnYmFwcXNia3RpYWY4aHEiLCJldmVudF9pZCI6ImM4MWE3NzIwLWJiZTYtNDhhMC1hNzg0LWRlYzBkZDBmZGUzNyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQyMDAzMTk0LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9RTVh0M3ZDN3EiLCJjb2duaXRvOnVzZXJuYW1lIjoiMTAxMDg0MDYiLCJleHAiOjE2NDIwMDY3OTMsImlhdCI6MTY0MjAwMzE5NCwianRpIjoiZTBlMGE1MzAtMjk0Ni00ZjE2LTgzOTctZGFjMjI2ZDM2NzdkIn0.Y8elg9GttFot4fqbkyf1u-TxTYw5s7YikR803vk3TtCa6yeg7IB0iEz74USi02mJouQTA_2aDiou1hQ1YDR2nQx82rthbtTnE210QA_8WWedYQrEpc2AisS9PztmVmnUMSeNRQlBsLzjm2v7qJW-aMFX0lWXhbA9mQlDMTrFHT5DMoyfXPX__oTXrbJLT6HZl4SoEbGkACh03yg-mWB44-BNM9NG5SIdK2kROqThA63oeepz5kCv0jajEdMWUi6wBEblCj33jSngFd01ZMqBCMbUClWgBbjpyJb9KoR65_507KEdvdsSz2FKzSI4qoiz0nqbS2BAiXoFogIeKKqNaQ' },
        //     body: JSON.stringify({ "thing":"M5GPS" })
        // };  
        //  fetch('https://intxgh6og0.execute-api.us-east-1.amazonaws.com/servs/leer', requestOptions)
        // .then(res => res.json()) 
        // .then(res => setName(res));
    }, [])

    return (
        <div>
            <input
                style={{color:'black', border:'solid', borderColor:'#D0D6D2', borderRadius:'8px'}}
                Value={filterInput}
                onChange={(e) => handleFilterChange(e.target.value)}
                placeholder={"Buscar fecha"}
            />
            <br/><br/>
            <Paper sx={{ width: '100%', overflow: 'hidden', color: 'whitesmoke'}}>
            <TableContainer sx={{ maxHeight: 800 }}>
                <table className=' w-[80vw] ' {...getTableProps()} style={{ borderRadius:'8px'}}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}  
                                className='column.isSorted
                                ? column.isSortedDesc
                                ? "sort-desc"
                                : "sort-asc"
                                : ""'
                                style={{ background:'#5CBC99', color:'white', fontFamily:'sans-serif', fontSize:'14px',height:50 }}>
                                &nbsp;&nbsp;{column.render("Header")}&nbsp;&nbsp;<span>{column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽': ' 🔼': ''}</span></th>
                            ))}
                                {acciones==true&&(
                                    <th   
                                    style={{ minWidth: 170, background:'#5CBC99', color:'white', fontFamily:'sans-serif', fontSize:'14px',height:50 }}>
                                    ACCIONES </th>
                                )} 
                        </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                            {rows.map((row, i) => {
                            prepareRow(row);
                            console.log(row.cells[0].value)
                            return (
                                <tr {...row.getRowProps()} id={i}
                                style={{color:'black'}}>
                                    {row.cells.map(cell => {
                                            return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;  
                                    })}
                                    {acciones==true&&(
                                        <td>
                                            <div className='flex items-center gap-2'>
                                                <div className='text-red-400 dark:text-white text-3xl dark:hover:text-red-400 cursor-pointer'>
                                                    <TiDeleteOutline/>
                                                    {/* {row.cells[0].value} */}
                                                </div>

                                                <div className='text-blue-400 dark:text-white text-3xl dark:hover:text-blue-400 cursor-pointer'>
                                                    <TiEdit/>
                                                </div>
                                            </div>
                                        </td> 
                                    )}
                                    
                                </tr>
                            );
                        })}
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
                sx={{bgcolor: 'white',color: 'black', width: '100%'}}
            />
            </Paper>
        </div>
        
    )
}

export default TableG
