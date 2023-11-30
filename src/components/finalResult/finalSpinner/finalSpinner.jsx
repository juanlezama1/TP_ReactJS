import './finalSpinner.css'

const FinalSpinner = () => {

    return (
    
        <>
          <div className="row cloud-movement">
            <div class="loading_spinner col-12" id="loading_spinner">
                <div class="loader" id="loader">
                    <div class="face">
                      <div class="circle"></div>
                    </div>
                    <div class="face">
                      <div class="circle"></div>
                    </div>
                  </div>
            </div>

            <div class="loading_text col-12" id="loading_text">
                <h2 id="loading_text_h2" class="loading_text_h2"><b>Procesando pedido...</b></h2>
            </div>
          </div>
        </>   
    )
}

export default FinalSpinner