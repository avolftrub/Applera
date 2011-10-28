package com.appbio.ui.validator;

import com.appbio.bo.Message;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
import org.springframework.validation.ValidationUtils;

import java.util.regex.Pattern;
import java.util.regex.Matcher;

/**
 * Validates email message
 */
public class MessageValidator implements Validator {
    public boolean supports(Class clazz) {
        return clazz.equals(Message.class);
    }

    public void validate(Object target, Errors errors) {
        Message message = (Message) target;
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "name", "event.register.error.name.required");
        validateEmail(message.getEmail(), errors);
        validateOrganizerEmail(message.getOrganizerEmail(), errors);
    }

    private void validateEmail(String email, Errors errors) {
        ValidationUtils.rejectIfEmpty(errors, "email", "errors.email.required");
        if (!isEmailValid(email)) {
            errors.reject("errors.email.invalid");
        }
    }

    private void validateOrganizerEmail(String email, Errors errors) {
        if (email == null || email.trim().length() == 0 || !isEmailValid(email)) {
            errors.reject("event.register.error.organizer.email.invalid");
        }
    }

    private boolean isEmailValid(String email) {
        Pattern p = Pattern.compile(UserValidator.EMAIL_REGEXP, Pattern.CASE_INSENSITIVE);
        Matcher m = p.matcher(email);
        return m.matches();
    }
}
