const FinalDescription = ({order_id}) => {

    return (

      <>
        {order_id === undefined ? 
        
        (
          <div className="row background">
            <div className="col-7 text-center">
              <img style={{height: '500px'}} src="/public/images/mario_sad2.png" alt="no_order" />
            </div>

            <h1 className="col-5 d-flex align-items-center texto_gamer">
                  NINGUNA <br/>ORDEN <br/>CARGADA!
            </h1>
          </div>
        ) : 
        
        (
          <div>
            LLEGÓ EL ID
          </div>
        )}
      </>
    )
  }
  
  export default FinalDescription;






// @font-face {
//   font-family: 'fuenteGamer';
//   src: url('./cartEmpty.ttf') format('truetype');
//   font-weight: normal;
//   font-style: normal;
// }

// .texto_gamer {
//   font-family: 'fuenteGamer';
//   text-align: center;
//   font-size: 60px;
// }

// .background {
//   background-image: url('/public/images/mario-background2.jpg');
// }