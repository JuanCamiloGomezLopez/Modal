import "./Modal_style.scss";
import logo from "../img/paypal_logo.png"

export function Modal({openmodal, onClose}) {

  if (!openmodal) return null;


  return (
    <section onClick={onClose} className="container">
      <div onClick={(e)=>{e.stopPropagation();}} className="subcontainer">
        <div className="content">
          <div className="logo">
            <img src={logo} width="100"/>
          </div>
          <div className="texto">
            <h3> Pago realizado con exito</h3>
            <p>Gracias por su preferencia</p>
          </div>
        </div>
        <div className="bottons">
          <button onClick={onClose} className="btn-download">Download</button>
          <button onClick={onClose} className="btn-back">Back</button>
        </div>
      </div>
    </section>
  );
}
