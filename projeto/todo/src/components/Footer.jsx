import React from 'react'
import Filtro from '../containers/filtro'

const Footer = () => (
  <p>
    <span>Mostrar:</span>
    <Filtro filtro="MOSTRAR_TODOS">Todos</Filtro>
    <Filtro filtro="MOSTRAR_PENDENTES">Pendentes</Filtro>
    <Filtro filtro="MOSTRAR_FINALIZADOS">Finalizados</Filtro>
  </p>
)

export default Footer
