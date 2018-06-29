<template>
    <div class="shopping_search">
        <section class="search">
            <div class="search__main">
                <form @submit.prevent="search">
                    <input class="search__text" type="search" placeholder="请输入淘宝链接或者关键字" v-model="query" />
                    <label>
                        <i @click="fileShow" class="iconfont icon-xiangji"></i>
                        <input @change="changeFile($event)" ref="file" type="file" accept="image/*" />
                    </label>
                </form>
            </div>
            <span class="mui-action-back">取消</span>
        </section>
        <div class="mui-content">
            <div class="plus">
                <section class="shopping_search__type elastic_module">
                    <div class="elastic_module__content">
                        <figure class="elastic_module__content__wrap" href="http://m.1688.com" name="1688">
                            <img class="elastic_module__content__wrap__img" src="./search_1688.png"/>
                            <figcaption class="elastic_module__content__wrap__description">
                                1688
                            </figcaption>
                        </figure>
                        <figure class="elastic_module__content__wrap" href="http://m.taobao.com/" name="taobao">
                            <img class="elastic_module__content__wrap__img" src="./search_taobao.png"/>
                            <figcaption class="elastic_module__content__wrap__description">
                                淘宝
                            </figcaption>
                        </figure>
                        <figure class="elastic_module__content__wrap" href="http://m.tmall.com/" name="tmall">
                            <img class="elastic_module__content__wrap__img" src="./search_tmall.png"/>
                            <figcaption class="elastic_module__content__wrap__description">
                                天猫
                            </figcaption>
                        </figure>
                    </div>
                    <div class="elastic_module__content">
                        <figure class="elastic_module__content__wrap" href="https://www.amazon.com/" name="amazon">
                            <img class="elastic_module__content__wrap__img" src="./search_amazon.png"/>
                            <figcaption class="elastic_module__content__wrap__description">
                                亚马逊
                            </figcaption>
                        </figure>
                        <figure class="elastic_module__content__wrap" href="https://m.jd.com/" name="jd">
                            <img class="elastic_module__content__wrap__img" src="./search_jd.png"/>
                            <figcaption class="elastic_module__content__wrap__description">
                                京东
                            </figcaption>
                        </figure>
                        <figure class="elastic_module__content__wrap" href="http://m.dangdang.com" name="dangdang">
                            <img class="elastic_module__content__wrap__img" src="./search_dangdang.png"/>
                            <figcaption class="elastic_module__content__wrap__description">
                                当当
                            </figcaption>
                        </figure>
                    </div>
                </section>

                <section class="shopping_search__popular">
                    <h4 class="shopping_search__popular__title">热门搜索</h4>
                    <div class="shopping_search__popular__content">
                        <span @click="keySearch(item)" v-for="item in hot">{{item}}</span>
                    </div>
                </section>

                <section class="shopping_search__history">
                    <h4 class="shopping_search__popular__title">
                        历史记录
                        <!--<span class="mui-pull-right">清除</span>-->
                    </h4>
                    <div class="shopping_search__popular__content">
                        <span @click="keySearch(item.goodsname)" v-for="item in history">{{item.goodsname}}</span>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import {getUrlId, postJSON, yesAlert, compress, isUrl, getQueryString} from '@/assets/js/common';  //公共函数库

export default
{
    data()
    {
        return {
            hot: [],
            history: [],
            query: ''
        }
    },
    created()
    {
        // 热门搜素
        postJSON(this.API.HOME_HOTSEARCH, {}, data => this.hot = data.list);
        // 历史记录
        let userId = localStorage.getItem('userId');
        postJSON(this.API.INDEX_HISTORY_RECORD, {userId}, data => this.history = data.list);
    },
    methods:
    {
        search()
        {
            if (this.query == '')
            {
                yesAlert('搜索商品不能为空！');
                return;
            }

            if (!isUrl(this.query))
            {
                this.$router.push({path: '/shopping/shopping_list', query: {query: this.query}});
            }
            else
            {
                let parameter = getUrlId(this.query);
                this.$router.push({path: '/shopping/shopping_list/shopping_desc', query: parameter});
            }
        },
        fileShow()
        {
            // FastClick的bug，手动触发
            this.$refs.file.click();
        },
        changeFile(ev)
        {
            let file = ev.target.files[0];
            if (!/image\/\w+/.test(file.type))
            {
                yesAlert("请选择正确的图像");
                return false;
            }

            //读取图片
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = e =>
            {
                let img = new Image();
                img.src = e.target.result;
                img.onload = () =>
                {
                    let result = compress(img);
                    mui.post
                    (
                        this.API.TAOBAO_UPLOADIMG,
                        {
                            imgcode: result
                        },
                        data =>
                        {
                            this.$router.push({path: '/shopping/shopping_list', query: {imgid: data.items.item.name}});
                        }
                    );
                }
            }
        },
        keySearch(key)
        {
            this.query = key;
            this.search();
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../assets/scss/parameter";
.shopping_search
{
    input[type=file]
    {
        display: none;
    }
    .search
    {
        position: fixed;
        top: 0;
        display: flex;
        width: 100%;
        z-index: 10;
        padding: 7px 12.5px;
        background: $theme;

        &__main
        {
            flex: 1;
            position: relative;

            .icon-sousuo1, .icon-xiangji
            {
                position: absolute;
                top: 0;
                line-height: 30px;
                color: $theme;
                font-size: 20px;
            }
            .icon-sousuo1
            {
                left: 5px;
            }
            .icon-xiangji
            {
                right: 5px;
            }
        }
        &__text
        {
            margin: 0;
            padding-right: 30px;
            height: 30px;
            border-radius: 5px;
            border: none;
            font-size: 14px;
            text-indent: 15px;
            text-align: left;
            background: #fff;
        }
        .mui-action-back
        {
            color: #fff;
            font-size: 13px;
            line-height: 30px;
            margin-left: 8px;
        }
    }
    .elastic_module
    {
        background: #fff;
        margin-bottom: 10px;

        &__title
        {
            display: flex;
            justify-content: space-between;
            font-size: 16px;
            margin: 0;
            padding: 14px 12px;
            font-weight: normal;
            border-bottom: 1px solid #efefef;

            &__aside
            {
                font-size: 13px;
                color: #9c9c9c;

                img
                {
                    width: 14px;
                    height: 14px;
                    vertical-align: sub;
                }
            }
        }
        &__content
        {
            display: flex;

            &__wrap
            {
                flex: auto;
                text-align: center;
                padding: 10px;

                &__img
                {
                    width: 66px;
                    height: 29.5px;
                }
                &__description
                {
                    color: #666666;
                    font-size: 13px;
                }
            }
        }
    }
    &__popular
    {
        padding: 12px;
        background: #fff;
        margin-bottom: 10px;

        &__title
        {
            font-size: 14px;
            font-weight: normal;
            color: #666666;
            margin-bottom: 15px;
        }
        &__content
        {
            display: flex;
            align-content: space-between;
            flex-wrap: wrap;

            span
            {
                padding: 8px;
                background: #f6f6f6;
                font-size: 12px;
                border-radius: 5px;
                margin-bottom: 10px;
                margin-right: 5px;
            }
        }
    }
    &__history
    {
        padding: 12px;
        background: #fff;

        &__title
        {
            font-weight: normal;
            font-size: 14px;
            margin: 0;
            color: #666666;
            padding-bottom: 14px;
            border-bottom: 1px solid #efefef;
        }
        &__list
        {
            list-style: none;
            height: 44px;
            line-height: 44px;
            border-bottom: 1px solid #efefef;
            font-size: 14px;

            &__name
            {
                display: inline-block;
                width: 65px;
                color: #666;
                font-size: 12px;
            }
        }
    }
}
</style>