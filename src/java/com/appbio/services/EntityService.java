package com.appbio.services;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.orm.hibernate3.HibernateTemplate;

public class EntityService {
    private HibernateTemplate portalTemplate;

    public HibernateTemplate getPortalTemplate() {
        return portalTemplate;
    }

    public void setPortalTemplate(HibernateTemplate portalTemplate) {
        this.portalTemplate = portalTemplate;
    }

    public void addEntity(Object o) {
        Session session = portalTemplate.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();
        session.save(o);
        tx.commit();
    }

    public void updateEntity(Object o) {
        Session session = portalTemplate.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();
        session.update(o);
        tx.commit();
    }

    public void deleteEntity (Object o) {
        Session session = portalTemplate.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();
        session.delete(o);
        tx.commit();
    }
}
