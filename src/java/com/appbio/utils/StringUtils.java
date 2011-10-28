package com.appbio.utils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.io.UnsupportedEncodingException;

/**
 * Created by IntelliJ IDEA.
 * User: Tema
 * Date: 09.02.2008
 * Time: 21:34:55
 * To change this template use File | Settings | File Templates.
 */
public class StringUtils {

    private static final String[] PWD_SYMBOLS = new String[] {
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "!", "@", "#", "$", "%", "&", "*", "_", "+"
            };

    /**
	 * Escape quotes and double quotes so that they can be part of e.g. an alert call.
	 *
	 * @param input
	 *            input
	 * @return Escaped version of the input
	 */
	public static String escapeQuotes(final String input)
	{
		String s = input;
		if (s != null)
		{
            s.replace("'", "%27");
            s.replace("\"", "&quot;");
        }
		return s;
	}

    public static String cryptValue(String originalValue) throws NoSuchAlgorithmException, UnsupportedEncodingException {
        byte[] value = originalValue.getBytes("UTF-8");
        MessageDigest md = MessageDigest.getInstance("MD5");
        md.update(value);
        byte[] hash = md.digest();
        StringBuffer hexString = new StringBuffer();
        for (byte aHash : hash) {
            if ((0xff & aHash) < 0x10) {
                hexString.append("0" + Integer.toHexString((0xFF & aHash)));
            } else {
                hexString.append(Integer.toHexString(0xFF & aHash));
            }
        }
        return hexString.toString();
    }

    public static String generatePassword(int length) {
        int abcLength = PWD_SYMBOLS.length;
        StringBuffer password = new StringBuffer();
        for(int i=0; i<length; i++) {
            double val = Math.random();
            password.append(PWD_SYMBOLS[(int)Math.round(Math.random() * (abcLength-1))]);
        }
        return password.toString();
    }
}
