<template>
    <section class="container bg-light pt-5">
        <form @submit.prevent="UploadWorkData" class="row justify-content-center">
            <div class="col-10 mb-3">
                <label for="inputTheme" class="form-label">Title</label>
                <input type="text" v-model="newWorkTitle" class="form-control" id="inputTheme" placeholder="請輸入主題">
            </div>
            <div class="col-10 mb-3">
                <label for="inputRoute" class="form-label">Route</label>
                <input type="text" v-model="newWorkRoute" class="form-control" id="inputRoute" placeholder="請輸入路徑">
            </div>
            <div class="col-10 mb-3">
                <label for="inputTag" class="form-label">Tag</label>
                <input type="text" v-model="newWorkTag" class="form-control" id="inputTag" placeholder="請輸入 Tag">
            </div>
            <div class="col-10 mb-3">
                <label for="inputComment" class="form-label">Comment</label>
                <input type="text" v-model="newWorkComment" class="form-control" id="inputComment" placeholder="請輸入 Comment">
            </div>
            <div class="col-10 mb-3">
                <label for="inputDonedate" class="form-label">Donedate</label>
                <input type="text" v-model="newWorkDonedate" class="form-control" id="inputDonedate" placeholder="請輸入日期">
            </div>
            <div class="col-10 mb-3">
                <label for="inputViewcount" class="form-label">Viewcounts</label>
                <input type="text" v-model="newWorkViewcounts" class="form-control" id="inputViewcount" placeholder="請輸入觀看數">
            </div>


            <div class="col-10 mb-3">
                <label for="formFile" class="form-label">Default file input example</label>
                <input class="form-control" v-on:change="newWorkImage" type="file" id="formFile">
            </div>
            <div class="col-10 mb-3">
                <button type="submit" :disabled="!newWorkTitle" class="btn btn-primary mb-3">Confirm identity</button>
            </div>
        </form>
    </section>
</template>

<script setup>
    import { ref } from 'vue';
    import { addWorkData } from "../main.js"
    let newWorkId = ref('');
    let newWorkTag = ref('');
    let newWorkRoute = ref('');
    let newWorkImage = ref('../assets/TravelMaker/TravelMaker_Cover.png');
    let newWorkTitle = ref('');
    let newWorkComment = ref('');
    let newWorkDonedate = ref('');
    let newWorkViewcounts = ref('');


    function UploadWorkData(){
        console.log(newWorkTag.value);
        addWorkData( "04", newWorkTag.value, newWorkRoute.value, newWorkImage.value, newWorkTitle.value, newWorkComment.value, newWorkDonedate.value, newWorkViewcounts.value);
    }
</script>