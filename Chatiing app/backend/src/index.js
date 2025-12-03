import express from "express"

import authRoutes from "./"

const app = express();

app.use("/api/auth",authRoutes)

app.listen(5001, () => {
    console.log("server is runnung on port 5001")
})