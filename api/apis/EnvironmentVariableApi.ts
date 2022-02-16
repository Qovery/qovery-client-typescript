// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { EnvironmentVariableEditRequest } from '..model/models/EnvironmentVariableEditRequest';
import { EnvironmentVariableRequest } from '..model/models/EnvironmentVariableRequest';
import { EnvironmentVariableResponse } from '..model/models/EnvironmentVariableResponse';
import { EnvironmentVariableResponseList } from '..model/models/EnvironmentVariableResponseList';
import { Key } from '..model/models/Key';
import { Value } from '..model/models/Value';

/**
 * no description
 */
export class EnvironmentVariableApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * - Add an environment variable to the environment.   - If the environment variable key already exists, then it will be replaced by the new one.   - If the environment variable value points toward an existing environment variable key, it will be considered as an alias. 
     * Add an environment variable to the environment
     * @param environmentId Environment ID
     * @param environmentVariableRequest 
     */
    public async createEnvironmentEnvironmentVariable(environmentId: string, environmentVariableRequest?: EnvironmentVariableRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'environmentId' is not null or undefined
        if (environmentId === null || environmentId === undefined) {
            throw new RequiredError("EnvironmentVariableApi", "createEnvironmentEnvironmentVariable", "environmentId");
        }



        // Path Params
        const localVarPath = '/environment/{environmentId}/environmentVariable'
            .replace('{' + 'environmentId' + '}', encodeURIComponent(String(environmentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(environmentVariableRequest, "EnvironmentVariableRequest", ""),
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
     * - Allows you to add an alias at environment level on an existing environment variable having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new environment variable at environment level with the same value as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the aliased_variable will be exposed in the \"aliased_variable\" field of the newly created variable - Only 1 alias level is allowed. You can't create an alias on an alias 
     * Create an environment variable alias at the environment level
     * @param environmentId Environment ID
     * @param environmentVariableId Environment Variable ID
     * @param key 
     */
    public async createEnvironmentEnvironmentVariableAlias(environmentId: string, environmentVariableId: string, key?: Key, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'environmentId' is not null or undefined
        if (environmentId === null || environmentId === undefined) {
            throw new RequiredError("EnvironmentVariableApi", "createEnvironmentEnvironmentVariableAlias", "environmentId");
        }


        // verify required parameter 'environmentVariableId' is not null or undefined
        if (environmentVariableId === null || environmentVariableId === undefined) {
            throw new RequiredError("EnvironmentVariableApi", "createEnvironmentEnvironmentVariableAlias", "environmentVariableId");
        }



        // Path Params
        const localVarPath = '/environment/{environmentId}/environmentVariable/{environmentVariableId}/alias'
            .replace('{' + 'environmentId' + '}', encodeURIComponent(String(environmentId)))
            .replace('{' + 'environmentVariableId' + '}', encodeURIComponent(String(environmentVariableId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(key, "Key", ""),
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
     * - Allows you to override at environment level an environment variable that has a higher scope. - You only have to specify a value in the request body - The system will create a new environment variable at environment level with the same key as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the overridden_variable will be exposed in the \"overridden_variable\" field of the newly created variable 
     * Create an environment variable override at the environment level
     * @param environmentId Environment ID
     * @param environmentVariableId Environment Variable ID
     * @param value 
     */
    public async createEnvironmentEnvironmentVariableOverride(environmentId: string, environmentVariableId: string, value?: Value, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'environmentId' is not null or undefined
        if (environmentId === null || environmentId === undefined) {
            throw new RequiredError("EnvironmentVariableApi", "createEnvironmentEnvironmentVariableOverride", "environmentId");
        }


        // verify required parameter 'environmentVariableId' is not null or undefined
        if (environmentVariableId === null || environmentVariableId === undefined) {
            throw new RequiredError("EnvironmentVariableApi", "createEnvironmentEnvironmentVariableOverride", "environmentVariableId");
        }



        // Path Params
        const localVarPath = '/environment/{environmentId}/environmentVariable/{environmentVariableId}/override'
            .replace('{' + 'environmentId' + '}', encodeURIComponent(String(environmentId)))
            .replace('{' + 'environmentVariableId' + '}', encodeURIComponent(String(environmentVariableId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(value, "Value", ""),
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
     * - To delete an environment variable you must have the project user permission - You can't delete a BUILT_IN variable - If you delete a variable having override or alias, the associated override/alias will be deleted as well 
     * Delete an environment variable from an environment
     * @param environmentId Environment ID
     * @param environmentVariableId Environment Variable ID
     */
    public async deleteEnvironmentEnvironmentVariable(environmentId: string, environmentVariableId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'environmentId' is not null or undefined
        if (environmentId === null || environmentId === undefined) {
            throw new RequiredError("EnvironmentVariableApi", "deleteEnvironmentEnvironmentVariable", "environmentId");
        }


        // verify required parameter 'environmentVariableId' is not null or undefined
        if (environmentVariableId === null || environmentVariableId === undefined) {
            throw new RequiredError("EnvironmentVariableApi", "deleteEnvironmentEnvironmentVariable", "environmentVariableId");
        }


        // Path Params
        const localVarPath = '/environment/{environmentId}/environmentVariable/{environmentVariableId}'
            .replace('{' + 'environmentId' + '}', encodeURIComponent(String(environmentId)))
            .replace('{' + 'environmentVariableId' + '}', encodeURIComponent(String(environmentVariableId)));

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
     * - You can't edit a BUILT_IN variable - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the variable it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 
     * Edit an environment variable belonging to the environment
     * @param environmentId Environment ID
     * @param environmentVariableId Environment Variable ID
     * @param environmentVariableEditRequest 
     */
    public async editEnvironmentEnvironmentVariable(environmentId: string, environmentVariableId: string, environmentVariableEditRequest: EnvironmentVariableEditRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'environmentId' is not null or undefined
        if (environmentId === null || environmentId === undefined) {
            throw new RequiredError("EnvironmentVariableApi", "editEnvironmentEnvironmentVariable", "environmentId");
        }


        // verify required parameter 'environmentVariableId' is not null or undefined
        if (environmentVariableId === null || environmentVariableId === undefined) {
            throw new RequiredError("EnvironmentVariableApi", "editEnvironmentEnvironmentVariable", "environmentVariableId");
        }


        // verify required parameter 'environmentVariableEditRequest' is not null or undefined
        if (environmentVariableEditRequest === null || environmentVariableEditRequest === undefined) {
            throw new RequiredError("EnvironmentVariableApi", "editEnvironmentEnvironmentVariable", "environmentVariableEditRequest");
        }


        // Path Params
        const localVarPath = '/environment/{environmentId}/environmentVariable/{environmentVariableId}'
            .replace('{' + 'environmentId' + '}', encodeURIComponent(String(environmentId)))
            .replace('{' + 'environmentVariableId' + '}', encodeURIComponent(String(environmentVariableId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(environmentVariableEditRequest, "EnvironmentVariableEditRequest", ""),
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
     * List environment variables
     * @param environmentId Environment ID
     */
    public async listEnvironmentEnvironmentVariable(environmentId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'environmentId' is not null or undefined
        if (environmentId === null || environmentId === undefined) {
            throw new RequiredError("EnvironmentVariableApi", "listEnvironmentEnvironmentVariable", "environmentId");
        }


        // Path Params
        const localVarPath = '/environment/{environmentId}/environmentVariable'
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

export class EnvironmentVariableApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createEnvironmentEnvironmentVariable
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createEnvironmentEnvironmentVariable(response: ResponseContext): Promise<EnvironmentVariableResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: EnvironmentVariableResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnvironmentVariableResponse", ""
            ) as EnvironmentVariableResponse;
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
            const body: EnvironmentVariableResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnvironmentVariableResponse", ""
            ) as EnvironmentVariableResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createEnvironmentEnvironmentVariableAlias
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createEnvironmentEnvironmentVariableAlias(response: ResponseContext): Promise<EnvironmentVariableResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: EnvironmentVariableResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnvironmentVariableResponse", ""
            ) as EnvironmentVariableResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Can&#39;t create an alias on a higher scope. Aliases can only be created from one scope to a lower scope. Scope hierarchy is BUILT_IN &gt; PROJECT &gt; ENVIRONMENT &gt; APPLICATION", undefined, response.headers);
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
            const body: EnvironmentVariableResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnvironmentVariableResponse", ""
            ) as EnvironmentVariableResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createEnvironmentEnvironmentVariableOverride
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createEnvironmentEnvironmentVariableOverride(response: ResponseContext): Promise<EnvironmentVariableResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: EnvironmentVariableResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnvironmentVariableResponse", ""
            ) as EnvironmentVariableResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Can&#39;t create an override on a higher scope. Overrides can only be created from one scope to a lower scope. Scope hierarchy is BUILT_IN &gt; PROJECT &gt; ENVIRONMENT &gt; APPLICATION", undefined, response.headers);
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
            const body: EnvironmentVariableResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnvironmentVariableResponse", ""
            ) as EnvironmentVariableResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteEnvironmentEnvironmentVariable
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteEnvironmentEnvironmentVariable(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to editEnvironmentEnvironmentVariable
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async editEnvironmentEnvironmentVariable(response: ResponseContext): Promise<EnvironmentVariableResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EnvironmentVariableResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnvironmentVariableResponse", ""
            ) as EnvironmentVariableResponse;
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
            const body: EnvironmentVariableResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnvironmentVariableResponse", ""
            ) as EnvironmentVariableResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listEnvironmentEnvironmentVariable
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listEnvironmentEnvironmentVariable(response: ResponseContext): Promise<EnvironmentVariableResponseList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EnvironmentVariableResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnvironmentVariableResponseList", ""
            ) as EnvironmentVariableResponseList;
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
            const body: EnvironmentVariableResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnvironmentVariableResponseList", ""
            ) as EnvironmentVariableResponseList;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
