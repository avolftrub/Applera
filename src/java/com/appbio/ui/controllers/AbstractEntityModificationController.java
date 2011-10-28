package com.appbio.ui.controllers;

import com.appbio.bo.EditableEntity;
import com.appbio.services.EntityService;
import com.appbio.ui.session.UserSessionFilter;
import com.appbio.utils.HttpUtil;
import org.springframework.web.bind.ServletRequestDataBinder;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.SimpleFormController;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public abstract class AbstractEntityModificationController extends SecurityAwareController {

    private EntityService entityService;


    public EntityService getEntityService() {
        return entityService;
    }

    public void setEntityService(EntityService entityService) {
        this.entityService = entityService;
    }


    protected ModelAndView onSubmit(Object command) throws Exception {
        EditableEntity object2Store = (EditableEntity) command;
        if (object2Store.isNewEntity()) {
            entityService.addEntity(object2Store);
        } else {
            entityService.updateEntity(object2Store);
        }

        return new ModelAndView(new RedirectView(getSuccessView()));
    }


    protected ServletRequestDataBinder createBinder(HttpServletRequest request, Object command)
        throws Exception {

        ServletRequestDataBinder binder = new UTFRequestDataBinder(command, getCommandName());
        prepareBinder(binder);
        initBinder(request, binder);
        return binder;
    }
}
