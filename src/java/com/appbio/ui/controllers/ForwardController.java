package com.appbio.ui.controllers;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;


/**
 * Simple controller for forwarding requests to the configured view.
 */
public class ForwardController implements Controller {

    /**
     * Hnadles request for forwarding. If forwardURL is <code>null</code>, then view name is used for forwarding
     *
     * @param request  {@link HttpServletRequest} object
     * @param response {@link HttpServletResponse} object
     * @return {@link ModelAndView} with explicit setting to forward
     * @throws Exception
     */
    public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String path = request.getServletPath();
        return new ModelAndView(path);
    }
}
