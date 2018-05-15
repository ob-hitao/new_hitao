<template>
    <div class="guidance">
        <v-header title="转运指引"></v-header>
        <article class="mui-content">
            <div class="plus">
                <section>
                    <h2>一、国际转运简述</h2>
                    <p>
                        用户为节省国际运费及免去繁琐的运作流程，通过Hitao代运一站式操作管理模式，将需要转运的货品送达至中国大陆以外的国家或地区。
                    </p>
                </section>
                <section>
                    <h2>二、国际转运的三个阶段</h2>
                    <p>
                        1、第一阶段<br />
                        将货品通过国内快递寄送至Hitao代孕仓库。<br />
                        2、第二阶段<br />
                        Hitao代运通过自有航班渠道货第三方物流平台将货品运
                        送至用户指定的收货地址。<br />
                        3、第三阶段<br />
                        运单查询，即在本网站用户可实时查询运单详情，无需
                        登人其他网站查询，真正做到一切尽在您的掌握。<br />
                    </p>
                </section>
                <section>
                    <h2>三、国际转运流程</h2>
                    <p>
                        1、在线提交国内快递及商品信息。<br />
                        2、入库后支付国际运费<br />
                        商品到达仓库后，系统会童装用户货到仓库，请求用户
                        支付国际运费等款项。<br />
                        3、商品出运<br />
                        待用户完成支付，商品从仓库出运至您指定的收货地址。<br />
                        4、运单查询<br />
                        用户只需在本网站即可查询运单详情。<br />
                        5、确认收货<br />
                        用户确认收货且对本次服务进行评价。
                    </p>
                </section>
            </div>
        </article>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';

export default
{
    components:
    {
        vHeader
    },
    created()
    {
        this.taggleBg('#fff', 'dark');
    },
    beforeDestroy()
    {
        this.taggleBg('#e95168', 'light');
    },
    methods:
    {
        taggleBg(bg, style)
        {
            mui.plusReady(() =>
            {
                // 系统顶部样式
                plus.navigator.setStatusBarBackground(bg);
                plus.navigator.setStatusBarStyle(style);
            });
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../assets/scss/parameter";
.guidance
{
    background: #fff;

    article
    {
        padding: 55px 20px 20px !important;
        background: #fff;

        section
        {
            margin-bottom: 30px;

            &:last-child
            {
                margin-bottom: 0;
            }
            h2
            {
                font-size: 14px;
                color: $theme;
            }
        }

    }
}
</style>