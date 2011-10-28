package com.appbio.ui.controllers;

import com.appbio.bo.Application;
import com.appbio.bo.ApplicationPage;
import com.appbio.services.ApplicationFinder;
import com.appbio.ui.commands.ApplicationCatalogCommand;
import org.springframework.validation.BindException;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractCommandController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Collections;
import java.util.List;

public class ApplicationCatalogController extends AbstractCommandController {

    private ApplicationFinder applicationFinder;

    public ApplicationCatalogController() {
        setCommandClass(ApplicationCatalogCommand.class);
    }


    public ApplicationFinder getApplicationFinder() {
        return applicationFinder;
    }

    public void setApplicationFinder(ApplicationFinder applicationFinder) {
        this.applicationFinder = applicationFinder;
    }


    protected ModelAndView handle(HttpServletRequest request, HttpServletResponse response, Object cmd, BindException errors) throws Exception {
        ApplicationCatalogCommand command = (ApplicationCatalogCommand) cmd;
        int selectedId = command.getId();
        Application rootApplication = applicationFinder.findById(selectedId);
        List<Application> applicationsList = applicationFinder.findByParent(selectedId);
        Collections.sort(applicationsList);

        ApplicationPage applicationPage = new ApplicationPage(rootApplication, applicationsList, applicationFinder.getTopLevelApplications());
        return new ModelAndView("applicationsList", "applicationPage", applicationPage);
    }


}
