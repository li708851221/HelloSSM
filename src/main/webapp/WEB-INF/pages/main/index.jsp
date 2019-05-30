<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<!DOCTYPE html>
<html>
<head>
    <%@ include file="/common/global.jsp"%>
    <%@ include file="/common/common.jsp"%>
    <title>天猫首页</title>
</head>
<body>
<%@ include file="/common/top.jsp"%>
<div class="searchOutDiv">
    <a href="http://how2j.cn/tmall">
        <img id="logo" src="/image/logo.gif" class="logo">
    </a>
    <form action="http://how2j.cn/tmall/foresearch" method="post">
        <div class="searchDiv">
            <input name="keyword" type="text" value="" placeholder="时尚男鞋  太阳镜 ">
            <button type="submit" class="searchButton">搜索</button>
            <div class="searchBelow">
                <span>
                    <a href="http://how2j.cn/tmall/forecategory?cid=79">平衡车</a>
                    <span>|</span>
                </span>
                <span>
                    <a href="http://how2j.cn/tmall/forecategory?cid=78">扫地机器人</a>
                    <span>|</span>
                </span>
                <span>
                    <a href="http://how2j.cn/tmall/forecategory?cid=77">原汁机</a>
                    <span>|</span>
                </span>
                <span>
                    <a href="http://how2j.cn/tmall/forecategory?cid=76">冰箱</a>
                </span>
            </div>
        </div>
    </form>
</div>

</body>
</html>
