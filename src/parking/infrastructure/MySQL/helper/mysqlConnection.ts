import mysql, {Pool} from 'mysql'
import dotenv from 'dotenv'
import {QueryError} from "../errors/queryError";
dotenv.config()

export  class MysqlConnection {
    // @ts-ignore
    private instance: Pool

    constructor() {
        this.connect()
    }

    private connect() {
        return this.instance = mysql.createPool({
            connectionLimit: 10,
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DB_NAME,
        })
    }
    public fetch(query:string):any {
        this.instance.query(query, function (error, result, fields){
            if(error) return new QueryError()
        })
    }
}