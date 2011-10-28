package com.appbio.test;

import java.math.BigDecimal;
import java.math.MathContext;
import java.util.*;

/**
 * Created by IntelliJ IDEA.
 * User: Tema
 * Date: 11.04.2007
 * Time: 11:14:48
 * To change this template use File | Settings | File Templates.
 */
public class Calculator {
    public static void main(String[] args) {
        BigDecimal test = new BigDecimal(0);
        BigDecimal test1 = new BigDecimal("0.1");
        System.out.println("1: " + test);
        System.out.println("2: " + test1);
        BigDecimal totalSum = new BigDecimal("21265");
        BigDecimal firstPayment = totalSum.multiply(new BigDecimal("0.4"));
        BigDecimal creditLength = new BigDecimal("36");
        BigDecimal percentRate = new BigDecimal("0.049");
        BigDecimal percentRateReal = new BigDecimal("0.09");
        BigDecimal monthPercent = percentRateReal.divide(new BigDecimal("12"), new MathContext(10));

        System.out.println("First payment: " + firstPayment);
        BigDecimal creditSum = totalSum.subtract(firstPayment);//.subtract(new BigDecimal("806.475"));
        System.out.println("Total credit sum: " + creditSum);
        BigDecimal monthPayment = creditSum.divide(creditLength, new MathContext(10));
        System.out.println("Month Payment: " + monthPayment);
        Map percents = new TreeMap();
        for (int i=1; i<=creditLength.intValue(); i++) {

            BigDecimal percentPayment = creditSum.multiply(monthPercent, new MathContext(10));
            percents.put(new Integer(i), percentPayment);
            creditSum = creditSum.subtract(monthPayment);
        }

        creditSum = totalSum.subtract(firstPayment);
        BigDecimal percentPayment = new BigDecimal("0");
        for (Iterator it = percents.keySet().iterator(); it.hasNext();) {
            Integer nextMonth = (Integer) it.next();
            System.out.println("Month: " + nextMonth + " Have to pay: " + creditSum + " PercentValue: " + ((BigDecimal)percents.get(nextMonth)).doubleValue());
            creditSum = creditSum.subtract(monthPayment);
            percentPayment = percentPayment.add((BigDecimal) percents.get(nextMonth));
        }
        System.out.println("Total percents: " + percentPayment);
    }
}

