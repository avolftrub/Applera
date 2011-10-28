package com.appbio.ui.controllers;

import com.appbio.ui.session.UserSessionFilter;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LogOutController implements Controller {

    public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
        request.getSession(true).removeAttribute(UserSessionFilter.USER_SESSION_ATTRIBUTE_NAME);
        response.sendRedirect("index.do");
        return null;
    }
}
