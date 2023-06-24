<template>
    <section class="container-fluid bg-black">
        <div class="row justify-content-center pt-5 pb-5">
            <div class="col-12 col-md-10 col-lg-8">
                <div class="resume-title row justify-content-center">
                    <div class="display-5 text-white col-auto mt-3 mb-3">Looking for ...</div>
                </div>
                <div class="resume-card row row-cols-1 row-cols-lg-2 row-cols-lg-3 justify-content-center">
                    <div class="col pdm-card">
                        <a href="https://firebasestorage.googleapis.com/v0/b/frankportfolio-e3ae3.appspot.com/o/Resume%2F20230623_PDM_ChineseResume.pdf?alt=media&token=e75d1c7d-2df0-4230-80ba-55535305955f" target="_blank" class="nlink-style" @mouseover="PmHover=true" @mouseout="PmHover=false">
                            <div class="card mt-3 mb-5 bg-dark text-bg-dark">
                                <img v-show="!PmHover" src="../assets/Resume/PM_Before.png" class="card-img-top img-fluid px-5 pt-3 pb-3" alt="...">
                                <img v-show="PmHover"  src="../assets/Resume/PM_After.png" class="card-img-top img-fluid px-5 pt-3 pb-3" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Product Manager</h5>
                                    <p class="card-text">By effectively collaborating with cross-functional teams and skillfully managing internal stakeholders, I turn innovative ideas into tangible products.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col fe-card">
                        <a href="https://firebasestorage.googleapis.com/v0/b/frankportfolio-e3ae3.appspot.com/o/Resume%2F20230623_FED_ChineseResume.pdf?alt=media&token=a55797ee-165a-48d4-985d-566b19c2631f" target="_blank" class="nlink-style" @mouseover="FeHover=true" @mouseleave="FeHover=false">
                            <div class="card mt-3 mb-5 bg-dark text-bg-dark">
                                <img v-show="!FeHover" src="../assets/Resume/FE_Before.png" class="card-img-top img-fluid px-5 pt-3 pb-3" alt="...">
                                <img v-show="FeHover"  src="../assets/Resume/FE_After.png" class="card-img-top img-fluid px-5 pt-3 pb-3" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Frontend Engineer</h5>
                                    <p class="card-text">Transforming the ideas of designers into reality through continuous learning and a pursuit of excellence, ultimately providing users with high-quality web experiences.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col ux-card">
                        <a href="https://firebasestorage.googleapis.com/v0/b/frankportfolio-e3ae3.appspot.com/o/Resume%2F20230623_UXD_ChineseResume.pdf?alt=media&token=ef65ed6a-a990-4c5d-b7fc-410be5523f89" target="_blank" class="nlink-style" @mouseover="UxHover=true" @mouseleave="UxHover=false">
                            <div class="card mt-3 mb-5 bg-dark text-bg-dark">
                                <img v-show="!UxHover" src="../assets/Resume/UX_Before.png" class="card-img-top img-fluid px-5 pt-3 pb-3" alt="...">
                                <img v-show="UxHover"  src="../assets/Resume/UX_After.png" class="card-img-top img-fluid px-5 pt-3 pb-3" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">UX Designer</h5>
                                    <p class="card-text">Emphasizing a user-centric approach, the aim is to create simple, intuitive, and valuable products that deliver unforgettable user experiences.</p>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>
<script setup>
    import { ref } from 'vue';
    const PmHover = ref(false);
    const UxHover = ref(false);
    const FeHover = ref(false);

</script>
<style scoped>
    .nlink-style{
        text-decoration-line: none;
        color: black;
        text-align: center;
    }
    .card{
        transition: ease-in 0.1s;
    }
    .card:hover{
        scale: 102%;
        box-shadow: 0px 0px 15px white;
        background-color: rgb(255, 255, 255) !important;
        color:rgb(35, 35, 35) !important;
    }
    .container{
        min-height: 100vh;
    }
</style>