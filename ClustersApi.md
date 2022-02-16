# .ClustersApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCluster**](ClustersApi.md#createCluster) | **POST** /organization/{organizationId}/cluster | Create a cluster
[**deleteCluster**](ClustersApi.md#deleteCluster) | **DELETE** /organization/{organizationId}/cluster/{clusterId} | Delete a cluster
[**deployCluster**](ClustersApi.md#deployCluster) | **POST** /organization/{organizationId}/cluster/{clusterId}/deploy | Deploy a cluster
[**editCluster**](ClustersApi.md#editCluster) | **PUT** /organization/{organizationId}/cluster/{clusterId} | Edit a cluster
[**editRoutingTable**](ClustersApi.md#editRoutingTable) | **PUT** /organization/{organizationId}/cluster/{clusterId}/routingTable | Edit routing table
[**getClusterReadinessStatus**](ClustersApi.md#getClusterReadinessStatus) | **GET** /organization/{organizationId}/cluster/{clusterId}/isReady | Know if a cluster is ready to be deployed or not
[**getClusterStatus**](ClustersApi.md#getClusterStatus) | **GET** /organization/{organizationId}/cluster/{clusterId}/status | Get cluster status
[**getOrganizationCloudProviderInfo**](ClustersApi.md#getOrganizationCloudProviderInfo) | **GET** /organization/{organizationId}/cluster/{clusterId}/cloudProviderInfo | Get cluster cloud provider info and credentials
[**getOrganizationClusterStatus**](ClustersApi.md#getOrganizationClusterStatus) | **GET** /organization/{organizationId}/cluster/status | List all clusters statuses
[**getRoutingTable**](ClustersApi.md#getRoutingTable) | **GET** /organization/{organizationId}/cluster/{clusterId}/routingTable | Get routing table
[**listOrganizationCluster**](ClustersApi.md#listOrganizationCluster) | **GET** /organization/{organizationId}/cluster | List organization clusters
[**specifyClusterCloudProviderInfo**](ClustersApi.md#specifyClusterCloudProviderInfo) | **POST** /organization/{organizationId}/cluster/{clusterId}/cloudProviderInfo | Specify cluster cloud provider info and credentials
[**stopCluster**](ClustersApi.md#stopCluster) | **POST** /organization/{organizationId}/cluster/{clusterId}/stop | Stop cluster
[**updateCluster**](ClustersApi.md#updateCluster) | **POST** /organization/{organizationId}/cluster/{clusterId}/update | Update a cluster Version


# **createCluster**
> ClusterResponse createCluster()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiCreateClusterRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // ClusterRequest (optional)
  clusterRequest: ,
};

apiInstance.createCluster(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterRequest** | **ClusterRequest**|  |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**ClusterResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Create cluster |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCluster**
> void deleteCluster()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiDeleteClusterRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // string | Cluster ID
  clusterId: "clusterId_example",
};

apiInstance.deleteCluster(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **clusterId** | [**string**] | Cluster ID | defaults to undefined


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

# **deployCluster**
> ClusterStatusResponse deployCluster()

allows to deploy a cluster

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiDeployClusterRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // string | Cluster ID
  clusterId: "clusterId_example",
};

apiInstance.deployCluster(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **clusterId** | [**string**] | Cluster ID | defaults to undefined


### Return type

**ClusterStatusResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Deploy cluster |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **editCluster**
> ClusterResponse editCluster()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiEditClusterRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // string | Cluster ID
  clusterId: "clusterId_example",
  // ClusterRequest (optional)
  clusterRequest: ,
};

apiInstance.editCluster(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterRequest** | **ClusterRequest**|  |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **clusterId** | [**string**] | Cluster ID | defaults to undefined


### Return type

**ClusterResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Edited the cluster |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **editRoutingTable**
> ClusterRoutingTableResponse editRoutingTable()

Edit routing table by returning updated table.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiEditRoutingTableRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // string | Cluster ID
  clusterId: "clusterId_example",
  // ClusterRoutingTableRequest (optional)
  clusterRoutingTableRequest: {
    routes: [
      {
        destination: "destination_example",
        target: "target_example",
        description: "description_example",
      },
    ],
  },
};

apiInstance.editRoutingTable(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterRoutingTableRequest** | **ClusterRoutingTableRequest**|  |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **clusterId** | [**string**] | Cluster ID | defaults to undefined


### Return type

**ClusterRoutingTableResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Updated routing table |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getClusterReadinessStatus**
> ClusterReadinessStatus getClusterReadinessStatus()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiGetClusterReadinessStatusRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // string | Cluster ID
  clusterId: "clusterId_example",
};

apiInstance.getClusterReadinessStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **clusterId** | [**string**] | Cluster ID | defaults to undefined


### Return type

**ClusterReadinessStatus**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get Cluster Readiness Status |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getClusterStatus**
> ClusterStatusResponse getClusterStatus()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiGetClusterStatusRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // string | Cluster ID
  clusterId: "clusterId_example",
};

apiInstance.getClusterStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **clusterId** | [**string**] | Cluster ID | defaults to undefined


### Return type

**ClusterStatusResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get status |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrganizationCloudProviderInfo**
> ClusterCloudProviderInfoResponse getOrganizationCloudProviderInfo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiGetOrganizationCloudProviderInfoRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // string | Cluster ID
  clusterId: "clusterId_example",
};

apiInstance.getOrganizationCloudProviderInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **clusterId** | [**string**] | Cluster ID | defaults to undefined


### Return type

**ClusterCloudProviderInfoResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | get cloud provider info and credentials |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrganizationClusterStatus**
> ClusterStatusResponseList getOrganizationClusterStatus()

Returns a list of clusters with only their id and status.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiGetOrganizationClusterStatusRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
};

apiInstance.getOrganizationClusterStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**ClusterStatusResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get statuses |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getRoutingTable**
> ClusterRoutingTableResponse getRoutingTable()

Retrieve network routing table where each line corresponds to a route between a destination and a target.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiGetRoutingTableRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // string | Cluster ID
  clusterId: "clusterId_example",
};

apiInstance.getRoutingTable(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **clusterId** | [**string**] | Cluster ID | defaults to undefined


### Return type

**ClusterRoutingTableResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Routing table |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOrganizationCluster**
> ClusterResponseList listOrganizationCluster()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiListOrganizationClusterRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
};

apiInstance.listOrganizationCluster(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**ClusterResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List clusters |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **specifyClusterCloudProviderInfo**
> ClusterCloudProviderInfoResponse specifyClusterCloudProviderInfo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiSpecifyClusterCloudProviderInfoRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // string | Cluster ID
  clusterId: "clusterId_example",
  // ClusterCloudProviderInfoRequest (optional)
  clusterCloudProviderInfoRequest: {
    cloudProvider: "AWS",
    credentials: {
      id: "id_example",
      name: "name_example",
    },
    region: "region_example",
  },
};

apiInstance.specifyClusterCloudProviderInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterCloudProviderInfoRequest** | **ClusterCloudProviderInfoRequest**|  |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **clusterId** | [**string**] | Cluster ID | defaults to undefined


### Return type

**ClusterCloudProviderInfoResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Create cluster |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **stopCluster**
> ClusterStatusResponse stopCluster()

Cluster stop has been requester.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiStopClusterRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // string | Cluster ID
  clusterId: "clusterId_example",
};

apiInstance.stopCluster(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **clusterId** | [**string**] | Cluster ID | defaults to undefined


### Return type

**ClusterStatusResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Update cluster |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | Cluster is already stopped or an operation is in progress |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCluster**
> ClusterStatusResponse updateCluster()

allows to update cluster version

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiUpdateClusterRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // string | Cluster ID
  clusterId: "clusterId_example",
};

apiInstance.updateCluster(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **clusterId** | [**string**] | Cluster ID | defaults to undefined


### Return type

**ClusterStatusResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Update cluster |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


