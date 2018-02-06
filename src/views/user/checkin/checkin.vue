<template>
    <div class="check_in">
        <header class="mui-bar mui-bar-nav special-title">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <h1 class="mui-title">签到</h1>
        </header>
        <div class="mui-content">
            <section class="calendar">
                <div class="calendar__header">
                    <div>{{now.mon + '月' + now.day + '日'}}</div> <button class="check" :class="{active: check}">{{check ? '已签到' : '点击签到'}}</button>
                </div>
                <div class="calendar__body">
                    <div class="calendar__body__title">
                        <div>日</div>
                        <div>一</div>
                        <div>二</div>
                        <div>三</div>
                        <div>四</div>
                        <div>五</div>
                        <div>六</div>
                    </div>
                    <div class="calendar__body__date">
                        <div v-for="item in date">
                            <span :class="{active: now.day == item}">{{item}}</span>
                        </div>
                    </div>
                </div>
                <div class="calendar__footer">
                    <h5>
                        <div>今日签到奖励 <span class="price">积分+100</span></div>
                    </h5>
                </div>
            </section>
            <section class="get">
                <h4 class="get__title">赚取更多积分</h4>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">
                        <div class="left">
                            <div class="icon"></div>
                            <div>
                                完善个人信息<br />
                                <span class="price">+100</span>
                            </div>
                        </div>
                        <div class="right">
                            <button>立即完善</button>
                        </div>
                    </li>
                    <li class="mui-table-view-cell">
                        <div class="left">
                            <div class="icon"></div>
                            <div>
                                首次代购<br />
                                <span class="price">+100</span>
                            </div>
                        </div>
                        <div class="right">
                            <button>去代购</button>
                        </div>
                    </li>
                    <li class="mui-table-view-cell">
                        <div class="left">
                            <div class="icon"></div>
                            <div>
                                首次代运<br />
                                <span class="price">+100</span>
                            </div>
                        </div>
                        <div class="right">
                            <button>去代运</button>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script>
export default
{
    data()
    {
        return {
            date: [],
            now:
            {
                year:'',
                mon: '',
                day: null
            },
            check: false,
        }
    },
    created()
    {
        this.taggleBg('#fff', 'dark');
        this.initDate();
    },
    beforeDestroy()
    {
        this.taggleBg('#e95168', 'light');
    },
    methods:
    {
        taggleBg(bg, style)
        {
            mui.plusReady(() =>
            {
                // 系统顶部样式
                plus.navigator.setStatusBarBackground(bg);
                plus.navigator.setStatusBarStyle(style);
            });
        },
        initDate: function()
        {
            var D = new Date();
            this.now.year = D.getYear()+1900;
            this.now.mon = D.getMonth() + 1;
            this.now.day = D.getDate();
            this.dateArr(D);
        },
        dateArr: function(D)
        {
            // 获取天数
            D.setMonth(D.getMonth() + 1, 0);
            var Day = D.getDate();

            // 获取 1 号在星期几
            var W = new Date();
            W.setDate(1);
            var Week = W.getDay();

            for (var i = 0; i < Week + Day; i ++)
            {
                this.date.push(i < Week ? null : i - Week + 1);
            }
        },
        checkDay: function(day)
        {
            if(day==null){
                return false;
            }
            var mon = this.now.mon < 10? 0 + this.now.mon.toString(): this.now.mon.toString();
            var day = day < 10? 0 + day.toString(): day.toString();
            for(var i=0;i<this.list.length;i++)
            {
                if(this.list[i].date == this.now.year + mon + day.toString())
                {
                    return true;
                }
            }
            return false;
        },
        checkIn: function()
        {
            var _this = this;
            if(!_this.check){
                postJSON('USER_SIGN',{'userId':_this.userId},function(data){
                    _this.check = true;
                    mui.currentWebview.reload();
                });
            }
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../assets/scss/parameter";
@import "../../../assets/scss/mixin";
$animal-list:
(
    "(1)": "checkin_info",
    "(2)": "checkin_daigou",
    "(3)": "checkin_daiyun"
);
.check_in
{
    .calendar
    {
        padding: 15px;
        background: #fff;
        margin-bottom: 10px;

        &__header
        {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            line-height: 30px;
            color: #333333;

            .check
            {
                border-radius: 20px;
                border: none;
                background: $theme;
                color: #fff;
                vertical-align: middle;

                &.active
                {
                    background: #5e5e5e;
                }
            }
        }
        &__body
        {
            &__title
            {
                display: flex;
                justify-content: space-between;
                margin-top: 10px;

                & > div
                {
                    width: 14.2%;
                    text-align: center;
                }
            }
            &__date
            {
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;

                & > div
                {
                    width: 14.2%;
                    text-align: center;
                    margin-top: 10px;

                    & > span
                    {
                        display: block;
                        width: 30px;
                        height: 30px;
                        margin: 0 auto;
                        line-height: 30px;
                        text-align: center;
                        font-size: 14px;
                        color: #303030;


                        &.selected
                        {
                            border: 1px solid $theme;
                            border-radius: 50%;
                        }
                        &.active
                        {
                            background: $theme;
                            color: #fff;
                            border-radius: 50%;
                        }
                    }
                }
            }
        }
        &__footer
        {
            h5
            {
                position: relative;
                margin-top: 15px;

                div
                {
                    width: 160px;
                    margin: 0 auto;
                    text-align: center;
                    position: relative;
                    z-index: 10;
                    background: #FFFFFF;
                }
                &::after
                {
                    content: '';
                    display: block;
                    width: 100%;
                    height: 1px;
                    position: absolute;
                    top: 7px;
                    background: #efefef;
                }
            }
        }
    }
    .get
    {
        margin-bottom: 70px;
        background: #fff;

        &__title
        {
            padding: 10px 15px;
            font-weight: normal;
            font-size: 16px;
        }
        .mui-table-view-cell
        {
            display: flex;
            justify-content: space-between;
            align-items: center;

            &::after
            {
                right: 15px;
            }
            .left
            {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 14px;

                .icon
                {
                    width: 26px;
                    height: 26px;
                    margin-right: 20px;
                }
            }
            .right
            {
                button
                {
                    width: 80px;
                    border: 1px solid $theme;
                    border-radius: 10px;
                    color: $theme;
                }
            }
        }
        @each $index, $animal in $animal-list
        {
            .mui-table-view-cell:nth-child#{$index}
            {
                .icon
                {
                    @include bg-img(#{$animal});
                }
            }
        }
    }
}
</style>