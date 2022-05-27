function Higher(props){
    return(
        <>
            <h3>HOC</h3>
            <h5 style={{backgroundColor: 'red'}}><props.comp/></h5>
            
        </>
    )
}
export default Higher;