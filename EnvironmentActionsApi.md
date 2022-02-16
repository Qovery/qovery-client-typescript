# .EnvironmentActionsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelEnvironmentDeployment**](EnvironmentActionsApi.md#cancelEnvironmentDeployment) | **POST** /environment/{environmentId}/cancelDeployment | Cancel environment deployment
[**cloneEnvironment**](EnvironmentActionsApi.md#cloneEnvironment) | **POST** /environment/{environmentId}/clone | Clone environment
[**deployEnvironment**](EnvironmentActionsApi.md#deployEnvironment) | **POST** /environment/{environmentId}/deploy | Deploy environment
[**restartEnvironment**](EnvironmentActionsApi.md#restartEnvironment) | **POST** /environment/{environmentId}/restart | Restart environment
[**stopEnvironment**](EnvironmentActionsApi.md#stopEnvironment) | **POST** /environment/{environmentId}/stop | Stop environment


# **cancelEnvironmentDeployment**
> Status cancelEnvironmentDeployment()

Cancel the current deployment of your environment.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentActionsApi(configuration);

let body:.EnvironmentActionsApiCancelEnvironmentDeploymentRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
};

apiInstance.cancelEnvironmentDeployment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] | Environment ID | defaults to undefined


### Return type

**Status**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | environment deployment cancelling has been requested |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | Environment deployment is already cancelled or an operation is in progress |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **cloneEnvironment**
> EnvironmentResponse cloneEnvironment()

You must provide a name. This will create a new environment, with the same configuration, and same applications and databases. Database data is not cloned.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentActionsApi(configuration);

let body:.EnvironmentActionsApiCloneEnvironmentRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
  // CloneRequest (optional)
  cloneRequest: {
    name: "name_example",
    clusterId: "clusterId_example",
    mode: "PRODUCTION",
  },
};

apiInstance.cloneEnvironment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloneRequest** | **CloneRequest**|  |
 **environmentId** | [**string**] | Environment ID | defaults to undefined


### Return type

**EnvironmentResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Environment clone has been requested |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | Operation is in progress |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deployEnvironment**
> Status deployEnvironment()

This will deploy all the services of this environment to their latest version.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentActionsApi(configuration);

let body:.EnvironmentActionsApiDeployEnvironmentRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
};

apiInstance.deployEnvironment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] | Environment ID | defaults to undefined


### Return type

**Status**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Deploy environment |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | Operation is in progress |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **restartEnvironment**
> Status restartEnvironment()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentActionsApi(configuration);

let body:.EnvironmentActionsApiRestartEnvironmentRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
  // EnvironmentRestartRequest (optional)
  environmentRestartRequest: {
    restartDb: false,
  },
};

apiInstance.restartEnvironment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentRestartRequest** | **EnvironmentRestartRequest**|  |
 **environmentId** | [**string**] | Environment ID | defaults to undefined


### Return type

**Status**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Environment restart has been requested |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | Operation is in progress |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **stopEnvironment**
> Status stopEnvironment()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentActionsApi(configuration);

let body:.EnvironmentActionsApiStopEnvironmentRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
};

apiInstance.stopEnvironment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] | Environment ID | defaults to undefined


### Return type

**Status**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Environment stop has been requested |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | Environment is already stopped or an operation is in progress |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


