<template>
    <div class="bg-black text-bg-black container-fluid">
        <div class="project-group top-0 row g-0 justify-content-center pb-5">
            <div class="col-md-10 col-12">
                <div class="row row-cols-lg-2 row-cols-1 card-deck justify-content-center justify-content-lg-between">
                    <div class="col pt-2 pb-2">
                        <router-link :to="'/MyPortfolio/Work/TravelMaker'">
                            <div class="card bg-light text-center">
                                <img src="../assets/TravelMaker/TravelMaker_Cover.png" class="card-img" alt="...">
                                <div class="card-img-overlay">
                                    <h2 class="card-title">TravelMaker</h2>
                                    <h4 class="card-text">幫助旅行者快速找到替代方案的旅遊行程管理軟體</h4>
                                    <h6 class="card-text">Product Manager, UX Designer</h6>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="col pt-2 pb-2">
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

                    <div class="col pt-2 pb-2">
                        <router-link :to="'/MyPortfolio/Work/LilyChen'">
                            <div class="card bg-light text-center">
                                <img src="../assets/LilyChen/LilyChen_Cover.png" class="card-img" alt="...">
                                <div class="card-img-overlay">
                                    <h2 class="card-title">Lily Chen Website</h2>
                                    <h4 class="card-text">攝影師 Lily Chen 的個人品牌網站</h4>
                                    <h6 class="card-text">Product Manager, UI/UX Designer</h6>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="col pt-2 pb-2">
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
            </div>
        </div>
    </div>
</template>

<script></script>

<style scoped>
    .card{
        border: none;
    }
    .card-text, .card-title{
        color: black;
        transform: translateY(50px);   
        transition: transform 0.4s ease-out;
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
        transform: translateY(0);   
    }
    .card-img-overlay:hover .card-text{
        color: gray;
        transform: translateY(0);   
    }

</style>
