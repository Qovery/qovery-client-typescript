// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { DatabaseCurrentMetricResponse } from '..model/models/DatabaseCurrentMetricResponse';
import { MetricCPUDatapointResponseList } from '..model/models/MetricCPUDatapointResponseList';
import { MetricGenericResponseList } from '..model/models/MetricGenericResponseList';
import { MetricMemoryDatapointResponseList } from '..model/models/MetricMemoryDatapointResponseList';
import { MetricRestartResponse } from '..model/models/MetricRestartResponse';
import { MetricStorageDatapointResponseList } from '..model/models/MetricStorageDatapointResponseList';

/**
 * no description
 */
export class DatabaseMetricsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get current metric consumption of the database 
     * @param databaseId Database ID
     */
    public async getDatabaseCurrentMetric(databaseId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'databaseId' is not null or undefined
        if (databaseId === null || databaseId === undefined) {
            throw new RequiredError("DatabaseMetricsApi", "getDatabaseCurrentMetric", "databaseId");
        }


        // Path Params
        const localVarPath = '/database/{databaseId}/currentMetric'
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

    /**
     * Get CPU consumption metric over time for the database
     * @param databaseId Database ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public async getDatabaseMetricCpu(databaseId: string, lastSeconds: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'databaseId' is not null or undefined
        if (databaseId === null || databaseId === undefined) {
            throw new RequiredError("DatabaseMetricsApi", "getDatabaseMetricCpu", "databaseId");
        }


        // verify required parameter 'lastSeconds' is not null or undefined
        if (lastSeconds === null || lastSeconds === undefined) {
            throw new RequiredError("DatabaseMetricsApi", "getDatabaseMetricCpu", "lastSeconds");
        }


        // Path Params
        const localVarPath = '/database/{databaseId}/metric/cpu'
            .replace('{' + 'databaseId' + '}', encodeURIComponent(String(databaseId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (lastSeconds !== undefined) {
            requestContext.setQueryParam("lastSeconds", ObjectSerializer.serialize(lastSeconds, "number", ""));
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
     * The value returned corresponds to the 95th centile
     * Get Health Check latency  metric over time for the database
     * @param databaseId Database ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public async getDatabaseMetricHealthCheck(databaseId: string, lastSeconds: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'databaseId' is not null or undefined
        if (databaseId === null || databaseId === undefined) {
            throw new RequiredError("DatabaseMetricsApi", "getDatabaseMetricHealthCheck", "databaseId");
        }


        // verify required parameter 'lastSeconds' is not null or undefined
        if (lastSeconds === null || lastSeconds === undefined) {
            throw new RequiredError("DatabaseMetricsApi", "getDatabaseMetricHealthCheck", "lastSeconds");
        }


        // Path Params
        const localVarPath = '/database/{databaseId}/metric/healthCheck'
            .replace('{' + 'databaseId' + '}', encodeURIComponent(String(databaseId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (lastSeconds !== undefined) {
            requestContext.setQueryParam("lastSeconds", ObjectSerializer.serialize(lastSeconds, "number", ""));
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
     * Get Memory consumption metric over time for the database
     * @param databaseId Database ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public async getDatabaseMetricMemory(databaseId: string, lastSeconds: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'databaseId' is not null or undefined
        if (databaseId === null || databaseId === undefined) {
            throw new RequiredError("DatabaseMetricsApi", "getDatabaseMetricMemory", "databaseId");
        }


        // verify required parameter 'lastSeconds' is not null or undefined
        if (lastSeconds === null || lastSeconds === undefined) {
            throw new RequiredError("DatabaseMetricsApi", "getDatabaseMetricMemory", "lastSeconds");
        }


        // Path Params
        const localVarPath = '/database/{databaseId}/metric/memory'
            .replace('{' + 'databaseId' + '}', encodeURIComponent(String(databaseId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (lastSeconds !== undefined) {
            requestContext.setQueryParam("lastSeconds", ObjectSerializer.serialize(lastSeconds, "number", ""));
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
     * Get database restart message and timestamp.
     * List database restarts
     * @param databaseId Database ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public async getDatabaseMetricRestart(databaseId: string, lastSeconds: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'databaseId' is not null or undefined
        if (databaseId === null || databaseId === undefined) {
            throw new RequiredError("DatabaseMetricsApi", "getDatabaseMetricRestart", "databaseId");
        }


        // verify required parameter 'lastSeconds' is not null or undefined
        if (lastSeconds === null || lastSeconds === undefined) {
            throw new RequiredError("DatabaseMetricsApi", "getDatabaseMetricRestart", "lastSeconds");
        }


        // Path Params
        const localVarPath = '/database/{databaseId}/metric/restart'
            .replace('{' + 'databaseId' + '}', encodeURIComponent(String(databaseId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (lastSeconds !== undefined) {
            requestContext.setQueryParam("lastSeconds", ObjectSerializer.serialize(lastSeconds, "number", ""));
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
     * Get Storage consumption metric over time for the database
     * @param databaseId Database ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public async getDatabaseMetricStorage(databaseId: string, lastSeconds: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'databaseId' is not null or undefined
        if (databaseId === null || databaseId === undefined) {
            throw new RequiredError("DatabaseMetricsApi", "getDatabaseMetricStorage", "databaseId");
        }


        // verify required parameter 'lastSeconds' is not null or undefined
        if (lastSeconds === null || lastSeconds === undefined) {
            throw new RequiredError("DatabaseMetricsApi", "getDatabaseMetricStorage", "lastSeconds");
        }


        // Path Params
        const localVarPath = '/database/{databaseId}/metric/storage'
            .replace('{' + 'databaseId' + '}', encodeURIComponent(String(databaseId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (lastSeconds !== undefined) {
            requestContext.setQueryParam("lastSeconds", ObjectSerializer.serialize(lastSeconds, "number", ""));
        }


        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DatabaseMetricsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDatabaseCurrentMetric
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDatabaseCurrentMetric(response: ResponseContext): Promise<DatabaseCurrentMetricResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DatabaseCurrentMetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DatabaseCurrentMetricResponse", ""
            ) as DatabaseCurrentMetricResponse;
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
            const body: DatabaseCurrentMetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DatabaseCurrentMetricResponse", ""
            ) as DatabaseCurrentMetricResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDatabaseMetricCpu
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDatabaseMetricCpu(response: ResponseContext): Promise<MetricCPUDatapointResponseList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetricCPUDatapointResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetricCPUDatapointResponseList", ""
            ) as MetricCPUDatapointResponseList;
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
            const body: MetricCPUDatapointResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetricCPUDatapointResponseList", ""
            ) as MetricCPUDatapointResponseList;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDatabaseMetricHealthCheck
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDatabaseMetricHealthCheck(response: ResponseContext): Promise<MetricGenericResponseList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetricGenericResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetricGenericResponseList", ""
            ) as MetricGenericResponseList;
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
            const body: MetricGenericResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetricGenericResponseList", ""
            ) as MetricGenericResponseList;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDatabaseMetricMemory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDatabaseMetricMemory(response: ResponseContext): Promise<MetricMemoryDatapointResponseList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetricMemoryDatapointResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetricMemoryDatapointResponseList", ""
            ) as MetricMemoryDatapointResponseList;
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
            const body: MetricMemoryDatapointResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetricMemoryDatapointResponseList", ""
            ) as MetricMemoryDatapointResponseList;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDatabaseMetricRestart
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDatabaseMetricRestart(response: ResponseContext): Promise<MetricRestartResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetricRestartResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetricRestartResponse", ""
            ) as MetricRestartResponse;
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
            const body: MetricRestartResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetricRestartResponse", ""
            ) as MetricRestartResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDatabaseMetricStorage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDatabaseMetricStorage(response: ResponseContext): Promise<MetricStorageDatapointResponseList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetricStorageDatapointResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetricStorageDatapointResponseList", ""
            ) as MetricStorageDatapointResponseList;
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
            const body: MetricStorageDatapointResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetricStorageDatapointResponseList", ""
            ) as MetricStorageDatapointResponseList;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
