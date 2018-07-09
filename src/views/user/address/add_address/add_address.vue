<template>
    <div class="add_address">
        <v-header :title="edit ? '编辑收货地址' : '新增收货地址'">
            <span @click="addAddress" class="right">保存</span>
        </v-header>
        <div class="mui-content">
            <div class="plus">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">
                        <a href="#">
                            收件人
                            <input type="text" v-model="options.consignee" />
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            国家
                            <select v-model="options.country">
                                <option :selected="options.country == item.region_id" v-for="item in countryList" :value="item.region_id">{{item.region_name}}</option>
                            </select>
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a>
                            城市
                            <input type="text" v-model="options.city" />
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a href="#">
                            地址
                            <input type="text" v-model="options.address" />
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a href="#">
                            邮编
                            <input type="number" v-model="options.zipcode" />
                        </a>
                    </li>
                    <li class="mui-table-view-cell last">
                        <a href="#">
                            电话
                            <input type="number" v-model="options.tel" />
                        </a>
                    </li>
                    <!--<li class="mui-table-view-cell default">-->
                        <!--<a href="#">设为默认</a>-->
                        <!--<div class="mui-switch mui-switch-mini mui-active">-->
                            <!--<div class="mui-switch-handle"></div>-->
                        <!--</div>-->
                    <!--</li>-->
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import {getJSON, postJSON} from '@/assets/js/common';  //公共函数库


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
                consignee: '',
                country: '',
                city: '',
                zipcode: '',
                tel: '',
                address: ''
            },
            countryList: [],
            edit: this.$route.query.edit
        }
    },
    created()
    {
        if (this.edit)
        {
            this.options = this.edit;
            this.options.zipcode = this.edit.zip;
            this.options.addressId = this.edit.aid;
        }

        getJSON
        (
            this.API.ADDRESS_GETREGIONSNAME,
            {},
            data =>
            {
                this.countryList = data.list;
            }
        )
    },
    methods:
    {
        addAddress()
        {
            postJSON
            (
                this.API[this.edit ? 'ADDRESS_EDIT' : 'ADDRESS_ADD'],
                this.options,
                data =>
                {
                    console.log(1)
                    if(data.msg) mui.back();
                }
            );
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../../assets/scss/parameter";
.add_address
{
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
        background: none;

        .mui-table-view-cell
        {
            font-size: 14px;
            background: #fff;
            color: #666666;

            &.last::after
            {
                display: none;
            }
            a
            {
                padding-right: 35px;
                background: #fff !important;


                span
                {
                    float: right;
                }
                input, select
                {
                    margin: 0;
                    width: 85%;
                    padding: 0 15px;
                    height: auto;
                    float: right;
                    border: none;
                    font-size: inherit;
                }
            }
        }
        .default
        {
            margin-top: 10px;
            border-top: none;

            .mui-switch.mui-active
            {
                background: $theme;
                border-color: $theme;
            }
        }
    }
}
</style>