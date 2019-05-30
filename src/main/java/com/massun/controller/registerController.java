package com.massun.controller;

import com.massun.entity.User;
import com.massun.entity.UserExample;
import com.massun.mapper.UserMapper;
import com.massun.util.HttpUtil;
import com.massun.util.Result;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

/**
 * 注册功能控制器〈一句话功能简述〉
 * 〈注册功能控制器〉
 *
 * @author lcw
 * @version v1.0.0
 * @see ［相关类/方法］
 * @since 产品/模块版本
 */

@Controller
@RequestMapping("/register")
public class registerController {
    private Logger logger= LoggerFactory.getLogger(registerController.class);

    @Autowired
    UserMapper userMapper;

    @RequestMapping(value = "/page",method = RequestMethod.GET)
    public String getRegisterPage()
    {
        return "/register/registerPage";
    }

    @RequestMapping(value = "/doRegister",method = RequestMethod.POST)
  // public Result doRegister(HttpServletRequest request)

    //备注 如果用ResponseBody+实体类接收 POST ,js里的ajax   data :JSON.stringify(user), contentType : "application/json",  必须这样写
    @ResponseBody
    public Result doRegister(@RequestBody User user )
    {
        //Map<String, String> mp = HttpUtil.getParameterMap(request);
        Result result = new Result();
        try {

            User textUser = userMapper.selectByName(user.getName());
            if (textUser != null) {
                result.setSuccess(false);
                result.setErrorMsg("用户名已经存在！"); }else {
                userMapper.insert(user);
                result.setSuccess(true);
            }

        } catch (Exception e) {
            logger.error(e.getMessage());
            result.setSuccess(false);
            result.setErrorMsg("测试不刷新页面");
        }
        return result;
    }

    @RequestMapping(value = "/detectionName",method = RequestMethod.POST)
    //备注 如果用HttpServletRequest POST ,js里的ajax   data :{},  必须这样写
    @ResponseBody
    public Result detectionName(HttpServletRequest request) {
        Map<String, String> mp = HttpUtil.getParameterMap(request);
        HttpSession session = request.getSession();
        Result result = new Result();
        try {
            User textUser = userMapper.selectByName(mp.get("name"));
            if (textUser != null) {
                result.setSuccess(false);
                result.setErrorMsg("用户名已存在");
            } else {
                result.setSuccess(true);
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
            result.setSuccess(false);
            result.setErrorMsg(e.getMessage());
        }
        return result;
    }
}
