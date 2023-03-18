<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-1 border-white">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="../assets/Frank_logo.svg" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/about" class="nav-link nlink-style ps-3 pe-3">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/portfolio" class="nav-link nlink-style ps-3 pe-3">Work</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link nlink-style ps-3 pe-3">Resume</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link nlink-style ps-3 pe-3">Medium</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/archive" class="nav-link nlink-style ps-3 pe-3">Archive</router-link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </template>
  <style scoped>
    .navbar {
      box-shadow: white 0px 0px 8px 0px;
      position:fixed-top;
    }
    .nlink-style{
        color: white;
        font-size: 16px;
        padding-top: 0;
        padding-bottom: 0;
    }
</style>