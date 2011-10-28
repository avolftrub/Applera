package com.appbio.ui.controllers.event;

import com.appbio.bo.Event;
import com.appbio.utils.StringUtils;
import com.appbio.ui.controllers.AbstractEntityModificationController;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.validation.Errors;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

public class EventModificationController extends AbstractEntityModificationController {

    private HibernateTemplate portalTemplate;

    public HibernateTemplate getPortalTemplate() {
        return portalTemplate;
    }

    public void setPortalTemplate(HibernateTemplate portalTemplate) {
        this.portalTemplate = portalTemplate;
    }

    protected Map referenceData(HttpServletRequest request, Object command, Errors errors) throws Exception {
        String eventId = request.getParameter("id");
        Event event = null;
        if (eventId != null && eventId.trim().length() > 0) {
            event = findById(Integer.parseInt(eventId));
        }

        if (event == null) {
            event = new Event();
            event.setNewEntity(true);
        }

        Map result = new HashMap();
        result.put("eventEntity", event);
        return result;
    }

    private Event findById(final Integer id) {
        return (Event) portalTemplate.execute(new HibernateCallback() {
            public Object doInHibernate(Session session) throws HibernateException {
                return session.get(Event.class, id);
            }
        });
    }
/*
    protected void beforeSubmit(Object command) {
        Event event = (Event) command;
        event.setEventName(StringUtils.escapeQuotes(event.getEventName()));
        event.setDescription(StringUtils.escapeQuotes(event.getDescription()));
        event.setLocation(StringUtils.escapeQuotes(event.getLocation()));
        event.setBooth(StringUtils.escapeQuotes(event.getBooth()));
    }          */

    /*
protected ModelAndView onSubmit(HttpServletRequest request, HttpServletResponse response, Object command, BindException errors) throws Exception {
Session session = portalTemplate.getSessionFactory().openSession();
Transaction tx = session.beginTransaction();
session.saveOrUpdate(command);
tx.commit();
response.sendRedirect("events.do");
return null;
}                                */
}
