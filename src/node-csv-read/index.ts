import * as fs from "fs";
import * as path from "path";
import {parse}  from 'csv-parse';

type PopulationDensity = {
    areaName: string;
    areaSize: number;
    density07: number;
    density08: number;
};

export const parseFile = (() => {
    const csvFilePath = path.resolve(__dirname, '../files/Population Denisty 07 to 08.csv');

    const headers = ['areaName', 'areaSize', 'density07', 'density08'];

    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8'});

    parse(fileContent, {
        delimiter: ',',
        columns: headers,
    }, (error, result: PopulationDensity[]) => {
        if (error) {
            console.error(error);
        }
        console.log("Result", result);
    });

})

type DogDirtResults = {
    councilName: string;
    penaltiesIssued: number;
    penaltiesCancelled: number;
    penaltiesPaid: number;
    courtFollowUp: number;
    awaitingCourt: number;
    dismissedByCourt: number;
    amountCollected: number;
    pendingPayment: number;

}

(() => {
    const csvFilePath = path.resolve(__dirname, '../files/dog_poo_database.csv');

    const headers = ['councilName', 'penaltiesIssued', 'penaltiesCancelled', 'penaltiesPaid',
        'courtFollowUp', 'awaitingCourt', 'dismissedByCourt',
        'amountCollected', 'pendingPayment'
    ];

    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8'});

    parse(fileContent, {
        delimiter: ',',
        columns: headers,
    }, (error, result: DogDirtResults[]) => {
        if (error) {
            console.error(error);
        }
        console.log("Result", result);
    });

})

();