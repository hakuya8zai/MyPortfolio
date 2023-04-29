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
                <label for="file-input" class="form-label">選擇封面</label>
                <input type="file" class="form-control" id="file-input" ref="fileInput" @change="handleFileSelect" accept="image/*">

                <div v-if="imageUrl" class="mb-3">
                    <img :src="imageUrl" class="img-thumbnail" alt="Selected Image">
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
    import { addWorkData , WorkRef , Storage } from "../main.js";
    import { push , child, query } from "firebase/database";
    import { getStorage, ref as storageRef, uploadBytes } from 'firebase/storage';

    const ImgRef = storageRef(Storage, "workCovers");
    const newKey = push(child(WorkRef, "works")).key;
    let newWorkTag = ref('');
    let newWorkRoute = ref('');
    let newWorkImage = ref('');
    let newWorkTitle = ref('');
    let newWorkComment = ref('');
    let newWorkDonedate = ref('');
    let newWorkViewcounts = ref('');

    //上傳檔案預覽
    const selectedFile = ref(null);
    const imageUrl = ref(null);

    const handleFileSelect = (event) => {
        // 获取所选文件的引用
        selectedFile.value = event.target.files[0];
        // 读取所选文件并显示图像预览
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile.value);
        reader.onload = () => {
            imageUrl.value = reader.result;
        };
    };
    const uploadFile = async () => {
    // 将所选文件上传到Firebase存储
    const fileRef = storageRef(ImgRef, selectedFile.value.name);
    await uploadBytes(fileRef, selectedFile.value);
    // 上传成功后，重置组件状态
    selectedFile.value = null;
    imageUrl.value = null;

    let fileinput = document.getElementById("file-input");
    // fileinput.fileInput.value = '';
    alert('文件上传成功！');
    };




    function UploadWorkData(){
        console.log(new File(newWorkImage));
        addWorkData( newKey, newWorkTag.value, "/Work/"+newWorkRoute.value, newWorkImage, newWorkTitle.value, newWorkComment.value, newWorkDonedate.value, newWorkViewcounts.value);
    }
</script>