<template>
    <div class="sticky">
        <div class="alert" :class="mode">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            default: 'primary',
            required: false
        }
    }
}
</script>

<style scoped>
.sticky {
    width: 100%;
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 25;
}
.alert {
    width: 100%;
    margin: 0;
    padding: 15px;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    color: #FFF;
    z-index: 20;
}

.alert.primary {
    background: #147CFF;
}

.alert.success {
    background: #2DCC70;
}

.alert.danger {
    background: #F42C37;
}
</style>