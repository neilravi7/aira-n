import React from "react";
import axios from "axios";

const BASE_URL = "	http://localhost:8000/"

class AuthService {
    login(username, password) {
        return axios
            .post(BASE_URL + "auth/api/token/", {
                username,
                password
            })
            .then(response => {
                console.log(response.status);
                if (response.status === 200) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        return axios.post(BASE_URL + "user/create.json", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default  new AuthService();