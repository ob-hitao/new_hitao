<template>
    <span class="star">
        <i class="iconfont" v-for="itemClass in itemClasses" :class="itemClass"></i>
    </span>
</template>

<script>
const CLS_ON = 'icon-star-full',
      CLS_HALF = 'half',  //半星，未添加icon
      CLS_OFF = 'icon-xingxing';
export default
{
    props:
    {
        size: Number,
        score: Number
    },
    computed:
    {
        itemClasses()
        {
            let result = [],
                score = Math.floor(this.score * 2) / 2,  //取拥有.5的数或整数
                hasDecimal = score % 1 !== 0,  //求是否有小数
                integer = Math.floor(score);  //求整数
            for (let i = 0; i < integer; i++)
            {
                result.push(CLS_ON);
            }
            if (hasDecimal)
            {
                result.push(CLS_HALF);
            }
            while (result.length < this.size)
            {
                result.push(CLS_OFF);
            }
            return result;
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.star
{
    .iconfont
    {
        font-size: 12px;
    }
}
</style>