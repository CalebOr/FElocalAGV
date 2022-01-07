import Topbar from './Topbar'
import ResponsiveDrawer from './ResponsiveDrawer'
import {useState} from 'react'
export default function Layout({children, especialClass}) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle =()=> {
        setMobileOpen(!mobileOpen);
        console.log("chenged :-")
    };
    return (
        <div className='h-[100vh] w-[100vw] overflow-hidden bg-[#f8f9fc] dark:bg-black'>
            <Topbar action={handleDrawerToggle} className="h-[92vh]"/>
            <div className='flex text-white'>
                {/* <SideBarTest/> */}
                <ResponsiveDrawer action={handleDrawerToggle} mobileOpen={mobileOpen} />
                <main className={'w-[100%] h-[92vh] relative bg-transparent p-10 gap-10 overflow-scroll hide-scroll ' + (especialClass ? especialClass : '')} >
                    {children}
                </main>
            </div>
        </div>
    )
}