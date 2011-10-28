package com.appbio.test;

import org.joda.time.LocalDate;
import org.joda.time.DateTimeZone;
import org.joda.time.format.DateTimeFormatter;
import org.joda.time.format.DateTimeFormat;

import java.util.TimeZone;

/**
 * Created by IntelliJ IDEA.
 * User: Tema
 * Date: 11.02.2008
 * Time: 2:11:49
 * To change this template use File | Settings | File Templates.
 */
public class TimeTest {
    public static void main(String[] args) {
        LocalDate ld = new LocalDate();
        DateTimeFormatter df = DateTimeFormat.forPattern("d/M/yyyy");
        LocalDate ld1 = new LocalDate(df.parseDateTime("11/11/2007").getMillis(), DateTimeZone.forTimeZone(TimeZone.getTimeZone("GMT+3")));
        LocalDate ld2 = new LocalDate(df.parseDateTime("11/01/2007").getMillis(), DateTimeZone.forTimeZone(TimeZone.getTimeZone("GMT+3")));
        LocalDate ld3 = new LocalDate(df.parseDateTime("11/05/2007").getMillis());//, DateTimeZone.forTimeZone(TimeZone.getTimeZone("GMT+3")));
        System.out.println("END");

    }
}
