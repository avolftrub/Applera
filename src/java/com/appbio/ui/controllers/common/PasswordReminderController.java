package com.appbio.ui.controllers.common;

import org.springframework.web.servlet.mvc.SimpleFormController;
import org.springframework.web.servlet.ModelAndView;
import com.appbio.bo.User;
import com.appbio.utils.StringUtils;
import com.appbio.services.UserFinder;
import com.appbio.services.EntityService;
import com.sun.mail.smtp.SMTPTransport;

import javax.mail.Session;
import javax.mail.Multipart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMultipart;
import java.util.Properties;
import java.util.Date;

public class PasswordReminderController extends SimpleFormController {
    private static final String DEFAULT_SMTP_SERVER = "smtp.appliedbiosystems.ru";
    private UserFinder userFinder;
    private EntityService entityService;

    public UserFinder getUserFinder() {
        return userFinder;
    }

    public void setUserFinder(UserFinder userFinder) {
        this.userFinder = userFinder;
    }

    public EntityService getEntityService() {
        return entityService;
    }

    public void setEntityService(EntityService entityService) {
        this.entityService = entityService;
    }

    protected ModelAndView onSubmit(Object command) throws Exception {
        User user = (User) command;
        String newPassword = StringUtils.generatePassword(10);

        Properties prop = new Properties();
        prop.put("mail.smtp.host", DEFAULT_SMTP_SERVER);
        prop.put("mail.smtp.auth", "true");
        Session session = Session.getInstance(prop);

        MimeMessage msg = new MimeMessage(session);
        msg.setFrom(new InternetAddress("admin@appliedbiosystems.ru"));
        InternetAddress[] address = {new InternetAddress(user.getEmail())};
        msg.setRecipients(javax.mail.Message.RecipientType.TO, address);
        msg.setSubject("Новый пароль для доступа к сайту appliedbiosystems.ru");

        // create and fill the first message part
        MimeBodyPart mbp1 = new MimeBodyPart();
        mbp1.setHeader("Content-Transfer-Encoding", "utf8");

        mbp1.setText("Ваш новый пароль для доступа к сайту appliedbiosystems.ru" + "\r\n" + newPassword);

        // create the Multipart and add its parts to it
        Multipart mp = new MimeMultipart();
        mp.addBodyPart(mbp1);

        // add the Multipart to the message
        msg.setContent(mp);

        // set the Date: header
        msg.setSentDate(new Date());
        msg.saveChanges();

        SMTPTransport t = (SMTPTransport) session.getTransport("smtp");
//        t.connect("mail.nln.ru", "bro2", "r33UqpCA");
        t.connect("smtp.appliedbiosystems.ru", "m20071461_1", "SWxZqg5t");
        t.sendMessage(msg, msg.getAllRecipients());
        
        User user2Update = userFinder.findByEmail(user.getEmail());
        user2Update.setPassword(StringUtils.cryptValue(newPassword));
        entityService.updateEntity(user2Update);

        return new ModelAndView(getSuccessView());
    }
}
