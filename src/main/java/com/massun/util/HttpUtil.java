package com.massun.util;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 * 获得request中的参数封装成Map
 * @author lgq
 */
public class HttpUtil {
	public static Map<String,String> getParameterMap(HttpServletRequest request) {
	    // 参数Map  
	    Map<String,String[]> properties = request.getParameterMap();  
	    // 返回值Map  
	    Map<String,String> returnMap = new HashMap<String,String>();  
	    Iterator entries = properties.entrySet().iterator();  
	    Map.Entry entry;  
	    String value = "";  
	    while (entries.hasNext()) {  
	        entry = (Map.Entry) entries.next();  
	        String name = (String) entry.getKey();  
	        Object valueObj = entry.getValue();  
	        if(null == valueObj){  
	            value = "";  
	        }else if(valueObj instanceof String[]){  
	            String[] values = (String[])valueObj;  
	            for(int i=0;i<values.length;i++){  
	                value = values[i] + ",";  
	            }  
	            value = value.substring(0, value.length()-1);  
	        }else{  
	            value = valueObj.toString();  
	        }  
	        returnMap.put(name, value);  
	    }  
	    return returnMap;  
	} 
}
