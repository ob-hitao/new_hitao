<template>
    <div class="help">
        <v-header title="帮助中心"></v-header>
        <div class="help__content mui-content">
            <div class="plus">
                <section class="grid elastic_module">
                    <div class="elastic_module__content">
                        <figure @click="getHelp(1)" class="elastic_module__wrap">
                            <div class="icon"></div>
                            <figcaption class="elastic_module__description">
                                新手上路
                            </figcaption>
                        </figure>
                        <figure @click="getHelp(2)" class="elastic_module__wrap">
                            <div class="icon"></div>
                            <figcaption class="elastic_module__description">
                                操作指南
                            </figcaption>
                        </figure>
                        <figure @click="getHelp(3)" class="elastic_module__wrap">
                            <div class="icon"></div>
                            <figcaption class="elastic_module__description">
                                付款
                            </figcaption>
                        </figure>
                        <figure @click="getHelp(4)" class="elastic_module__wrap">
                            <div class="icon"></div>
                            <figcaption class="elastic_module__description">
                                运输
                            </figcaption>
                        </figure>
                        <figure @click="getHelp(5)" class="elastic_module__wrap">
                            <div class="icon"></div>
                            <figcaption class="elastic_module__description">
                                账户
                            </figcaption>
                        </figure>
                        <figure @click="getHelp(6)" class="elastic_module__wrap">
                            <div class="icon"></div>
                            <figcaption class="elastic_module__description">
                                售后服务
                            </figcaption>
                        </figure>
                        <figure @click="getHelp(7)" class="elastic_module__wrap">
                            <div class="icon"></div>
                            <figcaption class="elastic_module__description">
                                会员等级
                            </figcaption>
                        </figure>
                        <figure @click="getHelp(8)" class="elastic_module__wrap">
                            <div class="icon"></div>
                            <figcaption class="elastic_module__description">
                                其他问题
                            </figcaption>
                        </figure>
                    </div>
                </section>
                <section class="help__content__list">
                    <h4 class="help__content__list__title">常见问题</h4>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell mui-collapse">
                            <a class="mui-navigate-right">对于新的初学者</a>
                            <div class="mui-collapse-content">
                                <ul class="mui-table-view">
                                    <li v-for="item in list" @click="toDesc(item.aid)" class="mui-table-view-cell">{{item.title}}</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import {getJSON} from '@/assets/js/common';  //公共函数库

export default
{
    components:
    {
        vHeader
    },
    data()
    {
        return {
            list: []
        }
    },
    created()
    {
        this.getHelp();
    },
    methods:
    {
        getHelp(typeid = 1)
        {
            getJSON
            (
                this.API.ARTICLE_LIST,
                {
                    typeid
                },
                data =>
                {
                    this.list = data.list
                }
            )
        },
        toDesc(viewId)
        {
            this.$router.push({path: 'help_details', query: {viewId}, append: true});
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../assets/scss/mixin";
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
    }
    &__aside
    {
        font-size: 13px;
        color: #9c9c9c;

        .iconfont
        {
            font-size: 15px;
            vertical-align: top;
        }
    }
    &__content
    {
        display: flex;
    }
    &__wrap
    {
        flex: auto;
        text-align: center;
        padding: 10px;

        .iconfont
        {
            font-size: 21px;
        }
    }
    &__description
    {
        color: #666666;
        font-size: 12px;
    }
}
.grid
{
    .elastic_module
    {
        &__content
        {
            flex-wrap: wrap;
            align-content: space-between;
        }
        &__wrap
        {
            flex: 1 1 25%;
            border: 1px solid #efefef;
            border-right: none;
            border-bottom: none;
            padding: 0;
            height: 88px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .icon
            {
                width: 26px;
                height: 26px;
                margin-bottom: 10px;
            }
        }
        @for $i from 1 through 8
        {
            &__wrap:nth-child(#{$i})
            {
                .icon
                {
                    @include bg-img(help_0#{$i});
                }
            }
        }
    }
}
.help
{
    &__content
    {
        &__list
        {
            &__title
            {
                font-size: 16px;
                padding: 11px 15px;
                font-weight: normal;
                background: #fff;
                margin: 0;
            }
            .mui-navigate-right
            {
                font-size: 14px;
            }
            .mui-table-view-cell.mui-collapse .mui-collapse-content
            {
                padding-top: 0;

                .mui-table-view
                {
                    margin-top: 0;

                    .mui-table-view-cell
                    {
                        padding-left: 15px;
                        font-size: 13px;
                        color: #666666;

                        &::after
                        {
                            left: 0;
                        }
                    }
                }
            }
        }
    }
}
</style>