<template>
    <div class="container">
        <div class="body">
            <div class="block">
                <el-carousel :interval="4000" type="card">
                    <el-carousel-item v-for="item in imagebox" :key="item">
                        <a :href="link[id]"><img :src="item.url" class="image"></a>
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
            imagebox: [{ url: require('./9.jpeg') },
            { url: require("./6.jpeg") },
            { url: require('./8.jpeg') },
            { url: require('./10.jpeg') }],
            screenWidth: 0,
            link: ['https://search.bilibili.com/all?keyword=%E4%BD%A0%E7%9A%84%E5%90%8D%E5%AD%97&from_source=webtop_search&spm_id_from=333.1007'
                , "https://search.bilibili.com/all?keyword=%E7%81%B0%E4%B8%8E%E5%B9%BB%E6%83%B3&from_source=webtop_search&spm_id_from=333.1007",
                "https://search.bilibili.com/all?keyword=%E5%8E%9F%E7%A5%9E&from_source=webtop_search&spm_id_from=333.1007",
                "https://search.bilibili.com/all?vt=33752369&keyword=%E9%97%B4%E8%B0%8D&from_source=webtop_search&spm_id_from=333.1007"],
            id: 0,
        }
    },
    methods: {
        // showlink(){
        //      this.id=(this.id+1)%this.link.length
        //     setTimeout(()=>{this.showlink()},500)
        // }
        // setSize: function () {
        //     // 通过浏览器宽度(图片宽度)计算高度
        //     this.bannerHeight = 400 / 1920 * this.screenWidth;
        // },
    },
    mounted() {
        // showlink()
        // // 首次加载时,需要调用一次
        // this.screenWidth = window.innerWidth;
        // this.setSize();
        // // 窗口大小发生改变时,调用一次
        // window.onresize = () => {
        //     this.screenWidth = window.innerWidth;
        //     this.setSize();
        // }
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

img {
    /*设置图片宽度和浏览器宽度一致*/
    width: 100%;
    height: inherit;
}
</style>