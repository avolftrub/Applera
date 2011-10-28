package com.appbio.services;

import org.springframework.orm.hibernate3.LocalSessionFactoryBean;
import org.hibernate.cfg.Configuration;
import org.hibernate.HibernateException;

/**
 * Adds capability to provide classnames instead of physical resource names.
 * Only affects session factory config.
 */
public class HibernateSessionFactoryBean extends LocalSessionFactoryBean {
    /**
     * Persistent classes to be mapped into the session factory.
     */
    private Class[] persistentClasses;


    /**
     * Returns array of all persistent classes.
     *
     * @return Array of persistent classes
     */
    public Class[] getPersistentClasses() {
        return persistentClasses;
    }


    /**
     * Sets array of all persistent classes to be mapped into the session factory.
     * We assume that mapping file (.hbm.xml) is placed in the same directory as a .class file.
     *
     * @param persistentClasses Array of all persistent classes
     */
    public void setPersistentClasses(Class[] persistentClasses) {
        this.persistentClasses = persistentClasses;
    }


    /**
     * Add all {@link #persistentClasses} to the configuration. Hibernate will resolve locations for mapping files
     * automatically, using standard conventions.
     *
     * @param configuration configuration to be post-processed
     *
     * @throws HibernateException       on Hibernate errors
     * @throws IllegalArgumentException if {@link #persistentClasses} is undefined (null)
     */
    protected void postProcessConfiguration(Configuration configuration) throws HibernateException {
        super.postProcessConfiguration(configuration);
        if (persistentClasses == null || persistentClasses.length == 0) {
            throw new IllegalArgumentException("No persistent classes defined for this session factory.");
        }
        for (int i = 0; i < persistentClasses.length; i++) {
            configuration.addClass(persistentClasses[i]);
        }
    }
}
