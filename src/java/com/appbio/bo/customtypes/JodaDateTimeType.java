package com.appbio.bo.customtypes;

import org.apache.log4j.Logger;
import org.hibernate.HibernateException;
import org.hibernate.usertype.ParameterizedType;
import org.hibernate.usertype.UserType;
import org.joda.time.LocalDate;
import org.joda.time.LocalDateTime;

import java.io.Serializable;
import java.sql.*;
import java.util.Calendar;
import java.util.Locale;
import java.util.Properties;
import java.util.TimeZone;

public abstract class JodaDateTimeType implements UserType, ParameterizedType {

    public static final Logger LOG = Logger.getLogger(JodaDateTimeType.class);

    /**
     * JDBC timezone
     */
//    public static final TimeZone TZ_GMT = TimeZone.getTimeZone("GMT");
//    public static final TimeZone TZ_RUSSIA = TimeZone.getTimeZone("GMT+3");
    public static final TimeZone TZ_RUSSIA = TimeZone.getTimeZone("GMT");

    /**
     * Hibernate types list
     */
    public static final int[] SQL_TYPES = {Types.TIMESTAMP};


    /**
     * Get the type codes (from <code>java.sql.Types</code>) of columns mapped by this type.
     */
    public int[] sqlTypes() {
        return SQL_TYPES;
    }


    /**
     * Compare the persistent state of two objects returned by <code>nullSafeGet</code>.
     */
    public boolean equals(Object x, Object y) {
        return (x == null) ? (y == null) : x.equals(y);
    }


    /**
     * Are instances of this type mutable?
     *
     * @return <code>true</code>
     */
    public boolean isMutable() {
        return true;
    }


    /**
     * Get a hashcode for the instance, consistent with persistence "equality".
     *
     * @return Date's hashcode
     */
    public int hashCode(Object x) throws HibernateException {
        return x == null ? 17 : x.hashCode();
    }


    /**
     * Transform the object into its cacheable representation. At the very least this
     * method should perform a deep copy if the type is mutable. That may not be enough
     * for some implementations, however; for example, associations must be cached as
     * identifier values. (optional operation)
     *
     * @param value the object to be cached
     * @return deep copy of value
     */
    public Serializable disassemble(Object value) throws HibernateException {
        return (Serializable) deepCopy(value);
    }


    /**
     * Reconstruct an object from the cacheable representation. At the very least this
     * method should perform a deep copy if the type is mutable. (optional operation)
     *
     * @param cached the object to be cached
     * @param owner  the owner of the cached object
     * @return deep copy of <code>cached</code> parameter
     */
    public Object assemble(Serializable cached, Object owner) throws HibernateException {
        return deepCopy(cached);
    }


    /**
     * During merge, replace the existing (target) value in the entity we are merging to
     * with a new (original) value from the detached entity we are merging. For immutable
     * objects, or null values, it is safe to simply return the first parameter. For
     * mutable objects, it is safe to return a copy of the first parameter. For objects
     * with component values, it might make sense to recursively replace component values.
     *
     * @param original the value from the detached entity being merged
     * @param target   the value in the managed entity
     * @return deep copy of <code>original</code>
     */
    public Object replace(Object original, Object target, Object owner) throws HibernateException {
        return deepCopy(original);
    }


    /**
     * Allows configuring database timezone.
     *
     * @param parameters type parameters
     */
    public void setParameterValues(Properties parameters) {
        // implement later: currently hardcoded GMT is enough
    }


    public static class JodaLocalDateType extends JodaDateTimeType {

        /**
         * Get the class of objects returned by <code>nullSafeGet</code>.
         *
         * @return class of {@link LocalDate}
         */
        public Class returnedClass() {
            return LocalDate.class;
        }


        /**
         * Copy date object as {@link LocalDate}.
         *
         * @param value Source object, assumed to be {@link LocalDate}
         * @return Deep copy of the source object
         */
        public Object deepCopy(Object value) {
            return (value == null) ? null : new LocalDate(value);
        }


        /**
         * Retrieve {@link java.sql.Date} in {@link #TZ_RUSSIA} timezone, then convert to {@link LocalDate}.
         *
         * @param rs    Result set to retrieve data from
         * @param names Column names
         * @param owner Hibernate owner link
         * @return {@link LocalDate} value in the predefined (not default) timezone.
         * @throws java.sql.SQLException can be thrown if fetching fails
         */
        public Object nullSafeGet(ResultSet rs, String[] names, Object owner) throws SQLException {

            Timestamp result = rs.getTimestamp(names[0], Calendar.getInstance(TZ_RUSSIA));
            if (result == null) {
                return null;
            } else {
                return new LocalDate(result);
            }
        }


        /**
         * Set date parameter on the given {@link java.sql.PreparedStatement}.
         *
         * @param st    Prepared statement to be parametrized
         * @param value Date value, assumed to be {@link java.sql.Date}
         * @param index Parameter index
         * @throws java.sql.SQLException can be thrown if parametrization fails
         */
        public void nullSafeSet(PreparedStatement st, Object value, int index) throws SQLException {
            LocalDate ymd = (LocalDate) value;
            if (ymd == null) {
                st.setDate(index, null);
            } else {
                st.setTimestamp(index, new Timestamp(ymd.toDateTimeAtStartOfDay().getMillis()),
                        Calendar.getInstance(TZ_RUSSIA));
            }
        }

    }


    public static class JodaLocalDateTimeType extends JodaDateTimeType {

        /**
         * Get the class of objects returned by <code>nullSafeGet</code>.
         *
         * @return class of {@link LocalDateTime}
         */
        public Class returnedClass() {
            return LocalDateTime.class;
        }


        /**
         * Copy date object as {@link LocalDateTime}.
         *
         * @param value Source object, assumed to be {@link LocalDateTime}
         * @return Deep copy of the source object
         */
        public Object deepCopy(Object value) {
            return (value == null) ? null : new LocalDateTime(value);
        }


        /**
         * Retrieve {@link java.sql.Timestamp} in {@link #TZ_RUSSIA} timezone.
         *
         * @param rs    Result set to retrieve data from
         * @param names Column names
         * @param owner Owning entity
         * @return {@link java.sql.Timestamp} value in the predefined (not default) timezone.
         * @throws java.sql.SQLException can be thrown if fetching fails
         */
        public Object nullSafeGet(ResultSet rs, String[] names, Object owner) throws SQLException {
            assert names.length > 0;
            Timestamp result = rs.getTimestamp(names[0], Calendar.getInstance(TZ_RUSSIA));
            if (result == null) {
                return null;
            } else {
                return new LocalDateTime(result);
            }
        }


        /**
         * Sets date parameter on the given {@link java.sql.PreparedStatement}.
         *
         * @param st    Prepared statement to be parametrized
         * @param value Date value, assumed to be {@link java.sql.Timestamp}
         * @param index Parameter index
         * @throws java.sql.SQLException can be thrown if parametrization fails
         */
        public void nullSafeSet(PreparedStatement st, Object value, int index) throws SQLException {
            LocalDateTime dt = (LocalDateTime) value;
            if (dt == null) {
                st.setTimestamp(index, null);
            } else {
                st.setTimestamp(index, new java.sql.Timestamp(dt.millisOfDay().get()), Calendar.getInstance(Locale.US));
            }
        }
    }
}
