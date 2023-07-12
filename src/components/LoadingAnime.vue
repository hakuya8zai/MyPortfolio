<template>
    <div class="frame bg-dark">
        <div class="wrapper">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<style scoped>
.frame {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    height: 100vh;
    width:100vw;
}
.wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 50%;
    transform: translateX(-15px);
    /* display: flex; */
}
div span {
    position: absolute;
    top: -50px;
    width: 30px;
    height: 30px;
    background-color: white;
    filter: drop-shadow(0 0 10px white);
    border-radius: 50%;
    /* delay 設為大於 0.5 秒，如果在0.5秒內載入完成就不會跑這個動畫 */
    animation: Ymove 2s ease-in-out 0.7s infinite; 
}
span:nth-child(2) {
    animation-delay: 0.85s;
}
span:nth-child(3) {
    animation-delay: 0.95s;
}
span:nth-child(4) {
    animation-delay: 1.05s;
}
span:nth-child(5) {
    animation-delay: 1.15s;
}
@keyframes Ymove{
    50% {
        top: 50%;
    }
    100% {
        top: 120%;
    }
}


</style>