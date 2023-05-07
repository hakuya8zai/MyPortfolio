<template>
    <section class="bg-black container-fluid pt-5">
        <div class="row justify-content-center">
            <div class="col-12 col-md-10 overflow-scroll">
                <!-- tags 是固定好的，中間用 / 隔開 -->
                <div class="btn-group" role="group" >
                    <input value="All" type="radio" class="btn-check" name="tagradio" id="AllTag" autocomplete="off" v-model="NowTag" checked >
                    <label class="btn tags-btn btn-outline-dark" for="AllTag">All</label>
                    <p class="text-white p-1 m-0">/</p>
                    <input value="Latest" type="radio" class="btn-check" name="tagradio" id="LatestTag" autocomplete="off" v-model="NowTag" >
                    <label class="btn tags-btn btn-outline-dark" for="LatestTag">Latest</label>
                    <p class="text-white p-1 m-0">/</p>
                    <input value="Recommended" type="radio" class="btn-check" name="tagradio" id="RecommendedTag" autocomplete="off" v-model="NowTag">
                    <label class="btn tags-btn btn-outline-dark" for="RecommendedTag">Recommended</label>
                    <p class="text-white p-1 m-0">/</p>
                    <input value="PM" type="radio" class="btn-check" name="tagradio" id="PMTag" autocomplete="off" v-model="NowTag">
                    <label class="btn tags-btn btn-outline-dark" for="PMTag">PM</label>
                    <p class="text-white p-1 m-0">/</p>
                    <input value="Frontend" type="radio" class="btn-check" name="tagradio" id="FrontendTag" autocomplete="off" v-model="NowTag">
                    <label class="btn tags-btn btn-outline-dark" for="FrontendTag">Frontend</label>
                    <p class="text-white p-1 m-0">/</p>
                    <input value="UIUX" type="radio" class="btn-check" name="tagradio" id="UiuxTag" autocomplete="off" v-model="NowTag">
                    <label class="btn tags-btn btn-outline-dark" for="UiuxTag">UIUX</label>
                    <p class="text-white p-1 m-0">/</p>
                    <input value="Commercial" type="radio" class="btn-check" name="tagradio" id="CommercialTag" autocomplete="off" v-model="NowTag">
                    <label class="btn tags-btn btn-outline-dark" for="CommercialTag">Commercial</label>
                    <p class="text-white p-1 m-0">/</p>
                    <input value="Web" type="radio" class="btn-check" name="tagradio" id="WebTag" autocomplete="off" v-model="NowTag">
                    <label class="btn tags-btn btn-outline-dark" for="WebTag">Web</label>
                    <p class="text-white p-1 m-0">/</p>
                    <input value="App" type="radio" class="btn-check" name="tagradio" id="AppTag" autocomplete="off" v-model="NowTag">
                    <label class="btn tags-btn btn-outline-dark" for="AppTag">App</label>

                </div>
            </div>
            <div class="col-12 col-md-10">
                <div class="divider mb-4 mt-0"></div>
            </div>
        </div>
        <div class="sort-title row justify-content-center">
            <div class="col-12 col-md-10">
                <p class="text-white fs-3">{{ NowTag }}</p>
            </div>
        </div>
    </section>
</template>
<script setup>
    import { ref } from 'vue';
    const NowTag = ref('All');    
</script>

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