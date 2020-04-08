package com.weja.digitalbankingapi.models;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name="users")
public class Client {

    private @Id @GeneratedValue int id;
    public String userName;
    public String password;
    public String role;

    public Client(){    }

    public Client(String userName, String password, String role)
    {
        this.userName = userName;
        this.password = password;
        this.role = role;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
