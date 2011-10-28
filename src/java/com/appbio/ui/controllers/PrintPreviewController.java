package com.appbio.ui.controllers;

import com.appbio.bo.CatalogPage;
import com.appbio.ui.commands.ProductCatalogCommand;
import org.springframework.validation.BindException;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class PrintPreviewController extends ProductCatalogController {

    protected ModelAndView handle(HttpServletRequest request, HttpServletResponse response, Object cmd, BindException errors) throws Exception {
        ProductCatalogCommand command = (ProductCatalogCommand) cmd;
        long rootCatalogNumber = command.getCatalogNumber();

        CatalogPage catalogPage = new CatalogPage(getRootProduct(rootCatalogNumber), getProductsList(rootCatalogNumber), null, null, null);
        return new ModelAndView("printPreview", "catalogPage", catalogPage);
    }

}
