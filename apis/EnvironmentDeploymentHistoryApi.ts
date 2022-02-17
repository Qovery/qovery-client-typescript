// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { DeploymentHistoryEnvironmentPaginatedResponseList } from '../models/DeploymentHistoryEnvironmentPaginatedResponseList';

/**
 * no description
 */
export class EnvironmentDeploymentHistoryApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * List previous and current environment deployments with the status deployment and the related services. By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter
     * List environment deployments
     * @param environmentId Environment ID
     * @param startId Starting point after which to return results
     */
    public async listEnvironmentDeploymentHistory(environmentId: string, startId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'environmentId' is not null or undefined
        if (environmentId === null || environmentId === undefined) {
            throw new RequiredError("EnvironmentDeploymentHistoryApi", "listEnvironmentDeploymentHistory", "environmentId");
        }



        // Path Params
        const localVarPath = '/environment/{environmentId}/deploymentHistory'
            .replace('{' + 'environmentId' + '}', encodeURIComponent(String(environmentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (startId !== undefined) {
            requestContext.setQueryParam("startId", ObjectSerializer.serialize(startId, "string", "uuid"));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class EnvironmentDeploymentHistoryApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listEnvironmentDeploymentHistory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listEnvironmentDeploymentHistory(response: ResponseContext): Promise<DeploymentHistoryEnvironmentPaginatedResponseList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeploymentHistoryEnvironmentPaginatedResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeploymentHistoryEnvironmentPaginatedResponseList", ""
            ) as DeploymentHistoryEnvironmentPaginatedResponseList;
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
            const body: DeploymentHistoryEnvironmentPaginatedResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeploymentHistoryEnvironmentPaginatedResponseList", ""
            ) as DeploymentHistoryEnvironmentPaginatedResponseList;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
