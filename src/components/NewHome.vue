<template>
    <div class="bg-black text-bg-dark m-0 container-fluid">
        <div class="fill-height row mx-0 justify-content-center align-items-center">
            <section class="banner col-lg-5 col-md-8 col-12 ps-0 pe-0">
            <div class="row mx-0 mt-md-5 mt-lg-0">
                <div class="col-12 text-center">
                    <p class="display-2" id="myname">Frank Chung</p>
                </div>
                <div class="col-12 text-center">
                    <p class="display-4" id="jobs">{{jobsText}}</p>
                </div>

            </div>
            <div class="row mx-0 mt-4 mt-md-5 justify-content-center">
                <div class="col-lg-5 col-12 mb-3 mt-md-5 mt-lg-0">
                    <router-link :to="'/MyPortfolio/About'" class="d-grid text-decoration-none">
                        <button class="btn btn-outline-warning btn-lg cursorFix">
                                More Frank
                        </button>
                    </router-link>
                </div>
                <div class="col-lg-5 col-12 mb-3 d-grid">
                        <router-link to="/MyPortfolio/Resume" class="d-grid text-decoration-none">
                            <button class="btn btn-outline-light btn-lg cursorFix">
                                    Resume
                            </button>
                        </router-link>
                </div>
            </div>
            </section>
            <section class="carousel col-lg-4 col-md-8 col-12 mb-md-5 mb-lg-0">
                <div id="carouselExampleFade" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <router-link :to="'/MyPortfolio/Work/TravelMaker'">
                                <div class="card bg-light text-center">
                                    <img src="../assets/TravelMaker/TravelMaker_Cover.png" class="card-img" alt="...">
                                    <div class="card-img-overlay">
                                        <h2 class="card-title">TravelMaker</h2>
                                        <h4 class="card-text">幫助旅行者快速找到替代方案的旅遊軟體</h4>
                                        <h6 class="card-text">Product Manager, UX Designer</h6>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                        <div class="carousel-item">
                            <router-link :to="'/MyPortfolio/Work/InshoneDesign'">
                                <div class="card bg-light text-center">
                                    <img src="../assets/InshoneDesign/InshoneDesign_Cover.png" class="card-img" alt="...">
                                    <div class="card-img-overlay">
                                        <h2 class="card-title">影相設計</h2>
                                        <h4 class="card-text">提供模組化影像製作方案的選購平台</h4>
                                        <h6 class="card-text">Product Designer, Frontend Developer</h6>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                        <div class="carousel-item">
                            <router-link :to="'/MyPortfolio/Work/PersonalityQuiz'">
                                <div class="card bg-light text-center">
                                    <img src="../assets/PersonalityQuiz/PersonalityQuiz_Cover.png" class="card-img" alt="...">
                                    <div class="card-img-overlay">
                                        <h2 class="card-title">學習風格測驗</h2>
                                        <h4 class="card-text">均一教育平台的心理測驗互動式網頁</h4>
                                        <h6 class="card-text">Product Designer, Frontend Developer</h6>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </div>
    </div>

</template>

<script setup>
    import { ref , watchEffect } from 'vue';
    const jobsText = ref('Product Manager');
    const texts = ['Product Manager', 'Frontend Engineer', 'UX Designer', 'Frontend Designer'];
    let index = 0;


    watchEffect(() => {
        setInterval(() => {
            index = (index + 1) % texts.length;
            jobsText.value = texts[index];
        }, 4000);
    });

    

</script>

<style scoped>
    #myname{
        font-weight: 400;
        letter-spacing: .1rem;
        text-shadow: 0px 0px 20px white;
    }
    .card{
        border: none;
    }
    .card-text, .card-title{
        color: black;
        transform: translateY(50px);   
        transition: transform 0.4s ease-out;
    }
    .card-text{
        font-size: 1rem;
    }
    .card-title{
        font-size: 1.4rem;
    }
    .card-img{
        max-height: 300px;
        object-fit: cover;
    }
    .card-img:hover{
        cursor: pointer;
    }
    .card-img-overlay{
        background-color: black;
        opacity: 0;
        /* 下面這行讓文字往中間對齊 */
        padding-top: 15%;
        transition: opacity 0.25s ease-out;

    }
    .card-img-overlay:hover{
        opacity: 1;
        cursor: pointer;
    }

    .card-img-overlay:hover .card-title{
        color: white;
        transform: translateY(10px);   
    }
    .card-img-overlay:hover .card-text{
        color: gray;
        transform: translateY(10px);   
    }
    .btn{
        border-radius: 0px;
    }
    .cursorFix{
        cursor: pointer;
    }
    .fill-height{
        position: relative;
        min-height: 85vh;
    }

    #jobs{
        animation-name: jobsSwitch;
        animation-duration: 4s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-delay: 0s;
    }
    @keyframes jobsSwitch{
        0%{
            color: transparent;
            text-shadow: 0px 0px 150px white;
        }
        25%,75%{
            color: transparent;
            text-shadow: 0px 0px 0px white;

        }
        100%{
            color: transparent;
            text-shadow: 0px 0px 150px white;

        }
    }
</style>
