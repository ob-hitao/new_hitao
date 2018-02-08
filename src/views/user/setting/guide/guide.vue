<template>
    <article class="guide__content mui-content">
        <div class="plus">
            <p>
                <span class="guide__title">一、代购</span><br />
                复制淘宝链接到我们网站进行下单。
            </p>
            <p>
                <span class="guide__title">二、转运</span><br />
                填写转运订单的相关信息，我们给您进行邮寄。
            </p>
            <p>
                <span class="guide__title">三、充值</span><br />
                可以进行线上和线下充值。
            </p>
        </div>
    </article>
</template>

<script>
export default
{

}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../../assets/scss/parameter";
.guide
{
    &__content
    {
        background: #fff;

        p
        {
            padding: 12px;
        }
    }
    &__title
    {
        color: $theme;
    }
}
</style>