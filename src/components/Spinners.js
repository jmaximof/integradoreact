
const Spinner=()=>{
    return (
        <div classname="container my-4">
        <div classname="row justify-content-center" id="loading">
          <div classname="col-6 text-center">
            <div classname="spinner-border text-secondary" role="status">
              <span classname="visually-hidden">Loading...</span>
            </div>
            <p>cargando...</p>
          </div>
        </div>
      </div>
    );
}
export default Spinner;