package com.appbio.bo;

import org.apache.commons.collections.FactoryUtils;
import org.apache.commons.collections.list.LazyList;
import org.joda.time.DateTime;
import org.joda.time.DateTimeZone;
import org.joda.time.LocalDate;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.TimeZone;

public class Event extends EditableEntity {
    public static final DateTimeZone DEFAULT_TIMEZONE = DateTimeZone.forTimeZone(TimeZone.getTimeZone("GMT+3"));
    private int id;
    private String eventName;
    private String eventUrl;
    private String organizerEmail;
    private String description;
    private String location;
    private String booth;
    private LocalDate startDate;
    private LocalDate endDate;
    private String agendaUrl;
    public List workDays = LazyList.decorate(new ArrayList(), FactoryUtils.instantiateFactory(WorkDay.class));

    private static List<DateTime> hoursOfWorking = new ArrayList<DateTime>();
    static {
        /*
        hoursOfWorking.add(new DateTime(1970, 1, 1, 0, 0, 0, 0, DEFAULT_TIMEZONE));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 1, 0, 0, 0, DEFAULT_TIMEZONE));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 2, 0, 0, 0, DEFAULT_TIMEZONE));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 3, 0, 0, 0, DEFAULT_TIMEZONE));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 4, 0, 0, 0, DEFAULT_TIMEZONE));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 5, 0, 0, 0, DEFAULT_TIMEZONE));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 6, 0, 0, 0, DEFAULT_TIMEZONE));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 7, 0, 0, 0, DEFAULT_TIMEZONE));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 8, 0, 0, 0, DEFAULT_TIMEZONE));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 9, 0, 0, 0, DEFAULT_TIMEZONE));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 10, 0, 0, 0, DEFAULT_TIMEZONE));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 11, 0, 0, 0, DEFAULT_TIMEZONE));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 12, 0, 0, 0, DEFAULT_TIMEZONE));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 13, 0, 0, 0, DEFAULT_TIMEZONE));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 14, 0, 0, 0, DEFAULT_TIMEZONE));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 15, 0, 0, 0, DEFAULT_TIMEZONE));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 16, 0, 0, 0, DEFAULT_TIMEZONE));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 17, 0, 0, 0, DEFAULT_TIMEZONE));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 18, 0, 0, 0, DEFAULT_TIMEZONE));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 19, 0, 0, 0, DEFAULT_TIMEZONE));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 20, 0, 0, 0, DEFAULT_TIMEZONE));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 21, 0, 0, 0, DEFAULT_TIMEZONE));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 22, 0, 0, 0, DEFAULT_TIMEZONE));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 23, 0, 0, 0, DEFAULT_TIMEZONE));
                                              */
//        hoursOfWorking.add(new DateTime(1970, 1, 1, 0, 0, 0, 0));
//        hoursOfWorking.add(new DateTime(1970, 1, 1, 0, 30, 0, 0));
//        hoursOfWorking.add(new DateTime(1970, 1, 1, 1, 0, 0, 0));
//        hoursOfWorking.add(new DateTime(1970, 1, 1, 1, 30, 0, 0));
//        hoursOfWorking.add(new DateTime(1970, 1, 1, 2, 0, 0, 0));
//        hoursOfWorking.add(new DateTime(1970, 1, 1, 2, 30, 0, 0));
//        hoursOfWorking.add(new DateTime(1970, 1, 1, 3, 0, 0, 0));
//        hoursOfWorking.add(new DateTime(1970, 1, 1, 3, 30, 0, 0));
//        hoursOfWorking.add(new DateTime(1970, 1, 1, 4, 0, 0, 0));
//        hoursOfWorking.add(new DateTime(1970, 1, 1, 4, 30, 0, 0));
//        hoursOfWorking.add(new DateTime(1970, 1, 1, 5, 0, 0, 0));
//        hoursOfWorking.add(new DateTime(1970, 1, 1, 5, 30, 0, 0));
//        hoursOfWorking.add(new DateTime(1970, 1, 1, 6, 0, 0, 0));
//        hoursOfWorking.add(new DateTime(1970, 1, 1, 6, 30, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 7, 0, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 7, 30, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 8, 0, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 8, 30, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 9, 0, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 9, 30, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 10, 0, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 10, 30, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 11, 0, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 11, 30, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 12, 0, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 12, 30, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 13, 0, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 13, 30, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 14, 0, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 14, 30, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 15, 0, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 15, 30, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 16, 0, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 16, 30, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 17, 0, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 17, 30, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 18, 0, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 18, 30, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 19, 0, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 19, 30, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 20, 0, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 20, 30, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 21, 0, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 21, 30, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 22, 0, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 22, 30, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 23, 0, 0, 0));
        hoursOfWorking.add(new DateTime(1970, 1, 1, 23, 30, 0, 0));
    }

    public Event() {
        getWorkedHours();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getEventUrl() {
        return eventUrl;
    }

    public void setEventUrl(String eventUrl) {
        if (eventUrl != null && eventUrl.trim().length() > 0) {
            if (!eventUrl.startsWith("http://")) {
                this.eventUrl = "http://" + eventUrl.trim();
            } else {
                this.eventUrl = eventUrl.trim();
            }

        } else {
            this.eventUrl = null;
        }
    }

    public String getOrganizerEmail() {
        return organizerEmail;
    }

    public void setOrganizerEmail(String organizerEmail) {
        this.organizerEmail = organizerEmail;
    }

    public String getDescription() {
        return description;
    }

    public String getFormattedDescription() {
        return description.replace("\r\n", "<br>");
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getBooth() {
        return booth;
    }

    public void setBooth(String booth) {
        this.booth = booth;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public String getAgendaUrl() {
        return agendaUrl;
    }

    public void setAgendaUrl(String agendaUrl) {
        if (agendaUrl != null && agendaUrl.trim().length() > 0) {
            this.agendaUrl = agendaUrl.trim();
        } else {
            this.agendaUrl = null;
        }
    }

    public String getFormattedStartDate() {
        DateTimeFormatter df = DateTimeFormat.forPattern("MMMM yyyy");
        return df.print(getStartDate());
    }

    public String getFormattedPeriod() {
        DateTimeFormatter df = DateTimeFormat.forPattern("MMMM d");
        if (getStartDate().monthOfYear().get() == getEndDate().monthOfYear().get()){
            if (getStartDate().getDayOfMonth() == getEndDate().getDayOfMonth()) {
                return df.print(getStartDate());
            } else {
                return df.print(getStartDate()) + "-" + getEndDate().dayOfMonth().get();
            }
        } else {
            return df.print(getStartDate()) + " - " + df.print(getEndDate());
        }
    }

    public List getWorkedHours() {
        List result = new ArrayList();
        DateTimeFormatter df = DateTimeFormat.forPattern("MMMM d");
        DateTimeFormatter tf = DateTimeFormat.forPattern("HH:mm a");
        for (WorkDay nextDay: getWorkDays()) {
            result.add(df.print(nextDay.getDate()) + ": " + tf.print(nextDay.getOpenTime()) + " - " + tf.print(nextDay.getCloseTime()));
        }
        return result;
    }

    public List<WorkDay> getWorkDays() {
        if (workDays == null) {
            workDays = new ArrayList<WorkDay>();
        }
        return workDays;
    }

    public void setWorkDays(List workDays) {
        this.workDays = workDays;
    }

    public void addWorkDay(LocalDate day, DateTime openTime, DateTime closeTime) {
        if (workDays == null) {
            workDays = new ArrayList<WorkDay>();
        }
        workDays.add(new WorkDay(day, openTime, closeTime));
        Collections.sort(workDays);
    }

    public List<DateTime> getHoursOfWorking() {
        return hoursOfWorking;
    }
}
