export default(data) => {
    return `
    <!doctype html>
    <html>
        <head>
            <meta charset="utf-8">
        </head>
        <body>
            <div> ${data.declarant} </div>
        </body>
    </html>`
}