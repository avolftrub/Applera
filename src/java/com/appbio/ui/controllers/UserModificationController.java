package com.appbio.ui.controllers;

import com.appbio.bo.User;
import com.appbio.services.UserFinder;
import com.appbio.utils.StringUtils;
import org.springframework.validation.Errors;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

public class UserModificationController extends AbstractEntityModificationController{
    protected UserFinder userFinder;

    public UserFinder getUserFinder() {
        return userFinder;
    }

    public void setUserFinder(UserFinder userFinder) {
        this.userFinder = userFinder;
    }

    protected Map referenceData(HttpServletRequest request, Object command, Errors errors) throws Exception {
        String userId = request.getParameter("id");
        User user = null;
        if (userId != null && userId.trim().length() > 0) {
            user = userFinder.findById(Integer.parseInt(userId));
        }

        if (user == null) {
            user = new User();
            user.setNewEntity(true);
        }

        Map<String, User> result = new HashMap<String, User>();
        result.put("userEntity", user);
        return result;
    }

    protected ModelAndView onSubmit(Object command) throws Exception {
        User user = (User) command;
        if (user.isNewEntity()) {
            user.setPassword(StringUtils.cryptValue(user.getPassword()));
        } else {
            User dbUser = userFinder.findById(user.getId());
            if (!user.getPassword().equals(dbUser.getPassword())) { //password was changed on edit screen
                user.setPassword(StringUtils.cryptValue(user.getPassword()));
            }
        }
        return super.onSubmit(command);
    }
}