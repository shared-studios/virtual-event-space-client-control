import axios from './axios'
import socket from './socket-client'

const configure = (obj) => {
    window.config = { ...window.config, ...obj }
}

export default configure

export { axios, socket }