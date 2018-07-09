<template>
    <div class="shopping_list">
        <v-search icon="icon-msnui-more">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
        </v-search>
        <nav class="tab">
            <div @click="sort('')" class="tab__item">
                <span class="tab__text" :class="{active: option.sort == ''}">综合</span>
            </div>
            <div @click="sort('_sale')" class="tab__item">
                <span class="tab__text" :class="{active: option.sort == '_sale'}">销量</span>
            </div>
            <div @click="sort('_bid')" class="tab__item">
                <span class="tab__text" :class="{active: option.sort == '_bid'}">价格<i class="mui-icon mui-icon-arrowthinup"></i></span>
            </div>
            <div @click="sort('bid')" class="tab__item">
                <span class="tab__text" :class="{active: option.sort == 'bid'}">价格<i class="mui-icon mui-icon-arrowthindown"></i></span>
            </div>
            <div @click="filterShow" class="tab__item">
                <span class="tab__text"><i class="iconfont icon-shaixuan"></i>筛选</span>
            </div>
        </nav>
        <div class="mui-content" @scroll.passive="next($event)">
            <div class="mui-table-view mui-table-view-chevron mui-row" :class="{ 'shopping--grid': lay == 'grid', 'shopping--list': lay == 'list' }">
                <div @click="goDesc(item.num_iid)" v-for="item in shopping_list" :class="{ 'mui-col-xs-6': lay == 'grid', 'mui-col-xs-12': lay == 'list' }">
                    <img class="shopping__img" v-lazy="'http://' + item.pic_url" />
                    <div class="shopping__info">
                        <h4 class="shopping__info__name">{{item.name}}</h4>
                        <div class="mui-row mui-ellipsis shopping__info__shop_name">
                            {{item.title}}
                            <!--<span class="mui-pull-left shopping__info__shop_name">{{item.title}}</span>-->
                            <!--<span class="mui-pull-right shopping__info__shop_address">{{item.area}}</span>-->
                        </div>
                        <p class="mui-pull-left price">￥{{item.price}}</p>
                        <p class="mui-pull-right"></p>
                    </div>
                </div>
            </div>
        </div>
        <transition enter-active-class="animated tada"
                    leave-active-class="animated bounceOutRight">
            <div v-if="filters" class="filter">
                <section v-for="item in navs.common" class="type">
                    <h4 class="type__title">{{item.title}}</h4>
                    <div class="type__wrap">
                        <span @click="keysearch(i.param_value)" v-for="i in item.item">{{i.title}}</span>
                    </div>
                </section>
                <section v-for="item in navs.adv" class="type">
                    <h4 class="type__title">{{item.title}}</h4>
                    <div class="type__wrap">
                        <span v-for="i in item.item">{{i.title}}</span>
                    </div>
                </section>
                <footer @click="mask.close" class="footer">关闭</footer>
            </div>
        </transition>
    </div>
</template>

<script>
import vSearch from '@/components/search/search';
import {getJSON} from '@/assets/js/common';  //公共函数库

export default
{
    components:
    {
        vSearch
    },
    data()
    {
        return {
            mask: mui.createMask(() =>
            {
                this.filters = false;
            }),
            lay: 'grid',
            shopping_list: [],
            navs: {},
            option:
            {
                q: this.$route.query.query,
                imgid: this.$route.query.imgid,
                cat: 0,
                sort: '',
                page: 1,
                page_size: 6,
                ppath: ''
            },
            scrolled: false,
            filters: false
        }
    },
    created()
    {
        this.getShoppingList();
    },
    methods:
    {
        goDesc(num_iid)
        {
            this.$router.push({path: '/shopping/shopping_list/shopping_desc', query: {num_iid: num_iid}});
        },
        sort(type)
        {
            this.shopping_list = [];
            this.option.sort = type;
            this.option.page = 1;
            this.getShoppingList();
        },
        getShoppingList()
        {
            mui.getJSON(this.API.SEARCH_TAOBAO, this.option, data =>
            {
                let goods = this.shopping_list.concat(data.items.item);
                this.shopping_list = goods;
                this.navs = data.items.navs;
            });
        },
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
                this.option.page++;
                this.getShoppingList();
            }
            //解锁
            setTimeout(() => this.scrolled = false, 1);
        },
        filterShow()
        {
            this.mask.show();
            this.filters = true;
        },
        keysearch(key)
        {
            this.ppath = key;
            this.shopping_list = [];
            this.option.page = 1;
            this.getShoppingList();
            this.mask.close();
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../assets/scss/parameter";
.shopping_list
{
    .mui-action-back
    {
        margin-left: -10px;
        font-size: 30px;
        color: #fff;
    }
    .mui-content
    {
        top: 88px;
    }
    .mui-content>.mui-table-view:first-child
    {
        margin-top: 0;
    }
    .search
    {
        position: fixed;
        top: 0;
        display: flex;
        width: 100vw;
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
            height: 30px;
            line-height: 30px;
            border-radius: 5px;
            border: none;
            font-size: 14px;
            text-indent: 30px;
            color: #c7c7ca;
            background: #fff;
        }
        .icon-msnui-more
        {
            color: #fff;
            font-size: 25px;
            line-height: 30px;
            margin-left: 9px;
        }
    }
    .tab
    {
        position: fixed;
        top: 44px;
        display: flex;
        width: 100vw;
        height: 44px;
        border-bottom: 1px solid #cfcfcf;
        background: #fff;
        z-index: 999;

        &__item
        {
            flex: 1;
            text-align: center;
        }
        &__text
        {
            font-size: 14px;
            display: inline-block;
            height: 39px;
            line-height: 39px;

            &.active
            {
                color: $theme;
                border-bottom: 2px solid $theme;
            }
        }
    }
}
.shopping
{
    &--grid
    {
        .mui-col-xs-6
        {
            margin-bottom: 5px;
            background: #ffffff;

            &:nth-child(2n)
            {
                border-left: 2px solid #efefef;
            }
            &:nth-child(2n + 1)
            {
                border-right: 2px solid #efefef;
            }
        }

        .shopping
        {
            &__img
            {
                width: 100%;
                height: 200px;
            }
            &__info
            {
                padding: 0 6px;

                &__name
                {
                    font-weight: normal;
                    font-size: 16px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
                &__shop_name, &__shop_address
                {
                    color: #9d9d9d;
                    font-size: 12px;
                }
                .price
                {
                    font-size: 16px;
                    color: #ff6900;
                }
            }
        }

    }
    &--list
    {
        .mui-col-xs-12
        {
            background: #ffffff;
        }

        .shopping
        {
            &__img
            {
                width: 110px;
                height: 110px;
            }
            &__info
            {
                float: right;
                width: 68%;
                height: 120px;
                padding: 7px;
                border-bottom: 1px solid #eeeeee;

                &__name
                {
                    font-size: 14px;
                    font-weight: normal;
                    margin-bottom: 15px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    height: 30px;
                }
                &__shop_name, &__shop_address
                {
                    color: #9d9d9d;
                    font-size: 12px;
                }
                &__shop_address
                {
                    float: right;
                }

                .price
                {
                    font-size: 20px;
                    padding: 5px 0;
                }
            }
        }
    }
}
.filter
{
    position: absolute;
    right: 0;
    width: 80%;
    min-height: 100vh;
    height: 100vh;
    overflow: auto;
    background: #ffffff;
    z-index: 1000;
    padding-bottom: 50px;

    %thisTitle
    {
        font-size: 14px;
        color: #666666;
        margin-bottom: 10px;
    }

    .type
    {
        padding: 7px;
        border-bottom: 1px solid #efefef;

        &__title
        {
            @extend %thisTitle;
        }
        &__wrap
        {
            display: flex;
            flex-wrap: wrap;

            span
            {
                font-size: 13px;
                padding: 5px 10px;
                background: #efefef;
                border-radius: 5px;
                margin: 0 10px 10px 0;
            }
        }
    }
    .footer
    {
        position: fixed;
        bottom: 0;
        width: 80vw;
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