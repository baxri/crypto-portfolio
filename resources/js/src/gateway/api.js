import axios from "axios";
import { toast } from 'react-toastify';

class api {

    async checkUserAuth() {
        return await localStorage.getItem('access_token');
    }

    async post(path, data, message = '') {

        let access_token = localStorage.getItem('access_token');

        try {
            const res = await axios.post(`${path}`, data, { 'headers': { 'Authorization': `Bearer ${access_token}` } });
            this.action(message);
            return res.data;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    async get(path, message = '') {

        let access_token = localStorage.getItem('access_token');

        try {
            const res = await axios.get(`${path}`, { 'headers': { 'Authorization': `Bearer ${access_token}` } });
            this.action(message);
            return res.data;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    action(message = '', redirect = '') {
        if (message.length > 0) {
            toast.success(message);
        }
    }

}


export default (new api());


