package org.joda.time;

import org.springframework.beans.MutablePropertyValues;
import org.springframework.validation.DataBinder;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * Created by IntelliJ IDEA.
 * User: Tema
 * Date: 28.12.2007
 * Time: 2:11:45
 * To change this template use File | Settings | File Templates.
 */
public class TestBinder {
    public static void main(String[] args) {
        MutablePropertyValues values = new MutablePropertyValues();
        values.addPropertyValue("id", "7839");
        values.addPropertyValue("name", "KING");
        values.addPropertyValue("departments[0].id", "10");
        values.addPropertyValue("departments[0].name", "ACCOUNTING");
        values.addPropertyValue("departments[0].location", "NEW YORK");
        values.addPropertyValue("departments[1].id", "20");
        values.addPropertyValue("departments[1].name", "RESEARCH");
        values.addPropertyValue("departments[1].location", "DALLAS");

        Employee employee = new Employee();
        employee.setDepartments(new ArrayList<Department>());
        employee.getDepartments().add(new Department());
        employee.getDepartments().add(new Department());
        DataBinder binder = new DataBinder(employee);
        binder.bind(values);

        for (Department nextDepartment : employee.getDepartments()) {
            System.out.println("Next department: " + nextDepartment.getId() + " Name: " + nextDepartment.getName() + " Location: " +nextDepartment.getLocation() );
        }
    }

    public static class Employee {
        private int id;
        private String name;
        private List<Department> departments;

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public List<Department> getDepartments() {
            return departments;
        }

        public void setDepartments(List<Department> departments) {
            this.departments = departments;
        }
    }

    public static class Department {
        private int id;
        private String name;
        private String location;

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getLocation() {
            return location;
        }

        public void setLocation(String location) {
            this.location = location;
        }
    }
}
