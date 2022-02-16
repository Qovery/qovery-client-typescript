# .ProjectDeploymentRuleApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDeploymentRule**](ProjectDeploymentRuleApi.md#createDeploymentRule) | **POST** /project/{projectId}/deploymentRule | Create a deployment rule
[**deleteProjectDeploymentRule**](ProjectDeploymentRuleApi.md#deleteProjectDeploymentRule) | **DELETE** /project/{projectId}/deploymentRule/{deploymentRuleId} | Delete a project deployment rule
[**editProjectDeployemtnRule**](ProjectDeploymentRuleApi.md#editProjectDeployemtnRule) | **PUT** /project/{projectId}/deploymentRule/{deploymentRuleId} | Edit a project deployment rule
[**getProjectDeploymentRule**](ProjectDeploymentRuleApi.md#getProjectDeploymentRule) | **GET** /project/{projectId}/deploymentRule/{deploymentRuleId} | Get project deployment rule
[**listProjectDeploymentRule**](ProjectDeploymentRuleApi.md#listProjectDeploymentRule) | **GET** /project/{projectId}/deploymentRule | List project deployment rules


# **createDeploymentRule**
> ProjectDeploymentRuleResponse createDeploymentRule()


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
  projectDeploymentRuleRequest: ,
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
  projectDeploymentRuleRequest: ,
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
**409** | Project name within the organization is already taken |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProjectDeploymentRule**
> ProjectDeploymentRuleResponse getProjectDeploymentRule()


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
**200** | Get deployment rule |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listProjectDeploymentRule**
> ProjectDeploymentRuleResponseList listProjectDeploymentRule()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectDeploymentRuleApi(configuration);

let body:.ProjectDeploymentRuleApiListProjectDeploymentRuleRequest = {
  // string | Project ID
  projectId: "projectId_example",
};

apiInstance.listProjectDeploymentRule(body).then((data:any) => {
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
**200** | Get deployment rules |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


