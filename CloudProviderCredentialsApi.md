# .CloudProviderCredentialsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAWSCredentials**](CloudProviderCredentialsApi.md#createAWSCredentials) | **POST** /organization/{organizationId}/aws/credentials | Create AWS credentials set
[**createDOCredentials**](CloudProviderCredentialsApi.md#createDOCredentials) | **POST** /organization/{organizationId}/digitalOcean/credentials | Create Digital Ocean credentials set
[**createScalewayCredentials**](CloudProviderCredentialsApi.md#createScalewayCredentials) | **POST** /organization/{organizationId}/scaleway/credentials | Create Scaleway credentials set
[**deleteAWSCredentials**](CloudProviderCredentialsApi.md#deleteAWSCredentials) | **DELETE** /organization/{organizationId}/aws/credentials/{credentialsId} | Delete a set of AWS credentials
[**deleteDOCredentials**](CloudProviderCredentialsApi.md#deleteDOCredentials) | **DELETE** /organization/{organizationId}/digitalOcean/credentials/{credentialsId} | Delete a set of Digital Ocean credentials
[**deleteScalewayCredentials**](CloudProviderCredentialsApi.md#deleteScalewayCredentials) | **DELETE** /organization/{organizationId}/scaleway/credentials/{credentialsId} | Delete a set of Scaleway credentials
[**editAWSCredentials**](CloudProviderCredentialsApi.md#editAWSCredentials) | **PUT** /organization/{organizationId}/aws/credentials/{credentialsId} | Edit a set of AWS credentials
[**editDOCredentials**](CloudProviderCredentialsApi.md#editDOCredentials) | **PUT** /organization/{organizationId}/digitalOcean/credentials/{credentialsId} | Edit a set of Digital Ocean credentials
[**editScalewayCredentials**](CloudProviderCredentialsApi.md#editScalewayCredentials) | **PUT** /organization/{organizationId}/scaleway/credentials/{credentialsId} | Edit a set of Scaleway credentials
[**listAWSCredentials**](CloudProviderCredentialsApi.md#listAWSCredentials) | **GET** /organization/{organizationId}/aws/credentials | List AWS credentials
[**listDOCredentials**](CloudProviderCredentialsApi.md#listDOCredentials) | **GET** /organization/{organizationId}/digitalOcean/credentials | List DO credentials
[**listScalewayCredentials**](CloudProviderCredentialsApi.md#listScalewayCredentials) | **GET** /organization/{organizationId}/scaleway/credentials | List Scaleway credentials


# **createAWSCredentials**
> ClusterCredentialsResponse createAWSCredentials()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudProviderCredentialsApi(configuration);

let body:.CloudProviderCredentialsApiCreateAWSCredentialsRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // AwsCredentialsRequest (optional)
  awsCredentialsRequest: {
    name: "name_example",
    accessKeyId: "accessKeyId_example",
    secretAccessKey: "secretAccessKey_example",
  },
};

apiInstance.createAWSCredentials(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **awsCredentialsRequest** | **AwsCredentialsRequest**|  |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**ClusterCredentialsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Credentials created |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createDOCredentials**
> ClusterCredentialsResponse createDOCredentials()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudProviderCredentialsApi(configuration);

let body:.CloudProviderCredentialsApiCreateDOCredentialsRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // DoCredentialsRequest (optional)
  doCredentialsRequest: {
    name: "name_example",
    token: "token_example",
    spacesAccessId: "spacesAccessId_example",
    spacesSecretKey: "spacesSecretKey_example",
  },
};

apiInstance.createDOCredentials(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **doCredentialsRequest** | **DoCredentialsRequest**|  |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**ClusterCredentialsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Credentials created |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createScalewayCredentials**
> ClusterCredentialsResponse createScalewayCredentials()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudProviderCredentialsApi(configuration);

let body:.CloudProviderCredentialsApiCreateScalewayCredentialsRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // ScalewayCredentialsRequest (optional)
  scalewayCredentialsRequest: {
    name: "name_example",
    scalewayAccessKey: "scalewayAccessKey_example",
    scalewaySecretKey: "scalewaySecretKey_example",
    scalewayProjectId: "scalewayProjectId_example",
  },
};

apiInstance.createScalewayCredentials(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scalewayCredentialsRequest** | **ScalewayCredentialsRequest**|  |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**ClusterCredentialsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Credentials created |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteAWSCredentials**
> void deleteAWSCredentials()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudProviderCredentialsApi(configuration);

let body:.CloudProviderCredentialsApiDeleteAWSCredentialsRequest = {
  // string | Credentials ID
  credentialsId: "credentialsId_example",
  // string | Organization ID
  organizationId: "organizationId_example",
};

apiInstance.deleteAWSCredentials(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentialsId** | [**string**] | Credentials ID | defaults to undefined
 **organizationId** | [**string**] | Organization ID | defaults to undefined


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

# **deleteDOCredentials**
> void deleteDOCredentials()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudProviderCredentialsApi(configuration);

let body:.CloudProviderCredentialsApiDeleteDOCredentialsRequest = {
  // string | Credentials ID
  credentialsId: "credentialsId_example",
  // string | Organization ID
  organizationId: "organizationId_example",
};

apiInstance.deleteDOCredentials(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentialsId** | [**string**] | Credentials ID | defaults to undefined
 **organizationId** | [**string**] | Organization ID | defaults to undefined


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

# **deleteScalewayCredentials**
> void deleteScalewayCredentials()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudProviderCredentialsApi(configuration);

let body:.CloudProviderCredentialsApiDeleteScalewayCredentialsRequest = {
  // string | Credentials ID
  credentialsId: "credentialsId_example",
  // string | Organization ID
  organizationId: "organizationId_example",
};

apiInstance.deleteScalewayCredentials(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentialsId** | [**string**] | Credentials ID | defaults to undefined
 **organizationId** | [**string**] | Organization ID | defaults to undefined


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

# **editAWSCredentials**
> ClusterCredentialsResponse editAWSCredentials()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudProviderCredentialsApi(configuration);

let body:.CloudProviderCredentialsApiEditAWSCredentialsRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // string | Credentials ID
  credentialsId: "credentialsId_example",
  // AwsCredentialsRequest (optional)
  awsCredentialsRequest: {
    name: "name_example",
    accessKeyId: "accessKeyId_example",
    secretAccessKey: "secretAccessKey_example",
  },
};

apiInstance.editAWSCredentials(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **awsCredentialsRequest** | **AwsCredentialsRequest**|  |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **credentialsId** | [**string**] | Credentials ID | defaults to undefined


### Return type

**ClusterCredentialsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Edit a CustomDomain |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **editDOCredentials**
> ClusterCredentialsResponse editDOCredentials()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudProviderCredentialsApi(configuration);

let body:.CloudProviderCredentialsApiEditDOCredentialsRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // string | Credentials ID
  credentialsId: "credentialsId_example",
  // DoCredentialsRequest (optional)
  doCredentialsRequest: {
    name: "name_example",
    token: "token_example",
    spacesAccessId: "spacesAccessId_example",
    spacesSecretKey: "spacesSecretKey_example",
  },
};

apiInstance.editDOCredentials(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **doCredentialsRequest** | **DoCredentialsRequest**|  |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **credentialsId** | [**string**] | Credentials ID | defaults to undefined


### Return type

**ClusterCredentialsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Edit a CustomDomain |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **editScalewayCredentials**
> ClusterCredentialsResponse editScalewayCredentials()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudProviderCredentialsApi(configuration);

let body:.CloudProviderCredentialsApiEditScalewayCredentialsRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // string | Credentials ID
  credentialsId: "credentialsId_example",
  // ScalewayCredentialsRequest (optional)
  scalewayCredentialsRequest: {
    name: "name_example",
    scalewayAccessKey: "scalewayAccessKey_example",
    scalewaySecretKey: "scalewaySecretKey_example",
    scalewayProjectId: "scalewayProjectId_example",
  },
};

apiInstance.editScalewayCredentials(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scalewayCredentialsRequest** | **ScalewayCredentialsRequest**|  |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **credentialsId** | [**string**] | Credentials ID | defaults to undefined


### Return type

**ClusterCredentialsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Edit a CustomDomain |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAWSCredentials**
> ClusterCredentialsResponseList listAWSCredentials()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudProviderCredentialsApi(configuration);

let body:.CloudProviderCredentialsApiListAWSCredentialsRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
};

apiInstance.listAWSCredentials(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**ClusterCredentialsResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | list credentials |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listDOCredentials**
> ClusterCredentialsResponseList listDOCredentials()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudProviderCredentialsApi(configuration);

let body:.CloudProviderCredentialsApiListDOCredentialsRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
};

apiInstance.listDOCredentials(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**ClusterCredentialsResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | list credentials |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listScalewayCredentials**
> ClusterCredentialsResponseList listScalewayCredentials()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudProviderCredentialsApi(configuration);

let body:.CloudProviderCredentialsApiListScalewayCredentialsRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
};

apiInstance.listScalewayCredentials(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**ClusterCredentialsResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | list credentials |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


