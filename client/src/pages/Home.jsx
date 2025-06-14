import React, { Component } from 'react'
import "../styles/pages/Home.css"
import HomeNavBar from '../components/HomeNavbar'
import MainSearchbar from '../components/subcomponents/searchbars/MainSearchbar'
import { Box, Container } from '@mui/material'
import Footer from '../components/Footer'
export default class Home extends Component {
  render() {
    return (
      <>
        <HomeNavBar></HomeNavBar>
        <main id="home-main">
          <Container id="hm-wrapper">
            <Box component="img" id="hm-logo" src="./images/isotype_indigo_seethrough.png"/>
            <MainSearchbar/>
          </Container>
        </main>
        <Footer/>
      </>
    )
  }
}
