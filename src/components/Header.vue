<template>
    <nav class="navbar navbar-expand-lg navbar-black bg-black border-bottom border-1 border-white sticky-top">
      <div class="container-fluid">
        <router-link to="/MyPortfolio" class="navbar-brand">
            <img src="../assets/Frank_logo.svg" alt="">
        </router-link>
        <button @click="menuToggle" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <div class="line1"></div>
          <div class="line2"></div>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-lg-auto">
            <li class="nav-item bt-border text-center ms-lg-auto">
              <router-link to="/MyPortfolio/About" class="nav-link nlink-style hover-underline-animation ps-3 pe-3">About</router-link>
            </li>
            <li class="nav-item bt-border text-center ms-lg-auto">
              <router-link to="/MyPortfolio/Work" class="nav-link nlink-style hover-underline-animation ps-3 pe-3">Work</router-link>
            </li>
            <li class="nav-item bt-border text-center ms-lg-auto">
              <router-link to="/MyPortfolio/Resume" class="nav-link nlink-style hover-underline-animation ps-3 pe-3">Resume</router-link>
            </li>
            <li class="nav-item text-center ms-lg-auto">
              <a href="https://medium.com/@huikaichung1999" class="nav-link nlink-style hover-underline-animation ps-3 pe-3">Medium</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script setup>
    function menuToggle(){
        const line1 = document.querySelector('.line1');
        const line2 = document.querySelector('.line2');
        line1.classList.toggle('open');
        line2.classList.toggle('open');
    }
</script>

<style scoped>
    .navbar {
      box-shadow: 0px 0px 5px white;
      position:fixed-top;
    }

    .navbar-toggler-icon {
    /* background-image: none; */
    border: none;
    outline: none;
    width: 24px;
    height: 17px;
    }

    .navbar-toggler {
    border: none;
    box-shadow: none !important;
    }

    /* header item 在 navbar lg 以下的不同樣式 */
    @media screen and (max-width: 991px) {
        .bt-border{
            border-bottom:2px solid white;
        }
        .nlink-style{
            color: white;
            font-size: 20px;
            padding-top: 12px;
            padding-bottom: 12px;
        }  
    }
    @media screen and (min-width: 992px) {
        .nlink-style{
            color: white;
            font-size: 0.8rem;
            padding-top: 0;
            padding-bottom: 0;
        }
    }


    .line1,.line2{
        height: 4px;
        width: 50px;

        margin-top: 10px;
        margin-bottom: 10px;
        background-color: white;
        border-radius:0px;

    }
    .collapsed .line1 {
        animation: collapse-line1 0.3s ease-in-out;
        animation-fill-mode:backwards;
    }
    .collapsed .line2 {
        animation: collapse-line2 0.3s ease-in-out;
        animation-fill-mode:backwards;
    }
    .line1.open{
        animation: open-line1 0.3s ease-in-out;
        animation-fill-mode:forwards;
    }
    .line2.open{
        animation: open-line2 0.3s ease-in-out;
        animation-fill-mode:forwards;
    }

    @keyframes open-line1{
        0%{
            transform:rotate(0deg);
            margin-top: 10px;
            margin-bottom: 10px;
        }
        50%{
            transform:rotate(0deg);
            margin-top: 0px;
            margin-bottom: -4px;
        }
        100%{
            transform:rotate(45deg);
            margin-top: 0px;
            margin-bottom:-4px;
        }
    }
    @keyframes open-line2{
        0%{
            transform:rotate(0deg);
            margin-top: 10px;
            margin-bottom: 10px;
        }
        50%{
            transform:rotate(0deg);
            margin-top: -4px;
            margin-bottom: 0px;
        }
        100%{
            transform:rotate(-45deg);
            margin-top: -4px;
            margin-bottom:0px;
        }
    }
    @keyframes collapse-line1{
        100%{
            transform:rotate(0deg);
            margin-top: 10px;
            margin-bottom: 10px;
        }
        50%{
            transform:rotate(0deg);
            margin-top: 0px;
            margin-bottom:-4px;
        }
        0%{
            transform:rotate(45deg);
            margin-top: 0px;
            margin-bottom:-4px;
        }
    }
    @keyframes collapse-line2{
        100%{
            transform:rotate(0deg);
            margin-top: 10px;
            margin-bottom: 10px;
        }
        50%{
            transform:rotate(0deg);
            margin-top: -4px;
            margin-bottom:0px;
        }
        0%{
            transform:rotate(-45deg);
            margin-top: -4px;
            margin-bottom:0px;
        }
    }

    .hover-underline-animation {
    display: inline-block;
    position: relative;
    }
    .hover-underline-animation:hover {
    display: inline-block;
    position: relative;
    color: #feaa34;
    cursor: pointer;
    }

    .hover-underline-animation::after {
    content: ''; 
    position: absolute;
    width: 70%;
    transform: scaleX(0) translateX(0%);
    height: 4px;
    bottom: 0;
    left: 15%;
    background-color: #feaa34;
    transform-origin: bottom;
    transition: transform 0.25s ease-in-out;
    }

    .hover-underline-animation:hover::after {
    left: 15%;
    transform: scaleX(1) translateX(0%);
    transform-origin: bottom;
    }
</style>