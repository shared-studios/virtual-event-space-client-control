import axios from 'axios'

const axiosConfig = (config) => {
    if (window.config.token) {
        config = {
            ...config, headers: {
                ...config?.headers,
                authorization: window.config.token
            }
        }
    }
    // console.log('config:', config)
    return config
}

export default {
    get: (path, config) => {
        return axios.get(`${window.config.api_url}/${path}`, axiosConfig(config))
    },
    put: (path, data, config) => {
        return axios.put(`${window.config.api_url}/${path}`, data, axiosConfig(config))
    },
    post: (path, data, config) => {
        return axios.post(`${window.config.api_url}/${path}`, data, axiosConfig(config))
    },
    patch: (path, data, config) => {
        return axios.patch(`${window.config.api_url}/${path}`, data, axiosConfig(config))
    },
    delete: (path, config) => {
        return axios.delete(`${window.config.api_url}/${path}`, axiosConfig(config))
    }
}