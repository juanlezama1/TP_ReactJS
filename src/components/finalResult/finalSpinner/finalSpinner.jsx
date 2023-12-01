import './finalSpinner.css'

const FinalSpinner = () => {

    return (
    
        <>
          <div className="row cloud-movement">
            <div className="loading_spinner col-12" id="loading_spinner">
                <div className="loader" id="loader">
                    <div className="face">
                      <div className="circle"></div>
                    </div>
                    <div className="face">
                      <div className="circle"></div>
                    </div>
                  </div>
            </div>

            <div className="loading_text col-12" id="loading_text">
                <h2 id="loading_text_h2" className="loading_text_h2"><b>Procesando pedido...</b></h2>
            </div>
          </div>
        </>   
    )
}

export default FinalSpinner