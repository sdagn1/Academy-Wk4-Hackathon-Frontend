import express from "express";
import nunjucks from "nunjucks";
import bodyParser from "body-parser";
import session from "express-session";
import path from "path";



import { renderHomePage, renderSearchPage, renderTopTenDetailPage, renderTopTenPage, renderSearchResultsPage, postSearchForm, renderRandomPage } from "./controllers/TestController";


const app = express();

nunjucks.configure(['node_modules/govuk-frontend/dist', path.join(__dirname, '/views/')], {
    autoescape: true,
    express: app
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.static('public'));

app.use(session({ secret: 'SUPER_SECRET', cookie: { maxAge: 28800000 }}));

declare module "express-session" {
  interface SessionData {
    token: string;
    location: string;
  }
}

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

app.get('/', renderHomePage);
app.get('/search-location', renderSearchPage);
app.get('/top-ten', renderTopTenPage);
app.get('/top-ten-detail', renderTopTenDetailPage);
app.get('/random', renderRandomPage)

app.post('/search-location', postSearchForm);
app.get('/search-result', renderSearchResultsPage);

