package com.appbio.ui.controllers;

import com.appbio.bo.SessionItem;
import com.appbio.bo.User;
import com.appbio.services.SessionService;
import com.appbio.services.UserFinder;
import com.appbio.ui.session.UserSessionFilter;
import com.appbio.utils.HttpUtil;
import org.joda.time.DateTime;
import org.springframework.validation.BindException;
import org.springframework.validation.Errors;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.SimpleFormController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

public class LoginController extends SimpleFormController {
    private UserFinder userFinder;

    private SessionService sessionService;

    public LoginController() {
        setCommandClass(User.class);
    }


    public UserFinder getUserFinder() {
        return userFinder;
    }


    public void setUserFinder(UserFinder userFinder) {
        this.userFinder = userFinder;
    }

    public SessionService getSessionService() {
        return sessionService;
    }

    public void setSessionService(SessionService sessionService) {
        this.sessionService = sessionService;
    }

    protected Map referenceData(HttpServletRequest request, Object command, Errors errors) throws Exception {
        Map<String, String> result = new HashMap<String, String>();
        String originalURL = request.getParameter(HttpUtil.SAVED_REQUEST_URL);
        if (originalURL != null && originalURL.trim().length() > 0) {
            result.put("originalURL", originalURL);
        }
        return result;
    }


    protected ModelAndView onSubmit(HttpServletRequest request, HttpServletResponse response, Object command, BindException errors) throws Exception {
        User user2login = (User) command;
        User loggedUser = userFinder.findByEmail(user2login.getEmail());
        long curTime = System.currentTimeMillis();
        long sessionId = loggedUser.hashCode() ^ curTime;
        while (sessionService.findBySessionId(sessionId) != null) {
            sessionId++;
        }
        SessionItem si = new SessionItem(loggedUser.getId(), sessionId , new DateTime(curTime), request.getRemoteAddr());
        sessionService.cleanPrevious(loggedUser.getId(), request.getRemoteAddr());
        sessionService.addEntity(si);
        request.getSession(true).setAttribute(UserSessionFilter.USER_SESSION_ATTRIBUTE_NAME, si.getSessionId());

        if (user2login.getOriginalURL() == null || user2login.getOriginalURL().trim().length() == 0) {
            // original URL missing going to the home page
            response.sendRedirect("index.do");
        } else {
            response.sendRedirect(user2login.getOriginalURL());
        }

        /*
        User loggedUser = userFinder.findUsers(user2login.getEmail(), StringUtils.cryptValue(user2login.getPassword())).iterator().next();
        request.getSession(true).setAttribute(UserSessionFilter.USER_SESSION_ATTRIBUTE_NAME, loggedUser);

        if (user2login.getOriginalURL() == null || user2login.getOriginalURL().trim().length() == 0) {
            // original URL missing going to the home page
            response.sendRedirect("index.do");
        } else {
            response.sendRedirect(user2login.getOriginalURL());
        }
        */
        return null;
    }
}
