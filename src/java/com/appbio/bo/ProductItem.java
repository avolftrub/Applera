package com.appbio.bo;

import java.util.List;

public class ProductItem extends EditableEntity implements Comparable {

    private Long oldId;
    private Long parentId;
    private String parentName;
    private String productName;
    //todo refactor this to int
    private Long catalogNumber;
    private boolean group;
    private String description;
    private List subProducts;


    public Long getParentId() {
        return parentId;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }

    public String getParentName() {
        return parentName;
    }

    public void setParentName(String parentName) {
        this.parentName = parentName;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Long getCatalogNumber() {
        return catalogNumber;
    }

    public void setCatalogNumber(Long catalogNumber) {
        this.catalogNumber = catalogNumber;
    }


    public Long getOldId() {
        return oldId;
    }

    public void setOldId(Long oldId) {
        this.oldId = oldId;
    }

    public boolean isGroup() {
        return group;
    }

    public void setGroup(boolean group) {
        this.group = group;
    }


    public List<ProductItem> getSubProducts() {
        return subProducts;
    }

    public void setSubProducts(List subProducts) {
        this.subProducts = subProducts;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isValidDescription() {
        return description != null && description.trim().length() > 0;
    }


    public int hashCode() {
        if (catalogNumber == null) {
            return 0;
        } else {
            return catalogNumber.hashCode();
        }
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof ProductItem)) {
            return false;
        }

        ProductItem o = (ProductItem) obj;
        if (this.catalogNumber == null) {
            return o.catalogNumber == null;
        }
        return this.catalogNumber.equals(o.catalogNumber);
    }

    public int compareTo(Object o) {
        ProductItem obj2Compare = (ProductItem) o;
        return this.productName.compareTo(obj2Compare.productName);
    }
}
