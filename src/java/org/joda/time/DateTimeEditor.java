package org.joda.time;

import com.appbio.bo.Event;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;

import java.beans.PropertyEditorSupport;
import java.util.TimeZone;

public class DateTimeEditor extends PropertyEditorSupport  {
    public void setAsText(String text) throws IllegalArgumentException {
        if (text == null || text.equals("")) {
            setValue(new LocalDate());
        } else {
            DateTimeFormatter df = DateTimeFormat.forPattern("HH:mm");
            DateTime dt = new DateTime(df.parseDateTime(text).getMillis());
            setValue(dt);
        }
    }
}
