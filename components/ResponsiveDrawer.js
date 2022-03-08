import PersonAddIcon from '@material-ui/icons/ViewCarousel';
import Map from '@material-ui/icons/MapOutlined'
import TuneIcon from '@material-ui/icons/AssessmentOutlined';
import ListAltIcon from '@material-ui/icons/Assignment';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import { useRouter } from 'next/dist/client/router';

const drawerWidth = 240;

function ResponsiveDrawer(props) {


  const router=useRouter();
  const { window } = props;
  var tx2;
  var tx3;
 const renderSwitch=(param)=> {
    switch(param) {
      case 0:
        return <Map className="icon__SideBar " style={{color:"white"}}/>;
      case 1:
        return <ListAltIcon className="icon__SideBar" style={{color:"white"}}/>;
      case 2:
        return <PersonAddIcon className="icon__SideBar" style={{color:"white"}}/>;
      case 3:
        return <TuneIcon className="icon__SideBar" style={{color:"white"}}/>;
      default:
        return null
    }
  } 
const rutas=[{ruta:'/moldex/prueba'},{ruta:'/moldex/misiones'}, {ruta:'/moldex/tarimas2'},{ruta:'/moldex/reportes'}];
  const drawer = (
    <div className="bg-[whitesmoke] font-bold text-white dark:bg-[#1b2635] pt-[0] h-[100vh] dark:text-white bg-gradient-to-t from-[#2E49B7] via-[#8B539B] to-[#CF5986]">
      <List className="ml-5 font-bold" >
        {['Mapa','Misiones', 'Tarimas','Reportes'].map((text, index) => (
          <ListItem button className='mb-6' key={text} onClick={()=>router.push(rutas[index].ruta)} >
              {renderSwitch(index)}
            <ListItemText primary={text}  className="ml-6 mb-4 font-bold" />
          </ListItem>
        ))}
      </List>
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
<>
      <div  
        position="fixed"
        sx={{
          
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
      </div>
      <Box 
      
        component="nav"
        sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer 
          container={container}
          variant="temporary"
          open={props.mobileOpen}
          onClose={()=>props.action()}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block',md:'block',lg:'none'},
            '& .MuiDrawer-paper': { boxSizing: 'border-box',height:'100vh', width: drawerWidth, marginTop:'' },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'none',md:'none',lg:'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box',height:'100vh', width: drawerWidth,marginTop:'8.5vh',  },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
     
    </>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;