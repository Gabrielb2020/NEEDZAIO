import path from 'path'
import {fileURLToPath} from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

import express from 'express'
import cors from  'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
})

// graphql
import { graphqlHTTP } from 'express-graphql'
import {schema} from'./graphql/schema.js'
import {root} from'./graphql/rootValue.js'

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
export default app