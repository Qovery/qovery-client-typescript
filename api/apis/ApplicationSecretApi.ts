// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { Key } from '..model/models/Key';
import { SecretEditRequest } from '..model/models/SecretEditRequest';
import { SecretRequest } from '..model/models/SecretRequest';
import { SecretResponse } from '..model/models/SecretResponse';
import { SecretResponseList } from '..model/models/SecretResponseList';
import { Value } from '..model/models/Value';

/**
 * no description
 */
export class ApplicationSecretApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * - Add a secret to the application. 
     * Add a secret to the application
     * @param applicationId Application ID
     * @param secretRequest 
     */
    public async createApplicationSecret(applicationId: string, secretRequest?: SecretRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'applicationId' is not null or undefined
        if (applicationId === null || applicationId === undefined) {
            throw new RequiredError("ApplicationSecretApi", "createApplicationSecret", "applicationId");
        }



        // Path Params
        const localVarPath = '/application/{applicationId}/secret'
            .replace('{' + 'applicationId' + '}', encodeURIComponent(String(applicationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(secretRequest, "SecretRequest", ""),
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
     * - Allows you to add an alias at application level on an existing secret having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new secret at application level with the same value as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the aliased_secret will be exposed in the \"aliased_secret\" field of the newly created secret - Only 1 alias level is allowed. You can't create an alias on an alias 
     * Create a secret alias at the application level
     * @param applicationId Application ID
     * @param secretId Secret ID
     * @param key 
     */
    public async createApplicationSecretAlias(applicationId: string, secretId: string, key?: Key, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'applicationId' is not null or undefined
        if (applicationId === null || applicationId === undefined) {
            throw new RequiredError("ApplicationSecretApi", "createApplicationSecretAlias", "applicationId");
        }


        // verify required parameter 'secretId' is not null or undefined
        if (secretId === null || secretId === undefined) {
            throw new RequiredError("ApplicationSecretApi", "createApplicationSecretAlias", "secretId");
        }



        // Path Params
        const localVarPath = '/application/{applicationId}/secret/{secretId}/alias'
            .replace('{' + 'applicationId' + '}', encodeURIComponent(String(applicationId)))
            .replace('{' + 'secretId' + '}', encodeURIComponent(String(secretId)));

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
     * - Allows you to override at application level a secret that has a higher scope. - You only have to specify a value in the request body - The system will create a new secret at application level with the same key as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the overridden_secret will be exposed in the \"overridden_secret\" field of the newly created secret 
     * Create a secret override at the application level
     * @param applicationId Application ID
     * @param secretId Secret ID
     * @param value 
     */
    public async createApplicationSecretOverride(applicationId: string, secretId: string, value?: Value, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'applicationId' is not null or undefined
        if (applicationId === null || applicationId === undefined) {
            throw new RequiredError("ApplicationSecretApi", "createApplicationSecretOverride", "applicationId");
        }


        // verify required parameter 'secretId' is not null or undefined
        if (secretId === null || secretId === undefined) {
            throw new RequiredError("ApplicationSecretApi", "createApplicationSecretOverride", "secretId");
        }



        // Path Params
        const localVarPath = '/application/{applicationId}/secret/{secretId}/override'
            .replace('{' + 'applicationId' + '}', encodeURIComponent(String(applicationId)))
            .replace('{' + 'secretId' + '}', encodeURIComponent(String(secretId)));

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
     * - To delete a secret you must have the project user permission - You can't delete a BUILT_IN secret - If you delete a secret having override or alias, the associated override/alias will be deleted as well 
     * Delete a secret from an application
     * @param applicationId Application ID
     * @param secretId Secret ID
     */
    public async deleteApplicationSecret(applicationId: string, secretId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'applicationId' is not null or undefined
        if (applicationId === null || applicationId === undefined) {
            throw new RequiredError("ApplicationSecretApi", "deleteApplicationSecret", "applicationId");
        }


        // verify required parameter 'secretId' is not null or undefined
        if (secretId === null || secretId === undefined) {
            throw new RequiredError("ApplicationSecretApi", "deleteApplicationSecret", "secretId");
        }


        // Path Params
        const localVarPath = '/application/{applicationId}/secret/{secretId}'
            .replace('{' + 'applicationId' + '}', encodeURIComponent(String(applicationId)))
            .replace('{' + 'secretId' + '}', encodeURIComponent(String(secretId)));

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
     * - You can't edit a BUILT_IN secret - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the secret it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 
     * Edit a secret belonging to the application
     * @param applicationId Application ID
     * @param secretId Secret ID
     * @param secretEditRequest 
     */
    public async editApplicationSecret(applicationId: string, secretId: string, secretEditRequest: SecretEditRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'applicationId' is not null or undefined
        if (applicationId === null || applicationId === undefined) {
            throw new RequiredError("ApplicationSecretApi", "editApplicationSecret", "applicationId");
        }


        // verify required parameter 'secretId' is not null or undefined
        if (secretId === null || secretId === undefined) {
            throw new RequiredError("ApplicationSecretApi", "editApplicationSecret", "secretId");
        }


        // verify required parameter 'secretEditRequest' is not null or undefined
        if (secretEditRequest === null || secretEditRequest === undefined) {
            throw new RequiredError("ApplicationSecretApi", "editApplicationSecret", "secretEditRequest");
        }


        // Path Params
        const localVarPath = '/application/{applicationId}/secret/{secretId}'
            .replace('{' + 'applicationId' + '}', encodeURIComponent(String(applicationId)))
            .replace('{' + 'secretId' + '}', encodeURIComponent(String(secretId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(secretEditRequest, "SecretEditRequest", ""),
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
     * Secrets are like environment variables, but they are secured and can't be revealed.
     * List application secrets
     * @param applicationId Application ID
     */
    public async listApplicationSecrets(applicationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'applicationId' is not null or undefined
        if (applicationId === null || applicationId === undefined) {
            throw new RequiredError("ApplicationSecretApi", "listApplicationSecrets", "applicationId");
        }


        // Path Params
        const localVarPath = '/application/{applicationId}/secret'
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

}

export class ApplicationSecretApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createApplicationSecret
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createApplicationSecret(response: ResponseContext): Promise<SecretResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: SecretResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecretResponse", ""
            ) as SecretResponse;
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
            const body: SecretResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecretResponse", ""
            ) as SecretResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createApplicationSecretAlias
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createApplicationSecretAlias(response: ResponseContext): Promise<SecretResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: SecretResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecretResponse", ""
            ) as SecretResponse;
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
            const body: SecretResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecretResponse", ""
            ) as SecretResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createApplicationSecretOverride
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createApplicationSecretOverride(response: ResponseContext): Promise<SecretResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: SecretResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecretResponse", ""
            ) as SecretResponse;
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
            const body: SecretResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecretResponse", ""
            ) as SecretResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteApplicationSecret
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteApplicationSecret(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to editApplicationSecret
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async editApplicationSecret(response: ResponseContext): Promise<SecretResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SecretResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecretResponse", ""
            ) as SecretResponse;
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
            const body: SecretResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecretResponse", ""
            ) as SecretResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listApplicationSecrets
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listApplicationSecrets(response: ResponseContext): Promise<SecretResponseList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SecretResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecretResponseList", ""
            ) as SecretResponseList;
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
            const body: SecretResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecretResponseList", ""
            ) as SecretResponseList;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
