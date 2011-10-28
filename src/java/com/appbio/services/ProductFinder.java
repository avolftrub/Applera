package com.appbio.services;

import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.hibernate.Session;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Transaction;
import org.hibernate.criterion.Expression;

import java.util.List;

import com.appbio.bo.ProductItem;

public class ProductFinder {
    private HibernateTemplate portalTemplate;


    public HibernateTemplate getPortalTemplate() {
        return portalTemplate;
    }

    public void setPortalTemplate(HibernateTemplate portalTemplate) {
        this.portalTemplate = portalTemplate;
    }

    public List<ProductItem> findByParent(final long parentCatalogNumber) {
        return portalTemplate.executeFind(new HibernateCallback() {
            public Object doInHibernate(Session session) throws HibernateException {
                Criteria productSearchCriteria = session.createCriteria(ProductItem.class);
                productSearchCriteria.add(Expression.eq("parentId", parentCatalogNumber));
                return productSearchCriteria.list();
            }
        });
    }

    public List<ProductItem> getSubProducts(ProductItem parentProduct) {
        return findByParent(parentProduct.getCatalogNumber());
    }


    public ProductItem findByCatalogNumber(final long catalogNumber) {
        return (ProductItem) portalTemplate.get(ProductItem.class, catalogNumber);
    }

    public void storeProductItem (ProductItem productItem) {
        Session session = portalTemplate.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();
        session.save(productItem);
        tx.commit();
    }


    public void updateProductItem(ProductItem productItem) {
        Session session = portalTemplate.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();
        session.update(productItem);
        tx.commit();
    }

    public void deleteProductItem (ProductItem productItem) {
        Session session = portalTemplate.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();
        session.delete(productItem);
        tx.commit();
    }
}
