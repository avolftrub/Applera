package com.appbio.ui.controllers;

import com.appbio.ui.session.UserSessionFilter;
import com.appbio.utils.HttpUtil;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;
import org.springframework.web.servlet.mvc.SimpleFormController;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLEncoder;

public abstract class SecurityAwareController extends SimpleFormController implements SecurityAware {

    public final boolean isAutentificated(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        Long sessionId = (Long) request.getSession().getAttribute(UserSessionFilter.USER_SESSION_ATTRIBUTE_NAME);
        return !UserSessionFilter.GUEST_SESSION_ID.equals(sessionId);
    }

    protected ModelAndView handleRequestInternal(HttpServletRequest request, HttpServletResponse response) throws Exception {
        boolean loggedin = isAutentificated(request, response);
        if (!loggedin) {
            String backURL;
            if ("POST".equals(request.getMethod())) {
                backURL = request.getHeader("referer");
            } else {
                backURL = HttpUtil.getOriginalURL(request);
            }
            return new ModelAndView(new RedirectView(LOGIN_URL + "?" + HttpUtil.SAVED_REQUEST_URL + "=" + URLEncoder.encode(backURL, "UTF-8")));
        } else {
            return super.handleRequestInternal(request, response);
        }
    }
}
