import express from "express";
import { getDatabases } from "../services/TestService"

export const renderHomePage = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('home.html');
}

export const renderSearchPage = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render("search-location.html");
}

export const renderTopTenPage = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render("top-ten.html");
}

export const renderTopTenDetailPage = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render("top-ten-detail.html");
}