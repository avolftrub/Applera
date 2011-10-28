package com.appbio.ui.tags;

import com.appbio.bo.User;
import com.appbio.services.SessionService;
import com.appbio.ui.session.UserSessionFilter;
import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.BodyTagSupport;
import java.util.StringTokenizer;

public class UserInRoleTag extends BodyTagSupport {

    public static final String ROLES_DELIMETER = ",";
    /**
     * Role name
     */
    private String role = null;


    /**
     * Release state.
     *
     * @see javax.servlet.jsp.tagext.Tag#release
     */
    public void release() {
        super.release();
        role = null;
    }


    /**
     * Return role name
     *
     * @return role name
     */
    public String getRole() {
        return role;
    }


    /**
     * Set role name
     *
     * @param role Role name
     */
    public void setRole(String role) {
        this.role = role;
    }


    /**
     * Returns EVAL_BODY_INCLUDE if user is in role, otherwise SKIP_BODY.
     *
     * @return EVAL_BODY_INCLUDE or SKIP_BODY
     *
     * @throws javax.servlet.jsp.JspException if an error occurred while processing this tag
     */
    public int doStartTag() throws JspException {
        if (role == null) {
            throw new JspException("Role attribute undefined in UserInRole tag.");
        }
        HttpServletRequest request = (HttpServletRequest)pageContext.getRequest();
        Long sessionId = (Long) request.getSession(true).getAttribute(UserSessionFilter.USER_SESSION_ATTRIBUTE_NAME);

        User user = User.GUEST;
        if (sessionId != null && !UserSessionFilter.GUEST_SESSION_ID.equals(sessionId)) {
            ApplicationContext ctx = WebApplicationContextUtils.getWebApplicationContext(pageContext.getServletContext());
            SessionService sessionService = (SessionService) ctx.getBean("sessionServiceBean");
            user = sessionService.findUserBySessionId(sessionId);
        }
        

        StringTokenizer st = new StringTokenizer(role, ROLES_DELIMETER);
        for (;st.hasMoreTokens();) {
            String nextRole = st.nextToken();
            if (user.inRole(nextRole)) {
                return EVAL_BODY_INCLUDE;
            }
        }
        
        return SKIP_BODY;
    }
}
