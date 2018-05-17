<template>
    <div class="calculation">
        <v-header title="运费试算"></v-header>
        <div class="mui-content">
            <section class="form">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="ps">目的国家</span>
                            <span>
				        			<select id="list" name="area[]">
							    		<option>马来西亚</option>
							    	</select>
				        		</span>
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <span class="ps">商品价格</span>
                        <span><input type="text" id="price"/><span class="ps right">RMB</span></span>
                    </li>
                    <li class="mui-table-view-cell">
                        <span class="ps">商品体积</span>
                        <span>5<span class="ps right"></span>m³</span>
                    </li>
                    <li class="mui-table-view-cell radio">
                        <div>
                            <v-checkbox></v-checkbox><span class="ps">g(克)</span>
                        </div>
                        <div>
                            <v-checkbox></v-checkbox><span class="ps">m³(立方)</span>
                        </div>
                    </li>
                </ul>
                <button class="calc">估算</button>
            </section>

            <section class="results">
                <h4 class="results__title">估算结果</h4>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">
                        目的国家：新加坡
                    </li>
                    <li class="mui-table-view-cell">
                        商品价格(￥)：58&nbsp;&nbsp;&nbsp;&nbsp;服务费(￥)：2.32<br />
                        定制费(￥)：1.00 &nbsp;&nbsp;&nbsp;&nbsp;运费(￥)：5000
                    </li>
                    <li class="mui-table-view-cell">
                        总计(￥)：<span class="price">5061.32 = (null)712.86</span>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import vCheckbox from '@/components/checkbox/checkbox';
export default
{
    components:
    {
        vHeader,
        vCheckbox
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../assets/scss/parameter";
.calculation
{
    input, select
    {
        width: 200px;
        margin: 0;
        border: none;
        text-align: right;
    }
    .price
    {
        color: #ff6900;
    }
    .calc
    {
        display: block;
        width: 90%;
        margin: 10px auto;
        height: 45px;
        border: none;
        border-radius: 5px;
        background: $theme;
        color: #fff;
    }
    .mui-content > .mui-table-view:first-child
    {
        margin-top: 0;
    }
    .form
    {
        .mui-table-view-cell
        {
            display: flex;
            justify-content: space-between;
            font-size: 14px;

            &::after
            {
                right: 15px;
            }
            .mui-navigate-right
            {
                display: flex;
                justify-content: space-between;
                width: 100%;
                font-size: 14px;
                padding-right: 35px;
                box-sizing: content-box;
            }
            .ps
            {
                color: #666666;
            }
            .right
            {
                margin-left: 15px;
            }
            &.radio
            {
                justify-content: center;

                & > div
                {
                    &:first-child
                    {
                        margin-right: 10px;
                    }

                    label
                    {
                        vertical-align: middle;
                        margin-right: 7px;
                    }
                }
            }
        }
    }
    .results
    {
        &__title
        {
            padding: 7px 15px;
            margin: 0;
            font-weight: normal;
            font-size: 12px;
        }
        .mui-table-view-cell
        {
            font-size: 14px;

            &::after
            {
                right: 15px;
            }
        }
    }
}
</style>