# .ApplicationDeploymentRuleApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editApplicationDeploymentRule**](ApplicationDeploymentRuleApi.md#editApplicationDeploymentRule) | **PUT** /application/{applicationId}/deploymentRule/{deploymentRuleId} | Edit an application deployment rule
[**getApplicationDeploymentRule**](ApplicationDeploymentRuleApi.md#getApplicationDeploymentRule) | **GET** /application/{applicationId}/deploymentRule | Get application deployment rule


# **editApplicationDeploymentRule**
> ApplicationDeploymentRuleResponse editApplicationDeploymentRule()

Edit an application deployment rule

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationDeploymentRuleApi(configuration);

let body:.ApplicationDeploymentRuleApiEditApplicationDeploymentRuleRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // string | Deployment Rule ID
  deploymentRuleId: "deploymentRuleId_example",
  // ApplicationDeploymentRuleEditRequest (optional)
  applicationDeploymentRuleEditRequest: {
    deploymentRestrictions: [
      {
        mode: "MATCH",
        type: "PATH",
        value: "value_example",
      },
    ],
  },
};

apiInstance.editApplicationDeploymentRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationDeploymentRuleEditRequest** | **ApplicationDeploymentRuleEditRequest**|  |
 **applicationId** | [**string**] | Application ID | defaults to undefined
 **deploymentRuleId** | [**string**] | Deployment Rule ID | defaults to undefined


### Return type

**ApplicationDeploymentRuleResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Edit application deployment rule |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApplicationDeploymentRule**
> ApplicationDeploymentRuleResponse getApplicationDeploymentRule()

Get application deployment rule

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationDeploymentRuleApi(configuration);

let body:.ApplicationDeploymentRuleApiGetApplicationDeploymentRuleRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
};

apiInstance.getApplicationDeploymentRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined


### Return type

**ApplicationDeploymentRuleResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get application deployment rule |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


