<template>
    <div class="user_info">
        <v-header title="个人资料">
            <span @click="save" class="right">保存</span>
        </v-header>
        <div class="mui-content">
            <div class="plus">
                <ul class="mui-table-view">
                    <li @click="fileShow" class="mui-table-view-cell">
                        <label>
                        <a class="mui-navigate-right">
                            <input @change="setImg($event)" ref="file" type="file" accept="image/*" />
                            <span class="details">头像 </span>
                            <img class="avatar" v-lazy="'http://hitao.dev.onebound.cn' + userInfo.avatar" />
                        </a>
                        </label>
                    </li>
                    <li @click="setInfo('uname')" class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="details">昵称</span>
                            <span>{{userInfo.uname}}</span>
                        </a>
                    </li>
                    <li @click="setSex" class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="details">性别</span>
                            <span>{{userInfo.sex ? '男' : '女'}}</span>
                        </a>
                    </li>
                    <!--<li class="mui-table-view-cell">-->
                        <!--<a class="mui-navigate-right">-->
                            <!--<span class="details">出生日期</span>-->
                            <!--<span>2000-01-25</span>-->
                        <!--</a>-->
                    <!--</li>-->
                    <li @click="setInfo('address')" class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="details">收货地址</span>
                            <span>{{userInfo.address}}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import {postJSON, taggleBg, prompt, confirm, yesAlert, compress} from '@/assets/js/common';  //公共函数库


export default
{
    components:
    {
        vHeader
    },
    data()
    {
        return {
            userInfo: {}
        }
    },
    created()
    {
        taggleBg('#fff', 'dark');
        this.getUserInfo();
    },
    beforeDestroy()
    {
        taggleBg('#e95168', 'light');
    },
    methods:
    {
        getUserInfo()
        {
            let userId = localStorage.getItem('userId');
            postJSON(this.API.USER_OPENSETTING, {userId}, data => {this.userInfo = data.userinfo})
        },
        setInfo(type)
        {
            prompt(data => {if(data.index) this.userInfo[type] = data.value})
        },
        setSex()
        {
            confirm(data => {this.userInfo.sex = data.index})
        },
        setImg(ev)
        {

            let file = ev.target.files[0];
            if (!/image\/\w+/.test(file.type))
            {
                yesAlert("请选择正确的图像");
                return false;
            }

            //读取图片
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = e =>
            {
                let img = new Image();
                img.src = e.target.result;
                img.onload = () =>
                {
                    let result = compress(img);
                    mui.post
                    (
                        this.API.OTHER_UPLOADIMG,
                        {
                            type: 'avatar',
                            image: result
                        },
                        data =>
                        {
                            this.userInfo.avatar = data.result.path;
                        }
                    );
                }
            }
        },
        fileShow()
        {
            // FastClick的bug，手动触发
            this.$refs.file.click();
        },
        save: function()
        {
            postJSON
            (
                this.API.USER_SETTING,
                {
                    userId: this.userInfo.uid,
                    nickname: this.userInfo.uname,
                    sex: this.userInfo.sex,
                    image: this.userInfo.avatar,
                    address: this.userInfo.address
                },
                data =>
                {
                    yesAlert('保存成功')
                }
            );
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.user_info
{
    input[type=file]
    {
        display: none;
    }
    .avatar
    {
        width: 56px;
        height: 56px;
    }
    .details
    {
        color: #666666;
    }
    .right
    {
        position: absolute;
        right: 5px;
        top: 0;
        color: #666666;
        font-size: 14px;
        padding: 10px;
        z-index: 999;
    }
    .mui-navigate-right
    {
        display: flex !important;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        padding-right: 35px;
    }
}
</style>