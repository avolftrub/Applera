package com.appbio.services;

import com.appbio.bo.SessionItem;
import com.appbio.bo.User;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Property;
import org.springframework.orm.hibernate3.HibernateCallback;

import java.sql.SQLException;

public class SessionService extends EntityService {
    
    public SessionItem findBySessionId(long id) {
        return (SessionItem) getPortalTemplate().get(SessionItem.class, id);
    }

    public User findUserBySessionId(final Long sessionId) {
        return (User) getPortalTemplate().execute(
                new HibernateCallback() {
                    public Object doInHibernate(Session session) throws HibernateException {
                        DetachedCriteria dc = DetachedCriteria.forClass(SessionItem.class)
                                .setProjection(Property.forName("userId"))
                                .add(Property.forName("sessionId").eq(sessionId));

                        return session.createCriteria(User.class, "user")
                                .add(Property.forName("id").eq(dc))
                                .uniqueResult();
                    }
                });
    }

    public void cleanPrevious(int userId, String ipAddress) {
        Session session = getPortalTemplate().getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();
        session.createSQLQuery("delete from user_session where user_id='" + userId + "' and ip_address='" + ipAddress + "'").executeUpdate();
        tx.commit();
    }
}
