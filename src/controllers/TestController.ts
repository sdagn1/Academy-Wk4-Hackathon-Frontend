import express from "express";
import { getDatabases, getLocations } from "../services/TestService"

export const renderHomePage = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('home.html');
}

export const renderSearchPage = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('search.html');
}

export const postSearchForm = async (req: express.Request, res: express.Response): Promise<void> => {
    req.session.location = req.body.location;
    res.redirect('/search-result');
}

export const renderSearchResultsPage = async (req: express.Request, res: express.Response): Promise<void> => {
    const locationString = req.session.location;
    const location = await getLocations(locationString, req.session.token);

    res.render('search-result.html', {locations: location});

}

