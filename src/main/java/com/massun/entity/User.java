package com.massun.entity;

import java.io.Serializable;

/**
 *
 */
public class User implements Serializable{
    private static final long serialVersionUID = 1L;

    private Integer id;

    private String name;

    private String password;

    private String email;

    private String telphone;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email == null ? null : email.trim();
    }

    public String getTelphone() {
        return telphone;
    }

    public void setTelphone(String telphone) {
        this.telphone = telphone == null ? null : telphone.trim();
    }

    @Override
    public String toString() {
        return "{\""+"id\":"+"\""+getId()+"\","+"\""+"name\":"+"\""+getName()+"\","+"\""+"password\":"+"\""+getPassword()+"\","+"\""+"email\":"+"\""+getEmail()+"\","+"\""+"telphone\":"+"\""+getTelphone()+"\"}";
    }
}