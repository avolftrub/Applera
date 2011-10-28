package com.appbio.ui.controllers.event;

import com.appbio.bo.Event;
import com.appbio.bo.WorkDay;
import com.appbio.ui.controllers.AbstractEntityModificationController;
import org.joda.time.DateTime;
import org.joda.time.Days;
import org.joda.time.LocalDate;
import org.springframework.validation.BindException;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Iterator;
import java.util.List;

public class WorkDaysModificationController extends AbstractEntityModificationController {

    protected ModelAndView onSubmit(HttpServletRequest request, HttpServletResponse response, Object command, BindException errors) throws Exception {
        Event event = (Event) command;
        LocalDate cutDate = event.getStartDate();
        LocalDate endDate = event.getEndDate();
        List<WorkDay> workedDays = event.getWorkDays();
        for (Iterator it = workedDays.iterator(); it.hasNext();) {
            WorkDay nextDay = (WorkDay) it.next();
            if (nextDay.getDate().compareTo(event.getStartDate()) < 0 || nextDay.getDate().compareTo(event.getEndDate()) > 0) {
                it.remove();
                getEntityService().deleteEntity(nextDay);
            }
        }
        do {
            if (!containsDay(cutDate, workedDays)) {
                event.addWorkDay(cutDate, new DateTime(1970, 1, 1, 9, 0, 0, 0, Event.DEFAULT_TIMEZONE), new DateTime(1970, 1, 1, 18, 0, 0, 0, Event.DEFAULT_TIMEZONE));
            }
            cutDate = cutDate.plus(Days.ONE);
        } while (cutDate.compareTo(endDate) <= 0);

        return new ModelAndView(getSuccessView(), "eventEntity", event);
    }

    private boolean containsDay(LocalDate day, List<WorkDay> workedDays) {
        for (WorkDay nextDay: workedDays) {
            if (nextDay.getDate().equals(day)) {
                return true;
            }
        }
        return false;
    }
}
