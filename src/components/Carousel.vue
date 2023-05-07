<template>
    <section class="bg-black container-fluid pt-0" style="min-height: 500px;">
        <div class="project-wall row justify-content-center">
            <div class="col-12 col-md-10">
                <div class="row">
                    <div v-for="project in projects" v-show="project.screened" class="project-card col-lg-4 col-md-6 col-12">
                        <router-link :to="project.route">
                            <div class="card text-white bg-black p-0 mb-3">
                                <img v-bind:src="project.image" class="card-img-top mb-3" alt="Click Here">
                                <h5 class="card-text m-0">{{project.title}}</h5>
                                <p class="card-text m-0">
                                    <small class="text-muted">
                                        <span>{{project.comment}}</span>
                                    </small>
                                </p>
                                <p class="card-text mt-0">
                                    <small class="text-muted">
                                        <span v-if="Math.floor(project.donedate/12)">{{Math.floor(project.donedate/12)}}</span>
                                        <span v-if="Math.floor(project.donedate/12)"> year </span>
                                        <span v-if="project.donedate%12">{{project.donedate%12}}</span>
                                        <span v-if="project.donedate%12"> months </span>
                                        <span> ago</span>
                                        <span>・</span>
                                        <span>{{project.viewcounts}}</span>
                                        <span> views</span>
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
    import{ WorkRef } from '../main.js'
    import { onValue, get, query } from "firebase/database";
    const projects = ref([]);
    console.log(projects);
    const TagButtons = document.getElementsByName('tagradio');
    for(let i = 0;i<TagButtons.length;i++){
        TagButtons[i].addEventListener("click", () =>{
            let screenedTag = TagButtons[i].value;
            console.log(screenedTag);
            ScreenWork(screenedTag);
        })
    }


    //get works from db
    getWorkData();


    function getWorkData() {
    //第一次完，每次更動也會 update
    // onValue(WorkRef, (snapshot) => {
    //     if (snapshot.exists()) {
    //     const data = snapshot.val();
    //     console.log(data);
    //     addWork(data);
    //     }
    //     else {
    //     console.log("No data available");
    //     }
    // });

    //這是只有更新一次，需刷新
    get(WorkRef).then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            addWork(data);
        } else {
            console.log("No data available");
        }
    }).catch((error) => { 
        console.error(error);
    });

    }
    

    //計算日期間隔
    function DateCount(timeText){
        let newMonth = new Date(timeText.donedate).getMonth();
        let newYear = new Date(timeText.donedate).getYear();
        let nowMonth = new Date().getMonth();
        let nowYear = new Date().getYear();
        let monthSpan = nowMonth - newMonth + ( nowYear - newYear )*12;
        timeText.donedate = monthSpan;
    }


    function addWork (data){
        //把 json object 轉回 array
        const dataArr = Object.keys(data).map(key => data[key]);

        //push works
        for(let i =0; i<dataArr.length;i++){
            DateCount(dataArr[i]);
            //以下這個是為了即時監聽是否新增
            //projects.value.unshift(dataArr[i]);
        }
        //bubble sort datas，從小到大排列
        let bubbleCounts = dataArr.length;
        while (bubbleCounts>1){
            bubbleCounts--;
            for(let i =0; i<bubbleCounts;i++){
                //抓最大往右邊放
                if(dataArr[i].donedate>dataArr[i+1].donedate){
                    //交換
                    [dataArr[i],dataArr[i+1]] = [dataArr[i+1],dataArr[i]];
                }
            }
        }
        //送出處理後的陣列
        for(let i=0;i<dataArr.length;i++){
            dataArr[i].screened = true;
        }
        projects.value = dataArr;
    }

    function ScreenWork(chosenTag){
        for(let i =0; i<projects.value.length;i++){
            if(chosenTag!=null){
                if(chosenTag == "Latest" || chosenTag == "All"){
                    let latestCount = 0;
                    for(let i=0;i<projects.value.length;i++){
                        if(chosenTag == "Latest"){
                            if(latestCount <4){
                                projects.value[i].screened = true;
                                latestCount++;
                            }
                            else{
                                projects.value[i].screened = false;
                            }
                        }
                        else{
                            projects.value[i].screened = true;
                        }
                    }

                }
                else{
                    for(let j=0;j<projects.value[i].tag.length;j++){
                        if(projects.value[i].tag[j] == chosenTag){
                            projects.value[i].screened = true;
                            break;
                        }
                        projects.value[i].screened = false;
                    }
                }
            }
            else{
                for(let i=0;i<projects.value.length;i++){
                    projects.value[i].screened = true;
                }
            }
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