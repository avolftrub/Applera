<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<div id="contentLeftColumn">
    &nbsp;
</div>
<div id="contentRightColumnsWrapper">
    <div id="pageContentMiddle">
        <form action="addProduct.do" method="POST">
            <input type="hidden" name="oldId" value="${productItem.catalogNumber}"/>
            <table cellspacing="5" class="eventFont">
                <tr>
                    <td><spring:message code="add.product.name"/></td>
                    <td><input name="productName" type="text" value="${productItem.productName}"/></td>
                </tr>
                <tr>
                    <td><spring:message code="add.product.description"/></td>
                    <td><input name="description" type="memo" value="${productItem.description}"/></td>
                </tr>
                <tr>
                    <td><spring:message code="add.product.category"/></td>
                    <td><input name="category" type="text" disabled="true" value="${productItem.parentName}"/></td>
                </tr>
                <tr>
                    <td><spring:message code="add.product.isGroup"/></td>
                    <td>

                        <c:choose>
                            <c:when test="${productItem.group}">
                                <input name="group" type="checkbox" checked/>
                            </c:when>
                            <c:otherwise>
                                <input name="group" type="checkbox"/>
                            </c:otherwise>
                        </c:choose>
                    </td>
                </tr>
                <tr>
                    <td><spring:message code="add.product.catalog.number"/></td>
                    <td><input name="catalogNumber" type="text" value="${productItem.catalogNumber}"/></td>
                </tr>
                <tr>
                    <td colspan="2">&nbsp;</td>
                </tr>
                <tr>
                    <input type="hidden" name="newEntity" value="${productItem.newEntity}"/>
                    <td><input name="submit" type="submit" value='<spring:message code='button.save'/>'/></td>
                    <td><input name="cancel" type="button" onclick="javascript:document.location='products.do?catalogNumber=${productItem.parentId}'" value='<spring:message code='button.cancel'/>'/></td>
                </tr>
            </table>
            <input name="parentId" type="hidden" value="${productItem.parentId}"/>
        </form>
    </div>
</div>
