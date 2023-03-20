<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-1 border-white">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="../assets/Frank_logo.svg" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <div class="line1"></div>
          <div class="line2"></div>
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

<script setup>
    
</script>

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

    .navbar-toggler-icon {
    /* background-image: none; */
    border: none;
    outline: none;
    width: 24px;
    height: 17px;
    }

    .navbar-toggler {
    border: none;
    outline: none;
    }
    .line1,.line2{
        height: 4px;
        width: 50px;

        margin-top: 10px;
        margin-bottom: 10px;
        background-color: white;
        border-radius:0px;

    }
    .line1 {
        animation: open-line1-rev 0.5s ease-in-out;
    }
    .line2 {
        animation: open-line2-rev 0.5s ease-in-out;
    }
    .line1 .open{
        animation: open-line1-rev 0.5s ease-in-out;
    }
    .line2 .open{
        animation: open-line1-rev 0.5s ease-in-out;
    }

    @keyframes open-line1{
        0%{
            transform:translate3d(0,0,0) rotate(0deg);
        }
        50%{
            transform:translate3d(0,-10,0) rotate(0deg);
        }
        100%{
            transform:translate3d(0,-10,0) rotate(45deg);
        }
    }
    @keyframes open-line2{
        0%{
            transform:translate3d(0,0,0) rotate(0deg);
        }
        50%{
            transform:translate3d(0,10,0) rotate(0deg);
        }
        100%{
            transform:translate3d(0,10,0) rotate(-45deg);
        }
    }


</style>