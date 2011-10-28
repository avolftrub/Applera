package com.appbio.ui.controllers;

import com.appbio.bo.User;
import com.appbio.services.UserFinder;
import org.springframework.validation.Errors;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class UserManagementController extends SecurityAwareController {

    private UserFinder userFinder;

    public UserFinder getUserFinder() {
        return userFinder;
    }

    public void setUserFinder(UserFinder userFinder) {
        this.userFinder = userFinder;
    }


    protected Map referenceData(HttpServletRequest request, Object command, Errors errors) throws Exception {
        Map<String, List<User>> result = new HashMap<String, List<User>>();
        result.put("usersList", userFinder.findAllUsers());
        return result;
    }
}
