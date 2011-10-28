package com.appbio.services;

import com.appbio.bo.User;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Expression;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.HibernateTemplate;

import java.sql.SQLException;
import java.util.List;

public class UserFinder {
    private HibernateTemplate portalTemplate;


    public HibernateTemplate getPortalTemplate() {
        return portalTemplate;
    }

    public void setPortalTemplate(HibernateTemplate portalTemplate) {
        this.portalTemplate = portalTemplate;
    }
    
    public User findById(int id) {
        return (User) portalTemplate.get(User.class, id);
    }

    public User findByEmail(final String email) {
        return (User) portalTemplate.execute(
                new HibernateCallback() {
                    public Object doInHibernate(Session session) throws HibernateException {
                        return session.createCriteria(User.class).add(Expression.eq("email", email)).uniqueResult();
                    }
                });
    }

    public List<User> findUsers(final String email, final String password) {
        return portalTemplate.executeFind(
                new HibernateCallback() {
                    public Object doInHibernate(Session session) throws HibernateException {
                        return session
                                .createCriteria(User.class)
                                .add(Expression.eq("email", email))
                                .add(Expression.eq("password", password)).list();
                    }
                });
    }

    /**
     * @return Finds all users except GUEST user which is a fake user from the business logic, so it can't be found, managed and so on.
     */
    public List<User> findAllUsers() {
        return portalTemplate.executeFind(new HibernateCallback() {
            public Object doInHibernate(Session session) throws HibernateException, SQLException {
                return session.createCriteria(User.class).add(Restrictions.ne("id", 1)).addOrder(Order.asc("lastName")).list();
            }
        });
    }
}
