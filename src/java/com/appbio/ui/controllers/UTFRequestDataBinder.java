package com.appbio.ui.controllers;

import org.springframework.beans.MutablePropertyValues;
import org.springframework.web.bind.ServletRequestDataBinder;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.util.WebUtils;

import javax.servlet.ServletRequest;
import java.io.UnsupportedEncodingException;
import java.util.Iterator;
import java.util.Map;

/**
 * Binds request parameters and provides correct convertion to UTF-8
 */
public class UTFRequestDataBinder extends ServletRequestDataBinder {

    public UTFRequestDataBinder(Object command, String commandName) {
        super(command, commandName);
    }

    public void bind(ServletRequest request) {
        Map pvs = WebUtils.getParametersStartingWith(request, null);
        String requestEncoding = detectCharecterEncoding(request);
        for (Iterator it = pvs.keySet().iterator(); it.hasNext();) {
            Object nextKey = it.next();
            Object nextValue = pvs.get(nextKey);
            if (nextValue instanceof String) {
                try {
                    String correctValue = new String(((String)nextValue).getBytes(requestEncoding), "UTF-8");
                    pvs.put(nextKey, correctValue);
                } catch (UnsupportedEncodingException e) {
                    throw new IllegalArgumentException(e);
                }
            }
        }
        MutablePropertyValues mpvs = new MutablePropertyValues(pvs);
        if (request instanceof MultipartHttpServletRequest) {
            MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
            bindMultipartFiles(multipartRequest.getFileMap(), mpvs);
        }
        doBind(mpvs);
    }

    private String detectCharecterEncoding(ServletRequest request) {
        String encoding = request.getCharacterEncoding();
        if (encoding == null || encoding.trim().length() == 0) {
            encoding = WebUtils.DEFAULT_CHARACTER_ENCODING;
        }
        return encoding;
    }
}
