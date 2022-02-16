# .ProjectsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProject**](ProjectsApi.md#createProject) | **POST** /organization/{organizationId}/project | Create a project
[**getOrganizationProjectStats**](ProjectsApi.md#getOrganizationProjectStats) | **GET** /organization/{organizationId}/project/stats | List total number of services and environments for each project of the organization
[**listProject**](ProjectsApi.md#listProject) | **GET** /organization/{organizationId}/project | List projects


# **createProject**
> ProjectResponse createProject()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiCreateProjectRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // ProjectRequest (optional)
  projectRequest: {
    name: "name_example",
    description: "description_example",
  },
};

apiInstance.createProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectRequest** | **ProjectRequest**|  |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


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
**200** | Create project |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | Project name within the organization is already taken |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrganizationProjectStats**
> ProjectStatsResponseList getOrganizationProjectStats()

Returns a list of project ids, and for each its total numberof services and environments

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiGetOrganizationProjectStatsRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
};

apiInstance.getOrganizationProjectStats(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**ProjectStatsResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get number of services |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listProject**
> ProjectResponseList listProject()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiListProjectRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
};

apiInstance.listProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**ProjectResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List projects |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


