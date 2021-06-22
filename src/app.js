import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'

const app = express();

app.set('pkg', pkg)

app.use(morgan('dev'));

app.get('/', (reg, res) => {
    res.json({
    name: app.get('pkg').name,
    version: app.get('pkg').version,
    description: app.get('pkg').description,
    })
})

export default app;

