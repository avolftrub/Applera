package com.appbio.ui.controllers;

import com.appbio.bo.ProductItem;
import com.appbio.bo.CatalogPage;
import com.appbio.services.ProductFinder;
import com.appbio.services.ApplicationFinder;
import com.appbio.ui.commands.ProductCatalogCommand;
import org.springframework.validation.BindException;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractCommandController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Collections;
import java.util.List;
import java.util.ArrayList;

public class ProductCatalogController extends AbstractCommandController {

    private ProductFinder productFinder;
    private ApplicationFinder applicationFinder;

    public ProductCatalogController() {
        setCommandClass(ProductCatalogCommand.class);
    }

    public ProductFinder getProductFinder() {
        return productFinder;
    }

    public void setProductFinder(ProductFinder productFinder) {
        this.productFinder = productFinder;
    }

    public ApplicationFinder getApplicationFinder() {
        return applicationFinder;
    }

    public void setApplicationFinder(ApplicationFinder applicationFinder) {
        this.applicationFinder = applicationFinder;
    }

    protected ModelAndView handle(HttpServletRequest request, HttpServletResponse response, Object cmd, BindException errors) throws Exception {
        ProductCatalogCommand command = (ProductCatalogCommand) cmd;
        long rootCatalogNumber = command.getCatalogNumber();
        CatalogPage catalogPage = new CatalogPage(getRootProduct(rootCatalogNumber), getProductsList(rootCatalogNumber), 
                getCatalogMenu(rootCatalogNumber), getBreadCrumbsList(rootCatalogNumber), applicationFinder.getTopLevelApplications());

        if (request.getRequestURI().contains("new_")) {
            return new ModelAndView("productsList_new", "catalogPage", catalogPage);
        } else {
            return new ModelAndView("productsList", "catalogPage", catalogPage);
        }
    }

    protected ProductItem getRootProduct(long rootCatalogNumber) {
        return productFinder.findByCatalogNumber(rootCatalogNumber);
    }

    protected List<ProductItem> getProductsList(long rootCatalogNumber) {
        List<ProductItem> productsList = productFinder.findByParent(rootCatalogNumber);
        for (ProductItem nextProduct : productsList) {
            final long nextCatalogNumber = nextProduct.getCatalogNumber();
            List subproductsList = productFinder.findByParent(nextCatalogNumber);
            Collections.sort(subproductsList);
            nextProduct.setSubProducts(subproductsList);
        }
        Collections.sort(productsList);
        return productsList;
    }

    private List<ProductItem> getCatalogMenu(long catalogNumber) {
        if (catalogNumber == 0) { //we are on the top of the catalog. Menu doesn't not shown for this cases
            return null;
        }
        ProductItem rootProduct = productFinder.findByCatalogNumber(catalogNumber);
        List productsChain = new ArrayList();

        do {
            productsChain.add(rootProduct);
            long parentId = rootProduct.getParentId();
            rootProduct = productFinder.findByCatalogNumber(parentId);
        } while (rootProduct.getCatalogNumber() != 0);

        rootProduct = (ProductItem) productsChain.get(productsChain.size()-1);

        List<ProductItem> topProducts = productFinder.findByParent(0);
        for (ProductItem nextProduct : topProducts) {
            if (nextProduct.equals(rootProduct)) {
                List<ProductItem> subProducts = productFinder.findByParent(nextProduct.getCatalogNumber());
                Collections.sort(subProducts);
                nextProduct.setSubProducts(subProducts);
            }
        }
        Collections.sort(topProducts);
        return topProducts;
    }

    private List<ProductItem> getBreadCrumbsList(Long leafCatalogNumber) {
        List productsChain = new ArrayList();
        List idsChain = new ArrayList();
        do {
            ProductItem nextProduct = productFinder.findByCatalogNumber(leafCatalogNumber);
            idsChain.add(nextProduct.getCatalogNumber());
            leafCatalogNumber = nextProduct.getParentId();
        } while (leafCatalogNumber != null);

        for (int i=idsChain.size() -1; i >= 0; i--) {
            productsChain.add(productFinder.findByCatalogNumber((Long) idsChain.get(i)));
        }
        return productsChain;
    }
}