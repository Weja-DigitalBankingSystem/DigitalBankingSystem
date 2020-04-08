package com.weja.digitalbankingapi.models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "accountdetail")
public class AccountDetail {

    @Id
    @GeneratedValue
    public int id;
    public String accountno;
    public String accounttype;
    public float amount;
    public String firstname;
    public String lastname;
    public String email;
    public String mobile;
    public String userName;

    public AccountDetail(){}

    public AccountDetail(String accountno,String accounttype,float amount,String firstname,String lastname, String email, String mobile, String userName)
    {
        this.accountno = accountno;
        this.accounttype = accounttype;
        this.amount = amount;
        this.firstname = firstname;
        this.lastname =lastname;
        this.email = email;
        this.mobile = mobile;
        this.userName = userName;
    }
}
