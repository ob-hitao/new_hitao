<template>
    <div class="help_details">
        <v-header :title="title"></v-header>
        <div class="help_details__content mui-content">
            <div class="plus">
                <article class="help_details__content__article" v-html="body"></article>
            </div>
        </div>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import {getJSON} from '@/assets/js/common';  //公共函数库

export default
{
    components:
    {
        vHeader
    },
    data()
    {
        return {
            title: '',
            body: ''
        }
    },
    created()
    {
        let articleId = this.$route.query.viewId ? this.$route.query.viewId : '';

        getJSON
        (
            this.API.ARTICLE_VIEW,
            {
                articleId
            },
            data =>
            {
                this.title = data.msg.title;
                this.body = data.msg.body;
            }
        );
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../../assets/scss/parameter";
.help_details
{
    &__content
    {
        &__article
        {
            padding: 15px;
            margin-bottom: 10px;
            background: #fff;

            &__title
            {
                color: $theme;
                font-size: 14px;
                font-weight: normal;
            }
            &__content
            {
                font-size: 14px;
            }
            &__next
            {
                font-size: 14px;
                color: $theme;
                text-align: right;
                margin: 0;
            }
        }
        &__lists
        {
            background: #fff;

            &__title
            {
                font-size: 14px;
                margin: 0;
                padding: 15px;
            }
            .mui-table-view::before
            {
                left: 15px;
                right: 15px;
            }
            .mui-table-view-cell
            {
                color: #666666;
                font-size: 13px;

                &::after
                {
                    right: 15px;
                }
            }
        }
    }
}
</style>