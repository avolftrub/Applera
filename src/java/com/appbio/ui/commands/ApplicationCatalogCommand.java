package com.appbio.ui.commands;

/**
 * Created by IntelliJ IDEA.
 * User: avolftrub
 * Date: Nov 4, 2007
 * Time: 5:23:21 PM
 * To change this template use File | Settings | File Templates.
 */
public class ApplicationCatalogCommand {
    private int id;
    private int parentId;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getParentId() {
        return parentId;
    }

    public void setParentId(int parentId) {
        this.parentId = parentId;
    }
}
