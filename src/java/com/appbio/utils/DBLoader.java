package com.appbio.utils;

import com.appbio.bo.ProductItem;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;


public class DBLoader {
    public static void main(String[] args) throws IOException {
        List catalogList = readFile("c:\\ss1.csv");
        System.out.println("Size: " + catalogList.size());
        SessionFactory sessionFactory = new Configuration().configure("hibernate.cfg.xml").buildSessionFactory();
        Session session = sessionFactory.openSession();
        Transaction tr = session.beginTransaction();
        try {
            for (int i=0; i<catalogList.size(); i++) {
                session.save(catalogList.get(i));
                ProductItem nextProduct = (ProductItem) catalogList.get(i);
            }
        } catch (Exception e) {
            tr.rollback();
        } finally {
            tr.commit();
        }


    }

    private static List<ProductItem> readFile(String filename) throws IOException {
        List catalogList = new ArrayList();
        FileInputStream fis = new FileInputStream(filename);
        int b = fis.read();
        char c;
        List<Byte> buffer = new ArrayList();
        while (b != -1) {

            c = (char)b;
            switch (c) {
                case '\r':
                    break;
                case '\n':
                    byte buf[] = new byte[buffer.size()];
                    for (int j=0;j<buffer.size();j++) {
                        buf[j] = buffer.get(j);
                    }
                    StringTokenizer st = new StringTokenizer(new String(buf,"UTF-8"), ";");

                    ProductItem productItem = new ProductItem();
                    productItem.setProductName(st.nextToken());
                    productItem.setCatalogNumber(Long.parseLong(st.nextToken()));
/*
                    if (productItem.getCatalogNumber() == 603466) {
                        System.out.println("Control: " + new String(buf, "UTF-8"));
                        System.out.println("Name: " + productItem.getProductName());
                    }
*/

                    String parentId = st.nextToken();
                    if ("null".equalsIgnoreCase(parentId)) {
                        productItem.setParentId(null);
                    } else {
                        productItem.setParentId(Long.parseLong(parentId));
                    }
                    if (st.hasMoreTokens()) {
                        productItem.setGroup(true);
                    }
                    catalogList.add(productItem);
                    buffer.clear();
                    break;
                default:
                    buffer.add((byte)b);
            }
            b = fis.read();
        }
        return catalogList;
    }
}
