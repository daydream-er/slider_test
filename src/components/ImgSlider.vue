<template>
    <div class="sliderWrap">
        <span class="left" @click="toLeft"><img src="../assets/arrow.png" alt="arrow.png"></span>
        <span class="right" @click="toRight"><img src="../assets/arrow.png" alt="arrow.png"></span>
        <p>{{activateImg.name}}</p>
        <img :src="activateImg.src" :alt="activateImg" :style="{width:`${width}px`,height:`${height}`}">
        <div class="dot">
            <span @click="activate(0)" :class="{active:currIdx==0}"></span>
            <span @click="activate(1)" :class="{active:currIdx==1}"></span>
            <span @click="activate(2)" :class="{active:currIdx==2}"></span>
        </div>
    </div>
</template>

<script>
    import {
        computed,
        ref
    } from 'vue'
    export default {
        name: 'ImgSlider',
        props:{
            option:{
                type:Object,
                required:true
            }
        },
        setup(props){
            let currIdx = ref(0)
            const toLeft = ()=>{
                if(currIdx.value<=0) currIdx.value = 0
                else currIdx.value--
            }
            const toRight = ()=>{
                if(currIdx.value>=props.option.list.length-1) currIdx.value=props.option.list.length-1
                else currIdx.value++
            }
            const activate = (idx)=>currIdx.value = idx
            const activateImg = computed(()=>props.option.list[currIdx.value])
            const width = computed(()=>props.option.width)
            const height = computed(()=>props.option.height)
            return{
                toLeft,
                toRight,
                activate,
                activateImg,
                width,
                height,
                currIdx
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
    .sliderWrap>img {
        object-fit: cover;
        box-shadow: 0 8px 16px rgb(0 0 0 / 50%);
    }

    .sliderWrap {
        width: 1000px;
        overflow: hidden;
        position: relative;
        margin: 0 auto;
        margin-top: 20px;
    }

    .sliderWrap>span {
        display: block;
        position: absolute;
        top: calc(50% - 1.25rem);
        font-size: 2.5rem;
        transition: all .5s ease;
    }

    .sliderWrap span:hover {
        cursor: pointer;
    }

    .sliderWrap>div {
        display: inline-block;
        width: 100%;
    }

    p {
        position: absolute;
        bottom: 10px;
        right: 55px;
        background: rgba(0, 0, 0, 0.4);
        color: white;
        padding: 10px;
    }

    span.left {
        left: 30px;
    }

    span.right {
        right: 30px;
        rotate: (180);
    }

    span.right>img {
        transform: rotate(180deg);
        width: 70%;
    }

    span.left>img {
        width: 70%;
    }

    .dot {
        position: relative;
    }

    .dot>span {
        height: 12px;
        width: 12px;
        margin: 0 4px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        transition: all 0.5s ease;
        box-shadow: inset 0 1px 1px 0px rgb(0 0 0 / 60%), 0px 1px 1px 0px white;
    }

    .dot>span:hover,
    .dot>span.active {
        cursor: pointer;
        background-color: #717171;
    }
</style>
  