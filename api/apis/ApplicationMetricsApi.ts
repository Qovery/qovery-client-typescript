// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { ApplicationCurrentScaleResponse } from '..model/models/ApplicationCurrentScaleResponse';
import { InstanceResponseList } from '..model/models/InstanceResponseList';
import { MetricCPUResponseList } from '..model/models/MetricCPUResponseList';
import { MetricGenericResponseList } from '..model/models/MetricGenericResponseList';
import { MetricMemoryResponseList } from '..model/models/MetricMemoryResponseList';
import { MetricRestartResponse } from '..model/models/MetricRestartResponse';
import { MetricStorageResponseList } from '..model/models/MetricStorageResponseList';
import { StorageDiskResponseList } from '..model/models/StorageDiskResponseList';

/**
 * no description
 */
export class ApplicationMetricsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * List currently running instances of the application with their CPU and RAM metrics
     * @param applicationId Application ID
     */
    public async getApplicationCurrentInstance(applicationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'applicationId' is not null or undefined
        if (applicationId === null || applicationId === undefined) {
            throw new RequiredError("ApplicationMetricsApi", "getApplicationCurrentInstance", "applicationId");
        }


        // Path Params
        const localVarPath = '/application/{applicationId}/instance'
            .replace('{' + 'applicationId' + '}', encodeURIComponent(String(applicationId)));

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
     * Returns min, max, and running number of instances of the application
     * Get current scaling of the application
     * @param applicationId Application ID
     */
    public async getApplicationCurrentScale(applicationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'applicationId' is not null or undefined
        if (applicationId === null || applicationId === undefined) {
            throw new RequiredError("ApplicationMetricsApi", "getApplicationCurrentScale", "applicationId");
        }


        // Path Params
        const localVarPath = '/application/{applicationId}/currentScale'
            .replace('{' + 'applicationId' + '}', encodeURIComponent(String(applicationId)));

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
     * List current storage disk usage
     * @param applicationId Application ID
     */
    public async getApplicationCurrentStorageDisk(applicationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'applicationId' is not null or undefined
        if (applicationId === null || applicationId === undefined) {
            throw new RequiredError("ApplicationMetricsApi", "getApplicationCurrentStorageDisk", "applicationId");
        }


        // Path Params
        const localVarPath = '/application/{applicationId}/currentStorage'
            .replace('{' + 'applicationId' + '}', encodeURIComponent(String(applicationId)));

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
     * Get CPU consumption metric over time for the application
     * @param applicationId Application ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public async getApplicationMetricCpu(applicationId: string, lastSeconds: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'applicationId' is not null or undefined
        if (applicationId === null || applicationId === undefined) {
            throw new RequiredError("ApplicationMetricsApi", "getApplicationMetricCpu", "applicationId");
        }


        // verify required parameter 'lastSeconds' is not null or undefined
        if (lastSeconds === null || lastSeconds === undefined) {
            throw new RequiredError("ApplicationMetricsApi", "getApplicationMetricCpu", "lastSeconds");
        }


        // Path Params
        const localVarPath = '/application/{applicationId}/metric/cpu'
            .replace('{' + 'applicationId' + '}', encodeURIComponent(String(applicationId)));

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
     * Get Health Check latency  metric over time for the application
     * @param applicationId Application ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public async getApplicationMetricHealthCheck(applicationId: string, lastSeconds: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'applicationId' is not null or undefined
        if (applicationId === null || applicationId === undefined) {
            throw new RequiredError("ApplicationMetricsApi", "getApplicationMetricHealthCheck", "applicationId");
        }


        // verify required parameter 'lastSeconds' is not null or undefined
        if (lastSeconds === null || lastSeconds === undefined) {
            throw new RequiredError("ApplicationMetricsApi", "getApplicationMetricHealthCheck", "lastSeconds");
        }


        // Path Params
        const localVarPath = '/application/{applicationId}/metric/healthCheck'
            .replace('{' + 'applicationId' + '}', encodeURIComponent(String(applicationId)));

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
     * Get Memory consumption metric over time for the application
     * @param applicationId Application ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public async getApplicationMetricMemory(applicationId: string, lastSeconds: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'applicationId' is not null or undefined
        if (applicationId === null || applicationId === undefined) {
            throw new RequiredError("ApplicationMetricsApi", "getApplicationMetricMemory", "applicationId");
        }


        // verify required parameter 'lastSeconds' is not null or undefined
        if (lastSeconds === null || lastSeconds === undefined) {
            throw new RequiredError("ApplicationMetricsApi", "getApplicationMetricMemory", "lastSeconds");
        }


        // Path Params
        const localVarPath = '/application/{applicationId}/metric/memory'
            .replace('{' + 'applicationId' + '}', encodeURIComponent(String(applicationId)));

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
     * Get application restart message and timestamp.
     * List application restarts
     * @param applicationId Application ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public async getApplicationMetricRestart(applicationId: string, lastSeconds: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'applicationId' is not null or undefined
        if (applicationId === null || applicationId === undefined) {
            throw new RequiredError("ApplicationMetricsApi", "getApplicationMetricRestart", "applicationId");
        }


        // verify required parameter 'lastSeconds' is not null or undefined
        if (lastSeconds === null || lastSeconds === undefined) {
            throw new RequiredError("ApplicationMetricsApi", "getApplicationMetricRestart", "lastSeconds");
        }


        // Path Params
        const localVarPath = '/application/{applicationId}/metric/restart'
            .replace('{' + 'applicationId' + '}', encodeURIComponent(String(applicationId)));

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
     * Get Storage consumption metric over time for the application
     * @param applicationId Application ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public async getApplicationMetricStorage(applicationId: string, lastSeconds: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'applicationId' is not null or undefined
        if (applicationId === null || applicationId === undefined) {
            throw new RequiredError("ApplicationMetricsApi", "getApplicationMetricStorage", "applicationId");
        }


        // verify required parameter 'lastSeconds' is not null or undefined
        if (lastSeconds === null || lastSeconds === undefined) {
            throw new RequiredError("ApplicationMetricsApi", "getApplicationMetricStorage", "lastSeconds");
        }


        // Path Params
        const localVarPath = '/application/{applicationId}/metric/storage'
            .replace('{' + 'applicationId' + '}', encodeURIComponent(String(applicationId)));

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

export class ApplicationMetricsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApplicationCurrentInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApplicationCurrentInstance(response: ResponseContext): Promise<InstanceResponseList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InstanceResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InstanceResponseList", ""
            ) as InstanceResponseList;
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
            const body: InstanceResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InstanceResponseList", ""
            ) as InstanceResponseList;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApplicationCurrentScale
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApplicationCurrentScale(response: ResponseContext): Promise<ApplicationCurrentScaleResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApplicationCurrentScaleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApplicationCurrentScaleResponse", ""
            ) as ApplicationCurrentScaleResponse;
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
            const body: ApplicationCurrentScaleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApplicationCurrentScaleResponse", ""
            ) as ApplicationCurrentScaleResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApplicationCurrentStorageDisk
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApplicationCurrentStorageDisk(response: ResponseContext): Promise<StorageDiskResponseList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StorageDiskResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StorageDiskResponseList", ""
            ) as StorageDiskResponseList;
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
            const body: StorageDiskResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StorageDiskResponseList", ""
            ) as StorageDiskResponseList;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApplicationMetricCpu
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApplicationMetricCpu(response: ResponseContext): Promise<MetricCPUResponseList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetricCPUResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetricCPUResponseList", ""
            ) as MetricCPUResponseList;
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
            const body: MetricCPUResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetricCPUResponseList", ""
            ) as MetricCPUResponseList;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApplicationMetricHealthCheck
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApplicationMetricHealthCheck(response: ResponseContext): Promise<MetricGenericResponseList > {
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
     * @params response Response returned by the server for a request to getApplicationMetricMemory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApplicationMetricMemory(response: ResponseContext): Promise<MetricMemoryResponseList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetricMemoryResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetricMemoryResponseList", ""
            ) as MetricMemoryResponseList;
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
            const body: MetricMemoryResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetricMemoryResponseList", ""
            ) as MetricMemoryResponseList;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApplicationMetricRestart
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApplicationMetricRestart(response: ResponseContext): Promise<MetricRestartResponse > {
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
     * @params response Response returned by the server for a request to getApplicationMetricStorage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApplicationMetricStorage(response: ResponseContext): Promise<MetricStorageResponseList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MetricStorageResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetricStorageResponseList", ""
            ) as MetricStorageResponseList;
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
            const body: MetricStorageResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MetricStorageResponseList", ""
            ) as MetricStorageResponseList;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
