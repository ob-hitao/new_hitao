<template>
    <div class="offline_recharge">
        <v-header title="线下充值"></v-header>
        <div class="mui-content">
            <section class="bank_transfer">
                <h6 class="title">银行转账</h6>
                <div class="bank_transfer__wrap">
                    <div>银行：中国工商银行</div>
                    <div class="bank_transfer__wrap__center">
                        <span>户名：WONG YOKE SENG</span>
                        <span>币种：人民币 RMB</span>
                    </div>
                    <div>账户：621226 10010 1049 0024</div>
                </div>
            </section>
            <section class="remittance_info">
                <h6 class="title">汇款信息</h6>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">
                            <span class="remittance_info__name">
                                汇款银行
                            </span>
                        <input v-model="options.bankName" class="remittance_info__text" type="text"
                               placeholder="请选择汇款银行"/>
                    </li>
                    <li class="mui-table-view-cell">
				        	<span class="remittance_info__name">
				        		汇款卡号
				        	</span>
                        <input v-model="options.bankNO" class="remittance_info__text" type="text" placeholder="请输入卡号"/>
                    </li>
                    <li class="mui-table-view-cell">
				        	<span class="remittance_info__name">
				        		汇款人
				        	</span>
                        <input v-model="options.fristName" class="remittance_info__text" type="text"
                               placeholder="请输入持卡人姓名"/>
                    </li>
                    <li class="mui-table-view-cell">
				        	<span class="remittance_info__name">
				        		金额(￥)
				        	</span>
                        <input v-model="options.money" class="remittance_info__text" type="number"
                               placeholder="请输入充值金额(RMB)"/>
                    </li>
                </ul>
            </section>
            <p class="ps">
                手续费 0<br />
                我们会按收到的人民币1：1充值到你的帐号= 0.00
            </p>
            <footer @click="recharge" class="footer">充值</footer>
        </div>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import {postJSON, yesAlert} from '@/assets/js/common';  //公共函数库

export default
{
    components:
    {
        vHeader
    },
    data()
    {
        return {
            options:
            {
                userId: localStorage.getItem('userId'),
                channel: 2,
                money: '',
                bankName: '',
                fristName: '',
                bankNO: ''
            }
        }
    },
    created()
    {

    },
    methods:
    {
        recharge()
        {
            postJSON
            (
                this.API.PAY_RECHARGE,
                this.options,
                data =>
                {
                    if(data.msg) yesAlert('充值成功！');
                }
            );
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../../../assets/scss/parameter";
.offline_recharge
{
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
    .title
    {
        padding: 13px;
        margin: 0;
        color: #000000;
    }
    .bank_transfer
    {
        &__wrap
        {
            background: #fff;
            padding: 15px 20px;
            font-size: 14px;
            line-height: 25px;

            &__center
            {
                display: flex;
                justify-content: space-between;
            }
        }
    }
    .remittance_info
    {

        .mui-table-view::before, .mui-table-view::after
        {
            display: none;
        }
        &__name
        {
            display: inline-block;
            width: 75px;
            color: #666666;
            font-size: 14px;
        }
        &__text
        {
            width: auto;
            height: auto;
            padding: 0;
            margin: 0;
            border: none;
            font-size: 14px;
            background: transparent;
        }
    }
    .ps
    {
        color: #000000;
        padding: 15px 20px;
    }
}
</style>