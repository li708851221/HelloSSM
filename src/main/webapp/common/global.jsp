<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8"%>
<%@ page isELIgnored="false"%>
<%@ page trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<%
    /*String basePath1 = request.getScheme() + "://"
            + request.getServerName() + ":" + request.getServerPort()
            + request.getContextPath();*/
    String basePath1 = request.getContextPath();
    String basePathIp = request.getServerName() + ":"
            + request.getServerPort();
%>
<%--basePath --%>
<%-- <c:set var="base" value="${pageContext.request.scheme}://${pageContext.request.serverName}:${pageContext.request.serverPort}${pageContext.request.contextPath}" />
 --%>
<c:set var="base" value="<%=basePath1%>" />
<c:set var="baseip" value="<%=basePathIp%>" />
<%--静态文件目录 --%>
<c:set var="basePath" value="${base}" />
<c:set var="basePathIp" value="${baseip}" />
