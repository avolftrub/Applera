package com.appbio.bo;

import java.util.List;

public class ApplicationPage {
    private Application parentApplication;
    private List<Application> productsList;
    private List<Application> topLevelList;

    public ApplicationPage(Application parentProduct, List<Application> productsList, List<Application> topLevelList) {
        this.parentApplication = parentProduct;
        this.productsList = productsList;
        this.topLevelList = topLevelList;
    }

    public Application getParentApplication() {
        return parentApplication;
    }

    public List<Application> getProductsList() {
        return productsList;
    }

    public List<Application> getTopLevelList() {
        return topLevelList;
    }

    public List<Application> getFirstListPart() {
        int middle = productsList.size() / 2;
        return productsList.subList(0, middle);
    }

    public List<Application> getSecondListPart() {
        int middle = productsList.size() / 2;
        return productsList.subList(middle, productsList.size());
    }

}
