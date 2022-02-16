# .ApplicationActionsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deployApplication**](ApplicationActionsApi.md#deployApplication) | **POST** /application/{applicationId}/deploy | Deploy application
[**restartApplication**](ApplicationActionsApi.md#restartApplication) | **POST** /application/{applicationId}/restart | Restart application
[**stopApplication**](ApplicationActionsApi.md#stopApplication) | **POST** /application/{applicationId}/stop | Stop application


# **deployApplication**
> Status deployApplication()

You must provide a git commit id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationActionsApi(configuration);

let body:.ApplicationActionsApiDeployApplicationRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // DeployRequest (optional)
  deployRequest: {
    gitCommitId: "gitCommitId_example",
  },
};

apiInstance.deployApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployRequest** | **DeployRequest**|  |
 **applicationId** | [**string**] | Application ID | defaults to undefined


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
**202** | Deploy application |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | Operation is in progress |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **restartApplication**
> Status restartApplication()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationActionsApi(configuration);

let body:.ApplicationActionsApiRestartApplicationRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
};

apiInstance.restartApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined


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
**202** | Application restart has been requested |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | Operation is in progress |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **stopApplication**
> Status stopApplication()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationActionsApi(configuration);

let body:.ApplicationActionsApiStopApplicationRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
};

apiInstance.stopApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined


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
**202** | Application stop has been requested |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | Application is already stopped or an operation is in progress |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


