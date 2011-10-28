package com.appbio.bo;

import java.util.HashMap;

public class User extends EditableEntity{


    private static HashMap rolesMap = new HashMap();
    static {
        rolesMap.put(1, "ADMIN");
        rolesMap.put(2, "STAFF");
        rolesMap.put(3, "GUEST");
    }

    private Integer id;
    private String email;
    private String password;
    private String password1;
    private Integer roleId;
    private String firstName;
    private String lastName;
    private String originalURL;

    /**
     * Guest oid
     */
    public static final Integer GUEST_ID = 1;

    /**
     * Guest
     */
    public static final User GUEST = createGuestUser();

    private static User createGuestUser() {
        User guest = new User();
        guest.setId(1);
        guest.setEmail("void");
        guest.setPassword("void");
        guest.setRoleId(3);
        guest.setFirstName("");
        guest.setLastName("Guest");
        return guest;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPassword1() {
        return password1;
    }

    public void setPassword1(String password1) {
        this.password1 = password1;
    }

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int hashCode() {
        if (id == null) {
            return 0;
        } else {
            return id.hashCode();
        }
    }

    public boolean equals(Object o) {
        if (!(o instanceof User)) {
            return false;
        }
        User obj = (User) o;
        return this.id.equals(obj.id);
    }

    public boolean inRole(String checkedRole) {
        return rolesMap.get(roleId).equals(checkedRole);
    }

    public String getOriginalURL() {
        return originalURL;
    }

    public void setOriginalURL(String originalURL) {
        this.originalURL = originalURL;
    }
}
