const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()

        server.get('/channel/:id', (req, res) => {
            const actualPage = '/channel'
            const queryParams = { title: req.params.id }
            app.render(req, res, actualPage, queryParams)
        })


        server.get('/', (req, res) => {
            const actualPage = '/index'
            app.render(req, res, actualPage, null)
        })

        server.get('/settings', (req, res) => {
            const actualPage = '/settings'
            app.render(req, res, actualPage, null)
        })

        server.get('*', (req, res) => {
            app.render(req, res, '/404', null)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })
