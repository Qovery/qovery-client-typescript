// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { ClusterCloudProviderInfoRequest } from '..model/models/ClusterCloudProviderInfoRequest';
import { ClusterCloudProviderInfoResponse } from '..model/models/ClusterCloudProviderInfoResponse';
import { ClusterReadinessStatus } from '..model/models/ClusterReadinessStatus';
import { ClusterRequest } from '..model/models/ClusterRequest';
import { ClusterResponse } from '..model/models/ClusterResponse';
import { ClusterResponseList } from '..model/models/ClusterResponseList';
import { ClusterRoutingTableRequest } from '..model/models/ClusterRoutingTableRequest';
import { ClusterRoutingTableResponse } from '..model/models/ClusterRoutingTableResponse';
import { ClusterStatusResponse } from '..model/models/ClusterStatusResponse';
import { ClusterStatusResponseList } from '..model/models/ClusterStatusResponseList';

/**
 * no description
 */
export class ClustersApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a cluster
     * @param organizationId Organization ID
     * @param clusterRequest 
     */
    public async createCluster(organizationId: string, clusterRequest?: ClusterRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("ClustersApi", "createCluster", "organizationId");
        }



        // Path Params
        const localVarPath = '/organization/{organizationId}/cluster'
            .replace('{' + 'organizationId' + '}', encodeURIComponent(String(organizationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(clusterRequest, "ClusterRequest", ""),
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
     * Delete a cluster
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     */
    public async deleteCluster(organizationId: string, clusterId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("ClustersApi", "deleteCluster", "organizationId");
        }


        // verify required parameter 'clusterId' is not null or undefined
        if (clusterId === null || clusterId === undefined) {
            throw new RequiredError("ClustersApi", "deleteCluster", "clusterId");
        }


        // Path Params
        const localVarPath = '/organization/{organizationId}/cluster/{clusterId}'
            .replace('{' + 'organizationId' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'clusterId' + '}', encodeURIComponent(String(clusterId)));

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
     * allows to deploy a cluster
     * Deploy a cluster
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     */
    public async deployCluster(organizationId: string, clusterId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("ClustersApi", "deployCluster", "organizationId");
        }


        // verify required parameter 'clusterId' is not null or undefined
        if (clusterId === null || clusterId === undefined) {
            throw new RequiredError("ClustersApi", "deployCluster", "clusterId");
        }


        // Path Params
        const localVarPath = '/organization/{organizationId}/cluster/{clusterId}/deploy'
            .replace('{' + 'organizationId' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'clusterId' + '}', encodeURIComponent(String(clusterId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Edit a cluster
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     * @param clusterRequest 
     */
    public async editCluster(organizationId: string, clusterId: string, clusterRequest?: ClusterRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("ClustersApi", "editCluster", "organizationId");
        }


        // verify required parameter 'clusterId' is not null or undefined
        if (clusterId === null || clusterId === undefined) {
            throw new RequiredError("ClustersApi", "editCluster", "clusterId");
        }



        // Path Params
        const localVarPath = '/organization/{organizationId}/cluster/{clusterId}'
            .replace('{' + 'organizationId' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'clusterId' + '}', encodeURIComponent(String(clusterId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(clusterRequest, "ClusterRequest", ""),
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
     * Edit routing table by returning updated table.
     * Edit routing table
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     * @param clusterRoutingTableRequest 
     */
    public async editRoutingTable(organizationId: string, clusterId: string, clusterRoutingTableRequest?: ClusterRoutingTableRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("ClustersApi", "editRoutingTable", "organizationId");
        }


        // verify required parameter 'clusterId' is not null or undefined
        if (clusterId === null || clusterId === undefined) {
            throw new RequiredError("ClustersApi", "editRoutingTable", "clusterId");
        }



        // Path Params
        const localVarPath = '/organization/{organizationId}/cluster/{clusterId}/routingTable'
            .replace('{' + 'organizationId' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'clusterId' + '}', encodeURIComponent(String(clusterId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(clusterRoutingTableRequest, "ClusterRoutingTableRequest", ""),
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
     * Know if a cluster is ready to be deployed or not
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     */
    public async getClusterReadinessStatus(organizationId: string, clusterId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("ClustersApi", "getClusterReadinessStatus", "organizationId");
        }


        // verify required parameter 'clusterId' is not null or undefined
        if (clusterId === null || clusterId === undefined) {
            throw new RequiredError("ClustersApi", "getClusterReadinessStatus", "clusterId");
        }


        // Path Params
        const localVarPath = '/organization/{organizationId}/cluster/{clusterId}/isReady'
            .replace('{' + 'organizationId' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'clusterId' + '}', encodeURIComponent(String(clusterId)));

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
     * Get cluster status
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     */
    public async getClusterStatus(organizationId: string, clusterId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("ClustersApi", "getClusterStatus", "organizationId");
        }


        // verify required parameter 'clusterId' is not null or undefined
        if (clusterId === null || clusterId === undefined) {
            throw new RequiredError("ClustersApi", "getClusterStatus", "clusterId");
        }


        // Path Params
        const localVarPath = '/organization/{organizationId}/cluster/{clusterId}/status'
            .replace('{' + 'organizationId' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'clusterId' + '}', encodeURIComponent(String(clusterId)));

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
     * Get cluster cloud provider info and credentials
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     */
    public async getOrganizationCloudProviderInfo(organizationId: string, clusterId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("ClustersApi", "getOrganizationCloudProviderInfo", "organizationId");
        }


        // verify required parameter 'clusterId' is not null or undefined
        if (clusterId === null || clusterId === undefined) {
            throw new RequiredError("ClustersApi", "getOrganizationCloudProviderInfo", "clusterId");
        }


        // Path Params
        const localVarPath = '/organization/{organizationId}/cluster/{clusterId}/cloudProviderInfo'
            .replace('{' + 'organizationId' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'clusterId' + '}', encodeURIComponent(String(clusterId)));

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
     * Returns a list of clusters with only their id and status.
     * List all clusters statuses
     * @param organizationId Organization ID
     */
    public async getOrganizationClusterStatus(organizationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("ClustersApi", "getOrganizationClusterStatus", "organizationId");
        }


        // Path Params
        const localVarPath = '/organization/{organizationId}/cluster/status'
            .replace('{' + 'organizationId' + '}', encodeURIComponent(String(organizationId)));

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
     * Retrieve network routing table where each line corresponds to a route between a destination and a target.
     * Get routing table
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     */
    public async getRoutingTable(organizationId: string, clusterId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("ClustersApi", "getRoutingTable", "organizationId");
        }


        // verify required parameter 'clusterId' is not null or undefined
        if (clusterId === null || clusterId === undefined) {
            throw new RequiredError("ClustersApi", "getRoutingTable", "clusterId");
        }


        // Path Params
        const localVarPath = '/organization/{organizationId}/cluster/{clusterId}/routingTable'
            .replace('{' + 'organizationId' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'clusterId' + '}', encodeURIComponent(String(clusterId)));

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
     * List organization clusters
     * @param organizationId Organization ID
     */
    public async listOrganizationCluster(organizationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("ClustersApi", "listOrganizationCluster", "organizationId");
        }


        // Path Params
        const localVarPath = '/organization/{organizationId}/cluster'
            .replace('{' + 'organizationId' + '}', encodeURIComponent(String(organizationId)));

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
     * Specify cluster cloud provider info and credentials
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     * @param clusterCloudProviderInfoRequest 
     */
    public async specifyClusterCloudProviderInfo(organizationId: string, clusterId: string, clusterCloudProviderInfoRequest?: ClusterCloudProviderInfoRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("ClustersApi", "specifyClusterCloudProviderInfo", "organizationId");
        }


        // verify required parameter 'clusterId' is not null or undefined
        if (clusterId === null || clusterId === undefined) {
            throw new RequiredError("ClustersApi", "specifyClusterCloudProviderInfo", "clusterId");
        }



        // Path Params
        const localVarPath = '/organization/{organizationId}/cluster/{clusterId}/cloudProviderInfo'
            .replace('{' + 'organizationId' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'clusterId' + '}', encodeURIComponent(String(clusterId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(clusterCloudProviderInfoRequest, "ClusterCloudProviderInfoRequest", ""),
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
     * Cluster stop has been requester.
     * Stop cluster
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     */
    public async stopCluster(organizationId: string, clusterId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("ClustersApi", "stopCluster", "organizationId");
        }


        // verify required parameter 'clusterId' is not null or undefined
        if (clusterId === null || clusterId === undefined) {
            throw new RequiredError("ClustersApi", "stopCluster", "clusterId");
        }


        // Path Params
        const localVarPath = '/organization/{organizationId}/cluster/{clusterId}/stop'
            .replace('{' + 'organizationId' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'clusterId' + '}', encodeURIComponent(String(clusterId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * allows to update cluster version
     * Update a cluster Version
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     */
    public async updateCluster(organizationId: string, clusterId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("ClustersApi", "updateCluster", "organizationId");
        }


        // verify required parameter 'clusterId' is not null or undefined
        if (clusterId === null || clusterId === undefined) {
            throw new RequiredError("ClustersApi", "updateCluster", "clusterId");
        }


        // Path Params
        const localVarPath = '/organization/{organizationId}/cluster/{clusterId}/update'
            .replace('{' + 'organizationId' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'clusterId' + '}', encodeURIComponent(String(clusterId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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

export class ClustersApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCluster
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createCluster(response: ResponseContext): Promise<ClusterResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ClusterResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClusterResponse", ""
            ) as ClusterResponse;
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
            const body: ClusterResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClusterResponse", ""
            ) as ClusterResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCluster
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteCluster(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to deployCluster
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deployCluster(response: ResponseContext): Promise<ClusterStatusResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ClusterStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClusterStatusResponse", ""
            ) as ClusterStatusResponse;
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
            const body: ClusterStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClusterStatusResponse", ""
            ) as ClusterStatusResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to editCluster
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async editCluster(response: ResponseContext): Promise<ClusterResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ClusterResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClusterResponse", ""
            ) as ClusterResponse;
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
            const body: ClusterResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClusterResponse", ""
            ) as ClusterResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to editRoutingTable
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async editRoutingTable(response: ResponseContext): Promise<ClusterRoutingTableResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ClusterRoutingTableResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClusterRoutingTableResponse", ""
            ) as ClusterRoutingTableResponse;
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
            const body: ClusterRoutingTableResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClusterRoutingTableResponse", ""
            ) as ClusterRoutingTableResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getClusterReadinessStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getClusterReadinessStatus(response: ResponseContext): Promise<ClusterReadinessStatus > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ClusterReadinessStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClusterReadinessStatus", ""
            ) as ClusterReadinessStatus;
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
            const body: ClusterReadinessStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClusterReadinessStatus", ""
            ) as ClusterReadinessStatus;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getClusterStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getClusterStatus(response: ResponseContext): Promise<ClusterStatusResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ClusterStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClusterStatusResponse", ""
            ) as ClusterStatusResponse;
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
            const body: ClusterStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClusterStatusResponse", ""
            ) as ClusterStatusResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOrganizationCloudProviderInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getOrganizationCloudProviderInfo(response: ResponseContext): Promise<ClusterCloudProviderInfoResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ClusterCloudProviderInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClusterCloudProviderInfoResponse", ""
            ) as ClusterCloudProviderInfoResponse;
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
            const body: ClusterCloudProviderInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClusterCloudProviderInfoResponse", ""
            ) as ClusterCloudProviderInfoResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOrganizationClusterStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getOrganizationClusterStatus(response: ResponseContext): Promise<ClusterStatusResponseList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ClusterStatusResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClusterStatusResponseList", ""
            ) as ClusterStatusResponseList;
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
            const body: ClusterStatusResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClusterStatusResponseList", ""
            ) as ClusterStatusResponseList;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRoutingTable
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRoutingTable(response: ResponseContext): Promise<ClusterRoutingTableResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ClusterRoutingTableResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClusterRoutingTableResponse", ""
            ) as ClusterRoutingTableResponse;
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
            const body: ClusterRoutingTableResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClusterRoutingTableResponse", ""
            ) as ClusterRoutingTableResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOrganizationCluster
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listOrganizationCluster(response: ResponseContext): Promise<ClusterResponseList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ClusterResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClusterResponseList", ""
            ) as ClusterResponseList;
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
            const body: ClusterResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClusterResponseList", ""
            ) as ClusterResponseList;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to specifyClusterCloudProviderInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async specifyClusterCloudProviderInfo(response: ResponseContext): Promise<ClusterCloudProviderInfoResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ClusterCloudProviderInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClusterCloudProviderInfoResponse", ""
            ) as ClusterCloudProviderInfoResponse;
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
            const body: ClusterCloudProviderInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClusterCloudProviderInfoResponse", ""
            ) as ClusterCloudProviderInfoResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to stopCluster
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async stopCluster(response: ResponseContext): Promise<ClusterStatusResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: ClusterStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClusterStatusResponse", ""
            ) as ClusterStatusResponse;
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
        if (isCodeInRange("409", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Cluster is already stopped or an operation is in progress", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ClusterStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClusterStatusResponse", ""
            ) as ClusterStatusResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCluster
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateCluster(response: ResponseContext): Promise<ClusterStatusResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ClusterStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClusterStatusResponse", ""
            ) as ClusterStatusResponse;
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
            const body: ClusterStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClusterStatusResponse", ""
            ) as ClusterStatusResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
