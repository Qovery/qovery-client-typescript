// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { ApplicationResponseList } from '..model/models/ApplicationResponseList';
import { CredentialsRequest } from '..model/models/CredentialsRequest';
import { CredentialsResponse } from '..model/models/CredentialsResponse';
import { LogicalDatabaseRequest } from '..model/models/LogicalDatabaseRequest';
import { LogicalDatabaseResponse } from '..model/models/LogicalDatabaseResponse';
import { LogicalDatabaseResponseList } from '..model/models/LogicalDatabaseResponseList';

/**
 * no description
 */
export class LogicalDatabaseApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * To delete a logical database you must have the project user permission
     * Delete a Logical database
     * @param logicalDatabaseId Logical Database ID
     */
    public async deleteLogicalDatabase(logicalDatabaseId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'logicalDatabaseId' is not null or undefined
        if (logicalDatabaseId === null || logicalDatabaseId === undefined) {
            throw new RequiredError("LogicalDatabaseApi", "deleteLogicalDatabase", "logicalDatabaseId");
        }


        // Path Params
        const localVarPath = '/logicalDatabase/{logicalDatabaseId}'
            .replace('{' + 'logicalDatabaseId' + '}', encodeURIComponent(String(logicalDatabaseId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Edit a logical database
     * @param logicalDatabaseId Logical Database ID
     * @param logicalDatabaseRequest 
     */
    public async editLogicalDatabase(logicalDatabaseId: string, logicalDatabaseRequest?: LogicalDatabaseRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'logicalDatabaseId' is not null or undefined
        if (logicalDatabaseId === null || logicalDatabaseId === undefined) {
            throw new RequiredError("LogicalDatabaseApi", "editLogicalDatabase", "logicalDatabaseId");
        }



        // Path Params
        const localVarPath = '/logicalDatabase/{logicalDatabaseId}'
            .replace('{' + 'logicalDatabaseId' + '}', encodeURIComponent(String(logicalDatabaseId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
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

    /**
     * Edit logical database credentials
     * @param logicalDatabaseId Logical Database ID
     * @param credentialsRequest 
     */
    public async editLogicalDatabaseCredentials(logicalDatabaseId: string, credentialsRequest?: CredentialsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'logicalDatabaseId' is not null or undefined
        if (logicalDatabaseId === null || logicalDatabaseId === undefined) {
            throw new RequiredError("LogicalDatabaseApi", "editLogicalDatabaseCredentials", "logicalDatabaseId");
        }



        // Path Params
        const localVarPath = '/logicalDatabase/{logicalDatabaseId}/credentials'
            .replace('{' + 'logicalDatabaseId' + '}', encodeURIComponent(String(logicalDatabaseId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(credentialsRequest, "CredentialsRequest", ""),
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

    /**
     * A logical database exists inside a database. The database is a service that exists within an environment, that you can deploy, and that has allocated resources. A database can have several logical databases
     * Get logical database by ID
     * @param logicalDatabaseId Logical Database ID
     */
    public async getLogicalDatabase(logicalDatabaseId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'logicalDatabaseId' is not null or undefined
        if (logicalDatabaseId === null || logicalDatabaseId === undefined) {
            throw new RequiredError("LogicalDatabaseApi", "getLogicalDatabase", "logicalDatabaseId");
        }


        // Path Params
        const localVarPath = '/logicalDatabase/{logicalDatabaseId}'
            .replace('{' + 'logicalDatabaseId' + '}', encodeURIComponent(String(logicalDatabaseId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get  credentials of the logical database
     * @param logicalDatabaseId Logical Database ID
     */
    public async getLogicalDatabaseCredentials(logicalDatabaseId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'logicalDatabaseId' is not null or undefined
        if (logicalDatabaseId === null || logicalDatabaseId === undefined) {
            throw new RequiredError("LogicalDatabaseApi", "getLogicalDatabaseCredentials", "logicalDatabaseId");
        }


        // Path Params
        const localVarPath = '/logicalDatabase/{logicalDatabaseId}/credentials'
            .replace('{' + 'logicalDatabaseId' + '}', encodeURIComponent(String(logicalDatabaseId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List linked applications
     * @param logicalDatabaseId Logical Database ID
     */
    public async listLogicalDatabaseApplication(logicalDatabaseId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'logicalDatabaseId' is not null or undefined
        if (logicalDatabaseId === null || logicalDatabaseId === undefined) {
            throw new RequiredError("LogicalDatabaseApi", "listLogicalDatabaseApplication", "logicalDatabaseId");
        }


        // Path Params
        const localVarPath = '/logicalDatabase/{logicalDatabaseId}/application'
            .replace('{' + 'logicalDatabaseId' + '}', encodeURIComponent(String(logicalDatabaseId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * A logical database exists inside a database. The database is a service that exists within an environment, that you can deploy, and that has allocated resources. A database can have several logical databases
     * List logical databases of a database
     * @param databaseId Database ID
     */
    public async listLogicalDatabaseDatabase(databaseId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'databaseId' is not null or undefined
        if (databaseId === null || databaseId === undefined) {
            throw new RequiredError("LogicalDatabaseApi", "listLogicalDatabaseDatabase", "databaseId");
        }


        // Path Params
        const localVarPath = '/database/{databaseId}/logicalDatabase'
            .replace('{' + 'databaseId' + '}', encodeURIComponent(String(databaseId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class LogicalDatabaseApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteLogicalDatabase
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteLogicalDatabase(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
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

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to editLogicalDatabase
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async editLogicalDatabase(response: ResponseContext): Promise<LogicalDatabaseResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to editLogicalDatabaseCredentials
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async editLogicalDatabaseCredentials(response: ResponseContext): Promise<CredentialsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CredentialsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CredentialsResponse", ""
            ) as CredentialsResponse;
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

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CredentialsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CredentialsResponse", ""
            ) as CredentialsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLogicalDatabase
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getLogicalDatabase(response: ResponseContext): Promise<LogicalDatabaseResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LogicalDatabaseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LogicalDatabaseResponse", ""
            ) as LogicalDatabaseResponse;
            return body;
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLogicalDatabaseCredentials
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getLogicalDatabaseCredentials(response: ResponseContext): Promise<CredentialsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CredentialsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CredentialsResponse", ""
            ) as CredentialsResponse;
            return body;
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

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CredentialsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CredentialsResponse", ""
            ) as CredentialsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLogicalDatabaseApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listLogicalDatabaseApplication(response: ResponseContext): Promise<ApplicationResponseList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApplicationResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApplicationResponseList", ""
            ) as ApplicationResponseList;
            return body;
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

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApplicationResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApplicationResponseList", ""
            ) as ApplicationResponseList;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLogicalDatabaseDatabase
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listLogicalDatabaseDatabase(response: ResponseContext): Promise<LogicalDatabaseResponseList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LogicalDatabaseResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LogicalDatabaseResponseList", ""
            ) as LogicalDatabaseResponseList;
            return body;
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

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LogicalDatabaseResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LogicalDatabaseResponseList", ""
            ) as LogicalDatabaseResponseList;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
