package com.appbio.ui.controllers;

import org.springframework.web.servlet.mvc.Controller;
import org.springframework.web.servlet.ModelAndView;
import org.apache.log4j.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.Date;

public class TestSpringController implements Controller{

    public static int count = 0;

    private String testMessage;

    /** Logger for this class and subclasses */
    protected final Logger logger = Logger.getLogger(getClass());

    public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        logger.info("TestController - returning hello view");

        String id = testMessage + " : " + new Date().toString() + " Visit Number: " + ++count;

        return new ModelAndView("index");
    }


    public void setTestMessage(String testMessage) {
        this.testMessage = testMessage;
    }
}
