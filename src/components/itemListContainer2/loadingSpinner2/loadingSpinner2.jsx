import './loadingSpinner2.css'

const LoadingSpinner2 = () => {

    return (
        
        <>
        <section className='loading_section'>
            <div className="loading loading01">
                <span>C</span>
                <span>A</span>
                <span>R</span>
                <span>G</span>
                <span>A</span>
                <span>N</span>
                <span>D</span>
                <span>O</span>
                <span>&nbsp;</span>
                <span>P</span>
                <span>R</span>
                <span>O</span>
                <span>D</span>
                <span>U</span>
                <span>C</span>
                <span>T</span>
                <span>O</span>
                <span>S</span>
            </div>
        </section>

        <div className="spinner_section d-flex justify-content-center">
            <div className="spinner-grow text-dark" role="status">
                <span className="sr-only"></span>
            </div>
        
            <div className="spinner-grow text-dark" role="status">
                <span className="sr-only"></span>
            </div>
        
            <div className="spinner-grow text-dark" role="status">
            <span className="sr-only"></span>
            </div>
        </div>
        </>
    )
  }
  
  export default LoadingSpinner2;