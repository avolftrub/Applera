package com.appbio.ui.validator;

import com.appbio.bo.User;
import com.appbio.services.UserFinder;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class EmailValidator implements Validator {
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

        if (errors.getErrorCount() == 0) {
            User dbUser = userFinder.findByEmail(user.getEmail().trim());
            if (dbUser == null) {
                errors.reject("errors.email.notexist");
            }
        }
    }

    private void validateEmail(String email, Errors errors) {
        ValidationUtils.rejectIfEmpty(errors, "email", "errors.email.required");
        Pattern p = Pattern.compile(UserValidator.EMAIL_REGEXP);
        Matcher m = p.matcher(email.trim());
        if (!m.matches()) {
            errors.reject("errors.email.invalid");
        }
    }
}
