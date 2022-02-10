import {AiOutlineCloseSquare} from 'react-icons/ai'
function Modal({children, active, action,  title}) {
    return (
        <div className={'bg-[#2e2c2c80]  h-[100%] flex items-center flex-col p-10 w-[100%] absolute top-0 left-0 z-50 ' + (!active && 'hidden')}>
            <div className='bg-white dark:bg-[#1b2635] text-black rounded-xl sm:w-[95%] lg:w-[90%]'>
                <div className='flex justify-between px-5 pt-5 text-2xl text-black dark:text-white'>
                    <div></div>
                    <h1 className='text-center justify-center'>
                        {title}
                    </h1>
                    <AiOutlineCloseSquare className='cursor-pointer' onClick={()=>action()}/>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal
