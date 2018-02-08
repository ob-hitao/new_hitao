<template>
    <section class="users mui-content">
        <div class="plus">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell users__list">
                    <img class="users__icon" src="./icon_add_account@2x.png"/><span>公主殿下</span>
                </li>
                <li class="mui-table-view-cell users__list">
                    <div class="add_icon" /><span>公主殿下</span>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default
{

}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../../assets/scss/mixin";
.users
{
    &__list
    {
        display: flex;
        align-items: center;
        font-size: 15px;
    }
    &__icon, .add_icon
    {
        width: 50px;
        height: 50px;
        margin-right: 22.5px;
    }
    .add_icon
    {
        @include bg-img('./icon_add_account');
    }
}
</style>