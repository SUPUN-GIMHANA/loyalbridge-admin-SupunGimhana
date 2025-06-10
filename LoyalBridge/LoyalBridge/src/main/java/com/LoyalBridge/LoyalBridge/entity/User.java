package com.LoyalBridge.LoyalBridge.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "User")
public class User {

    @Id
    @Column(name = "name")
    private String name;

    @Column(name = "id")
    private int id;

    @Column(name = "phoneNo")
    private String phoneNo;

    @Column(name = "status")
    private String status;

    @Column(name = "freeze")
    private String freeze;

    @Column(name = "risk")
    private String risk;

    public User() {
    }

    public User(String name, int id, String phoneNo, String status, String freeze, String risk) {
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
        this.status = status;
        this.freeze = freeze;
        this.risk = risk;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getFreeze() {
        return freeze;
    }

    public void setFreeze(String freeze) {
        this.freeze = freeze;
    }

    public String getRisk() {
        return risk;
    }

    public void setRisk(String risk) {
        this.risk = risk;
    }
}
