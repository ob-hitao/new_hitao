<template>
    <div class="collection">
        <v-header title="收藏">
            <span @click="edit = !edit" class="right" :class="{active: edit}">{{edit ? '完成' : '编辑'}}</span>
        </v-header>
        <div class="mui-content" :class="{'btm-50': edit}" @scroll.passive="next($event)">
            <div class="plus">
                <ul class="mui-table-view">
                    <li v-for="item in list" class="mui-table-view-cell">
                        <div class="mui-slider-right mui-disabled">
                            <a @click="del(item.fid)" class="mui-btn mui-btn-red">删除</a>
                        </div>
                        <div class="mui-slider-handle">
                            <div class="collection__item">
                                <div class="collection__item__checkbox">
                                    <v-checkbox v-model="item.checked" v-show="edit"></v-checkbox>
                                </div>
                                <figure @click="toDesc(item.goodsurl)" class="goods_row">
                                    <img class="goods_row__img" v-lazy="item.goodsimg" />
                                    <figcaption class="goods_row__wrap">
                                        <h4 class="goods_row__title">
                                            {{item.goodsname}}
                                        </h4>
                                        <div class="goods_row__priceAndnumber">
                                            <span class="goods_row__price">￥{{item.goodsprice}}</span>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <footer @click="del" v-show="edit" class="footer">删除({{checkedList.length}})</footer>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import vCheckbox from '@/components/checkbox/checkbox';
import {postJSON, getUrlId} from '@/assets/js/common';  //公共函数库


export default
{
    components:
    {
        vHeader,
        vCheckbox
    },
    data()
    {
        return {
            edit: false,
            options:
            {
                userId: localStorage.getItem('userId'),
                p: 1,
                size: 6
            },
            list: [],
            scrolled: false
        }
    },
    computed:
    {
        checkedList()
        {
            let list = [];
            for (var i in this.list)
            {
                if (this.list[i].checked)
                {
                    list.push(this.list[i].fid);
                }
            }
            return list;
        }
    },
    created()
    {
        this.getFavorite();
    },
    methods:
    {
        next(ev)
        {
            // 防止重入
            if (this.scrolled) return false;
            this.scrolled = true;
            // 锁定
            let el = ev.target;
            let bottom = el.scrollHeight - el.scrollTop - el.offsetHeight;
            if (bottom <= 250)
            {
                this.options.p++;
                this.getFavorite();
            }
            //解锁
            setTimeout(() => this.scrolled = false, 1);
        },
        getFavorite()
        {
            postJSON
            (
                this.API.FAVORITES_LIST,
                this.options,
                data =>
                {
                    let goods = this.list.concat(data.list);
                    this.list = goods;
                    for (var i in this.list)
                    {
                        this.$set(this.list[i], 'checked', false);
                    }
                }
            )
        },
        toDesc(url)
        {
            let parameter = getUrlId(url);
            this.$router.push({path: '/shopping/shopping_list/shopping_desc', query: parameter});
        },
        del(fid)
        {
            postJSON
            (
                this.API.FAVORITES_DEL,
                {
                    userId: this.options.userId,
                    favoriteId: fid ? fid : this.checkedList
                },
                data =>
                {
                    if(data.msg)
                    {
                        this.options.p = 1;
                        this.getFavorite()
                    }
                }
            )
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../assets/scss/parameter";
.collection
{
    .goods_row
    {
        position: relative;

        &__img
        {
            float: left;
            margin-right: 10px;
            width: 90px;
            height: 90px;
        }
        &__title
        {
            font-weight: normal;
            font-size: 14px;
        }
        &__price
        {
            position: absolute;
            bottom: 0;
            font-size: 16px;
            color: #ff6900;
        }
    }
    .btm-50
    {
        bottom: 50px;
    }
    .right
    {
        position: absolute;
        right: 5px;
        top: 0;
        color: #666666;
        font-size: 14px;
        padding: 10px;
        z-index: 999;

        &.active
        {
            color: $theme;
        }
    }
    .mui-table-view
    {
        margin-top: 0;

        &::after, &::before
        {
            display: none;
        }

        .mui-table-view-cell
        {
            background: #fff !important;

            &::after
            {
                left: 0;
            }
        }
    }
    &__item
    {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background: #fff;

        &__checkbox
        {
            margin-right: 10px;
        }
    }
    .footer
    {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        z-index: 999;
        font-size: 18px;
        text-align: center;
        background: $theme;
        color: #fff;
    }
}
</style>