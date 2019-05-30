<%--
  Created by IntelliJ IDEA.
  User: Lee
  Date: 2019-01-18
  Time: 09:54
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <%@ include file="/common/global.jsp"%>
    <%@ include file="/common/common.jsp"%>
    <script type="text/javascript" src="${basePath}/js/register/registerPage.js"></script>
    <title>注册</title>
    <style>
        .form-group{
            height: 40px;
        }
        .form-check{
            height: 30px;
            margin-left: 16px;
        }
        .redColor{
            color: red;
        }
        .display{
            display: none;
        }
    </style>
</head>
<body>
<%@ include file="/common/top.jsp"%>

    <div  style="width: 500px;height: 400px;margin: 200px 0px 0px 450px">
        <h2>填写注册信息</h2>


        <div class="needs-validation" >
            <div class="form-group row">
                <label for="name" class="col-sm-2 col-form-label">用户名:</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control" id="name" placeholder="输入用户名" required>
                    <div id="nameerrorfeedback" class="invalid-feedback">
                        请输入用户名
                    </div>
                    <div id="namesuccessfeedback" class="valid-feedback">
                        用户名可以使用！
                    </div>
                </div>

            </div>
            <div class="form-group row">
                <label for="pwd1" class="col-sm-2 col-form-label">密码:</label>
                <div class="col-sm-6">
                    <input type="password" class="form-control" id="pwd1" placeholder="输入密码" required>
                    <div id="pwd1feedback" class="invalid-feedback">
                        请输入密码
                    </div>
                </div>

            </div>
            <div class="form-group row">
                <label for="pwd2" class="col-sm-2 col-form-label">确认密码:</label>
                <div class="col-sm-6">
                    <input type="password" class="form-control" id="pwd2" placeholder="再次输入密码" required>
                    <div id="pwd2feedback" class="invalid-feedback">
                        请输入密码
                    </div>
                </div>

            </div>
            <div class="form-group row">
                <label for="email" class="col-sm-2 col-form-label">邮箱:</label>
                <div class="col-sm-6">
                    <input type="email" class="form-control" id="email" placeholder="输入邮箱地址" required>
                    <div id="emailfeedback" class="invalid-feedback">
                        请输入正确的邮箱地址
                    </div>
                </div>

            </div>
            <div class="form-group row">
                <label for="phone" class="col-sm-2 col-form-label">手机号码:</label>
                <div class="col-sm-6">
                    <input type="phone" class="form-control" id="phone" placeholder="输入注册手机号码" required>
                    <div id="phonefeedback" class="invalid-feedback">
                        请输入正确的手机号码
                    </div>
                </div>

            </div>

            <div class="row">

                <div class="col-sm-2"></div>
                <div class="col-sm-6 form-check">
                    <input id="consentInput" class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                    <label class="form-check-label" for="invalidCheck">
                        阅读并接受</label> <label id="consentDiv"class="display" style="color: #dc3545">
                    请勾选“阅读并接受用户协议”
                </label>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-6">
                    <button  type="submit" class="btn btn-primary" onclick="submit()">注册并登录</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
