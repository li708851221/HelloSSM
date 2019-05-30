package com.massun.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Controller
public class IndexController {
    private Logger logger=LoggerFactory.getLogger(IndexController.class);

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index() {
        return "main/index";
    }

    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String getindex() {
        return "main/index";
    }
}
