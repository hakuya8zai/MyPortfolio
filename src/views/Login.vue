<template>
    <section class="container-fluid bg-dark pt-5 mt-5">
        <div class="row text-bg-dark justify-content-center">
            <div class="col-10 col-md-3"><img src="../assets/Backdoor.svg" alt=""></div>
            <div class="col-10 col-md-5 pt-5">
                <div class="display-5 fw-semibold mb-3">謝謝你認真玩我的網站！
                </div>
                <div class="display-5 fw-semibold">這是展示後台的入口</div>
                <div class="display-5 fw-semibold mb-3">請回到上一頁～</div>
                <div class="text-danger">拜託不要破壞它 （┬＿┬）</div>
            </div>
        </div>
        <form @submit="Login" class="row justify-content-center" id="userPassword">
            <div class="col-10 col-md-8 pb-5">
                <label for="inputEmail" class="form-label">Email</label>
                <input type="text" v-model="Email" class="form-control" id="inputEmail" placeholder="請輸入使用者帳號">
                <label for="inputPassword" class="form-label">Password</label>
                <input type="password" v-model="Password" class="form-control" id="inputPassword" placeholder="請輸入密碼">
                <div class="d-grid gap-2">
                    <button type="submit" :disabled="!Password" class="btn btn-outline-light mt-5 mb-3 ms-auto">Login</button>
                </div>
            </div>
        </form>
    </section>
</template>

<script setup>
    import { auth } from "../main.js";
    import { signInWithEmailAndPassword } from "firebase/auth";
    import { ref , onMounted } from "vue";
import router from "../router";
    const Email = ref('');
    const Password = ref('');

    async function Login(){
        //登入前要有密碼
        await signInWithEmailAndPassword(auth, Email.value, Password.value)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("user = " + user);
        // 跳轉
        router.push('/MyPortfolio/backstage/workwall');
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        });
    }

    onMounted(() => {
        const form = document.getElementById("userPassword");
        console.log(form);
        form.addEventListener('submit', function(event) {
            event.preventDefault();
        });
    })

</script>