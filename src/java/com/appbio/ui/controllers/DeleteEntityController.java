package com.appbio.ui.controllers;

import com.appbio.bo.EditableEntity;
import com.appbio.bo.Event;
import com.appbio.bo.ProductItem;
import com.appbio.bo.User;
import com.appbio.services.EntityService;
import com.appbio.ui.session.UserSessionFilter;
import com.appbio.utils.HttpUtil;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLEncoder;

public class DeleteEntityController extends AbstractController implements SecurityAware {

    private EntityService entityService;

    public EntityService getEntityService() {
        return entityService;
    }

    public void setEntityService(EntityService entityService) {
        this.entityService = entityService;
    }

    public final boolean isAutentificated(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        Long sessionId = (Long) request.getSession().getAttribute(UserSessionFilter.USER_SESSION_ATTRIBUTE_NAME);
        return !UserSessionFilter.GUEST_SESSION_ID.equals(sessionId);
    }

    protected ModelAndView handleRequestInternal(HttpServletRequest request, HttpServletResponse response) throws Exception {
        boolean loggedin = isAutentificated(request, response);
        if (!loggedin) {
            return new ModelAndView(new RedirectView(LOGIN_URL + "?" + HttpUtil.SAVED_REQUEST_URL + "=" + URLEncoder.encode(HttpUtil.getOriginalURL(request), "UTF-8")));
        } else {
            EditableEntity ee = prepareEntity(request);
            if (ee != null) {
                getEntityService().deleteEntity(ee);
            }
            String backURL = request.getParameter("back");
            if (backURL == null || backURL.trim().length() == 0) {
                backURL="index.do";
            }
            return new ModelAndView(new RedirectView(backURL));
        }
    }

    private EditableEntity prepareEntity (HttpServletRequest request) {
        String type = request.getParameter("type");
        EditableEntity entity2delete = null;
        if ("user".equalsIgnoreCase(type)) {
            int id = extractId(request, "id");
            if (id != -1) {
                entity2delete = new User();
                ((User)entity2delete).setId(id);
            }
        } else if ("event".equalsIgnoreCase(type)) {
            int id = extractId(request, "id");
            if (id != -1) {
                entity2delete = new Event();
                ((Event)entity2delete).setId(id);
            }
        } else if ("product".equalsIgnoreCase(type)) {
            int id = extractId(request, "catalogNumber");
            if (id != -1) {
                entity2delete = new ProductItem();
                ((ProductItem)entity2delete).setCatalogNumber((long)id);
            }
        }
        return entity2delete;

    }

    private int extractId(HttpServletRequest request, String identifier) {
        try {
            String idStr = request.getParameter(identifier);
            if (idStr != null && idStr.trim().length() > 0) {
                return Integer.parseInt(idStr);
            } else {
                return -1;
            }
        } catch (NullPointerException e) {
            return  -1;
        }
    }
}
