// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { EnvironmentDeploymentRuleEditRequest } from '..model/models/EnvironmentDeploymentRuleEditRequest';
import { EnvironmentDeploymentRuleResponse } from '..model/models/EnvironmentDeploymentRuleResponse';

/**
 * no description
 */
export class EnvironmentDeploymentRuleApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Edit an environment deployment rule
     * @param environmentId Environment ID
     * @param deploymentRuleId Deployment Rule ID
     * @param environmentDeploymentRuleEditRequest 
     */
    public async editEnvironmentDeploymentRule(environmentId: string, deploymentRuleId: string, environmentDeploymentRuleEditRequest?: EnvironmentDeploymentRuleEditRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'environmentId' is not null or undefined
        if (environmentId === null || environmentId === undefined) {
            throw new RequiredError("EnvironmentDeploymentRuleApi", "editEnvironmentDeploymentRule", "environmentId");
        }


        // verify required parameter 'deploymentRuleId' is not null or undefined
        if (deploymentRuleId === null || deploymentRuleId === undefined) {
            throw new RequiredError("EnvironmentDeploymentRuleApi", "editEnvironmentDeploymentRule", "deploymentRuleId");
        }



        // Path Params
        const localVarPath = '/environment/{environmentId}/deploymentRule/{deploymentRuleId}'
            .replace('{' + 'environmentId' + '}', encodeURIComponent(String(environmentId)))
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
            ObjectSerializer.serialize(environmentDeploymentRuleEditRequest, "EnvironmentDeploymentRuleEditRequest", ""),
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
     * Get environment deployment rule
     * @param environmentId Environment ID
     */
    public async getEnvironmentDeploymentRule(environmentId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'environmentId' is not null or undefined
        if (environmentId === null || environmentId === undefined) {
            throw new RequiredError("EnvironmentDeploymentRuleApi", "getEnvironmentDeploymentRule", "environmentId");
        }


        // Path Params
        const localVarPath = '/environment/{environmentId}/deploymentRule'
            .replace('{' + 'environmentId' + '}', encodeURIComponent(String(environmentId)));

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

export class EnvironmentDeploymentRuleApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to editEnvironmentDeploymentRule
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async editEnvironmentDeploymentRule(response: ResponseContext): Promise<EnvironmentDeploymentRuleResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EnvironmentDeploymentRuleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnvironmentDeploymentRuleResponse", ""
            ) as EnvironmentDeploymentRuleResponse;
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
            const body: EnvironmentDeploymentRuleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnvironmentDeploymentRuleResponse", ""
            ) as EnvironmentDeploymentRuleResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEnvironmentDeploymentRule
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEnvironmentDeploymentRule(response: ResponseContext): Promise<EnvironmentDeploymentRuleResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EnvironmentDeploymentRuleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnvironmentDeploymentRuleResponse", ""
            ) as EnvironmentDeploymentRuleResponse;
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
            const body: EnvironmentDeploymentRuleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnvironmentDeploymentRuleResponse", ""
            ) as EnvironmentDeploymentRuleResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
