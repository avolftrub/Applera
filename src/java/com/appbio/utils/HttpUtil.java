package com.appbio.utils;

import javax.servlet.http.HttpServletRequest;

public class HttpUtil {

    /**
     * Name of the request attribute holding original context-relative URL
     */
    public static final String SAVED_REQUEST_URL = "originalURL";


    /**
     * Save original request URL in request scope. This is useful for "return-back" pages
     * like login page.
     *
     * @param request Original request
     */
    public static void saveOriginalURL(HttpServletRequest request) {
        request.setAttribute(SAVED_REQUEST_URL, getOriginalURL(request));
    }

    /**
     * Build absolute request URL that can later be used
     * for forwarding.
     *
     * @param request Request to construct URL from
     * @return Context-relative URL for this request
     */
    public static String getOriginalURL(HttpServletRequest request) {
        StringBuffer url = new StringBuffer(request.getContextPath());
        if (request.getServletPath() != null) {
            url.append(request.getServletPath());
        }
        if (request.getPathInfo() != null) {
            url.append(request.getPathInfo());
        }
        if (request.getQueryString() != null) {
            url.append('?').append(request.getQueryString());
        }
        return url.toString();
    }
}

