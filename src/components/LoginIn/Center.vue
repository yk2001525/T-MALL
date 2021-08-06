<template>
  <div class="root">
      <div class="center">
          <div class="loginin">
              <img src="../../assets/loginin.png" alt="">
              <div class="title">
                  <span style="border-bottom: 2px solid #000;">密码登录</span>
              </div>
              <div class="input">
                  <div class="username"><i class="iconfont user icon-yonghu"></i></div>
                  <div class="usernames"><i class="iconfont user icon-suo"></i></div>

                  <input  placeholder="会员名/邮箱/手机号" type="text">
                  <input placeholder="请输入登陆密码" type="text">
                  <div class="login">
                      登录
                  </div>
                  <div class="login-bottom">
                      <span>忘记密码</span>
                      <span>忘记用户名</span>
                      <span>免费注册</span>
                  </div>
              </div>
  
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.username{
    width: 40px;
    height: 42px;
    position: absolute;
    background-color: #c5c5c5;
    top: 1px;
    left: 1px;
    .user{
        color: #fff;
        font-size: 20px;
        position: absolute;
        left: 10px;
        top: 10px;

    }
}
.usernames{
    width: 40px;
    height: 42px;
    position: absolute;
    background-color: #c5c5c5;
    top: 65px;
    left: 1px;
    .user{
        color: #fff;
        font-size: 20px;
        position: absolute;
        left: 10px;
        top: 10px;

    }
}
    .root{
        width: 100vw;
        height: 600px;
        background-color: #E42B26;
        .center{
            width: 1190px;
            height: 100%;
            margin: 0 auto;
            position: relative;
            background-image: url('https://img.alicdn.com/imgextra/i4/O1CN01k5krWL29sqKsxu8qv_!!6000000008124-0-tps-1190-600.jpg');
            .loginin{
                position: absolute;
                box-sizing: border-box;
                width: 350px;
                height: 400px;
                background-color: #fff;
                right: 60px;
                top: 90px;
                padding: 25px;
                img{
                    position: absolute;
                    width: 168px;
                    right: 1px;
                    top: 3px;
                }
                .title{
                    color: #3c3c3c;
                    height: 18px;
                    line-height: 18px;
                    font-size: 16px;
                    margin: 9px 10px 0 0;
                    font-weight: 700;
                    margin-bottom: 25px;
                }
                .input{
                    width: 300px;
                    box-sizing: border-box;
                    position: relative;
                    input{
                        margin-bottom: 20px;
                        border-color: #f1eeee;
                        width: 248px;
                        padding-left: 50px;
                        height: 40px;
                        font-size: 14px;
                        border: 1px solid #ccc;
                        outline: none;
                        /* box-sizing: border-box; */
                        &:hover{
                        border: 1px solid #fe0032;

                        }
                        &:focus{
                        border: 1px solid #fe0032;

                        }
                    }

                    .login{
                        width: 300px;
                        height: 42px;
                        background-color: #ff0036;
                        font-size: 16px;
                        cursor: pointer;
                        color: #fff;
                        line-height: 42px;
                        text-align: center;
                        border-radius: 3px;
                        margin-bottom: 20px;

                    }
                    .login-bottom{
                        font-size: 12px;
                        color: #6c6c6c;
                        text-align: right;
                        span{
                            margin-left: 10px;
                        }
                    }
                }
            }
        }
    }
</style>