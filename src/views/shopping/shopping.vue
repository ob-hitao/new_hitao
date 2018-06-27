<template>
    <div class="shopping">
        <v-search icon="icon-xinxi"></v-search>
        <div class="shopping__container">
            <div class="menu">
                <ul>
                    <li v-for="item in shopping_type" @click="getChild(item.typeid)" class="menu__item" :class="{active : item.typeid == active}">{{item.typename}}</li>
                </ul>
            </div>
            <div class="lists">
                <figure v-for="item in shopping_list" class="lists__item">
                    <img class="lists__img" v-lazy="item.img" />
                    <figcaption class="lists__type">{{item.typename}}</figcaption>
                </figure>
            </div>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import vFooter from '@/components/footer/footer';
import vSearch from '@/components/search/search';

import {postJSON} from '@/assets/js/common';  //公共函数库

export default
{
    components:
    {
        vFooter,
        vSearch
    },
    data()
    {
        return {
            shopping_type: [],
            shopping_list: [],
            active: null
        }
    },
    created()
    {
        // 商品主分类
        postJSON(this.API.INDEX_CATEGORY, {}, data =>
        {
            this.shopping_type = data.list;
            this.getChild(this.shopping_type[0].typeid);
        });
    },
    methods:
    {
        getChild(id)
        {
            this.active = id;
            // 商品次分类
            postJSON(this.API.INDEX_CHILD_CATEGORY, {typeId: id}, data => this.shopping_list = data.list);
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../assets/scss/parameter";
.shopping
{

    &__container
    {
        .menu
        {
            position: absolute;
            top: 44px;
            bottom: 50px;
            left: 0;
            width: 90px;
            overflow: auto;

            ul
            {
                padding: 0;
                margin: 0;
            }
            &__item
            {
                width: 100%;
                height: 44px;
                padding: 0;
                list-style: none;
                line-height: 44px;
                text-align: center;
                font-size: 12px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;

                &.active
                {
                    color: $theme;
                }
            }
        }
        .lists
        {
            position: absolute;
            top: 44px;
            right: 0;
            bottom: 50px;
            display: flex;
            flex-flow: wrap;
            align-content: flex-start;
            width: calc(100% - 90px);
            overflow: auto;
            background: #fff;

            &__item
            {
                flex: 0 1 33.3%;
                padding: 15px 0;
                height: auto;
                margin: 0;
                text-align: center;
            }
            &__img
            {
                width: 65px;
                height: 65px;
            }
            &__type
            {
                font-size: 13px;
                color: #666;
            }
        }
    }
}
</style>