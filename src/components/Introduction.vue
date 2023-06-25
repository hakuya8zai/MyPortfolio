<template>
    <section class="bg-black container-fluid pt-5 pb-3">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-7 col-md-10 col-12">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-10 col-lg-12">
                        <content class="part1 text-white">
                            <p>2 years of product development experience, including product design, front-end development, and product management.</p>
                        </content>
                        <content class="part1 text-white">
                            <p>I am a well-rounded product builder with expertise in design, programming, marketing, and business strategy. I have a strong passion for continuous learning and embrace change and growth.</p>
                        </content>
                        <content class="part1 text-white">
                            <p>With excellent problem-solving skills, I approach challenges with smart and efficient strategies. My ultimate goal is to create software products that have the potential to make a significant impact and change the world.</p>
                        </content>
                        <div class="row button-wrapper pt-3 pb-3">
                            <div class="col-6 d-grid">
                                <router-link role="button" class="btn btn-outline-warning btn-lg me-3" to="/MyPortfolio/Work">Works</router-link>
                            </div>
                            <div class="col-6 d-grid">
                                <router-link role="button" class="btn btn-outline-light btn-lg me-3" to="/MyPortfolio/Resume">Resume</router-link>
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
        font-size: 1rem;
        line-height: 1;
        letter-spacing: 0.10rem;
        font-weight: 200;
    }
    .btn{
        border-radius: 0px;
    }
</style>