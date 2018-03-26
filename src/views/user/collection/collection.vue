<template>
    <div class="collection">
        <v-header title="收藏">
            <span @click="edit = !edit" class="right" :class="{active: edit}">{{edit ? '完成' : '编辑'}}</span>
        </v-header>
        <div class="mui-content" :class="{'btm-50': edit}">
            <div class="plus">
                <ul class="mui-table-view">
                    <li v-for="n in 10" class="mui-table-view-cell">
                        <div class="mui-slider-right mui-disabled">
                            <a class="mui-btn mui-btn-red">删除</a>
                        </div>
                        <div class="mui-slider-handle">
                            <div class="collection__item">
                                <div class="collection__item__checkbox">
                                    <v-checkbox v-show="edit"></v-checkbox>
                                </div>
                                <v-goods-row></v-goods-row>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <footer v-show="edit" class="footer">删除(1)</footer>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import vGoodsRow from '@/components/goods_row/goods_row';
import vCheckbox from '@/components/checkbox/checkbox';

export default
{
    components:
    {
        vHeader,
        vGoodsRow,
        vCheckbox
    },
    data()
    {
        return {
            edit: false
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../assets/scss/parameter";
.collection
{
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
        justify-content: space-between;
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