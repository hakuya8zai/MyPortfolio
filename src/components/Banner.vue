<template>
    <div class="bg-black text-bg-dark m-0 container-fluid row justify-content-center">
        <section class="banner col-lg-10 col-md-8 col-12 ps-0 pe-0">
            <div class="row pt-5">
                <div class="col-auto">
                    <p class="banner-words">Hi, I'm Frank Chung.</p>
                </div>
            </div>
            <div class="row">
                <div class="ms-lg-5 col-auto">
                    <p class="banner-words blur">Hi, I'm Frank Chung.</p>
                </div>
            </div>
            <div class="row justify-content-lg-end mt-5">
                <div class="col-auto">
                    <p class="banner-words">I'm a UI/UX Designer.</p>
                </div>
            </div>
            <div class="row justify-content-lg-end">
                <div class="col-auto">
                    <p class="banner-words blur delete-decoration">Frontend Engineer</p>
                </div>
            </div>
            <div class="row justify-content-lg-end">
                <div class="col-auto me-2">
                    <p class="banner-words blur delete-decoration">Product Manager</p>
                </div>
            </div>
            <div class="row mt-5 mb-3">
                <div class="col-3 d-grid">
                    <button class="btn btn-outline-warning btn-lg">More Frank</button>
                </div>
                <div class="col-3 d-grid">
                    <button class="btn btn-outline-light btn-lg">Resume</button>
                </div>
            </div>
        </section>
    </div>
</template>
<style scoped>
    .banner-words{
        font-size: 65px;
        line-height: 0.8;
    }
    .blur{
        color: transparent;
        text-shadow: 0 0 5px white;
    }
    .delete-decoration{
        text-decoration: line-through;
    }
    button{
        border-radius: 0px;
    }
</style>