<template>
  <div class="badge" :class="type">
    {{ text }}
  </div>
</template>

<script>
export default {
    props: [ 'type', 'title'],
    computed: {
        text() {
            if (typeof this.title === 'number') {
                return this.title
            } else  {
                return this.title.toUpperCase()
            }
        }
    }
}
</script>

<style scoped>
.badge {
    width: 17px;
    height: 17px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ccc;
    color: #252525;
    font-size: 0.7rem;
    position: absolute;
    top: -5px;
    right: -10px;
}

.lessThanFive {
    background-color: #147CFF;
    color: white;
}

.upToTen {
    background-color: #2DCC70;
    color: white;
}

.overTen {
    background-color: #F42C37; 
    color: white;
}
</style>