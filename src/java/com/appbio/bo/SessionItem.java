package com.appbio.bo;

import org.joda.time.DateTime;

public class SessionItem {
    private Integer userId;
    private Long sessionId;
    private DateTime lastAccess;
    private String ipAddress;

    public SessionItem() {
    }

    public SessionItem(Integer userId, Long sessionId, DateTime lastAccess, String ipAddress) {
        this.userId = userId;
        this.sessionId = sessionId;
        this.lastAccess = lastAccess;
        this.ipAddress = ipAddress;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Long getSessionId() {
        return sessionId;
    }

    public void setSessionId(Long sessionId) {
        this.sessionId = sessionId;
    }

    public DateTime getLastAccess() {
        return lastAccess;
    }

    public void setLastAccess(DateTime lastAccess) {
        this.lastAccess = lastAccess;
    }

    public String getIpAddress() {
        return ipAddress;
    }

    public void setIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
    }
}
