# .GitRepositoriesApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBitbucketRepositories**](GitRepositoriesApi.md#getBitbucketRepositories) | **GET** /account/bitbucket/repository | Get bitbucket repositories of the connected user
[**getBitbucketRepositoryBranches**](GitRepositoriesApi.md#getBitbucketRepositoryBranches) | **GET** /account/bitbucket/repository/branch | Get bitbucket branches of the specified repository
[**getGitProviderAccount**](GitRepositoriesApi.md#getGitProviderAccount) | **GET** /account/gitAuthProvider | Get git provider accounts
[**getGithubRepositories**](GitRepositoriesApi.md#getGithubRepositories) | **GET** /account/github/repository | Get github repositories of the connected user
[**getGithubRepositoryBranches**](GitRepositoriesApi.md#getGithubRepositoryBranches) | **GET** /account/github/repository/branch | Get github branches of the specified repository
[**getGitlabRepositories**](GitRepositoriesApi.md#getGitlabRepositories) | **GET** /account/gitlab/repository | Get gitlab repositories of the connected user
[**getGitlabRepositoryBranches**](GitRepositoriesApi.md#getGitlabRepositoryBranches) | **GET** /account/gitlab/repository/branch | Get gitlab branches of the specified repository


# **getBitbucketRepositories**
> GitRepositoryResponseList getBitbucketRepositories()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GitRepositoriesApi(configuration);

let body:any = {};

apiInstance.getBitbucketRepositories(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GitRepositoryResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get bitbucket repositories |  -  |
**401** | Access token is missing or invalid |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBitbucketRepositoryBranches**
> GitRepositoryBranchResponseList getBitbucketRepositoryBranches()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GitRepositoriesApi(configuration);

let body:.GitRepositoriesApiGetBitbucketRepositoryBranchesRequest = {
  // string | The name of the repository where to retrieve the branches (optional)
  name: "name_example",
};

apiInstance.getBitbucketRepositoryBranches(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | The name of the repository where to retrieve the branches | (optional) defaults to undefined


### Return type

**GitRepositoryBranchResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get bitbucket repository branches |  -  |
**401** | Access token is missing or invalid |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getGitProviderAccount**
> GitAuthProviderResponseList getGitProviderAccount()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GitRepositoriesApi(configuration);

let body:any = {};

apiInstance.getGitProviderAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GitAuthProviderResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get account |  -  |
**401** | Access token is missing or invalid |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getGithubRepositories**
> GitRepositoryResponseList getGithubRepositories()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GitRepositoriesApi(configuration);

let body:any = {};

apiInstance.getGithubRepositories(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GitRepositoryResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get github repositories |  -  |
**401** | Access token is missing or invalid |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getGithubRepositoryBranches**
> GitRepositoryBranchResponseList getGithubRepositoryBranches()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GitRepositoriesApi(configuration);

let body:.GitRepositoriesApiGetGithubRepositoryBranchesRequest = {
  // string | The name of the repository where to retrieve the branches (optional)
  name: "name_example",
};

apiInstance.getGithubRepositoryBranches(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | The name of the repository where to retrieve the branches | (optional) defaults to undefined


### Return type

**GitRepositoryBranchResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get github repository branches |  -  |
**401** | Access token is missing or invalid |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getGitlabRepositories**
> GitRepositoryResponseList getGitlabRepositories()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GitRepositoriesApi(configuration);

let body:any = {};

apiInstance.getGitlabRepositories(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GitRepositoryResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get gitlab repositories |  -  |
**401** | Access token is missing or invalid |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getGitlabRepositoryBranches**
> GitRepositoryBranchResponseList getGitlabRepositoryBranches()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GitRepositoriesApi(configuration);

let body:.GitRepositoriesApiGetGitlabRepositoryBranchesRequest = {
  // string | The name of the repository to retrieve the branches (optional)
  name: "name_example",
};

apiInstance.getGitlabRepositoryBranches(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | The name of the repository to retrieve the branches | (optional) defaults to undefined


### Return type

**GitRepositoryBranchResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get gitlab repository branches |  -  |
**401** | Access token is missing or invalid |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


