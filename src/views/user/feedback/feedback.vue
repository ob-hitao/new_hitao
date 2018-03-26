<template>
    <div class="feedback">
        <v-header title="意见反馈"></v-header>
        <div class="mui-content">
            <div class="plus">
                <div class="feedback__main">
                    <textarea placeholder="请反馈您在使用中遇到的问题或你给我们的建议"></textarea>
                    <div class="feedback__main__verification">
                        <input placeholder="输入验证码" /><img src=""/>
                    </div>
                    <button class="mui-btn">提交</button>
                </div>
                <h4 class="feedback__title">已提交的意见内容</h4>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">
                        <span>很好很好不好怎么这样的？</span>
                        <span>2017-07-20</span>
                    </li>
                    <li class="mui-table-view-cell">
                        <span>很好很好不好怎么这样的？</span>
                        <span>2017-07-20</span>
                    </li>
                </ul>
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
@import "../../../assets/scss/parameter";
.feedback
{
    &__main
    {
        padding: 0 15px;
        background: #fff;

        textarea
        {
            padding-left: 0;
            padding-right: 0;
            font-size: 14px;
            border-radius: 0;
            border: none;
            border-bottom: 1px solid #eeeeee;
        }
        &__verification
        {
            margin: 0 15px;
            display: flex;

            input, img
            {
                width: 50%;
                height: 39px;
                border: 1px solid #eeeeee;
                font-size: 14px;
                border-radius: 5px;
            }
            input
            {
                text-indent: 10px;
                margin-right: 10px;
            }
        }
        .mui-btn
        {
            width: 100%;
            height: 44px;
            margin: 20px 0;
            color: #fff;
            background: #e95168;
            border: none;
        }
    }
    &__title
    {
        font-size: 12px;
        font-weight: normal;
        padding: 15px;
        margin: 0;
    }
    .mui-table-view-cell
    {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #666666;

        &::after
        {
            right: 15px;
        }
        span
        {
            &:last-child
            {
                font-size: 12px;
            }
        }
    }
}
</style>