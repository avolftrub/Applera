package com.appbio.ui.controllers;

import com.appbio.bo.ProductItem;
import com.appbio.services.ProductFinder;
import org.springframework.validation.Errors;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AddProductController extends AbstractEntityModificationController {

    private ProductFinder productFinder;

    public ProductFinder getProductFinder() {
        return productFinder;
    }

    public void setProductFinder(ProductFinder productFinder) {
        this.productFinder = productFinder;
    }

    protected Map referenceData(HttpServletRequest request, Object command, Errors errors) throws Exception {
        String parentProductId = request.getParameter("parentProduct");
        String catalogNumber = request.getParameter("catalogNumber");

        ProductItem parentProduct = productFinder.findByCatalogNumber(Long.parseLong(parentProductId));
        ProductItem productItem = new ProductItem();

        if (catalogNumber == null) { //adding new product
            productItem.setNewEntity(true);
        } else { //editing existing product
            long catalogNumberInt = Long.parseLong(catalogNumber);
            productItem = productFinder.findByCatalogNumber(catalogNumberInt);
        }
        productItem.setParentId(parentProduct.getCatalogNumber());
        productItem.setParentName(parentProduct.getProductName());

        Map<String, ProductItem> result = new HashMap<String, ProductItem>();
        result.put("productItem", productItem);
        return result;
    }

    protected ModelAndView onSubmit(Object command) throws Exception {
        ProductItem obj2Store = (ProductItem) command;
        if (productFinder.findByCatalogNumber(obj2Store.getCatalogNumber()) == null) {
            getEntityService().addEntity(obj2Store);
        }

        if (obj2Store.getOldId() != null && (!obj2Store.getCatalogNumber().equals(obj2Store.getOldId()))) {
            ProductItem oldProduct = productFinder.findByCatalogNumber(obj2Store.getOldId());
            List<ProductItem> subProducts = productFinder.getSubProducts(oldProduct);
            for (ProductItem nextSubProduct : subProducts) {
                nextSubProduct.setParentId(obj2Store.getCatalogNumber());
                getEntityService().updateEntity(nextSubProduct);
            }
            getEntityService().deleteEntity(oldProduct);
        } else {
            getEntityService().updateEntity(obj2Store);
        }
        long parentId = obj2Store.getParentId();
        return new ModelAndView(new RedirectView("products.do?catalogNumber=" + parentId));
    }
}
