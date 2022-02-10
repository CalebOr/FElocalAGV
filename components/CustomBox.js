function CustomBox({children, especialClass}) {
    return (
        <div className={'custom-box ' + (especialClass ? especialClass:'')}>
            {children}
        </div>
    )
}

export default CustomBox