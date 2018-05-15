<template>
    <div class="expenses_record">
        <v-header title="消费记录"></v-header>
        <div class="mui-content">
            <nav class="tab">
                <div class="tab__item">
                    <span class="tab__text active">全部</span>
                </div>
                <div class="tab__item">
                    <span class="tab__text">支出</span>
                </div>
                <div class="tab__item">
                    <span class="tab__text">收入</span>
                </div>
            </nav>
            <section class="date">
                <div class="date__wrap">
                    <input id="starttime" type="date" />
                    <i class="iconfont icon-riqi"></i>
                </div>
                <div class="date__wrap">
                    <input id="endtime" type="date" />
                    <i class="iconfont icon-riqi"></i>
                </div>
                <button class="btn_empty">核对</button>
            </section>
            <div class="mui-scroll-wrappert">
                <div class="mui-scroll">
                    <section class="expenses_record__list">
                        <ul class="mui-table-view">
                            <li class="mui-table-view-cell">
                                <div class="expenses_record__wrap">
                                    <div class="expenses_record__wrap__left">
                                        <span class="expenses_record__wrap__left__main">短外套</span>
                                        <span class="expenses_record__wrap__left__ps">代购订单号DG0038022</span>
                                    </div>
                                    <div class="mui-pull-right add">
                                        -150
                                    </div>
                                </div>
                                <div class="expenses_record__wrap">
                                    <div class="expenses_record__wrap__left font">
                                        余额: ￥350
                                    </div>
                                    <div class="mui-pull-right font">
                                        2016-11-09 09:08
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
export default
{
    components:
        {
            vHeader
        }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../../assets/scss/parameter";
.expenses_record
{
    .tab
    {
        display: flex;
        height: 40px;
        border-bottom: 1px solid #cfcfcf;
        background: #fff;

        &__item
        {
            flex: auto;
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
    .date
    {
        display: flex;
        justify-content: space-between;
        padding: 7px 12px;
        background: #fff;

        &__wrap
        {
            width: 35%;
            height: 30px;
            position: relative;

            input[type=date]
            {
                padding: 0;
                width: 100%;
                height: 100%;
                border-radius: 5px;
                border: 1px solid #c9c9c9;
            }
            .iconfont
            {
                position: absolute;
                right: 3.5px;
                top: 50%;
                font-size: 18px;
                margin-top: -9px;
            }
        }
    }

    .btn_empty
    {
        padding-top: 0;
        padding-bottom: 0;
        border-color: $theme;
        color: $theme;
    }
    &__list
    {
        .mui-table-view-cell::after
        {
            right: 15px;
        }
    }
    &__wrap
    {
        display: flex;
        justify-content: space-between;

        .add
        {
            color: #ff6900;
        }
        .cut
        {
            color: #14d195;
        }
        &__left
        {
            &__main
            {
                font-size: 14px;
            }
            &__ps
            {
                font-size: 12px;
            }
        }
        &__right
        {
            font-size: 15px;
        }
        .font
        {
            color: #666666;
            font-size: 12px;
        }
    }
}
</style>