import './finalDescription.css'
import { QRCode } from 'antd'

const FinalDescription = ({order_id}) => {

  const fecha_hora = new Date ()
  const horas = fecha_hora.getHours()
  const minutos = fecha_hora.getMinutes()
  let am_pm

  horas >= 12 ? am_pm = "PM" : am_pm = "AM"

    return (

      <>
        {order_id === undefined ? 
        
        (
          <div className="row background">
            <div className="col-8 text-center">
              <img style={{height: '500px'}} src="/public/images/backgrounds/mario_sad2.png" alt="no_order" />
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
                <img style={{height: '500px'}} src="/public/images/backgrounds/mario.png" alt="order_confirm" />
              </div>

              <div className="col-7 d-flex align-items-center justify-content-end texto_gamer">
                <div className="row">
                  <div className="col-12">
                    ORDEN PROCESADA <br/> EXITOSAMENTE!
                  </div>

                  <div className="col-12">
                    <div className='align-items-center d-flex justify-content-center text-center'>
                      <QRCode value={"Número de Transacción: " + order_id.id} />
                    </div>

                    <p className='final_id text-start'>Nº de transacción: <span className='valor_id'><b>{order_id.id}</b></span></p>
                    <p className='final_id text-start'>Fecha: <b>{fecha_hora.toLocaleDateString()}</b> </p>
                    <p className='final_id text-start'>Hora: <b>{horas}:{minutos} {am_pm}</b> </p>
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













