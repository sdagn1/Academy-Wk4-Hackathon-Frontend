import express from "express";
import { getDatabases } from "../services/TestService"
import { parseFile } from "../node-csv-read";

export const renderHomePage = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('home.html');
    parseFile();
}