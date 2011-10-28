package com.appbio.bo;

public class EditableEntity {
    private boolean newEntity;

    private String back;

    public boolean isNewEntity() {
        return newEntity;
    }

    public void setNewEntity(boolean newEntity) {
        this.newEntity = newEntity;
    }

    public String getBack() {
        return back;
    }

    public void setBack(String back) {
        this.back = back;
    }
}
