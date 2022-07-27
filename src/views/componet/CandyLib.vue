<template>
    <div class="container">
        <div class="body">
            <div class="block">
                <span class="demonstration"></span>
                <el-carousel :interval="4000" type="card" height="710px">
                    <el-carousel-item v-for="item in imagebox" :key="item">
                        <img :scr="item.url" class="image">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CandyLib',
    data: function () {
        return {
            imagebox: [{url: require('./1.jpg') },
            {url: require("./2.jpg") },
            {url: require('./3.jpg') },
            {url: require('./4.jpg') }],
            screenWidth: 0
        }
    },
    methods: {
        setSize: function () {
            // 通过浏览器宽度(图片宽度)计算高度
            this.bannerHeight = 400 / 1920 * this.screenWidth;
        },
    },
    mounted() {
        // 首次加载时,需要调用一次
        this.screenWidth = window.innerWidth;
        this.setSize();
        // 窗口大小发生改变时,调用一次
        window.onresize = () => {
            this.screenWidth = window.innerWidth;
            this.setSize();
        }
    }
}
    // methods: {

    // }
    // data: function () {
    //     return {
    //         item: ''
    //     }
    // }

</script>
<style scoped lang="scss">
.container {
    height: 100%;
    width: 100%;
    overflow-y: scroll;

    .body {
        height: 100%;

        .block {
            height: 100%;
            width: 100%;

            .small {
                height: 100%;
                width: 100%;
                text-align: center;
                line-height: 700px;
            }
        }
    }
}

   .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
    img{
     /*设置图片宽度和浏览器宽度一致*/
      width:100%;
      height:inherit;
    }
</style>