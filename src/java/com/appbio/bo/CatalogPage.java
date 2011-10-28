package com.appbio.bo;

import java.util.List;

public class CatalogPage {
    private ProductItem parentProduct;
    private List<ProductItem> productsList;
    private List<ProductItem> catalogMenu;
    private List<ProductItem> breadCrumbsList;
    private List<Application> topLevelApplications;

    public CatalogPage(ProductItem parentProduct, List<ProductItem> productsList, List<ProductItem> catalogMenu, List<ProductItem> breadCrumbsList, List<Application> topLevelApplications) {
        this.parentProduct = parentProduct;
        this.productsList = productsList;
        this.catalogMenu = catalogMenu;
        this.breadCrumbsList = breadCrumbsList;
        this.topLevelApplications = topLevelApplications;
    }

    public ProductItem getParentProduct() {
        return parentProduct;
    }

    public List<ProductItem> getProductsList() {
        return productsList;
    }

    public List<ProductItem> getFirstListPart() {
        int middle = productsList.size() / 2;
        if (productsList.size() % 2 == 1 ) {
            middle++;
        }
        return productsList.subList(0, middle);
    }

    public List<ProductItem> getSecondListPart() {
        int middle = productsList.size() / 2;
        if (productsList.size() % 2 == 1 ) {
            middle++;
        }
        return productsList.subList(middle, productsList.size());
    }

    public List<ProductItem> getCatalogMenu() {
        return catalogMenu;
    }

    public List<ProductItem> getBreadCrumbsList() {
        return breadCrumbsList;
    }

    public int getListSize() {
        return productsList.size();
    }

    public int getBreadCrumbsDepth() {
        return breadCrumbsList.size();
    }

    public List<Application> getTopLevelApplications() {
        return topLevelApplications;
    }
}
