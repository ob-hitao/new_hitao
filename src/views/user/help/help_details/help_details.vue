<template>
    <div class="help_details">
        <v-header title="新手上路"></v-header>
        <div class="help_details__content mui-content">
            <div class="plus">
                <article class="help_details__content__article">
                    <h4 class="help_details__content__article__title">费用</h4>
                    <p class="help_details__content__article__content">总成本=产品价格+中国货运+国际货运+服务费，包括：产品价格：产品的零售价。中国货运：货物从零售商的地点运到一个仓库。国际运费：此运费根据您的货物重量，运送方式以及清关费用收取。服务费：服务费=（产品价+中国货运）×6％。</p>
                    <p class="help_details__content__article__next"><span>下一篇>></span></p>
                </article>
                <section class="help_details__content__lists">
                    <h4 class="help_details__content__lists__title">相关问题帮助</h4>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell">1.万邦服务</li>
                        <li class="mui-table-view-cell">2.费用</li>
                        <li class="mui-table-view-cell">3.订单程序</li>
                    </ul>
                </section>
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
.help_details
{
    &__content
    {
        &__article
        {
            padding: 15px;
            margin-bottom: 10px;
            background: #fff;

            &__title
            {
                color: $theme;
                font-size: 14px;
                font-weight: normal;
            }
            &__content
            {
                font-size: 14px;
            }
            &__next
            {
                font-size: 14px;
                color: $theme;
                text-align: right;
                margin: 0;
            }
        }
        &__lists
        {
            background: #fff;

            &__title
            {
                font-size: 14px;
                margin: 0;
                padding: 15px;
            }
            .mui-table-view::before
            {
                left: 15px;
                right: 15px;
            }
            .mui-table-view-cell
            {
                color: #666666;
                font-size: 13px;

                &::after
                {
                    right: 15px;
                }
            }
        }
    }
}
</style>