package com.appbio.ui.controllers.event;

import com.appbio.bo.Message;
import com.appbio.bo.Event;
import com.appbio.ui.controllers.UTFRequestDataBinder;
import com.sun.mail.smtp.SMTPTransport;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;
import org.springframework.web.servlet.mvc.SimpleFormController;
import org.springframework.web.bind.ServletRequestDataBinder;
import org.springframework.validation.Errors;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.hibernate.HibernateException;

import javax.mail.Multipart;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.Properties;
import java.util.Map;
import java.util.HashMap;

public class EventSubscriberController extends SimpleFormController {
    public static final String DEFAULT_SMTP_SERVER = "smtp.appliedbiosystems.ru";

    private HibernateTemplate portalTemplate;

    public HibernateTemplate getPortalTemplate() {
        return portalTemplate;
    }

    public void setPortalTemplate(HibernateTemplate portalTemplate) {
        this.portalTemplate = portalTemplate;
    }


    protected Map referenceData(HttpServletRequest request, Object command, Errors errors) throws Exception {
        String eventId = request.getParameter("id");
        Event event = null;
        if (eventId != null && eventId.trim().length() > 0) {
            event = findById(Integer.parseInt(eventId));
        }

        Map result = new HashMap();
        result.put("eventEntity", event);
        return result;
    }

    private Event findById(final Integer id) {
        return (Event) portalTemplate.execute(new HibernateCallback() {
            public Object doInHibernate(org.hibernate.Session session) throws HibernateException {
                return session.get(Event.class, id);
            }
        });
    }


    protected ModelAndView onSubmit(Object command) throws Exception {
        Message message = (Message) command;

        Properties prop = new Properties();
        prop.put("mail.smtp.host", DEFAULT_SMTP_SERVER);
        prop.put("mail.smtp.auth", "true");
        Session session = Session.getInstance(prop);

        MimeMessage msg = new MimeMessage(session);
        msg.setFrom(new InternetAddress(message.getEmail()));
        InternetAddress[] address = {new InternetAddress(message.getOrganizerEmail())};
        msg.setRecipients(javax.mail.Message.RecipientType.TO, address);
        msg.setSubject("Заявка на участие в мероприятии \"" + message.getEventName() + "\"");

        // create and fill the first message part
        MimeBodyPart mbp1 = new MimeBodyPart();
        mbp1.setHeader("Content-Transfer-Encoding", "utf8");

        mbp1.setText("Отправитель: " + message.getName() + "\r\n" + "Должность: " + message.getPosition() + "\r\n" +
                "Учреждение/организация: " + message.getCompany() + "\r\n" + "Контактный номер телефона: " +
                message.getPhoneNumber() + "\r\n" + "\r\n" + message.getText());

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
        t.connect("smtp.appliedbiosystems.ru", "m20071461_2", "jMYeckQ4");
        t.sendMessage(msg, msg.getAllRecipients());

        return new ModelAndView(getSuccessView());
    }

    public static void main(String[] args) throws Exception {
        EventSubscriberController ctrl = new EventSubscriberController();
        Message m = new Message();
        m.setEmail("putin@mail.ru");
        m.setName("VVP");
        m.setText("Nasha Russia!");
        ctrl.onSubmit(m);
    }

    protected ServletRequestDataBinder createBinder(HttpServletRequest request, Object command)
        throws Exception {

        ServletRequestDataBinder binder = new UTFRequestDataBinder(command, getCommandName());
        prepareBinder(binder);
        initBinder(request, binder);
        return binder;
    }
}
