import express from "express";
import { getDatabases } from "../services/TestService"

export const renderHomePage = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('home.html');
}