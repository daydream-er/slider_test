<template>
  <ImgSlider :option="option"/>
</template>

<script>
import ImgSlider from './components/ImgSlider' // 다르게 함. 이것도 맞지 않을까?
const BASE = `http://127.0.0.1:12010/img/` // app.use(/img,express.static(img_path))

export default {
  name: 'App',
  components:{
    ImgSlider
  },
  setup(){
    const option = {
      list:[
        {
          "src":`${BASE}/1.jpg`,
          "name":"막내 탈출 기념",
          "id":1
        },
        {
          "src":`${BASE}/2.jpg`,
          "name":"조기전역 한 달 전",
          "id":2
        },
        {
          "src":`${BASE}/3.jpg`,
          "name":"전역 날 추억 사진진",
          "id":3
        }
      ],
      height: 450,
      width:800
    }
    return {
      option
    }
  }
}
</script>

<style>
  @font-face {
      font-family: 'MaruBuri-Regular';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/MaruBuri-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  #app {
    font-family: 'MaruBuri-Regular'; 
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

<!--setup 안에 데이터(data) 함수 등을 정의하고 return을 통해 다른 모듈에서 import해 쓸 수 있게 한다.-->
<!--변수가 아닌 때는 그냥 option=<다른 것들> 이런 식으로 ImageSlider라는 자식 컴포넌트에 넘길 수 있다.-->