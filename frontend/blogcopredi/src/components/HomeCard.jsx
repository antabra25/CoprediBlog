import React from "react";
import Card from "./common/Card";
import Button from "./common/Button";

const HomeCard = ()=>{
    return(
        <Card height="450px" width="440px">
            <div className="home-card">

                <h1 className="home-card-title">¿Qué es Copredi?</h1>
                <p className="home-card-text">
                En Copredi nos encargamos de brindarle un refugio
                temporal a los damnificados asegurando su derecho
                a la vivienda digna. Somos el puente que permite
                priorizar la asignacion de viviendas entregadas por
                el Gobierno de Venezuela a los ciudadanos venezolanos
                afectados por alguna tragadia.
                </p>

                <Button className="btn-md top-3">Solicitar ayuda</Button>
            </div>
        </Card>

    )

}



export default HomeCard