// 'http://localhost:3001/api/v1'

const PRODUCTION_URL= 'http://52.197.235.216/api/v1'
const DEVELOPMENT_URL= 'http://localhost:3001/api/v1'


export const BASE_URL = process.env.REACT_ENV == 'development' ? DEVELOPMENT_URL : PRODUCTION_URL

