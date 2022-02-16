# .EnvironmentDeploymentHistoryApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listEnvironmentDeploymentHistory**](EnvironmentDeploymentHistoryApi.md#listEnvironmentDeploymentHistory) | **GET** /environment/{environmentId}/deploymentHistory | List environment deployments


# **listEnvironmentDeploymentHistory**
> DeploymentHistoryEnvironmentPaginatedResponseList listEnvironmentDeploymentHistory()

List previous and current environment deployments with the status deployment and the related services. By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentDeploymentHistoryApi(configuration);

let body:.EnvironmentDeploymentHistoryApiListEnvironmentDeploymentHistoryRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
  // string | Starting point after which to return results (optional)
  startId: "startId_example",
};

apiInstance.listEnvironmentDeploymentHistory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] | Environment ID | defaults to undefined
 **startId** | [**string**] | Starting point after which to return results | (optional) defaults to undefined


### Return type

**DeploymentHistoryEnvironmentPaginatedResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List deployment history |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


