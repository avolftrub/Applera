/*
 * TransactionAttributesFilter
 *
 * Copyright (c) 2007 ValueCommerce Co.,Ltd. All Rights Reserved
 */
package com.appbio.ui.controllers;

import org.springframework.web.servlet.mvc.AbstractCommandController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.validation.BindException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.appbio.ui.commands.TestProductCommand;

/**
 * Created by IntelliJ IDEA.
 * User: avolftrub
 * Date: 26.03.2007
 * Time: 15:12:28
 * To change this template use File | Settings | File Templates.
 */
public class StatusController extends AbstractCommandController {


    public StatusController() {
        setCommandClass(TestProductCommand.class);
    }

    protected ModelAndView handle(HttpServletRequest request, HttpServletResponse response, Object command, BindException errors) throws Exception {
        return new ModelAndView("statuspage", "data", ((TestProductCommand)command).getName());
    }
}
