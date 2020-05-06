import axios from './axios'

const configure = (obj) => {
    window.config = { ...window.config, ...obj }
}

export default configure

export { axios }