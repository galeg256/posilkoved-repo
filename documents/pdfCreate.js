import fs from "fs"
import path from "path"
import puppeteer from 'puppeteer'
import handlebars from "handlebars"

export const pdfCreate = async (data) => {
    try {
        var templateHtml = fs.readFileSync(path.join(process.cwd(), 'documents\\myNewTemplate.html'), 'utf8');
        var template = handlebars.compile(templateHtml);
        var finalHtml = encodeURIComponent(template(data));
        var options = {
            format: 'A4',
            landscape: true,
            headerTemplate: "<p></p>",
            footerTemplate: "<p></p>",
            displayHeaderFooter: false,
            margin: {
                // top: "40px",
                // bottom: "100px"
                // right: "1px"
            },
            // width: '1417px',
            printBackground: true,
            path: "result.pdf" //date.getHours() + "_" + date.getMinutes() + "_" + date.getSeconds() + '.pdf'
        }

        const browser = await puppeteer.launch({
            args: ['--no-sandbox'],
            headless: true,
        });
        const page = await browser.newPage();
        await page.goto(`data:text/html;charset=UTF-8,${finalHtml}`, {
            waitUntil: 'networkidle0'
        });
        await page.pdf(options);
        await browser.close();

        console.log('Done: result.pdf is created!')

        return true
    } catch (err) {
        console.log('ERROR:', err);
        return false
    }
}

// export const pdfCreate = (data) => {
//     try {
//         (async () => {
//             var templateHtml = fs.readFileSync(path.join(process.cwd(), 'documents\\myNewTemplate.html'), 'utf8');
//             var template = handlebars.compile(templateHtml);
//             var finalHtml = encodeURIComponent(template(data));
//             var options = {
//                 format: 'A4',
//                 landscape: true,
//                 headerTemplate: "<p></p>",
//                 footerTemplate: "<p></p>",
//                 displayHeaderFooter: false,
//                 margin: {
//                     // top: "40px",
//                     // bottom: "100px"
//                     // right: "1px"
//                 },
//                 // width: '1417px',
//                 printBackground: true,
//                 path: "result.pdf" //date.getHours() + "_" + date.getMinutes() + "_" + date.getSeconds() + '.pdf'
//             }
    
//             const browser = await puppeteer.launch({
//                 args: ['--no-sandbox'],
//                 headless: true,
//             });
//             const page = await browser.newPage();
//             await page.goto(`data:text/html;charset=UTF-8,${finalHtml}`, {
//                 waitUntil: 'networkidle0'
//             });
//             await page.pdf(options);
//             await browser.close();

    
//             console.log('Done: result.pdf is created!')

//             return true
//         })();
//     } catch (err) {
//         console.log('ERROR:', err);
//         return false
//     }
// }