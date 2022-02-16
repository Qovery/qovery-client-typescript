# .EnvironmentLogsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listEnvironmentLog**](EnvironmentLogsApi.md#listEnvironmentLog) | **GET** /environment/{environmentId}/log | List environment deployment logs


# **listEnvironmentLog**
> EnvironmentLogResponseList listEnvironmentLog()

This returns the last 1000 environment deployment logs.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentLogsApi(configuration);

let body:.EnvironmentLogsApiListEnvironmentLogRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
};

apiInstance.listEnvironmentLog(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] | Environment ID | defaults to undefined


### Return type

**EnvironmentLogResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List logs |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


