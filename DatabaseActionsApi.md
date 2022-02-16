# .DatabaseActionsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deployDatabase**](DatabaseActionsApi.md#deployDatabase) | **POST** /database/{databaseId}/deploy | Deploy database 
[**restartDatabase**](DatabaseActionsApi.md#restartDatabase) | **POST** /database/{databaseId}/restart | Retart database
[**stopDatabase**](DatabaseActionsApi.md#stopDatabase) | **POST** /database/{databaseId}/stop | Stop database


# **deployDatabase**
> Status deployDatabase()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatabaseActionsApi(configuration);

let body:.DatabaseActionsApiDeployDatabaseRequest = {
  // string | Database ID
  databaseId: "databaseId_example",
};

apiInstance.deployDatabase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | [**string**] | Database ID | defaults to undefined


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
**202** | Deploy database  |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | Operation is in progress |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **restartDatabase**
> Status restartDatabase()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatabaseActionsApi(configuration);

let body:.DatabaseActionsApiRestartDatabaseRequest = {
  // string | Database ID
  databaseId: "databaseId_example",
};

apiInstance.restartDatabase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | [**string**] | Database ID | defaults to undefined


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
**202** | Database  restart has been requested |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | Operation is in progress |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **stopDatabase**
> Status stopDatabase()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatabaseActionsApi(configuration);

let body:.DatabaseActionsApiStopDatabaseRequest = {
  // string | Database ID
  databaseId: "databaseId_example",
};

apiInstance.stopDatabase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | [**string**] | Database ID | defaults to undefined


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
**202** | Database  stop has been requested |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | Operation is in progress |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


