import express from 'express'
import dotenv from 'dotenv'

dotenv.config() 
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true})) 

import { AppRoute } from './AppRoute.js'
app.get('/', (req, res) => {})

const port = process?.env?.PORT ?? 3000
AppRoute(app)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

/**
npx sequelize-cli db:migrate

npx sequelize-cli db:migrate:undo:all
 
yarn add --dev @babel/core @babel/node @babel/preset-env

 */
