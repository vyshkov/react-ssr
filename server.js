import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';

import App from './src/app';

const app = express();

const PORT = 3000;

app.use(express.static('build/public'));

app.get('*', (req, res) => {
    const sheet = new ServerStyleSheet();

    const content = ReactDOMServer.renderToString(
        sheet.collectStyles(
            <StaticRouter location={req.url} context={{}}>
                <App />
            </StaticRouter>
        )
    );

    const helmet = Helmet.renderStatic();
    
    res.send(`
        <html>
            <header>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${sheet.getStyleTags()}
            </header>
            <body>
                <div id="root">
                    ${content}
                </div>
                <script src="/client_bundle.js"></script>
            </body>
        </html>    
    `)
});

app.listen(PORT, () => console.log('Server started...'));

