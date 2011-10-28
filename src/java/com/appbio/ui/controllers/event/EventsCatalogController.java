package com.appbio.ui.controllers.event;

import com.appbio.bo.Event;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Order;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

public class EventsCatalogController extends AbstractController {

    private HibernateTemplate portalTemplate;

    public HibernateTemplate getPortalTemplate() {
        return portalTemplate;
    }

    public void setPortalTemplate(HibernateTemplate portalTemplate) {
        this.portalTemplate = portalTemplate;
    }

    protected ModelAndView handleRequestInternal(HttpServletRequest request, HttpServletResponse response) throws Exception {
        if (request.getRequestURI().contains("new_")) {
            return new ModelAndView("events_new", "events", getEventsList()); 
        } else {
            return new ModelAndView("events", "events", getEventsList());
        }
    }

    protected List<Event> getEventsList() {
        return portalTemplate.executeFind(new HibernateCallback() {
            public Object doInHibernate(Session session) throws HibernateException {
                Criteria eventsSearchCriteria = session.createCriteria(Event.class);
                eventsSearchCriteria.addOrder(Order.asc("startDate"));
                return eventsSearchCriteria.list();
            }
        });
    }
}
