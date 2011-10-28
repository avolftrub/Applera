package com.appbio.ui.controllers;

import org.springframework.validation.BindException;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractCommandController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.appbio.ui.commands.ProductCatalogCommand;
import com.appbio.bo.ProductItem;
import com.appbio.services.ProductFinder;

public class ProductHeaderController extends AbstractCommandController {
    private ProductFinder productFinder;

    public ProductHeaderController() {
        setCommandClass(ProductCatalogCommand.class);
    }

    public ProductFinder getProductFinder() {
        return productFinder;
    }

    public void setProductFinder(ProductFinder productFinder) {
        this.productFinder = productFinder;
    }

    protected ModelAndView handle(HttpServletRequest request, HttpServletResponse response, Object cmd, BindException errors) throws Exception {
        ProductCatalogCommand command = (ProductCatalogCommand) cmd;

        final long category = command.getParentId();
        ProductItem parentProduct = productFinder.findByCatalogNumber(category);
        return new ModelAndView("productCatalogHeader", "parent", parentProduct);
    }
}
