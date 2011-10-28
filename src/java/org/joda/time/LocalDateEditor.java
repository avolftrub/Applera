package org.joda.time;

import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;

import java.beans.PropertyEditorSupport;
import java.util.TimeZone;

public class LocalDateEditor extends PropertyEditorSupport {
    public void setAsText(String text) throws IllegalArgumentException {
        if (text == null || text.equals("")) {
            setValue(new LocalDate());
        } else {
            DateTimeFormatter df = DateTimeFormat.forPattern("d/M/yyyy");
            LocalDate ld = new LocalDate(df.parseDateTime(text).getMillis());
            setValue(ld);
        }
    }
}
