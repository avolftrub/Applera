package com.appbio.ui.validator;

import com.appbio.bo.User;
import com.appbio.services.UserFinder;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class UserValidator implements Validator {

    public static final String EMAIL_REGEXP = "^[A-Za-z0-9]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*((\\.[A-Za-z]{2,}){1}$)";
    private UserFinder userFinder;

    public UserFinder getUserFinder() {
        return userFinder;
    }

    public void setUserFinder(UserFinder userFinder) {
        this.userFinder = userFinder;
    }

    public boolean supports(Class clazz) {
        return clazz.equals(User.class);
    }

    public void validate(Object target, Errors errors) {
        User user = (User) target;
        validateEmail(user.getEmail(), errors);
        ValidationUtils.rejectIfEmpty(errors, "password", "errors.password.required");
        if (!user.getPassword().equals(user.getPassword1())) {
            errors.rejectValue("password", "errors.password.mismatch");
        }

        if (errors.getErrorCount() == 0) {
            User duplicate = userFinder.findByEmail(user.getEmail().trim());
            if (duplicate != null && !duplicate.getId().equals(user.getId())) {
                errors.reject("errors.email.duplicate");
            }
        }
    }

    private void validateEmail(String email, Errors errors) {
        ValidationUtils.rejectIfEmpty(errors, "email", "errors.email.required");
        Pattern p = Pattern.compile(EMAIL_REGEXP);
        Matcher m = p.matcher(email.trim());
        if (!m.matches()) {
            errors.reject("errors.email.invalid");
        }
    }
}

