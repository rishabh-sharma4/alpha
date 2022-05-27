const User=(props)=>{
    return(
        <>
        <h4>Hello, from user</h4>
        <button onClick={()=>props.info("Rishabh")}>Who is this?</button>
        </>
    )
}
export default User;