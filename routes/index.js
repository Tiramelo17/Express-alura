import express from "express"
import livrosRoute from "./livrosRoutes.js"
import AutorRoute from "./AutorRoutes.js"

const routes =  (app) => {
    app.route('/').get((req,res)=> {
        res.status(200).send({tittle: "Curso Express"})
    })

    app.use(
        express.json(),
        livrosRoute,
        AutorRoute
    )
}


export default routes;