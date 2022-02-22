# .ProjectDeploymentRuleApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDeploymentRule**](ProjectDeploymentRuleApi.md#createDeploymentRule) | **POST** /project/{projectId}/deploymentRule | Create a deployment rule
[**deleteProjectDeploymentRule**](ProjectDeploymentRuleApi.md#deleteProjectDeploymentRule) | **DELETE** /project/{projectId}/deploymentRule/{deploymentRuleId} | Delete a project deployment rule
[**editProjectDeployemtnRule**](ProjectDeploymentRuleApi.md#editProjectDeployemtnRule) | **PUT** /project/{projectId}/deploymentRule/{deploymentRuleId} | Edit a project deployment rule
[**getProjectDeploymentRule**](ProjectDeploymentRuleApi.md#getProjectDeploymentRule) | **GET** /project/{projectId}/deploymentRule/{deploymentRuleId} | Get a project deployment rule
[**listProjectDeploymentRules**](ProjectDeploymentRuleApi.md#listProjectDeploymentRules) | **GET** /project/{projectId}/deploymentRule | List project deployment rules
[**updateDeploymentRulesPriorityOrder**](ProjectDeploymentRuleApi.md#updateDeploymentRulesPriorityOrder) | **PUT** /project/{projectId}/deploymentRule/order | Update deployment rules priority order


# **createDeploymentRule**
> ProjectDeploymentRuleResponse createDeploymentRule()

Create a deployment rule

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectDeploymentRuleApi(configuration);

let body:.ProjectDeploymentRuleApiCreateDeploymentRuleRequest = {
  // string | Project ID
  projectId: "projectId_example",
  // ProjectDeploymentRuleRequest (optional)
  projectDeploymentRuleRequest: {
    name: "project-rule",
    description: "description project rule",
    mode: "DEVELOPMENT",
    clusterId: "clusterId_example",
    autoDeploy: false,
    autoStop: false,
    autoDelete: false,
    timezone: "UTC",
    startTime: new Date('1970-01-01T08:00:00Z'),
    stopTime: new Date('1970-01-01T19:00:00Z'),
    weekdays: [
      "MONDAY",
    ],
    wildcard: "",
  },
};

apiInstance.createDeploymentRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectDeploymentRuleRequest** | **ProjectDeploymentRuleRequest**|  |
 **projectId** | [**string**] | Project ID | defaults to undefined


### Return type

**ProjectDeploymentRuleResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Create deployment rule |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteProjectDeploymentRule**
> void deleteProjectDeploymentRule()

Delete a project deployment rule

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectDeploymentRuleApi(configuration);

let body:.ProjectDeploymentRuleApiDeleteProjectDeploymentRuleRequest = {
  // string | Project ID
  projectId: "projectId_example",
  // string | Deployment Rule ID
  deploymentRuleId: "deploymentRuleId_example",
};

apiInstance.deleteProjectDeploymentRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Project ID | defaults to undefined
 **deploymentRuleId** | [**string**] | Deployment Rule ID | defaults to undefined


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

# **editProjectDeployemtnRule**
> ProjectDeploymentRuleResponse editProjectDeployemtnRule()

Edit a project deployment rule

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectDeploymentRuleApi(configuration);

let body:.ProjectDeploymentRuleApiEditProjectDeployemtnRuleRequest = {
  // string | Project ID
  projectId: "projectId_example",
  // string | Deployment Rule ID
  deploymentRuleId: "deploymentRuleId_example",
  // ProjectDeploymentRuleRequest (optional)
  projectDeploymentRuleRequest: {
    name: "project-rule",
    description: "description project rule",
    mode: "DEVELOPMENT",
    clusterId: "clusterId_example",
    autoDeploy: false,
    autoStop: false,
    autoDelete: false,
    timezone: "UTC",
    startTime: new Date('1970-01-01T08:00:00Z'),
    stopTime: new Date('1970-01-01T19:00:00Z'),
    weekdays: [
      "MONDAY",
    ],
    wildcard: "",
  },
};

apiInstance.editProjectDeployemtnRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectDeploymentRuleRequest** | **ProjectDeploymentRuleRequest**|  |
 **projectId** | [**string**] | Project ID | defaults to undefined
 **deploymentRuleId** | [**string**] | Deployment Rule ID | defaults to undefined


### Return type

**ProjectDeploymentRuleResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Edit a project deployment rule |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProjectDeploymentRule**
> ProjectDeploymentRuleResponse getProjectDeploymentRule()

Get a project deployment rule

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectDeploymentRuleApi(configuration);

let body:.ProjectDeploymentRuleApiGetProjectDeploymentRuleRequest = {
  // string | Project ID
  projectId: "projectId_example",
  // string | Deployment Rule ID
  deploymentRuleId: "deploymentRuleId_example",
};

apiInstance.getProjectDeploymentRule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Project ID | defaults to undefined
 **deploymentRuleId** | [**string**] | Deployment Rule ID | defaults to undefined


### Return type

**ProjectDeploymentRuleResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get project deployment rule |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listProjectDeploymentRules**
> ProjectDeploymentRuleResponseList listProjectDeploymentRules()

List project deployment rules

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectDeploymentRuleApi(configuration);

let body:.ProjectDeploymentRuleApiListProjectDeploymentRulesRequest = {
  // string | Project ID
  projectId: "projectId_example",
};

apiInstance.listProjectDeploymentRules(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Project ID | defaults to undefined


### Return type

**ProjectDeploymentRuleResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get project deployment rules |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateDeploymentRulesPriorityOrder**
> void updateDeploymentRulesPriorityOrder()

Update deployment rules priority order

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectDeploymentRuleApi(configuration);

let body:.ProjectDeploymentRuleApiUpdateDeploymentRulesPriorityOrderRequest = {
  // string | Project ID
  projectId: "projectId_example",
  // InlineObject (optional)
  inlineObject: {
    projectDeploymentRuleIdsInOrder: [
      {
        id: "id_example",
      },
    ],
  },
};

apiInstance.updateDeploymentRulesPriorityOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | **InlineObject**|  |
 **projectId** | [**string**] | Project ID | defaults to undefined


### Return type

**void**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update deployment rules priority order |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


