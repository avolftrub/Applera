package com.appbio.services;

import com.appbio.bo.Application;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Expression;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.HibernateTemplate;

import java.util.List;
import java.util.Collections;

public class ApplicationFinder {
    private HibernateTemplate portalTemplate;


    public HibernateTemplate getPortalTemplate() {
        return portalTemplate;
    }

    public void setPortalTemplate(HibernateTemplate portalTemplate) {
        this.portalTemplate = portalTemplate;
    }

    public List<Application> findByParent(final Integer parentId) {
        return portalTemplate.executeFind(new HibernateCallback() {
            public Object doInHibernate(Session session) throws HibernateException {
                Criteria applicationSearchCriteria = session.createCriteria(Application.class);
                if (parentId == null) {
                    applicationSearchCriteria.add(Expression.isNull("parentId"));
                } else {
                    applicationSearchCriteria.add(Expression.eq("parentId", parentId));
                }
                return applicationSearchCriteria.list();
            }
        });
    }

    public Application findById(final int id) {
        return (Application) portalTemplate.get(Application.class, id);
    }

    public void storeApplication (Application application) {
        Session session = portalTemplate.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();
        session.save(application);
        tx.commit();
    }


    public void updateApplication(Application application) {
        Session session = portalTemplate.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();
        session.update(application);
        tx.commit();
    }

    public void deleteApplication (Application application) {
        Session session = portalTemplate.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();
        session.delete(application);
        tx.commit();
    }

    public List<Application> getTopLevelApplications() {
        List<Application> result = findByParent(null);
        Collections.sort(result);
        return result;
    }
}
