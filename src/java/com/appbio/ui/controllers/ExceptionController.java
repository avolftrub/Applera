package com.appbio.ui.controllers;

import org.apache.log4j.Logger;
import org.joda.time.LocalDate;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ExceptionController implements Controller {
    private static final Logger LOG = Logger.getLogger(ExceptionController.class);

    public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
        Exception ex = (Exception) request.getAttribute("javax.servlet.error.exception");
        LocalDate date = new LocalDate();
        String logId = date.getYear() + ":" + date.getDayOfYear() + ":" + System.currentTimeMillis();
        LOG.error(logId, ex);
        return new ModelAndView("errorPage", "logId", logId);
    }
}
