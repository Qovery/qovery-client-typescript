// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { BackupPaginatedResponseList } from '..model/models/BackupPaginatedResponseList';
import { BackupRequest } from '..model/models/BackupRequest';
import { BackupResponse } from '..model/models/BackupResponse';

/**
 * no description
 */
export class BackupsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Add a backup to the Database 
     * @param databaseId Database ID
     * @param backupRequest 
     */
    public async addBackupDatabase(databaseId: string, backupRequest?: BackupRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'databaseId' is not null or undefined
        if (databaseId === null || databaseId === undefined) {
            throw new RequiredError("BackupsApi", "addBackupDatabase", "databaseId");
        }



        // Path Params
        const localVarPath = '/database/{databaseId}/backup'
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
            ObjectSerializer.serialize(backupRequest, "BackupRequest", ""),
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
     * By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter
     * List database  backups
     * @param databaseId Database ID
     * @param startId Starting point after which to return results
     */
    public async listDatabaseBackup(databaseId: string, startId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'databaseId' is not null or undefined
        if (databaseId === null || databaseId === undefined) {
            throw new RequiredError("BackupsApi", "listDatabaseBackup", "databaseId");
        }



        // Path Params
        const localVarPath = '/database/{databaseId}/backup'
            .replace('{' + 'databaseId' + '}', encodeURIComponent(String(databaseId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (startId !== undefined) {
            requestContext.setQueryParam("startId", ObjectSerializer.serialize(startId, "string", "uuid"));
        }


        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Remove database  backup
     * @param databaseId Database ID
     * @param backupId Database Backup ID
     */
    public async removeDatabaseBackup(databaseId: string, backupId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'databaseId' is not null or undefined
        if (databaseId === null || databaseId === undefined) {
            throw new RequiredError("BackupsApi", "removeDatabaseBackup", "databaseId");
        }


        // verify required parameter 'backupId' is not null or undefined
        if (backupId === null || backupId === undefined) {
            throw new RequiredError("BackupsApi", "removeDatabaseBackup", "backupId");
        }


        // Path Params
        const localVarPath = '/database/{databaseId}/backup/{backupId}'
            .replace('{' + 'databaseId' + '}', encodeURIComponent(String(databaseId)))
            .replace('{' + 'backupId' + '}', encodeURIComponent(String(backupId)));

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

}

export class BackupsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addBackupDatabase
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addBackupDatabase(response: ResponseContext): Promise<BackupResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: BackupResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BackupResponse", ""
            ) as BackupResponse;
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
            const body: BackupResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BackupResponse", ""
            ) as BackupResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDatabaseBackup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listDatabaseBackup(response: ResponseContext): Promise<BackupPaginatedResponseList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BackupPaginatedResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BackupPaginatedResponseList", ""
            ) as BackupPaginatedResponseList;
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
            const body: BackupPaginatedResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BackupPaginatedResponseList", ""
            ) as BackupPaginatedResponseList;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeDatabaseBackup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeDatabaseBackup(response: ResponseContext): Promise<void > {
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

}
