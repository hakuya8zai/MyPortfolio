<template>
    <section class="bg-black container-fluid pt-5 pb-3">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-7 col-md-10 col-12">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-10 col-lg-12">
                        <content class="part1 text-white">
                        <p>I am a designer who advocates freedom and harmony, and hopes to help others solve problems in smart and special ways.</p>
                        </content>
                        <content class="part1 text-white">
                            <p>2+ years of product development experience, including product design, front-end development.</p>
                        </content>
                        <content class="part1 text-white">
                            <p>A Well-rounded product designer with cross-domain knowledge and experience in design, programming, marketing, and business strategy.</p>
                        </content>
                        <div class="row button-wrapper pt-3 pb-3">
                            <div class="col-6 d-grid">
                                <router-link role="button" class="btn btn-outline-warning btn-lg me-3" to="/home">Works</router-link>
                            </div>
                            <div class="col-6 d-grid">
                                <router-link role="button" class="btn btn-outline-light btn-lg me-3" to="/resume">Resume</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    p{
        font-size: 18px;
        line-height: 1;
        letter-spacing: 0.10rem;
    }
    .btn{
        border-radius: 0px;
    }
</style>