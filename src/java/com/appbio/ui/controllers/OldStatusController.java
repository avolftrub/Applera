/*
 * TransactionAttributesFilter
 *
 * Copyright (c) 2007 ValueCommerce Co.,Ltd. All Rights Reserved
 */
package com.appbio.ui.controllers;

import org.springframework.web.servlet.mvc.Controller;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by IntelliJ IDEA.
 * User: avolftrub
 * Date: 26.03.2007
 * Time: 15:19:38
 * To change this template use File | Settings | File Templates.
 */
public class OldStatusController implements Controller {

    public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
        return new ModelAndView("statusold");
    }
}
