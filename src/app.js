import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import productRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
import {createRoles} from './libs/InitialSetup'


const app = express();
//const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger.json');
createRoles();

app.set('pkg', pkg)
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (reg, res) => {
    res.json({
    name: app.get('pkg').name,
    version: app.get('pkg').version,
    description: app.get('pkg').description,
    })
})

app.use('/api/products', productRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

export default app;

