package com.appbio.ui.commands;

public class ProductCatalogCommand {
    private long parentId;
    private long productId;
    private long catalogNumber = 0;

    public long getParentId() {
        return parentId;
    }

    public void setParentId(long parentId) {
        this.parentId = parentId;
    }

    public long getProductId() {
        return productId;
    }

    public void setProductId(long productId) {
        this.productId = productId;
    }

    public long getCatalogNumber() {
        return catalogNumber;
    }

    public void setCatalogNumber(long catalogNumber) {
        this.catalogNumber = catalogNumber;
    }
}
