import "dotenv/config";
import * as joi from "joi";


interface EnvVars{
PORT: number
}

const envsSchema = joi.object({
    PORT: joi.number().required()
})
.unknown(true)  //solo pondra restriccion a las que estan en el esquema

const {error, value} =envsSchema.validate(process.env);

if(error){
    throw new Error(`Config validation error: ${error.message}`);
}

const envVars:EnvVars=value;

export const envs = {
    port: envVars.PORT
   
}