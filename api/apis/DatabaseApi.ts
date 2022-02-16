// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { LogicalDatabaseRequest } from '..model/models/LogicalDatabaseRequest';
import { LogicalDatabaseResponse } from '..model/models/LogicalDatabaseResponse';

/**
 * no description
 */
export class DatabaseApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * If you don't specify credentials, Qovery will autogenerate them.
     * Create a logical database on the database
     * @param databaseId Database ID
     * @param logicalDatabaseRequest 
     */
    public async createLogicalDatabaseOnDatabase(databaseId: string, logicalDatabaseRequest?: LogicalDatabaseRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'databaseId' is not null or undefined
        if (databaseId === null || databaseId === undefined) {
            throw new RequiredError("DatabaseApi", "createLogicalDatabaseOnDatabase", "databaseId");
        }



        // Path Params
        const localVarPath = '/database/{databaseId}/logicalDatabase'
            .replace('{' + 'databaseId' + '}', encodeURIComponent(String(databaseId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(logicalDatabaseRequest, "LogicalDatabaseRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DatabaseApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createLogicalDatabaseOnDatabase
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createLogicalDatabaseOnDatabase(response: ResponseContext): Promise<LogicalDatabaseResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: LogicalDatabaseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LogicalDatabaseResponse", ""
            ) as LogicalDatabaseResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Access token is missing or invalid", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Access forbidden", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Resource not found", undefined, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Logical Database with this name already exists on the database", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LogicalDatabaseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LogicalDatabaseResponse", ""
            ) as LogicalDatabaseResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
