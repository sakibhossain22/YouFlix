import axios from "axios";
const axiosSecure = axios.create({
    baseURL: `https://y-ehmc1eykv-sakib-hossains-projects.vercel.app`
});

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;
