
const Favorite =({id})=>{
    
    const handleClick = () => {
       alert(id)
    }

    return(
        
    <button onClick= {handleClick}>
        <span aria-label="Fav Gif" role='img' >❤</span>
    </button>
        
      

        
    )
}
export default Favorite;