package com.appbio.ui.validator;

import com.appbio.bo.User;
import com.appbio.services.UserFinder;
import com.appbio.utils.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;
import java.util.List;

/**
 * Validates user's login and password
 */
public class LoginValidator implements Validator {
    public static final Logger LOG = Logger.getLogger(LoginValidator.class);

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
        User user2login = (User) target;
        if (user2login.getEmail() == null || user2login.getEmail().trim().length() == 0) {
            errors.reject("login.error.email.required");
        }

        if (user2login.getPassword() == null || user2login.getPassword().trim().length() == 0) {
            errors.reject("login.error.password.required");
        }

        //proceed only if no validation errors occurred on previous steps
        if (errors.getErrorCount() == 0) {
            try {
                List<User> usersList = userFinder.findUsers(user2login.getEmail(), StringUtils.cryptValue(user2login.getPassword()));
                if (usersList.size() == 0) {
                    errors.reject("login.error.invalid");
                    LOG.error("Invbalid login attempt email:" + user2login.getEmail() + " Password:" + user2login.getPassword());
                }
            } catch (NoSuchAlgorithmException e) {
                throw new RuntimeException("MD5 hashing is not supported", e);
            } catch (UnsupportedEncodingException e) {
                throw new RuntimeException("UTF-8 encoding is not supported", e);
            }
        }
    }
}
