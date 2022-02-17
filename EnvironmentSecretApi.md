# .EnvironmentSecretApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEnvironmentSecret**](EnvironmentSecretApi.md#createEnvironmentSecret) | **POST** /environment/{environmentId}/secret | Add a secret to the environment
[**createEnvironmentSecretAlias**](EnvironmentSecretApi.md#createEnvironmentSecretAlias) | **POST** /environment/{environmentId}/secret/{secretId}/alias | Create a secret alias at the environment level
[**createEnvironmentSecretOverride**](EnvironmentSecretApi.md#createEnvironmentSecretOverride) | **POST** /environment/{environmentId}/secret/{secretId}/override | Create a secret override at the environment level
[**deleteEnvironmentSecret**](EnvironmentSecretApi.md#deleteEnvironmentSecret) | **DELETE** /environment/{environmentId}/secret/{secretId} | Delete a secret from the environment
[**editEnvironmentSecret**](EnvironmentSecretApi.md#editEnvironmentSecret) | **PUT** /environment/{environmentId}/secret/{secretId} | Edit a secret belonging to the environment
[**listEnvironmentSecrets**](EnvironmentSecretApi.md#listEnvironmentSecrets) | **GET** /environment/{environmentId}/secret | List environment secrets


# **createEnvironmentSecret**
> SecretResponse createEnvironmentSecret()

- Add a secret to the environment.   - If the secret key already exists, then it will be replaced by the new one.   - If the secret value points toward an existing secret key, it will be considered as an alias. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentSecretApi(configuration);

let body:.EnvironmentSecretApiCreateEnvironmentSecretRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
  // SecretRequest (optional)
  secretRequest: {
    key: "key_example",
    value: "value_example",
  },
};

apiInstance.createEnvironmentSecret(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **secretRequest** | **SecretRequest**|  |
 **environmentId** | [**string**] | Environment ID | defaults to undefined


### Return type

**SecretResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Added a secret |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createEnvironmentSecretAlias**
> SecretResponse createEnvironmentSecretAlias()

- Allows you to add an alias at environment level on an existing secret having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new secret at environment level with the same value as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the aliased_secret will be exposed in the \"aliased_secret\" field of the newly created secret - Only 1 alias level is allowed. You can't create an alias on an alias 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentSecretApi(configuration);

let body:.EnvironmentSecretApiCreateEnvironmentSecretAliasRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
  // string | Secret ID
  secretId: "secretId_example",
  // Key (optional)
  key: {
    key: "key_example",
  },
};

apiInstance.createEnvironmentSecretAlias(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **Key**|  |
 **environmentId** | [**string**] | Environment ID | defaults to undefined
 **secretId** | [**string**] | Secret ID | defaults to undefined


### Return type

**SecretResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Create secret alias |  -  |
**400** | Can&#39;t create an alias on a higher scope. Aliases can only be created from one scope to a lower scope. Scope hierarchy is BUILT_IN &gt; PROJECT &gt; ENVIRONMENT &gt; APPLICATION |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createEnvironmentSecretOverride**
> SecretResponse createEnvironmentSecretOverride()

- Allows you to override at environment level a secret that has a higher scope. - You only have to specify a value in the request body - The system will create a new secret at environment level with the same key as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the overridden_secret will be exposed in the \"overridden_secret\" field of the newly created secret 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentSecretApi(configuration);

let body:.EnvironmentSecretApiCreateEnvironmentSecretOverrideRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
  // string | Secret ID
  secretId: "secretId_example",
  // Value (optional)
  value: {
    value: "value_example",
  },
};

apiInstance.createEnvironmentSecretOverride(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **Value**|  |
 **environmentId** | [**string**] | Environment ID | defaults to undefined
 **secretId** | [**string**] | Secret ID | defaults to undefined


### Return type

**SecretResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Create secret override |  -  |
**400** | Can&#39;t create an override on a higher scope. Overrides can only be created from one scope to a lower scope. Scope hierarchy is BUILT_IN &gt; PROJECT &gt; ENVIRONMENT &gt; APPLICATION |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteEnvironmentSecret**
> void deleteEnvironmentSecret()

- To delete a secret you must have the project user permission - You can't delete a BUILT_IN secret - If you delete a secret having override or alias, the associated override/alias will be deleted as well  operationId: deleteEnvironmentSecret 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentSecretApi(configuration);

let body:.EnvironmentSecretApiDeleteEnvironmentSecretRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
  // string | Secret ID
  secretId: "secretId_example",
};

apiInstance.deleteEnvironmentSecret(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] | Environment ID | defaults to undefined
 **secretId** | [**string**] | Secret ID | defaults to undefined


### Return type

**void**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The resource was deleted successfully |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **editEnvironmentSecret**
> SecretResponse editEnvironmentSecret(secretEditRequest)

- You can't edit a BUILT_IN secret - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the secret it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentSecretApi(configuration);

let body:.EnvironmentSecretApiEditEnvironmentSecretRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
  // string | Secret ID
  secretId: "secretId_example",
  // SecretEditRequest
  secretEditRequest: {
    value: "value_example",
    key: "key_example",
  },
};

apiInstance.editEnvironmentSecret(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **secretEditRequest** | **SecretEditRequest**|  |
 **environmentId** | [**string**] | Environment ID | defaults to undefined
 **secretId** | [**string**] | Secret ID | defaults to undefined


### Return type

**SecretResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Edited the secret value |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listEnvironmentSecrets**
> SecretResponseList listEnvironmentSecrets()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentSecretApi(configuration);

let body:.EnvironmentSecretApiListEnvironmentSecretsRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
};

apiInstance.listEnvironmentSecrets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] | Environment ID | defaults to undefined


### Return type

**SecretResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List environment secrets |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


