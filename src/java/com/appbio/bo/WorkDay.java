package com.appbio.bo;

import org.joda.time.DateTime;
import org.joda.time.LocalDate;

public class WorkDay implements Comparable {

    private Integer id;
    private Integer eventId;
    private LocalDate date;
    private DateTime openTime;
    private DateTime closeTime;

    public WorkDay() {
    }

    public WorkDay(LocalDate date, DateTime openTime, DateTime closeTime) {
        this.date = date;
        this.openTime = openTime;
        this.closeTime = closeTime;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getEventId() {
        return eventId;
    }

    public void setEventId(Integer eventId) {
        this.eventId = eventId;
    }

    public LocalDate getDate() {
        return date;
    }

    public DateTime getOpenTime() {
        return openTime;
    }

    public DateTime getCloseTime() {
        return closeTime;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public void setOpenTime(DateTime openTime) {
        this.openTime = openTime;
    }

    public void setCloseTime(DateTime closeTime) {
        this.closeTime = closeTime;
    }

    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        WorkDay workDay = (WorkDay) o;

        if (!date.equals(workDay.date)) return false;

        return true;
    }

    public int hashCode() {
        return date.hashCode();
    }

    public int compareTo(Object o) {
        WorkDay obj2Compare = (WorkDay) o;
        return this.date.compareTo(obj2Compare.date);
    }
}
