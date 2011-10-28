package com.appbio.ui.controllers;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;
import java.io.IOException;

public interface SecurityAware {
    static final String LOGIN_URL = "login.do";
    boolean isAutentificated(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException;
}
