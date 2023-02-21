
   
   
   const changeHandler=(e)=>{
        setQuery(e.target.value);
      }
  

return(
    <>
    
    <form className="d-flex" onSubmit={searchMovie}>
            <input className="form-control me-2" type="text"   placeholder="Search" aria-label="Search" value={query} onChange={changeHandler}/>
            <button className="btn btn-outline-info" type="submit">Search</button>
            
          </form>
</>
)