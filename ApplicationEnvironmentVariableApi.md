# .ApplicationEnvironmentVariableApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplicationEnvironmentVariable**](ApplicationEnvironmentVariableApi.md#createApplicationEnvironmentVariable) | **POST** /application/{applicationId}/environmentVariable | Add an environment variable to the application
[**createApplicationEnvironmentVariableAlias**](ApplicationEnvironmentVariableApi.md#createApplicationEnvironmentVariableAlias) | **POST** /application/{applicationId}/environmentVariable/{environmentVariableId}/alias | Create an environment variable alias at the application level
[**createApplicationEnvironmentVariableOverride**](ApplicationEnvironmentVariableApi.md#createApplicationEnvironmentVariableOverride) | **POST** /application/{applicationId}/environmentVariable/{environmentVariableId}/override | Create an environment variable override at the application level
[**deleteApplicationEnvironmentVariable**](ApplicationEnvironmentVariableApi.md#deleteApplicationEnvironmentVariable) | **DELETE** /application/{applicationId}/environmentVariable/{environmentVariableId} | Delete an environment variable from an application
[**editApplicationEnvironmentVariable**](ApplicationEnvironmentVariableApi.md#editApplicationEnvironmentVariable) | **PUT** /application/{applicationId}/environmentVariable/{environmentVariableId} | Edit an environment variable belonging to the application
[**importEnvironmentVariable**](ApplicationEnvironmentVariableApi.md#importEnvironmentVariable) | **POST** /application/{applicationId}/environmentVariable/import | Import variables
[**listApplicationEnvironmentVariable**](ApplicationEnvironmentVariableApi.md#listApplicationEnvironmentVariable) | **GET** /application/{applicationId}/environmentVariable | List environment variables


# **createApplicationEnvironmentVariable**
> EnvironmentVariableResponse createApplicationEnvironmentVariable()

- Add an environment variable to the application. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationEnvironmentVariableApi(configuration);

let body:.ApplicationEnvironmentVariableApiCreateApplicationEnvironmentVariableRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // EnvironmentVariableRequest (optional)
  environmentVariableRequest: {
    key: "key_example",
    value: "value_example",
  },
};

apiInstance.createApplicationEnvironmentVariable(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentVariableRequest** | **EnvironmentVariableRequest**|  |
 **applicationId** | [**string**] | Application ID | defaults to undefined


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

# **createApplicationEnvironmentVariableAlias**
> EnvironmentVariableResponse createApplicationEnvironmentVariableAlias()

- Allows you to add an alias at application level on an existing environment variable having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new environment variable at application level with the same value as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the aliased_variable will be exposed in the \"aliased_variable\" field of the newly created variable - Only 1 alias level is allowed. You can't create an alias on an alias 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationEnvironmentVariableApi(configuration);

let body:.ApplicationEnvironmentVariableApiCreateApplicationEnvironmentVariableAliasRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // string | Environment Variable ID
  environmentVariableId: "environmentVariableId_example",
  // Key (optional)
  key: {
    key: "key_example",
  },
};

apiInstance.createApplicationEnvironmentVariableAlias(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **Key**|  |
 **applicationId** | [**string**] | Application ID | defaults to undefined
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

# **createApplicationEnvironmentVariableOverride**
> EnvironmentVariableResponse createApplicationEnvironmentVariableOverride()

- Allows you to override at application level an environment variable that has a higher scope. - You only have to specify a value in the request body - The system will create a new environment variable at application level with the same key as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the overridden_variable will be exposed in the \"overridden_variable\" field of the newly created variable 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationEnvironmentVariableApi(configuration);

let body:.ApplicationEnvironmentVariableApiCreateApplicationEnvironmentVariableOverrideRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // string | Environment Variable ID
  environmentVariableId: "environmentVariableId_example",
  // Value (optional)
  value: {
    value: "value_example",
  },
};

apiInstance.createApplicationEnvironmentVariableOverride(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **Value**|  |
 **applicationId** | [**string**] | Application ID | defaults to undefined
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

# **deleteApplicationEnvironmentVariable**
> void deleteApplicationEnvironmentVariable()

- To delete an environment variable from an application you must have the project user permission - You can't delete a BUILT_IN variable - If you delete a variable having override or alias, the associated override/alias will be deleted as well 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationEnvironmentVariableApi(configuration);

let body:.ApplicationEnvironmentVariableApiDeleteApplicationEnvironmentVariableRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // string | Environment Variable ID
  environmentVariableId: "environmentVariableId_example",
};

apiInstance.deleteApplicationEnvironmentVariable(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined
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

# **editApplicationEnvironmentVariable**
> EnvironmentVariableResponse editApplicationEnvironmentVariable(environmentVariableEditRequest)

- You can't edit a BUILT_IN variable - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the variable it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationEnvironmentVariableApi(configuration);

let body:.ApplicationEnvironmentVariableApiEditApplicationEnvironmentVariableRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // string | Environment Variable ID
  environmentVariableId: "environmentVariableId_example",
  // EnvironmentVariableEditRequest
  environmentVariableEditRequest: {
    key: "key_example",
    value: "value_example",
  },
};

apiInstance.editApplicationEnvironmentVariable(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentVariableEditRequest** | **EnvironmentVariableEditRequest**|  |
 **applicationId** | [**string**] | Application ID | defaults to undefined
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

# **importEnvironmentVariable**
> VariableImportResponse importEnvironmentVariable()

Import environment variables in a defined scope, with a defined visibility.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationEnvironmentVariableApi(configuration);

let body:.ApplicationEnvironmentVariableApiImportEnvironmentVariableRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // VariableImportRequest (optional)
  variableImportRequest: {
    overwrite: false,
    vars: [
      {
        name: "name_example",
        value: "value_example",
        scope: "ORGANIZATION",
        isSecret: true,
      },
    ],
  },
};

apiInstance.importEnvironmentVariable(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **variableImportRequest** | **VariableImportRequest**|  |
 **applicationId** | [**string**] | Application ID | defaults to undefined


### Return type

**VariableImportResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Import environment variables |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listApplicationEnvironmentVariable**
> EnvironmentVariableResponseList listApplicationEnvironmentVariable()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationEnvironmentVariableApi(configuration);

let body:.ApplicationEnvironmentVariableApiListApplicationEnvironmentVariableRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
};

apiInstance.listApplicationEnvironmentVariable(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined


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


