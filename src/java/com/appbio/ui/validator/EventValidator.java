package com.appbio.ui.validator;

import com.appbio.bo.Event;
import org.joda.time.LocalDate;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class EventValidator implements Validator {

    public boolean supports(Class clazz) {
        return clazz.equals(Event.class);
    }

    public void validate(Object target, Errors errors) {
        Event event = (Event) target;
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "eventName", "event.error.name.required");
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "location", "event.error.location.required");
        validateDates(event, errors);
        validateEmail(event.getOrganizerEmail(), errors);
    }

    private void validateDates(Event event, Errors errors) {
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "startDate", "event.error.startDate.required");
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "endDate", "event.error.endDate.required");
        LocalDate now = new LocalDate();
        if (now.compareTo(event.getStartDate()) > 0) {
            errors.reject("event.error.startDate.past");
        }
        if (now.compareTo(event.getEndDate()) > 0) {
            errors.reject("event.error.endDate.past");
        }
        if (event.getStartDate().compareTo(event.getEndDate()) > 0) {
            errors.reject("event.error.endDate.before");
        }
    }

    private void validateEmail(String email, Errors errors) {
        ValidationUtils.rejectIfEmpty(errors, "organizerEmail", "errors.email.required");
        if (!isEmailValid(email)) {
            errors.reject("errors.email.invalid");
        }
    }

    private boolean isEmailValid(String email) {
        Pattern p = Pattern.compile(UserValidator.EMAIL_REGEXP, Pattern.CASE_INSENSITIVE);
        Matcher m = p.matcher(email);
        return m.matches();
    }
}
