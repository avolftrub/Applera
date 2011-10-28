package com.appbio.ui.session;

import com.appbio.bo.SessionItem;
import com.appbio.services.SessionService;
import org.apache.log4j.Logger;
import org.joda.time.DateTime;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class UserSessionFilter implements Filter {

    public static final String USER_SESSION_ATTRIBUTE_NAME = "userSession";
    public static final Long GUEST_SESSION_ID = -1l;
    private static long SESSION_EXPIRATION_TIME = 1800000;

    private static final Logger LOG = Logger.getLogger(UserSessionFilter.class);

    private SessionService sessionService;

    public SessionService getSessionService() {
        return sessionService;
    }

    public void setSessionService(SessionService sessionService) {
        this.sessionService = sessionService;
    }

    public void destroy() {
    }

    public void init(FilterConfig filterConfig) throws ServletException {
    }

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException, ServletException {
        LOG.debug("UserSessionFilter entered.");

        HttpServletRequest httpRequest = (HttpServletRequest)request;

        HttpSession httpSession = httpRequest.getSession(true);
        httpSession.setMaxInactiveInterval(1800);
        Long sessionId = (Long) httpSession.getAttribute(USER_SESSION_ATTRIBUTE_NAME);
        if (sessionId == null || sessionId == -1) {
            httpSession.setAttribute(USER_SESSION_ATTRIBUTE_NAME, GUEST_SESSION_ID);
        } else {
            SessionItem sessionItem = sessionService.findBySessionId(sessionId);
            if (sessionItem == null) {
                httpSession.setAttribute(USER_SESSION_ATTRIBUTE_NAME, GUEST_SESSION_ID);
            } else if (!sessionItem.getIpAddress().equals(request.getRemoteAddr())) {
                httpSession.setAttribute(USER_SESSION_ATTRIBUTE_NAME, GUEST_SESSION_ID);
            } else {
                long curTime = System.currentTimeMillis();
                if ((curTime - sessionItem.getLastAccess().getMillis()) > SESSION_EXPIRATION_TIME) {
                    httpSession.setAttribute(USER_SESSION_ATTRIBUTE_NAME, GUEST_SESSION_ID);
                    sessionService.deleteEntity(sessionItem);
                } else {
                    sessionItem.setLastAccess(new DateTime(curTime));
                    sessionService.updateEntity(sessionItem);
                }
            }
        }
        filterChain.doFilter(request, response);
        LOG.debug("UserSessionFilter exited.");
    }
}
