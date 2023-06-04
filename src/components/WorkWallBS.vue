<template>
    <section class="container bg-light pt-5">
        <form @submit="UploadWorkData" class="row justify-content-center">
            <div class="col-10 mb-3">
                <label for="inputTheme" class="form-label">Title</label>
                <input type="text" v-model="newWorkTitle" class="form-control" id="inputTheme" placeholder="請輸入主題">
            </div>
            <div class="col-10 mb-3">
                <label for="inputRoute" class="form-label">Route</label>
                <input type="text" v-model="newWorkRoute" class="form-control" id="inputRoute" placeholder="請輸入路徑">
            </div>
            <div class="col-10 mb-3">
                <p>Tags</p>
                <div class="form-check form-check-inline">
                    <input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox1" value="PM">
                    <label class="form-check-label" for="tagCheckbox1">PM</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox2" value="Frontend">
                    <label class="form-check-label" for="tagCheckbox2">Frontend</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox3" value="UIUX">
                    <label class="form-check-label" for="tagCheckbox3">UIUX</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox4" value="App">
                    <label class="form-check-label" for="tagCheckbox4">App</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox5" value="Web">
                    <label class="form-check-label" for="tagCheckbox5">Web</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox6" value="Commercial">
                    <label class="form-check-label" for="tagCheckbox6">Commercial</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox0" value="Recommended">
                    <label class="form-check-label" for="tagCheckbox0">Recommended</label>
                </div>

            </div>
            <div class="col-10 mb-3">
                <label for="inputComment" class="form-label">Comment</label>
                <input type="text" v-model="newWorkComment" class="form-control" id="inputComment" placeholder="請輸入 Comment">
            </div>
            <div class="col-10 mb-3">
                <label for="inputDonedate" class="form-label">Donedate</label>
                <input type="month" v-model="newWorkDonedate" class="form-control" id="inputDonedate">
            </div>
            <div class="col-10 mb-3">
                <label for="inputViewcount" class="form-label">Viewcounts</label>
                <input type="text" v-model="newWorkViewcounts" class="form-control" id="inputViewcount" placeholder="請輸入觀看數">
            </div>


            <div class="col-10 mb-3">
                <label for="file-input" class="form-label">選擇封面(720*420)</label>
                <input type="file" class="form-control" id="file-input" ref="fileInput" @change="handleFileSelect" accept="image/*">

                <div v-if="imageUrl" class="mt-3">
                    <img :src="imageUrl" class="img-fluid" alt="Selected Image">
                </div>
                <button type="button" class="btn btn-primary mt-3" @click="uploadFile" :disabled="!selectedFile">上傳圖片</button>
            </div>


            <div class="col-10 mb-3">
                <button type="submit" :disabled="!newWorkTitle" class="btn btn-primary mb-3">確認送出</button>
            </div>
        </form>
    </section>
</template>

<script setup>
    import { ref } from 'vue';
    import { addWorkData , WorkRef , Storage ,auth } from "../main.js";
    import { push , child } from "firebase/database";
    import { ref as storageRef, uploadBytes , getDownloadURL } from 'firebase/storage';

    const ImgRef = storageRef(Storage, "workCovers");
    const newKey = push(child(WorkRef, "works")).key;
    let newWorkTag =[] ;
    let newWorkRoute = ref('');
    let newWorkImage = ref('');
    let newWorkTitle = ref('');
    let newWorkComment = ref('');
    let newWorkDonedate = ref('2023-01');
    let newWorkViewcounts = ref('');

    //上傳檔案預覽
    const selectedFile = ref(null);
    const imageUrl = ref(null);
    const fileInput = ref(null);

    window.onload = function(){
        const TagCheckBoxesHtml = document.getElementsByClassName("tag-Checkbox");
        for(let i=0;i<TagCheckBoxesHtml.length;i++){
            TagCheckBoxesHtml[i].addEventListener("click", () => {
                TagSelect(TagCheckBoxesHtml);
            })
        }
    };

    function TagSelect(boxes){
        let tempArr = [];
        for(let i =0;i<boxes.length;i++){
            if(boxes[i].checked){
                tempArr.push(boxes[i].value);
            }
        }
        newWorkTag = tempArr;
    }

    function handleFileSelect(event){
        // 获取所选文件的引用
        selectedFile.value = event.target.files[0];
        // 读取所选文件并显示图像预览
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile.value);
        reader.onload = () => {
            imageUrl.value = reader.result;
        };
    };
    async function uploadFile (){
    // upload selected file to Firebase
    const fileRef = storageRef(ImgRef, selectedFile.value.name);
    await uploadBytes(fileRef, selectedFile.value);
    // get download url
    newWorkImage = await getDownloadURL(fileRef);

    // when upload success, reset input element
    selectedFile.value = null;
    imageUrl.value = null;
    fileInput.value = '';
    alert('文件上傳成功，URL: ' + newWorkImage);
    };


    async function UploadWorkData(){
        //計算日期
        addWorkData( newKey, newWorkTag, "/MyPortfolio/Work/"+newWorkRoute.value, newWorkImage, newWorkTitle.value, newWorkComment.value, newWorkDonedate.value, newWorkViewcounts.value);
    }




</script>