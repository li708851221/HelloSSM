$(function(){
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    $("#name").change(function () {
        namecheack();
    });
    $("input[type='password']").change(function () {
        pwdcheack();
    });
    $("#email").change(function () {
        emailcheack();
    });
    $("#phone").change(function () {
        phonecheack();
    });
    $("#consentInput").change(function () {
        consentcheack();
    });
});

function submit() {
   var boole= namecheack();
    boole=pwdcheack()&&boole;
    boole=emailcheack()&&boole;
    boole=phonecheack()&&boole;
    boole=consentcheack()&&boole;
    if( boole)
    {
        var user={
            "name":$("#name").val() ,
            "password":$("#pwd1").val() ,
            "email":$("#email").val(),
            "telphone":$("#phone").val()
        }

        $.ajax({
            type : "POST",
            url : baseContext + '/register/doRegister',
            dataType : "json",
            async : false,
            data :JSON.stringify(user),
            //data : {
             //   name:$("#name").val() ,
             //   password:$("#pwd1").val() ,
            //    email: $("#email").val() ,
             //   telphone:$("#phone").val()
           // },
            contentType : "application/json",
            success : function(result) {
                if (result.success) {
                    alert("注册成功");
                    window.location.href=baseContext+"/index/";
                } else {
                    alert("注册失败："+result.errorMsg);
                }
            },
            error : function(XMLHttpRequest, textStatus, errorThown) {
                alert("注册失败!");
            }
        });
    }
    else
    {
        return false;
    }
}

function namecheack() {

    if($("#name").val().trim()==""){
        $("#name").val("");
        $("#nameerrorfeedback").html("用户名不能为空！");//修改username-feedback div中的内容
        $("#name").removeClass("is-valid");//移除正常状态
        $("#name").addClass("is-invalid");//添加非法状态
        return false;//onsubmit  return false阻止表单提交
    }
    //不能有特殊符号
    var RegExp = /[@#\$%\^&\*]+/g;//正则表达式
    if(RegExp.exec($("#name").val())) {
        $("#nameerrorfeedback")[0].innerHTML = "用户名存在特殊符号！";
        $("#name").removeClass("is-valid");//移除正常状态
        $("#name").addClass("is-invalid");
        return false;
    }
    $.ajax({
        type : "POST",
        url : baseContext + '/register/detectionName',
        dataType : "json",
        async : false,
        data : {
            name:$("#name").val()
        },
        //contentType : "application/json",
        success : function(result) {
            if (result.success) {
                $("#name").removeClass("is-invalid");
                $("#name").addClass("is-valid");
                return true;
            } else {
                $("#nameerrorfeedback")[0].innerHTML = "用户名已存在！";
                $("#name").removeClass("is-valid");//移除正常状态
                $("#name").addClass("is-invalid");
                return false;
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThown) {
            alert("网络错误");
        }
    });

    return true;

}

function pwdcheack() {
    var pwd1=$("#pwd1").val().trim();
    var pwd2=$("#pwd2").val().trim();
    if(pwd1=="") {
        $("#pwd1").val("");
        $("#pwd1feedback").html("密码不能为空！");//修改username-feedback div中的内容
        $("#pwd1").addClass("is-invalid");//添加非法状态
        if(pwd2=="") {
            $("#pwd2").val("");
            $("#pwd2feedback").html("请再次输入密码进行验证！");//修改username-feedback div中的内容
            $("#pwd2").addClass("is-invalid");//添加非法状态
            return false;
        }
        return false;
    }
    if(pwd2=="") {
        $("#pwd2").val("");
        $("#pwd2feedback").html("请再次输入密码进行验证！");//修改username-feedback div中的内容
        $("#pwd2").addClass("is-invalid");//添加非法状态
        return false;
    }
    if(pwd1!=pwd2)
    {
        $("#pwd2feedback").html("两次密码输入不一致！");//修改username-feedback div中的内容
        $("#pwd2").addClass("is-invalid");//添加非法状态
        return false;
    }

    $("#pwd1").removeClass("is-invalid");
    $("#pwd2").removeClass("is-invalid");
    return true;
}

function emailcheack() {

    if($("#email").val().trim()==""){
        $("#email").val("");
        $("#emailfeedback").html("邮箱不能为空！");//修改username-feedback div中的内容
        $("#email").addClass("is-invalid");//添加非法状态
        return false;//onsubmit  return false阻止表单提交
    }
    //不能有特殊符号
    var RegExp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g;//正则表达式
    if($("#email").val().match(RegExp)) {
        if($("#email").val().match(RegExp)[0]!=$("#email").val()) {
            $("#emailfeedback")[0].innerHTML = "邮箱地址错误！";
            $("#email").addClass("is-invalid");
            return false;
        }
    }
    else{
        $("#emailfeedback")[0].innerHTML = "邮箱地址错误！";
        $("#email").addClass("is-invalid");
        return false;
    }
    $("#email").removeClass("is-invalid");
    return true;
}

function phonecheack() {

    if($("#phone").val().trim()==""){
        $("#phone").val("");
        $("#phonefeedback").html("手机号码不能为空！");//修改username-feedback div中的内容
        $("#phone").addClass("is-invalid");//添加非法状态
        return false;//onsubmit  return false阻止表单提交
    }
    //不能有特殊符号
    var RegExp = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|16[0-9]|17[0-9]|18[0-9])\d{8}$/g;//正则表达式
    if($("#phone").val().match(RegExp)) {
        if($("#phone").val().match(RegExp)[0]!=$("#phone").val()) {
            $("#phonefeedback")[0].innerHTML = "手机号码错误！";
            $("#phone").addClass("is-invalid");
            return false;
        }
    }
    else{
        $("#phonefeedback")[0].innerHTML = "手机号码错误！";
        $("#phone").addClass("is-invalid");
        return false;
    }
    $("#phone").removeClass("is-invalid");
    return true;
}

function consentcheack(){
    if( $("#consentInput")[0].checked == false ){
        $("#consentDiv").removeClass("display");
    }
    else {
        $("#consentDiv").addClass("display");
    }
}