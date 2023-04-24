<template>
    <section class="bg-black container-fluid pt-3">
        <div class="sort-title row justify-content-center">
            <div class="col-12 col-md-10">
                <p class="text-white fs-3">Latest</p>
            </div>
        </div>
        <div class="project-wall row justify-content-center">
            <div class="col-12 col-md-10">
                <div class="row">
                    <div v-for="project in projects" class="project-card col-lg-4 col-md-6 col-12">
                        <router-link to="/MyPortfolio/About">
                            <div class="card text-white bg-black p-0 mb-3" aria-hidden="true">
                                <img v-bind:src="project.image" class="card-img-top mb-3" alt="Click Here">
                                <h5 class="card-text m-0">{{project.title}}</h5>
                                <p class="card-text m-0">
                                    <small class="text-muted">
                                        <span>{{project.comment}}</span>
                                    </small>
                                </p>
                                <p class="card-text mt-0">
                                    <small class="text-muted">
                                        <span>{{project.donedate}}</span>
                                        <span>・</span>
                                        <span>{{project.viewcounts}}</span>
                                    </small>
                                </p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>

        </div>
    </section>

</template>

<script setup>
    import { ref } from 'vue';
    import testImg from '../assets/TravelMaker/TravelMaker_Cover.png';
    import{ WorkRef } from '../main.js'
    import { onValue } from "firebase/database";
    const projects = ref([]);

    //get works from db
    getWorkData();

    function getWorkData() {
    //第一次完，每次更動也會 update
    //To do：不知道為什麼現在必須要重新刷新才有，不會自己 update
    onValue(WorkRef, (snapshot) => {
        if (snapshot.exists()) {
        const data = snapshot.val();
        addWork(data);
        } else {
        console.log("No data available");
        }
    });
    }

    function addWork (data){
        const dataArr = Object.keys(data).map(key => data[key]); //把 json object 轉回 array
        console.log(dataArr[0].title);

        //push works
        for(let i =0; i<dataArr.length;i++){
            projects.value.unshift(dataArr[i]);
        }
    }


</script>


<style scoped>
    a{
        text-decoration: none;
    }
    .card-img-top{
        border-radius: 0px;
        background-color: #89B9CD;
        transition: ease-in 0.05s;
    }
    .card:hover .card-img-top{
        scale: 98%;
        box-shadow: 0px 0px 10px white;

        border-radius: 5px;
    }
</style>