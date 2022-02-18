# .EnvironmentDeploymentRuleApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editEnvironmentDeploymentRule**](EnvironmentDeploymentRuleApi.md#editEnvironmentDeploymentRule) | **PUT** /environment/{environmentId}/deploymentRule/{deploymentRuleId} | Edit an environment deployment rule
[**getEnvironmentDeploymentRule**](EnvironmentDeploymentRuleApi.md#getEnvironmentDeploymentRule) | **GET** /environment/{environmentId}/deploymentRule | Get environment deployment rule


# **editEnvironmentDeploymentRule**
> EnvironmentDeploymentRuleResponse editEnvironmentDeploymentRule()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentDeploymentRuleApi(configuration);

let body:.EnvironmentDeploymentRuleApiEditEnvironmentDeploymentRuleRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
  // string | Deployment Rule ID
  deploymentRuleId: "deploymentRuleId_example",
  // EnvironmentDeploymentRuleEditRequest (optional)
  environmentDeploymentRuleEditRequest: {
    autoDeploy: true,
    autoDelete: false,
    autoStop: false,
    timezone: "UTC",
    startTime: new Date('1970-01-01T08:00:00Z'),
    stopTime: new Date('1970-01-01T19:00:00Z'),
    weekdays: [
      "MONDAY",
    ],
  },
};

apiInstance.editEnvironmentDeploymentRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentDeploymentRuleEditRequest** | **EnvironmentDeploymentRuleEditRequest**|  |
 **environmentId** | [**string**] | Environment ID | defaults to undefined
 **deploymentRuleId** | [**string**] | Deployment Rule ID | defaults to undefined


### Return type

**EnvironmentDeploymentRuleResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Edit environment deployment rule |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEnvironmentDeploymentRule**
> EnvironmentDeploymentRuleResponse getEnvironmentDeploymentRule()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentDeploymentRuleApi(configuration);

let body:.EnvironmentDeploymentRuleApiGetEnvironmentDeploymentRuleRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
};

apiInstance.getEnvironmentDeploymentRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] | Environment ID | defaults to undefined


### Return type

**EnvironmentDeploymentRuleResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get deployment rule |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


