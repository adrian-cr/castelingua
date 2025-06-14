import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../styles/pages/About.css"
import FlagOrbit from '../components/subcomponents/FlagOrbit'
import BookOrbit from '../components/subcomponents/BookOrbit'
import WorldOrbit from '../components/subcomponents/WorldOrbit'

export default function About() {
  return (
    <>
      <Navbar/>
      <main className="about-main">
        <h1 className="main-header">¿Qué es&nbsp;<img className="main-header-logo" src="/images/logotype_indigo.png"/>?</h1>
        <section className="main-section reverse-flow">
          <FlagOrbit/>
          <p className="main-section-p">
            Castelingua es una plataforma de consulta
            que busca facilitar y agilizar el acceso a los diversos
            recursos digitales proporcionados por diferentes
            instituciones difusoras de la lengua española y las culturas
            de las comunidades hispanohablantes.
          </p>

        </section>
        <h2 className="main-section-heading">¿Cómo funciona?</h2>
        <section className="main-section">
          <BookOrbit/>
          <p className="main-section-p">
            Cuando haces una consulta, Castelingua usa la(s)
            palabra(s) clave que proporciones para realizar búsquedas
            a distintos recursos lingüísticos en la web y compila
            todos los resultados obtenidos en una sola página.
          </p>
        </section>
        <h2 className="main-section-heading">¿Nuestro objetivo?</h2>
        <section className="main-section reverse-flow">
          <WorldOrbit/>
          <p className="main-section-p">
            Ser una herramienta de consulta universal y confiable
            para lingüistas, traductores, académicos y todo internauta con dudas
            sobre la lengua castellana, proporcionando una amplia variedad de
            recursos publicados por autoridades académicas de prestigio y
            centralizando su acceso.
          </p>
        </section>
      </main>
      <Footer/>
    </>
  )
}
