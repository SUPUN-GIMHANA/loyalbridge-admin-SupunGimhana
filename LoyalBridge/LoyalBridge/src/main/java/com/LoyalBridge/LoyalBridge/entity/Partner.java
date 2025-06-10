package com.LoyalBridge.LoyalBridge.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "partner")
public class Partner {

    @Id
    @Column(name = "partnerName")
    private String partnerName;

    @Column(name = "Email")
    private String Email;

    @Column(name = "rate")
    private double rate;

    @Column(name = "integration")
    private String integration;

    public Partner() {
    }

    public Partner(String partnerName, String email, double rate, String integration) {
        this.partnerName = partnerName;
        Email = email;
        this.rate = rate;
        this.integration = integration;
    }

    public String getPartnerName() {
        return partnerName;
    }

    public void setPartnerName(String partnerName) {
        this.partnerName = partnerName;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public double getRate() {
        return rate;
    }

    public void setRate(double rate) {
        this.rate = rate;
    }

    public String getIntegration() {
        return integration;
    }

    public void setIntegration(String integration) {
        this.integration = integration;
    }
}
