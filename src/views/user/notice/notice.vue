<template>
    <div class="notice">
        <v-header title="通知"></v-header>
        <div class="mui-content">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-transitioning">
                    <div class="mui-slider-right mui-disabled">
                        <a class="mui-btn mui-btn-red">删除</a>
                    </div>
                    <div class="mui-slider-handle">
                        <div class="notice__wrap">
                            <div class="notice__wrap__header">
                                <span>积分延迟发放通知 </span>
                                <span class="notice__wrap__header__date">2016-11-09 09:08</span>
                            </div>
                            <p>由于系统发生故障，积分可能会延迟发放，我们正在努力检</p>
                        </div>
                    </div>
                </li>
            </ul>
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
.notice
{
    .mui-btn-red
    {
        background: #e95169;
    }
    .mui-content .mui-table-view:first-child
    {
        margin-top: 0;

        .mui-table-view-cell
        {
            &::after
            {
                right: 15px;
            }
        }
    }
    &__wrap
    {
        &__header
        {
            display: flex;
            justify-content: space-between;

            span
            {
                font-size: 15px;

                &:last-child
                {
                    font-size: 12px;
                    color: #a6a6a6;
                }
            }
        }
        p
        {
            color: #666666;
            font-size: 13px;
        }
    }
}
</style>