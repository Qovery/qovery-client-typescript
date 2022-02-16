# .MembersApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteInviteMember**](MembersApi.md#deleteInviteMember) | **DELETE** /organization/{organizationId}/inviteMember/{inviteId} | Remove an invited member
[**deleteMember**](MembersApi.md#deleteMember) | **DELETE** /organization/{organizationId}/member/{userId} | Remove a member
[**getOrganizationInvitedMembers**](MembersApi.md#getOrganizationInvitedMembers) | **GET** /organization/{organizationId}/inviteMember | Get invited members
[**getOrganizationMembers**](MembersApi.md#getOrganizationMembers) | **GET** /organization/{organizationId}/member | Get organization members
[**postAcceptInviteMember**](MembersApi.md#postAcceptInviteMember) | **POST** /organization/{organizationId}/inviteMember/{inviteId} | Accept Invite in the organization
[**postInviteMember**](MembersApi.md#postInviteMember) | **POST** /organization/{organizationId}/inviteMember | Invite someone in the organization
[**postOrganizationTransferOwnership**](MembersApi.md#postOrganizationTransferOwnership) | **POST** /organization/{organizationId}/transferOwnership | Transfer organization ownership to another user


# **deleteInviteMember**
> void deleteInviteMember()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MembersApi(configuration);

let body:.MembersApiDeleteInviteMemberRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
};

apiInstance.deleteInviteMember(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

# **deleteMember**
> void deleteMember()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MembersApi(configuration);

let body:.MembersApiDeleteMemberRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // string | User ID
  userId: "userId_example",
};

apiInstance.deleteMember(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **userId** | [**string**] | User ID | defaults to undefined


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

# **getOrganizationInvitedMembers**
> InviteMemberResponseList getOrganizationInvitedMembers()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MembersApi(configuration);

let body:.MembersApiGetOrganizationInvitedMembersRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
};

apiInstance.getOrganizationInvitedMembers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**InviteMemberResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get invited members |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrganizationMembers**
> MemberResponseList getOrganizationMembers()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MembersApi(configuration);

let body:.MembersApiGetOrganizationMembersRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
};

apiInstance.getOrganizationMembers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**MemberResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get members |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postAcceptInviteMember**
> InviteMemberResponse postAcceptInviteMember()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MembersApi(configuration);

let body:.MembersApiPostAcceptInviteMemberRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // string | Invite ID
  inviteId: "inviteId_example",
};

apiInstance.postAcceptInviteMember(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **inviteId** | [**string**] | Invite ID | defaults to undefined


### Return type

**InviteMemberResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | User invited |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | User already invited |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postInviteMember**
> InviteMemberResponse postInviteMember()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MembersApi(configuration);

let body:.MembersApiPostInviteMemberRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // InviteMemberRequest (optional)
  inviteMemberRequest: {
    email: "email_example",
    role: "ADMIN",
  },
};

apiInstance.postInviteMember(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inviteMemberRequest** | **InviteMemberRequest**|  |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**InviteMemberResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | User invited |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | User already invited |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postOrganizationTransferOwnership**
> void postOrganizationTransferOwnership()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MembersApi(configuration);

let body:.MembersApiPostOrganizationTransferOwnershipRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // TransferOwnershipRequest (optional)
  transferOwnershipRequest: {
    userId: "userId_example",
  },
};

apiInstance.postOrganizationTransferOwnership(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferOwnershipRequest** | **TransferOwnershipRequest**|  |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


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
**204** | no content |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


