export class QueryError extends Error {
    constructor() {
        super("Something went wrong while fetching data")
        this.name = "QueryError"
    }
}