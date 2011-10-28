package com.appbio.ui.controllers;

import org.apache.log4j.Logger;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Enumeration;

public class PageNotFoundController implements Controller {
    public static final Logger LOG = Logger.getLogger(PageNotFoundController.class);
    public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String invalidPath = (String) request.getAttribute("javax.servlet.forward.request_uri");
        if (invalidPath == null || invalidPath.trim().length() == 0) {
            invalidPath = "";
        }
        return new ModelAndView("pageNotFound", "path", invalidPath);
    }
}