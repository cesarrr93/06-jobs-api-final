let activeDiv = null;
export const setDiv = (newDiv) => {
    if(newDiv != activeDiv) {
        if(activeDiv) {
            activeDiv.style.display = "none";
        }
        newDiv.style.display = "block";
        activeDiv = newDiv;
    }
};

export let inputEnable = true;
export const enableInput = (state) => {
    inputEnable = state;
};

export let token = null;
export const setToken = (value) => {
    token = value;
    if(value) {
        localStorage.setItem("token", value);

    } else {
        localStorage.removeItem("token");
    }
};

export let message = null;

import { showJobs, handleJobs } from "./jobs.js";
import { showLoginRegister, handleLoginRegister } from "./loginRegister.js";
import { handleLogin } from "./login.js";
import { handleAddEdit } from "./addEddit.js";
import { handleRegister } from "./register.js";

document.addEventListener("DOMContentLoaded", () => {
    token = localStorage.getItem("token");
    message = document.getElementById("message");
    handleLoginRegister();
    handleLogin();
    handleJobs();
    handleRegister();
    handleAddEdit();
    if(token) {
        showJobs();
    } else {
        showLoginRegister();
    }
});