export class DatabaseConnectionError  extends Error{
    reason = "Error when trying to connnect database"
    constructor(){
        super()
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
}