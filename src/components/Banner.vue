<template>
    <div class="bg-black text-bg-dark m-0 container-fluid row justify-content-center">
        <section class="banner col-md-10 col-12 ps-0 pe-0">
            <div class="row pt-5">
                <div class="col-12 text-center text-md-start display-2">
                    Hi, I'm 
                    <div class="m-0 d-sm-none"> </div>
                    Frank Chung.
                </div>
            </div>
            <div class="row">
                <div class="ms-lg-5 ms-md-5 col-12 text-center text-md-start d-none d-md-block">
                    <p class="display-2 blur">Hi, I'm Frank Chung.</p>
                </div>
            </div>
            <div class="row justify-content-lg-end mt-5">
                <div class="col-12 text-center text-md-end display-2">
                    I'm a 
                    <div class="m-0 d-sm-none"> </div>
                    UX Designer.
                </div>
            </div>
            <div class="row justify-content-lg-end">
                <div class="col-12 text-center text-md-end d-none d-md-block">
                    <p class="display-2 blur delete-decoration mb-0">Frontend Engineer</p>
                </div>
            </div>
            <div class="row justify-content-lg-end">
                <div class="col-12 text-center text-md-end d-none d-md-block">
                    <p class="display-2 blur delete-decoration">Product Manager</p>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-lg-3 col-md-6 col-12 mb-3 d-grid">
                    <button class="btn btn-outline-warning btn-lg">More Frank</button>
                </div>
                <div class="col-lg-3 col-md-6 col-12 mb-3 d-grid">
                    <button class="btn btn-outline-light btn-lg">Resume</button>
                </div>
            </div>
        </section>
    </div>
</template>
<style scoped>
    .display-2{
        font-weight: 400;
        letter-spacing: .1rem;
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