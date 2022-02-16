# .EnvironmentVariableApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEnvironmentEnvironmentVariable**](EnvironmentVariableApi.md#createEnvironmentEnvironmentVariable) | **POST** /environment/{environmentId}/environmentVariable | Add an environment variable to the environment
[**createEnvironmentEnvironmentVariableAlias**](EnvironmentVariableApi.md#createEnvironmentEnvironmentVariableAlias) | **POST** /environment/{environmentId}/environmentVariable/{environmentVariableId}/alias | Create an environment variable alias at the environment level
[**createEnvironmentEnvironmentVariableOverride**](EnvironmentVariableApi.md#createEnvironmentEnvironmentVariableOverride) | **POST** /environment/{environmentId}/environmentVariable/{environmentVariableId}/override | Create an environment variable override at the environment level
[**deleteEnvironmentEnvironmentVariable**](EnvironmentVariableApi.md#deleteEnvironmentEnvironmentVariable) | **DELETE** /environment/{environmentId}/environmentVariable/{environmentVariableId} | Delete an environment variable from an environment
[**editEnvironmentEnvironmentVariable**](EnvironmentVariableApi.md#editEnvironmentEnvironmentVariable) | **PUT** /environment/{environmentId}/environmentVariable/{environmentVariableId} | Edit an environment variable belonging to the environment
[**listEnvironmentEnvironmentVariable**](EnvironmentVariableApi.md#listEnvironmentEnvironmentVariable) | **GET** /environment/{environmentId}/environmentVariable | List environment variables


# **createEnvironmentEnvironmentVariable**
> EnvironmentVariableResponse createEnvironmentEnvironmentVariable()

- Add an environment variable to the environment.   - If the environment variable key already exists, then it will be replaced by the new one.   - If the environment variable value points toward an existing environment variable key, it will be considered as an alias. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentVariableApi(configuration);

let body:.EnvironmentVariableApiCreateEnvironmentEnvironmentVariableRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
  // EnvironmentVariableRequest (optional)
  environmentVariableRequest: {
    key: "key_example",
    value: "value_example",
  },
};

apiInstance.createEnvironmentEnvironmentVariable(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentVariableRequest** | **EnvironmentVariableRequest**|  |
 **environmentId** | [**string**] | Environment ID | defaults to undefined


### Return type

**EnvironmentVariableResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Added an environment variable |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createEnvironmentEnvironmentVariableAlias**
> EnvironmentVariableResponse createEnvironmentEnvironmentVariableAlias()

- Allows you to add an alias at environment level on an existing environment variable having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new environment variable at environment level with the same value as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the aliased_variable will be exposed in the \"aliased_variable\" field of the newly created variable - Only 1 alias level is allowed. You can't create an alias on an alias 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentVariableApi(configuration);

let body:.EnvironmentVariableApiCreateEnvironmentEnvironmentVariableAliasRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
  // string | Environment Variable ID
  environmentVariableId: "environmentVariableId_example",
  // Key (optional)
  key: {
    key: "key_example",
  },
};

apiInstance.createEnvironmentEnvironmentVariableAlias(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **Key**|  |
 **environmentId** | [**string**] | Environment ID | defaults to undefined
 **environmentVariableId** | [**string**] | Environment Variable ID | defaults to undefined


### Return type

**EnvironmentVariableResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Create variable alias |  -  |
**400** | Can&#39;t create an alias on a higher scope. Aliases can only be created from one scope to a lower scope. Scope hierarchy is BUILT_IN &gt; PROJECT &gt; ENVIRONMENT &gt; APPLICATION |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createEnvironmentEnvironmentVariableOverride**
> EnvironmentVariableResponse createEnvironmentEnvironmentVariableOverride()

- Allows you to override at environment level an environment variable that has a higher scope. - You only have to specify a value in the request body - The system will create a new environment variable at environment level with the same key as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the overridden_variable will be exposed in the \"overridden_variable\" field of the newly created variable 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentVariableApi(configuration);

let body:.EnvironmentVariableApiCreateEnvironmentEnvironmentVariableOverrideRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
  // string | Environment Variable ID
  environmentVariableId: "environmentVariableId_example",
  // Value (optional)
  value: {
    value: "value_example",
  },
};

apiInstance.createEnvironmentEnvironmentVariableOverride(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **Value**|  |
 **environmentId** | [**string**] | Environment ID | defaults to undefined
 **environmentVariableId** | [**string**] | Environment Variable ID | defaults to undefined


### Return type

**EnvironmentVariableResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Create variable override |  -  |
**400** | Can&#39;t create an override on a higher scope. Overrides can only be created from one scope to a lower scope. Scope hierarchy is BUILT_IN &gt; PROJECT &gt; ENVIRONMENT &gt; APPLICATION |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteEnvironmentEnvironmentVariable**
> void deleteEnvironmentEnvironmentVariable()

- To delete an environment variable you must have the project user permission - You can't delete a BUILT_IN variable - If you delete a variable having override or alias, the associated override/alias will be deleted as well 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentVariableApi(configuration);

let body:.EnvironmentVariableApiDeleteEnvironmentEnvironmentVariableRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
  // string | Environment Variable ID
  environmentVariableId: "environmentVariableId_example",
};

apiInstance.deleteEnvironmentEnvironmentVariable(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] | Environment ID | defaults to undefined
 **environmentVariableId** | [**string**] | Environment Variable ID | defaults to undefined


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

# **editEnvironmentEnvironmentVariable**
> EnvironmentVariableResponse editEnvironmentEnvironmentVariable(environmentVariableEditRequest)

- You can't edit a BUILT_IN variable - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the variable it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentVariableApi(configuration);

let body:.EnvironmentVariableApiEditEnvironmentEnvironmentVariableRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
  // string | Environment Variable ID
  environmentVariableId: "environmentVariableId_example",
  // EnvironmentVariableEditRequest
  environmentVariableEditRequest: {
    key: "key_example",
    value: "value_example",
  },
};

apiInstance.editEnvironmentEnvironmentVariable(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentVariableEditRequest** | **EnvironmentVariableEditRequest**|  |
 **environmentId** | [**string**] | Environment ID | defaults to undefined
 **environmentVariableId** | [**string**] | Environment Variable ID | defaults to undefined


### Return type

**EnvironmentVariableResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Edited the environment variable value |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listEnvironmentEnvironmentVariable**
> EnvironmentVariableResponseList listEnvironmentEnvironmentVariable()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentVariableApi(configuration);

let body:.EnvironmentVariableApiListEnvironmentEnvironmentVariableRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
};

apiInstance.listEnvironmentEnvironmentVariable(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] | Environment ID | defaults to undefined


### Return type

**EnvironmentVariableResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List environment variables |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


