import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const formData = React.useRef()
    let navigate = useNavigate()

    const getForm = (e) => {
        e.preventDefault()
        const datForm = new FormData(formData.current)
        const client = Object.fromEntries(datForm)
        e.target.reset()
        navigate("/")
    }

    return (
        <div className="containerCustom checkout">
            <h1 className="title">Datos de envío</h1>
            <form onSubmit={getForm} ref={formData}>
                <div className="containerInput">
                    <label className="textGeneric" htmlFor="name">Nombre</label>
                    <input className="textGeneric" type="text" id="name" placeholder="Ingrese su nombre" />
                </div>
                <div className="containerInput">
                    <label className="textGeneric" htmlFor="lastName">Apellido</label>
                    <input className="textGeneric" type="text" id="lastName" placeholder="Ingrese su apelldo" /> 
                </div>
                <div className="containerInput">
                    <label className="textGeneric" htmlFor="mail">Email</label>
                    <input className="textGeneric" type="email" id="mail" placeholder="Ingrese su mail" />
                </div>
                <div className="containerInput">
                    <label className="textGeneric" htmlFor="phone">Teléfono</label>
                    <input className="textGeneric" type="text" id="phone" placeholder="Ingrese su teléfono" />
                </div>
                <div className="containerInput">
                    <label className="textGeneric" htmlFor="province">Provincia</label>
                    <input className="textGeneric" type="text" id="province" placeholder="Ingrese su provincia" />
                </div>
                <div className="containerInput">
                    <label className="textGeneric" htmlFor="city">Ciudad</label>
                    <input className="textGeneric" type="text" id="city" placeholder="Ingrese su ciudad" />
                </div>
                <div className="containerInput">
                    <label className="textGeneric" htmlFor="street">Calle</label>
                    <input className="textGeneric" type="text" id="street" placeholder="Ingrese su calle" />
                </div>
                <div className="containerInput">
                    <label className="textGeneric" htmlFor="stnumber">Altura</label>
                    <input className="textGeneric" type="text" id="stnumber" placeholder="Ingrese su altura" />
                </div>
                <div className="containerMessage">
                    <label className="textGeneric" htmlFor="comentario">Mensaje</label>
                    <textarea cols={100} rows={10} placeholder="Deje aquí su mensaje" defaultValue={""} />
                    <input className="textGeneric" type="submit" value="Finalizar compra" /> 
                </div>
            </form>
        </div>
    );
}

export default Cart;
