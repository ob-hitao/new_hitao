<template>
    <div class="exchange">
        <v-header title="兑换优惠券"></v-header>
        <div class="mui-content">
            <section v-for="item in list" class="coupon_list__item">
                <div class="coupon_list__item__main">
                    <div class="coupon_list__item__main__number">
                        ￥{{item.money}}
                    </div>
                    <div class="coupon_list__item__main__info">
                        <span class="coupon_list__item__main__info__name">{{item.name}}</span><br />
                        <!--<span class="coupon_list__item__main__info__number">NO.123</span>-->
                    </div>
                </div>
                <div class="coupon_list__item__aside">
                    <div class="coupon_list__item__aside__info">
						<span class="coupon_list__item__aside__info__get">
							<i class="iconfont icon-youhuiquan01"></i>获得方式：{{item.vip}}
						</span><br />
                        <span class="coupon_list__item__aside__info__time">
							<i class="iconfont icon-shijian"></i>有效期至：2018-06-24
						</span>
                    </div>
                    <div class="coupon_list__item__aside__submit">
                        <button @click="exchange(item)" class="btn_real active">立即兑换</button>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import {getJSON, postJSON, yesAlert} from '@/assets/js/common';  //公共函数库


export default
{
    components:
    {
        vHeader
    },
    data()
    {
        return {
            userId: localStorage.getItem('userId'),
            list: []
        }
    },
    created()
    {
        this.getex();
    },
    methods:
    {
        getex()
        {
            getJSON
            (
                this.API.COUPON_EXCHANGELIST,
                {
                    userId: this.userId
                },
                data =>
                {
                    this.list = data.list;
                }
            );
        },
        exchange(item)
        {
            postJSON
            (
                this.API.COUPON_EXCHANGE,
                {
                    userId: this.userId,
                    number: 1,
                    price: item.money,
                    points: item.point
                },
                data =>
                {
                    if (data.msg)
                    {
                        yesAlert('兑换成功', () =>
                        {
                            mui.back();
                        });
                    }
                }
            );
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.coupon_list
{

    &__item
    {
        height: 135px;
        margin-bottom: 10px;
        padding: 13px;
        background: #fff;
        &__main
        {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #efefef;
            padding-bottom: 13px;

            &__number
            {
                font-size: 36px;
                color: #ff6900;
            }
            &__info
            {
                color: #666666;
                text-align: right;

                &__name
                {
                    font-size: 15px;
                }
                &__number
                {
                    font-size: 12px;
                }
            }
        }
        &__aside
        {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 10px;

            &__info
            {
                span
                {
                    color: #666666;
                    font-size: 12px;

                    .iconfont
                    {
                        font-size: 17px;
                        margin-right: 10px;
                    }
                }
            }
        }
    }
}
</style>