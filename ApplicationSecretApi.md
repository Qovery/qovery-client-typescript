# .ApplicationSecretApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplicationSecret**](ApplicationSecretApi.md#createApplicationSecret) | **POST** /application/{applicationId}/secret | Add a secret to the application
[**createApplicationSecretAlias**](ApplicationSecretApi.md#createApplicationSecretAlias) | **POST** /application/{applicationId}/secret/{secretId}/alias | Create a secret alias at the application level
[**createApplicationSecretOverride**](ApplicationSecretApi.md#createApplicationSecretOverride) | **POST** /application/{applicationId}/secret/{secretId}/override | Create a secret override at the application level
[**deleteApplicationSecret**](ApplicationSecretApi.md#deleteApplicationSecret) | **DELETE** /application/{applicationId}/secret/{secretId} | Delete a secret from an application
[**editApplicationSecret**](ApplicationSecretApi.md#editApplicationSecret) | **PUT** /application/{applicationId}/secret/{secretId} | Edit a secret belonging to the application
[**listApplicationSecrets**](ApplicationSecretApi.md#listApplicationSecrets) | **GET** /application/{applicationId}/secret | List application secrets


# **createApplicationSecret**
> SecretResponse createApplicationSecret()

- Add a secret to the application. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationSecretApi(configuration);

let body:.ApplicationSecretApiCreateApplicationSecretRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // SecretRequest (optional)
  secretRequest: {
    key: "key_example",
    value: "value_example",
  },
};

apiInstance.createApplicationSecret(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **secretRequest** | **SecretRequest**|  |
 **applicationId** | [**string**] | Application ID | defaults to undefined


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
**201** | Add a secret |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createApplicationSecretAlias**
> SecretResponse createApplicationSecretAlias()

- Allows you to add an alias at application level on an existing secret having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new secret at application level with the same value as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the aliased_secret will be exposed in the \"aliased_secret\" field of the newly created secret - Only 1 alias level is allowed. You can't create an alias on an alias 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationSecretApi(configuration);

let body:.ApplicationSecretApiCreateApplicationSecretAliasRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // string | Secret ID
  secretId: "secretId_example",
  // Key (optional)
  key: {
    key: "key_example",
  },
};

apiInstance.createApplicationSecretAlias(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **Key**|  |
 **applicationId** | [**string**] | Application ID | defaults to undefined
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

# **createApplicationSecretOverride**
> SecretResponse createApplicationSecretOverride()

- Allows you to override at application level a secret that has a higher scope. - You only have to specify a value in the request body - The system will create a new secret at application level with the same key as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the overridden_secret will be exposed in the \"overridden_secret\" field of the newly created secret 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationSecretApi(configuration);

let body:.ApplicationSecretApiCreateApplicationSecretOverrideRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // string | Secret ID
  secretId: "secretId_example",
  // Value (optional)
  value: {
    value: "value_example",
  },
};

apiInstance.createApplicationSecretOverride(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **Value**|  |
 **applicationId** | [**string**] | Application ID | defaults to undefined
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

# **deleteApplicationSecret**
> void deleteApplicationSecret()

- To delete a secret you must have the project user permission - You can't delete a BUILT_IN secret - If you delete a secret having override or alias, the associated override/alias will be deleted as well 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationSecretApi(configuration);

let body:.ApplicationSecretApiDeleteApplicationSecretRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // string | Secret ID
  secretId: "secretId_example",
};

apiInstance.deleteApplicationSecret(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined
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

# **editApplicationSecret**
> SecretResponse editApplicationSecret(secretEditRequest)

- You can't edit a BUILT_IN secret - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the secret it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationSecretApi(configuration);

let body:.ApplicationSecretApiEditApplicationSecretRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // string | Secret ID
  secretId: "secretId_example",
  // SecretEditRequest
  secretEditRequest: {
    value: "value_example",
    key: "key_example",
  },
};

apiInstance.editApplicationSecret(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **secretEditRequest** | **SecretEditRequest**|  |
 **applicationId** | [**string**] | Application ID | defaults to undefined
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

# **listApplicationSecrets**
> SecretResponseList listApplicationSecrets()

Secrets are like environment variables, but they are secured and can't be revealed.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationSecretApi(configuration);

let body:.ApplicationSecretApiListApplicationSecretsRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
};

apiInstance.listApplicationSecrets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined


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
**200** | List secrets |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


