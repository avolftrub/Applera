package com.appbio.ui.tags;

import com.appbio.ui.session.UserSessionFilter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.jsp.tagext.BodyTagSupport;

public class UserLoggedInTag extends BodyTagSupport {

    /**
     * Returns EVAL_BODY_INCLUDE if user logged in, otherwise SKIP_BODY.
     *
     * @return EVAL_BODY_INCLUDE or SKIP_BODY
     */
    public int doStartTag() {
        HttpServletRequest request = (HttpServletRequest)pageContext.getRequest();
        Long sessionId = (Long)request.getSession().getAttribute(UserSessionFilter.USER_SESSION_ATTRIBUTE_NAME);
        if (sessionId == null || sessionId == -1) {
            return SKIP_BODY;
        } else {
            return EVAL_BODY_INCLUDE;
        }
    }
}
