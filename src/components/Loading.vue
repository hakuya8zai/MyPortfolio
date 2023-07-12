<template>
    <div class="loading-container">
      <div class="loading-overlay bg-dark"></div>
      <div class="spinner">
        <LoadingAnime/>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import LoadingAnime from './LoadingAnime.vue'
  </script>
  
  <style scoped>
  .loading-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 9999;
    animation: MoveIn 0.4s ease-in-out ;
  }
  
  .loading-overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 120%;
    height: 100%;
    opacity: 1;
  }
  
  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* 調整 Spinner 的樣式，例如大小、顏色、動畫等 */
    animation: FadeIn 0.2s ease-In;
  }
  /*Loading 載入時，Spinner FadeIn , Loading FadeOut 時，Spinner 也要 FadeOut*/
    .fadeOut .spinner{
        animation: FadeOut 0.2s ease-out;
    }

  .fadeOut{
    animation:MoveOut 0.4s ease-in-out forwards;
  }
  .hideLoad{
    display: none;
  }

  @keyframes MoveIn {
    0%{
        left: -120%;
    }
    100%{
        left: 0%;
    }
  }
  @keyframes MoveOut {
    0%{
        left:0%;
    }
    100%{
        left:100%;
    }
  }
  @keyframes FadeOut {
    0%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
  }
  @keyframes FadeIn {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
  }
  </style>
  