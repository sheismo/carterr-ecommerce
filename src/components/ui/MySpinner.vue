<template>
    <div class="spin">
        
    </div>
</template>

<style scoped>
@keyframes spinner {
    0% {
        transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
        transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
}
.spin::before {
    width: 15px;
    height: 15px;
    border: 4px solid #CFD0D1;
    border-bottom-color: #EF2E3B;
    border-radius: 50%;
    content: "";
    position: absolute;
    top: 0;
    left: 10px;
    animation: 1.5s linear infinite spinner;
    animation-play-state: inherit;
    transform: translate3d(-50%, -50%, 0);
    will-change: transform;
}

</style>
