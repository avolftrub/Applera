package com.appbio.utils;

import com.appbio.bo.Message;
import com.sun.mail.smtp.SMTPTransport;

import javax.mail.Multipart;
import javax.mail.Session;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import java.util.Date;
import java.util.Properties;

public class MailUtils {
    private static final String DEFAULT_SMTP_SERVER = "smtp.appliedbiosystems.ru";

    public static void sendMessage(Message message) throws Exception{
    }
}
