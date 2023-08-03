import React,{useState} from 'react';
import img from './logo.png';
import Modal1 from './Modal1';
import AOS from 'aos'
function Header(props) {
  AOS.init();
  return (
    <>
      <div class="row">
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark navbar-fixed-top" style={{"position":"absolute","z-index":"1"}}data-aos="fade-down" data-aos-duration="1000">
          <div class="container-fluid" >
            <a class="navbar-brand" href="#"><img src={img} style={{ width: '45px', height: '35px' }} class="rounded bg-danger" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mynavbar">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Movies</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Telugu</a></li>
                    <li><a class="dropdown-item" href="#">English</a></li>
                    <li><a class="dropdown-item" href="#movies">Other</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Webseries</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Telugu</a></li>
                    <li><a class="dropdown-item" href="#">English</a></li>
                    <li><a class="dropdown-item" href="#webseries">Other</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#cartoons">Cartoons</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact">Contact Us</a>
                </li>
                <li class="nav-item"><Modal1 />=</li>
              </ul>
              <form class="d-flex">
                <input class="form-control me-2 search-bar" type="text" placeholder="Search" id="searchInput"/>
                <button class="btn btn-danger" type="button">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
export default Header;