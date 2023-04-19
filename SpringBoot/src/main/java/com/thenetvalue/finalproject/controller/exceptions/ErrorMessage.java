package com.thenetvalue.finalproject.controller.exceptions;

public class ErrorMessage {
    public String Message;

    public ErrorMessage(String message) {
    }

    public String getMessage() {
        return Message;
    }

    public void setMessage(String message) {
        Message = message;
    }
}
