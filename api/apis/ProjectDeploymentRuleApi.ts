// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { ProjectDeploymentRuleRequest } from '..model/models/ProjectDeploymentRuleRequest';
import { ProjectDeploymentRuleResponse } from '..model/models/ProjectDeploymentRuleResponse';
import { ProjectDeploymentRuleResponseList } from '..model/models/ProjectDeploymentRuleResponseList';

/**
 * no description
 */
export class ProjectDeploymentRuleApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a deployment rule
     * @param projectId Project ID
     * @param projectDeploymentRuleRequest 
     */
    public async createDeploymentRule(projectId: string, projectDeploymentRuleRequest?: ProjectDeploymentRuleRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new RequiredError("ProjectDeploymentRuleApi", "createDeploymentRule", "projectId");
        }



        // Path Params
        const localVarPath = '/project/{projectId}/deploymentRule'
            .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(projectDeploymentRuleRequest, "ProjectDeploymentRuleRequest", ""),
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
     * Delete a project deployment rule
     * @param projectId Project ID
     * @param deploymentRuleId Deployment Rule ID
     */
    public async deleteProjectDeploymentRule(projectId: string, deploymentRuleId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new RequiredError("ProjectDeploymentRuleApi", "deleteProjectDeploymentRule", "projectId");
        }


        // verify required parameter 'deploymentRuleId' is not null or undefined
        if (deploymentRuleId === null || deploymentRuleId === undefined) {
            throw new RequiredError("ProjectDeploymentRuleApi", "deleteProjectDeploymentRule", "deploymentRuleId");
        }


        // Path Params
        const localVarPath = '/project/{projectId}/deploymentRule/{deploymentRuleId}'
            .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)))
            .replace('{' + 'deploymentRuleId' + '}', encodeURIComponent(String(deploymentRuleId)));

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
     * Edit a project deployment rule
     * @param projectId Project ID
     * @param deploymentRuleId Deployment Rule ID
     * @param projectDeploymentRuleRequest 
     */
    public async editProjectDeployemtnRule(projectId: string, deploymentRuleId: string, projectDeploymentRuleRequest?: ProjectDeploymentRuleRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new RequiredError("ProjectDeploymentRuleApi", "editProjectDeployemtnRule", "projectId");
        }


        // verify required parameter 'deploymentRuleId' is not null or undefined
        if (deploymentRuleId === null || deploymentRuleId === undefined) {
            throw new RequiredError("ProjectDeploymentRuleApi", "editProjectDeployemtnRule", "deploymentRuleId");
        }



        // Path Params
        const localVarPath = '/project/{projectId}/deploymentRule/{deploymentRuleId}'
            .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)))
            .replace('{' + 'deploymentRuleId' + '}', encodeURIComponent(String(deploymentRuleId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(projectDeploymentRuleRequest, "ProjectDeploymentRuleRequest", ""),
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
     * Get project deployment rule
     * @param projectId Project ID
     * @param deploymentRuleId Deployment Rule ID
     */
    public async getProjectDeploymentRule(projectId: string, deploymentRuleId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new RequiredError("ProjectDeploymentRuleApi", "getProjectDeploymentRule", "projectId");
        }


        // verify required parameter 'deploymentRuleId' is not null or undefined
        if (deploymentRuleId === null || deploymentRuleId === undefined) {
            throw new RequiredError("ProjectDeploymentRuleApi", "getProjectDeploymentRule", "deploymentRuleId");
        }


        // Path Params
        const localVarPath = '/project/{projectId}/deploymentRule/{deploymentRuleId}'
            .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)))
            .replace('{' + 'deploymentRuleId' + '}', encodeURIComponent(String(deploymentRuleId)));

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
     * List project deployment rules
     * @param projectId Project ID
     */
    public async listProjectDeploymentRule(projectId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new RequiredError("ProjectDeploymentRuleApi", "listProjectDeploymentRule", "projectId");
        }


        // Path Params
        const localVarPath = '/project/{projectId}/deploymentRule'
            .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));

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

export class ProjectDeploymentRuleApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDeploymentRule
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDeploymentRule(response: ResponseContext): Promise<ProjectDeploymentRuleResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ProjectDeploymentRuleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProjectDeploymentRuleResponse", ""
            ) as ProjectDeploymentRuleResponse;
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
            const body: ProjectDeploymentRuleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProjectDeploymentRuleResponse", ""
            ) as ProjectDeploymentRuleResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteProjectDeploymentRule
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteProjectDeploymentRule(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to editProjectDeployemtnRule
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async editProjectDeployemtnRule(response: ResponseContext): Promise<ProjectDeploymentRuleResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProjectDeploymentRuleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProjectDeploymentRuleResponse", ""
            ) as ProjectDeploymentRuleResponse;
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
            throw new ApiException<undefined>(response.httpStatusCode, "Project name within the organization is already taken", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProjectDeploymentRuleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProjectDeploymentRuleResponse", ""
            ) as ProjectDeploymentRuleResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getProjectDeploymentRule
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getProjectDeploymentRule(response: ResponseContext): Promise<ProjectDeploymentRuleResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProjectDeploymentRuleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProjectDeploymentRuleResponse", ""
            ) as ProjectDeploymentRuleResponse;
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
            const body: ProjectDeploymentRuleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProjectDeploymentRuleResponse", ""
            ) as ProjectDeploymentRuleResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listProjectDeploymentRule
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listProjectDeploymentRule(response: ResponseContext): Promise<ProjectDeploymentRuleResponseList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProjectDeploymentRuleResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProjectDeploymentRuleResponseList", ""
            ) as ProjectDeploymentRuleResponseList;
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
            const body: ProjectDeploymentRuleResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProjectDeploymentRuleResponseList", ""
            ) as ProjectDeploymentRuleResponseList;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
