package com.appbio.ui.session;

/**
 * User credentials. Defined by username (email) and password.
 * Credentials are immutable.
 */
public class Credentials {

    /**
     * User name. For portal we're using email as the username
     */
    private final String username;

    /**
     * Password
     */
    private final String password;


    /**
     * Create credentials object.
     *
     * @param username User logon name
     * @param password User password
     */
    public Credentials( String username, String password ) {
        this.username = username;
        this.password = password;
    }


    /**
     * @return Username (email)
     */
    public String getUsername() {
        return username;
    }


    /**
     * @return Password
     */
    public String getPassword() {
        return password;
    }
}