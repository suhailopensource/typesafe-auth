import express from 'express'

import authentication from './authentication' 
import users from './users'

const router = express.Router()

export default(): express.Router =>{
    users(router)
    authentication(router)
    return router
}