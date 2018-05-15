<template>
    <div class="guidance">
        <v-header title="支付宝代充说明"></v-header>
        <article class="mui-content">
            <div class="plus">
                <section>
                    <h2>一、关于补货代理</h2>
                    <p>
                        我们不再接受paypal充值了，请注册成为新会员，并使用离线支付继续使用充值代理。<br />
                        我们帮您支付支付宝或中国银行资金转账，服务费只有5 + 1％。
                    </p>
                </section>
                <section>
                    <h2>二、关于支付宝</h2>
                    <p>
                        Alipay.com有限公司（AliPay）是中国领先的用户数量和总交易量的在线支付服务。 <br />
                        几乎所有的中国电子商务网站都可以使用支付宝购买任何东西，比如taobao.com/tmall.com/jd.com/paipai.com。
                    </p>
                </section>
                <section>
                    <h2>三、银行转账步骤</h2>
                    <p>
                        在此提交转帐请求，充值到一个平台，我们将与您联系确认转账信息，然后确认转账结果。
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
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../../assets/scss/parameter";
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