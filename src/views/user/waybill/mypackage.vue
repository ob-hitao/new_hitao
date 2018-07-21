<template>
    <div class="mui-content" @scroll.passive="next($event)" style="top: 40px;">
        <section v-for="item in list" class="order_list__order">
            <h4 class="order_list__order__title">
                <span class="order_list__order__title__number">
                    ID：{{item.sid}}
                </span>
                <span class="order_list__order__title__type">{{item.state}}</span>
            </h4>
            <router-link :to="{path: 'mypackage_desc', query: {orderId: item.sid}}" tag="div" class="waybill__main" append>
                <div class="left">
                    邮寄方式：{{item.deliveryname}}<br />
                    重量：{{item.countweight}}g<br />
                    照片：
                </div>
                <div class="right">
                    跟踪号：{{item.sn}}<br />
                    体积：{{item.vacuum}}m³<br />
                    时间：{{new Date(item.addtime*1000).Format("yyyy-MM-dd hh:mm:ss")}}
                </div>
            </router-link>
            <div class="order_list__order__info">
                运费:￥{{item.freight_cus}} 报关费:￥{{item.customsfee}} 总计:<span class="price">￥{{item.totalfee}}</span>
            </div>
            <div class="order_list__order__btns">
                <button @click="payment(item)" v-if="item.state=='0'" class="btn_empty">付款</button>
                <button @click="cancel(item)" v-if="item.state=='1'" class="btn_real">取消</button>
                <button @click="receipt(item)" v-if="item.state=='2'" class="btn_real">确定收货</button>
            </div>
        </section>
        <v-no_data v-if="!list.length" icon="icon-address" text="您还没有收货地址"></v-no_data>
    </div>

</template>

<script>
import vNo_data from '@/components/no_data/no_data';
import {getJSON, postJSON, confirm} from '@/assets/js/common';  //公共函数库

export default
{
    components:
    {
        vNo_data
    },
    data()
    {
        return {
            options:
            {
                userId: localStorage.getItem('userId'),
                p: 1,
                size: 6,
            },
            list: [],
            scrolled: false
        }
    },
    created()
    {
        this.getList()
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
                this.getList();
            }
            //解锁
            setTimeout(() => this.scrolled = false, 1);
        },
        getList()
        {
            getJSON
            (
                this.API.SENDORDER_LIST,
                this.options,
                data =>
                {
                    this.list = data.list
                }
            );
        },
        cancel(item)
        {
            confirm
            ('确定要取消包裹吗？',  ['取消', '确定'],function(e){
                if(e.index)
                {
                    postJSON
                    (
                        this.API.SENDORDER_CANCEL,
                        {
                            userId: item.uid,
                            packageId: item.sid
                        },
                        data =>
                        {
                            if(data.msg) this.getList();
                        }
                    );
                }
            });
        },
        receipt(item)
        {
            postJSON
            (
                this.API.SENDORDER_RECEIPT,
                {
                    userId: item.uid,
                    packageId: item.sid
                },
                data =>
                {
                    if(data.msg) this.getList();
                }
            );
        },
        payment()
        {

        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../assets/scss/parameter";
.order_list
{
    &__order
    {
        padding: 0 12px;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        background: #fff;

        .goods
        {
            .price
            {
                color: #ff6900;
            }
        }
        &__title
        {
            display: flex;
            justify-content: space-between;
            margin: 0 -12px 10px -12px;
            padding: 0 12px;
            height: 44px;
            line-height: 44px;
            font-weight: normal;
            font-size: 14px;
            border-bottom: 1px solid #efefef;

            &__type
            {
                color: $theme;
            }
        }
        &__remarks
        {
            height: 30px;
            line-height: 30px;
            background: #eeeeee;
            border-radius: 5px;
            margin: 10px 0;
            text-indent: 10px;
        }
        &__info
        {
            display: flex;
            justify-content: space-between;
            height: 37px;
            line-height: 37px;
            font-size: 12px;
            border-top: 1px solid #efefef;
            border-bottom: 1px solid #efefef;
        }
        &__btns
        {
            display: flex;
            justify-content: flex-end;
            padding: 5px 0;

            button
            {
                margin-left: 17.5px;
            }
        }
    }
}
.order_list__order__title
{
    margin-bottom: 0;
    border-bottom: none;
}
.order_list__order__info
{
    justify-content: flex-end;
    border-top: none;
}
.waybill__main
{
    display: flex;
    justify-content: space-between;
    margin-left: -12px;
    margin-right: -12px;
    padding: 12px;
    background: #f8f8f8;
    font-size: 14px;
}
</style>