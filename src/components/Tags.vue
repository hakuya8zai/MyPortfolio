<script setup>

</script>
<template>
    <section class="bg-black container-fluid pt-5">
        <div class="row justify-content-center">
            <div class="col-12 col-md-10">
                <!-- tags 是固定好的，中間用 / 隔開 -->
                <div class="btn-group" role="group" >
                    <input type="radio" class="btn-check" name="tagradio" id="LatestTag" autocomplete="off" checked>
                    <label class="btn tags-btn btn-outline-dark" for="LatestTag">Latest</label>
                    <p class="text-white p-1 m-0">/</p>
                    <input type="radio" class="btn-check" name="tagradio" id="FrontendTag" autocomplete="off">
                    <label class="btn tags-btn btn-outline-dark" for="FrontendTag">Frontend</label>
                    <p class="text-white p-1 m-0">/</p>
                    <input type="radio" class="btn-check" name="tagradio" id="UiuxTag" autocomplete="off">
                    <label class="btn tags-btn btn-outline-dark" for="UiuxTag">UIUX</label>
                </div>
                <div class="divider mb-4 mt-0"></div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .tags-btn{
        color:gray;
        border:none;
    }
    .tags-btn:hover{
        color:#feaa34;
    }

    .btn-check:checked+.btn{
        background-color:transparent;
    }
    .divider{
        width:100%;
        border-bottom:1px solid white;
        border-radius: 0px;
    }

</style>