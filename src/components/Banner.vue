<template>
    <div class="bg-black text-bg-dark mb-0">
        <section class="banner container-fluid">
            <div class="row pt-5">
                <div class="offset-lg-1 col-auto">
                    <p class="banner-words">Hi, I'm Frank Chung.</p>
                </div>
            </div>
            <div class="row">
                <div class="offset-lg-1 col-auto">
                    <p class="banner-words blur">Hi, I'm Frank Chung.</p>
                </div>
            </div>
            <div class="row mt-5">
                <div class="offset-lg-6 col-auto">
                    <p class="banner-words">I'm a UI/UX Designer.</p>
                </div>
            </div>
            <div class="row">
                <div class="offset-lg-7 col-auto">
                    <p class="banner-words blur delete-decoration">Frontend Engineer</p>
                </div>
            </div>
            <div class="row">
                <div class="offset-lg-7 col-auto">
                    <p class="banner-words blur delete-decoration">Product Manager</p>
                </div>
            </div>
            <div class="row mt-5">
                <div class="offset-lg-1 col-10 mb-3">
                        <button class="btn btn-outline-warning btn-lg me-3">More Frank</button>
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
        border-radius: 5px;
    }
</style>