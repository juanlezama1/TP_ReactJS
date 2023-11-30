const FinalSpinner = () => {

    return (
    
        <>
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
            <h2 id="loading_text_h2" class="loading_text_h2">Procesando pedido...</h2>
        </div>
    </>
        
    )
}

export default FinalSpinner