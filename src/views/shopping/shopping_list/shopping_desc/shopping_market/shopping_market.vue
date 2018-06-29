<template>
    <div class="shopping_market">
        <v-header :title="title"></v-header>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import {postJSON, yesAlert} from '@/assets/js/common';  //公共函数库

export default
{
    components:
    {
        vHeader
    },
    data()
    {
        return {
            href: '',
            title: '',
        }
    },
    created()
    {
        this.href = this.$route.query.href ? this.$route.query.href : '';
        this.title = this.$route.query.title ? this.$route.query.title : '';

        this.childPage();
    },
    mounted()
    {
        let old_back = mui.back;
        mui.back = () =>
        {
            let children = document.getElementsByClassName('mui-iframe-wrapper')[0];
            if (children) children.remove();
            mui.plusReady(() =>
            {
                plus.webview.getWebviewById('shop').close();
            })
            old_back();
        }
    },
    methods:
    {
        childPage()
        {
            mui.init
            ({
                subpages:
                [{
                    url: this.href,//子页面HTML地址，支持本地地址和网络地址
                    id: 'shop',//子页面标志
                    styles:
                        {
                            top: "44px",
                            bottom: "0px"
                        }
                }]
            });
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>