# .ProjectMainCallsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteProject**](ProjectMainCallsApi.md#deleteProject) | **DELETE** /project/{projectId} | Delete a project
[**editProject**](ProjectMainCallsApi.md#editProject) | **PUT** /project/{projectId} | Edit a project
[**getProject**](ProjectMainCallsApi.md#getProject) | **GET** /project/{projectId} | Get project by ID


# **deleteProject**
> void deleteProject()

To delete a project you must have the admin permission

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectMainCallsApi(configuration);

let body:.ProjectMainCallsApiDeleteProjectRequest = {
  // string | Project ID
  projectId: "projectId_example",
};

apiInstance.deleteProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Project ID | defaults to undefined


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

# **editProject**
> ProjectResponse editProject()

To edit a project you must have the admin permission

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectMainCallsApi(configuration);

let body:.ProjectMainCallsApiEditProjectRequest = {
  // string | Project ID
  projectId: "projectId_example",
  // ProjectRequest (optional)
  projectRequest: {
    name: "name_example",
    description: "description_example",
  },
};

apiInstance.editProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectRequest** | **ProjectRequest**|  |
 **projectId** | [**string**] | Project ID | defaults to undefined


### Return type

**ProjectResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Edit a project |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | Project name within the organization is already taken |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProject**
> ProjectResponse getProject()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectMainCallsApi(configuration);

let body:.ProjectMainCallsApiGetProjectRequest = {
  // string | Project ID
  projectId: "projectId_example",
};

apiInstance.getProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Project ID | defaults to undefined


### Return type

**ProjectResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get project by ID |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


