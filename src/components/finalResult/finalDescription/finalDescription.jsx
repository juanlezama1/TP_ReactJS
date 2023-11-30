import './finalDescription.css'
import { QRCode } from 'antd'

const FinalDescription = ({order_id}) => {

    return (

      <>
        {order_id === undefined ? 
        
        (
          <div className="row background">
            <div className="col-8 text-center">
              <img style={{height: '500px'}} src="/public/images/mario_sad2.png" alt="no_order" />
            </div>

            <h1 className="col-4 d-flex align-items-center texto_gamer">
                  NINGUNA <br/>ORDEN <br/>CARGADA!
            </h1>
          </div>
        ) : 
        
        (
          <div>
            <div className="row background">
              <div className="col-5 text-center">
                <img style={{height: '500px'}} src="/public/images/mario.png" alt="order_confirm" />
              </div>

              <div className="col-7 d-flex align-items-center justify-content-end texto_gamer">
                <div className="row">
                  <div className="col-12">
                    ORDEN PROCESADA <br/> EXITOSAMENTE!
                  </div>

                  <div className="col-12">
                      <p className='final_id'>Nº de transacción: {order_id.id}</p>
                      <p>FECHA: </p>
                      <p>HORA: </p>
                      <QRCode value={order_id.id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
  
  export default FinalDescription;













