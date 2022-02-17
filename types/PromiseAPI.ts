import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AccountInfoEditRequest } from '../models/AccountInfoEditRequest';
import { AccountInfoResponse } from '../models/AccountInfoResponse';
import { AliasedSecret } from '../models/AliasedSecret';
import { ApplicationCurrentScaleResponse } from '../models/ApplicationCurrentScaleResponse';
import { ApplicationDependencyRequest } from '../models/ApplicationDependencyRequest';
import { ApplicationEditRequest } from '../models/ApplicationEditRequest';
import { ApplicationGitRepositoryRequest } from '../models/ApplicationGitRepositoryRequest';
import { ApplicationGitRepositoryResponse } from '../models/ApplicationGitRepositoryResponse';
import { ApplicationNetworkRequest } from '../models/ApplicationNetworkRequest';
import { ApplicationNetworkResponse } from '../models/ApplicationNetworkResponse';
import { ApplicationPortRequest } from '../models/ApplicationPortRequest';
import { ApplicationPortRequestPorts } from '../models/ApplicationPortRequestPorts';
import { ApplicationPortResponse } from '../models/ApplicationPortResponse';
import { ApplicationPortResponsePorts } from '../models/ApplicationPortResponsePorts';
import { ApplicationRequest } from '../models/ApplicationRequest';
import { ApplicationResponse } from '../models/ApplicationResponse';
import { ApplicationResponseList } from '../models/ApplicationResponseList';
import { ApplicationStorageRequest } from '../models/ApplicationStorageRequest';
import { ApplicationStorageRequestStorage } from '../models/ApplicationStorageRequestStorage';
import { ApplicationStorageResponse } from '../models/ApplicationStorageResponse';
import { ApplicationStorageResponseStorage } from '../models/ApplicationStorageResponseStorage';
import { AwsCredentialsRequest } from '../models/AwsCredentialsRequest';
import { BackupPaginatedResponseList } from '../models/BackupPaginatedResponseList';
import { BackupRequest } from '../models/BackupRequest';
import { BackupResponse } from '../models/BackupResponse';
import { BackupResponseList } from '../models/BackupResponseList';
import { BaseResponse } from '../models/BaseResponse';
import { BillingEnd } from '../models/BillingEnd';
import { BillingInfoRequest } from '../models/BillingInfoRequest';
import { BillingInfoResponse } from '../models/BillingInfoResponse';
import { BillingPeriod } from '../models/BillingPeriod';
import { BillingStart } from '../models/BillingStart';
import { BillingStatus } from '../models/BillingStatus';
import { BudgetResponse } from '../models/BudgetResponse';
import { BudgetThreshold } from '../models/BudgetThreshold';
import { CloneRequest } from '../models/CloneRequest';
import { CloudProviderResponse } from '../models/CloudProviderResponse';
import { CloudProviderResponseList } from '../models/CloudProviderResponseList';
import { Cluster } from '../models/Cluster';
import { ClusterCloudProviderInfoRequest } from '../models/ClusterCloudProviderInfoRequest';
import { ClusterCloudProviderInfoRequestCredentials } from '../models/ClusterCloudProviderInfoRequestCredentials';
import { ClusterCloudProviderInfoResponse } from '../models/ClusterCloudProviderInfoResponse';
import { ClusterCredentialsRequest } from '../models/ClusterCredentialsRequest';
import { ClusterCredentialsResponse } from '../models/ClusterCredentialsResponse';
import { ClusterCredentialsResponseList } from '../models/ClusterCredentialsResponseList';
import { ClusterFeatureRequest } from '../models/ClusterFeatureRequest';
import { ClusterFeatureRequestFeatures } from '../models/ClusterFeatureRequestFeatures';
import { ClusterFeatureResponse } from '../models/ClusterFeatureResponse';
import { ClusterFeatureResponseList } from '../models/ClusterFeatureResponseList';
import { ClusterReadinessStatus } from '../models/ClusterReadinessStatus';
import { ClusterRegionResponse } from '../models/ClusterRegionResponse';
import { ClusterRegionResponseList } from '../models/ClusterRegionResponseList';
import { ClusterRequest } from '../models/ClusterRequest';
import { ClusterResponse } from '../models/ClusterResponse';
import { ClusterResponseList } from '../models/ClusterResponseList';
import { ClusterRoutingTableRequest } from '../models/ClusterRoutingTableRequest';
import { ClusterRoutingTableRequestRoutes } from '../models/ClusterRoutingTableRequestRoutes';
import { ClusterRoutingTableResponse } from '../models/ClusterRoutingTableResponse';
import { ClusterRoutingTableResponseResults } from '../models/ClusterRoutingTableResponseResults';
import { ClusterStatusResponse } from '../models/ClusterStatusResponse';
import { ClusterStatusResponseList } from '../models/ClusterStatusResponseList';
import { CommitPaginatedResponseList } from '../models/CommitPaginatedResponseList';
import { CommitResponse } from '../models/CommitResponse';
import { CommitResponseList } from '../models/CommitResponseList';
import { CommunityUsage } from '../models/CommunityUsage';
import { CommunityUsageResponse } from '../models/CommunityUsageResponse';
import { Cost } from '../models/Cost';
import { CostRangeResponse } from '../models/CostRangeResponse';
import { CostResponse } from '../models/CostResponse';
import { CredentialsRequest } from '../models/CredentialsRequest';
import { CredentialsResponse } from '../models/CredentialsResponse';
import { CreditCardRequest } from '../models/CreditCardRequest';
import { CreditCardResponse } from '../models/CreditCardResponse';
import { CreditCardResponseList } from '../models/CreditCardResponseList';
import { CurrentCost } from '../models/CurrentCost';
import { CustomDomainRequest } from '../models/CustomDomainRequest';
import { CustomDomainResponse } from '../models/CustomDomainResponse';
import { CustomDomainResponseList } from '../models/CustomDomainResponseList';
import { DatabaseConfigurationResponse } from '../models/DatabaseConfigurationResponse';
import { DatabaseConfigurationResponseList } from '../models/DatabaseConfigurationResponseList';
import { DatabaseCurrentMetricResponse } from '../models/DatabaseCurrentMetricResponse';
import { DatabaseEditRequest } from '../models/DatabaseEditRequest';
import { DatabaseRequest } from '../models/DatabaseRequest';
import { DatabaseResponse } from '../models/DatabaseResponse';
import { DatabaseResponseList } from '../models/DatabaseResponseList';
import { DatabaseVersionMode } from '../models/DatabaseVersionMode';
import { DeployRequest } from '../models/DeployRequest';
import { DeploymentHistoryApplicationResponse } from '../models/DeploymentHistoryApplicationResponse';
import { DeploymentHistoryDatabaseResponse } from '../models/DeploymentHistoryDatabaseResponse';
import { DeploymentHistoryEnvironmentPaginatedResponseList } from '../models/DeploymentHistoryEnvironmentPaginatedResponseList';
import { DeploymentHistoryEnvironmentResponse } from '../models/DeploymentHistoryEnvironmentResponse';
import { DeploymentHistoryPaginatedResponseList } from '../models/DeploymentHistoryPaginatedResponseList';
import { DeploymentHistoryResponse } from '../models/DeploymentHistoryResponse';
import { DeploymentHistoryResponseList } from '../models/DeploymentHistoryResponseList';
import { DeploymentRuleRequest } from '../models/DeploymentRuleRequest';
import { DoCredentialsRequest } from '../models/DoCredentialsRequest';
import { EnvironmentApplicationsCurrentScaleResponse } from '../models/EnvironmentApplicationsCurrentScaleResponse';
import { EnvironmentApplicationsCurrentScaleResponseList } from '../models/EnvironmentApplicationsCurrentScaleResponseList';
import { EnvironmentApplicationsInstanceResponseList } from '../models/EnvironmentApplicationsInstanceResponseList';
import { EnvironmentApplicationsInstanceResponseListResults } from '../models/EnvironmentApplicationsInstanceResponseListResults';
import { EnvironmentApplicationsStorageResponse } from '../models/EnvironmentApplicationsStorageResponse';
import { EnvironmentApplicationsStorageResponseList } from '../models/EnvironmentApplicationsStorageResponseList';
import { EnvironmentApplicationsSupportedLanguage } from '../models/EnvironmentApplicationsSupportedLanguage';
import { EnvironmentApplicationsSupportedLanguageList } from '../models/EnvironmentApplicationsSupportedLanguageList';
import { EnvironmentDatabasesCurrentMetricResponse } from '../models/EnvironmentDatabasesCurrentMetricResponse';
import { EnvironmentDatabasesCurrentMetricResponseCpu } from '../models/EnvironmentDatabasesCurrentMetricResponseCpu';
import { EnvironmentDatabasesCurrentMetricResponseList } from '../models/EnvironmentDatabasesCurrentMetricResponseList';
import { EnvironmentDatabasesCurrentMetricResponseMemory } from '../models/EnvironmentDatabasesCurrentMetricResponseMemory';
import { EnvironmentDatabasesCurrentMetricResponseStorage } from '../models/EnvironmentDatabasesCurrentMetricResponseStorage';
import { EnvironmentDeploymentRuleEditRequest } from '../models/EnvironmentDeploymentRuleEditRequest';
import { EnvironmentDeploymentRuleResponse } from '../models/EnvironmentDeploymentRuleResponse';
import { EnvironmentEditRequest } from '../models/EnvironmentEditRequest';
import { EnvironmentLogPaginatedResponseList } from '../models/EnvironmentLogPaginatedResponseList';
import { EnvironmentLogResponse } from '../models/EnvironmentLogResponse';
import { EnvironmentLogResponseList } from '../models/EnvironmentLogResponseList';
import { EnvironmentLogResponseScope } from '../models/EnvironmentLogResponseScope';
import { EnvironmentRequest } from '../models/EnvironmentRequest';
import { EnvironmentResponse } from '../models/EnvironmentResponse';
import { EnvironmentResponseList } from '../models/EnvironmentResponseList';
import { EnvironmentRestartRequest } from '../models/EnvironmentRestartRequest';
import { EnvironmentStatsResponse } from '../models/EnvironmentStatsResponse';
import { EnvironmentStatsResponseList } from '../models/EnvironmentStatsResponseList';
import { EnvironmentTotalNumber } from '../models/EnvironmentTotalNumber';
import { EnvironmentVariableEditRequest } from '../models/EnvironmentVariableEditRequest';
import { EnvironmentVariableRequest } from '../models/EnvironmentVariableRequest';
import { EnvironmentVariableResponse } from '../models/EnvironmentVariableResponse';
import { EnvironmentVariableResponseList } from '../models/EnvironmentVariableResponseList';
import { EventPaginatedResponseList } from '../models/EventPaginatedResponseList';
import { EventResponse } from '../models/EventResponse';
import { EventResponseList } from '../models/EventResponseList';
import { GenericObjectCurrentCostResponse } from '../models/GenericObjectCurrentCostResponse';
import { GitAuthProviderResponse } from '../models/GitAuthProviderResponse';
import { GitAuthProviderResponseList } from '../models/GitAuthProviderResponseList';
import { GitRepositoryBranchResponse } from '../models/GitRepositoryBranchResponse';
import { GitRepositoryBranchResponseList } from '../models/GitRepositoryBranchResponseList';
import { GitRepositoryResponse } from '../models/GitRepositoryResponse';
import { GitRepositoryResponseList } from '../models/GitRepositoryResponseList';
import { Healthcheck } from '../models/Healthcheck';
import { InstanceResponse } from '../models/InstanceResponse';
import { InstanceResponseList } from '../models/InstanceResponseList';
import { InviteMemberRequest } from '../models/InviteMemberRequest';
import { InviteMemberResponse } from '../models/InviteMemberResponse';
import { InviteMemberResponseList } from '../models/InviteMemberResponseList';
import { InvoiceResponse } from '../models/InvoiceResponse';
import { InvoiceResponseList } from '../models/InvoiceResponseList';
import { Key } from '../models/Key';
import { LinkResponse } from '../models/LinkResponse';
import { LinkResponseList } from '../models/LinkResponseList';
import { LogPaginatedResponseList } from '../models/LogPaginatedResponseList';
import { LogResponse } from '../models/LogResponse';
import { LogResponseList } from '../models/LogResponseList';
import { LogicalDatabaseRequest } from '../models/LogicalDatabaseRequest';
import { LogicalDatabaseResponse } from '../models/LogicalDatabaseResponse';
import { LogicalDatabaseResponseList } from '../models/LogicalDatabaseResponseList';
import { MemberResponse } from '../models/MemberResponse';
import { MemberResponseList } from '../models/MemberResponseList';
import { MetricCPUDatapointResponse } from '../models/MetricCPUDatapointResponse';
import { MetricCPUDatapointResponseList } from '../models/MetricCPUDatapointResponseList';
import { MetricCPUResponse } from '../models/MetricCPUResponse';
import { MetricCPUResponseList } from '../models/MetricCPUResponseList';
import { MetricGenericDatapointResponse } from '../models/MetricGenericDatapointResponse';
import { MetricGenericResponse } from '../models/MetricGenericResponse';
import { MetricGenericResponseList } from '../models/MetricGenericResponseList';
import { MetricMemoryDatapointResponse } from '../models/MetricMemoryDatapointResponse';
import { MetricMemoryDatapointResponseList } from '../models/MetricMemoryDatapointResponseList';
import { MetricMemoryResponse } from '../models/MetricMemoryResponse';
import { MetricMemoryResponseList } from '../models/MetricMemoryResponseList';
import { MetricRestartResponse } from '../models/MetricRestartResponse';
import { MetricRestartResponseResults } from '../models/MetricRestartResponseResults';
import { MetricStorageDatapointResponse } from '../models/MetricStorageDatapointResponse';
import { MetricStorageDatapointResponseList } from '../models/MetricStorageDatapointResponseList';
import { MetricStorageResponse } from '../models/MetricStorageResponse';
import { MetricStorageResponseList } from '../models/MetricStorageResponseList';
import { Name } from '../models/Name';
import { OrganizationCreditCodeRequest } from '../models/OrganizationCreditCodeRequest';
import { OrganizationCurrentCostResponse } from '../models/OrganizationCurrentCostResponse';
import { OrganizationEditRequest } from '../models/OrganizationEditRequest';
import { OrganizationRequest } from '../models/OrganizationRequest';
import { OrganizationResponse } from '../models/OrganizationResponse';
import { OrganizationResponseList } from '../models/OrganizationResponseList';
import { OverriddenSecret } from '../models/OverriddenSecret';
import { PaginationDataResponse } from '../models/PaginationDataResponse';
import { PaidUsage } from '../models/PaidUsage';
import { PaidUsageResponse } from '../models/PaidUsageResponse';
import { ProjectCurrentCostResponse } from '../models/ProjectCurrentCostResponse';
import { ProjectCurrentCostResponseList } from '../models/ProjectCurrentCostResponseList';
import { ProjectDeploymentRuleRequest } from '../models/ProjectDeploymentRuleRequest';
import { ProjectDeploymentRuleResponse } from '../models/ProjectDeploymentRuleResponse';
import { ProjectDeploymentRuleResponseList } from '../models/ProjectDeploymentRuleResponseList';
import { ProjectRequest } from '../models/ProjectRequest';
import { ProjectResponse } from '../models/ProjectResponse';
import { ProjectResponseList } from '../models/ProjectResponseList';
import { ProjectStatsResponse } from '../models/ProjectStatsResponse';
import { ProjectStatsResponseList } from '../models/ProjectStatsResponseList';
import { ReferenceObject } from '../models/ReferenceObject';
import { ReferenceObjectStatusResponse } from '../models/ReferenceObjectStatusResponse';
import { ReferenceObjectStatusResponseList } from '../models/ReferenceObjectStatusResponseList';
import { ReferralResponse } from '../models/ReferralResponse';
import { RemainingCredits } from '../models/RemainingCredits';
import { RewardClaimResponse } from '../models/RewardClaimResponse';
import { ScalewayCredentialsRequest } from '../models/ScalewayCredentialsRequest';
import { SecretEditRequest } from '../models/SecretEditRequest';
import { SecretRequest } from '../models/SecretRequest';
import { SecretResponse } from '../models/SecretResponse';
import { SecretResponseList } from '../models/SecretResponseList';
import { ServiceResponse } from '../models/ServiceResponse';
import { ServiceResponseList } from '../models/ServiceResponseList';
import { ServiceTotalNumber } from '../models/ServiceTotalNumber';
import { Status } from '../models/Status';
import { StorageDiskResponse } from '../models/StorageDiskResponse';
import { StorageDiskResponseList } from '../models/StorageDiskResponseList';
import { TagRequest } from '../models/TagRequest';
import { TagResponse } from '../models/TagResponse';
import { TagResponseList } from '../models/TagResponseList';
import { TransferOwnershipRequest } from '../models/TransferOwnershipRequest';
import { UnexpectedError } from '../models/UnexpectedError';
import { UserResponse } from '../models/UserResponse';
import { UserResponseList } from '../models/UserResponseList';
import { Value } from '../models/Value';
import { VariableImportRequest } from '../models/VariableImportRequest';
import { VariableImportRequestVars } from '../models/VariableImportRequestVars';
import { VariableImportResponse } from '../models/VariableImportResponse';
import { VariableImportResponseSuccessfulImportedVariables } from '../models/VariableImportResponseSuccessfulImportedVariables';
import { VersionResponse } from '../models/VersionResponse';
import { VersionResponseList } from '../models/VersionResponseList';
import { ObservableAccountInfoApi } from './ObservableAPI';

import { AccountInfoApiRequestFactory, AccountInfoApiResponseProcessor} from "../apis/AccountInfoApi";
export class PromiseAccountInfoApi {
    private api: ObservableAccountInfoApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountInfoApiRequestFactory,
        responseProcessor?: AccountInfoApiResponseProcessor
    ) {
        this.api = new ObservableAccountInfoApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Account information
     */
    public getAccountInformation(_options?: Configuration): Promise<AccountInfoResponse> {
        const result = this.api.getAccountInformation(_options);
        return result.toPromise();
    }


}



import { ObservableApplicationActionsApi } from './ObservableAPI';

import { ApplicationActionsApiRequestFactory, ApplicationActionsApiResponseProcessor} from "../apis/ApplicationActionsApi";
export class PromiseApplicationActionsApi {
    private api: ObservableApplicationActionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationActionsApiRequestFactory,
        responseProcessor?: ApplicationActionsApiResponseProcessor
    ) {
        this.api = new ObservableApplicationActionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * You must provide a git commit id
     * Deploy application
     * @param applicationId Application ID
     * @param deployRequest 
     */
    public deployApplication(applicationId: string, deployRequest?: DeployRequest, _options?: Configuration): Promise<Status> {
        const result = this.api.deployApplication(applicationId, deployRequest, _options);
        return result.toPromise();
    }

    /**
     * Restart application
     * @param applicationId Application ID
     */
    public restartApplication(applicationId: string, _options?: Configuration): Promise<Status> {
        const result = this.api.restartApplication(applicationId, _options);
        return result.toPromise();
    }

    /**
     * Stop application
     * @param applicationId Application ID
     */
    public stopApplication(applicationId: string, _options?: Configuration): Promise<Status> {
        const result = this.api.stopApplication(applicationId, _options);
        return result.toPromise();
    }


}



import { ObservableApplicationConfigurationApi } from './ObservableAPI';

import { ApplicationConfigurationApiRequestFactory, ApplicationConfigurationApiResponseProcessor} from "../apis/ApplicationConfigurationApi";
export class PromiseApplicationConfigurationApi {
    private api: ObservableApplicationConfigurationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationConfigurationApiRequestFactory,
        responseProcessor?: ApplicationConfigurationApiResponseProcessor
    ) {
        this.api = new ObservableApplicationConfigurationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Edit the Network settings of the application.
     * Edit Application Network
     * @param applicationId Application ID
     * @param applicationNetworkRequest 
     */
    public editApplicationNetwork(applicationId: string, applicationNetworkRequest?: ApplicationNetworkRequest, _options?: Configuration): Promise<ApplicationNetworkResponse> {
        const result = this.api.editApplicationNetwork(applicationId, applicationNetworkRequest, _options);
        return result.toPromise();
    }

    /**
     * Get status of the application network settings.
     * Get Application Network information
     * @param applicationId Application ID
     */
    public getApplicationNetwork(applicationId: string, _options?: Configuration): Promise<ApplicationNetworkResponse> {
        const result = this.api.getApplicationNetwork(applicationId, _options);
        return result.toPromise();
    }


}



import { ObservableApplicationDatabaseApi } from './ObservableAPI';

import { ApplicationDatabaseApiRequestFactory, ApplicationDatabaseApiResponseProcessor} from "../apis/ApplicationDatabaseApi";
export class PromiseApplicationDatabaseApi {
    private api: ObservableApplicationDatabaseApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationDatabaseApiRequestFactory,
        responseProcessor?: ApplicationDatabaseApiResponseProcessor
    ) {
        this.api = new ObservableApplicationDatabaseApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Link a database to the application
     * @param applicationId Application ID
     * @param targetDatabaseId Target database ID
     */
    public attachDatabasetoApplication(applicationId: string, targetDatabaseId: string, _options?: Configuration): Promise<DatabaseResponse> {
        const result = this.api.attachDatabasetoApplication(applicationId, targetDatabaseId, _options);
        return result.toPromise();
    }

    /**
     * Link a logical database to the application
     * @param applicationId Application ID
     * @param targetLogicalDatabaseId Target database ID
     */
    public attachLogicalDatabasetoApplication(applicationId: string, targetLogicalDatabaseId: string, _options?: Configuration): Promise<LogicalDatabaseResponse> {
        const result = this.api.attachLogicalDatabasetoApplication(applicationId, targetLogicalDatabaseId, _options);
        return result.toPromise();
    }

    /**
     * List linked databases
     * @param applicationId Application ID
     */
    public listApplicationDatabase(applicationId: string, _options?: Configuration): Promise<DatabaseResponseList> {
        const result = this.api.listApplicationDatabase(applicationId, _options);
        return result.toPromise();
    }

    /**
     * List linked logical databases
     * @param applicationId Application ID
     */
    public listApplicationLogicalDatabase(applicationId: string, _options?: Configuration): Promise<LogicalDatabaseResponseList> {
        const result = this.api.listApplicationLogicalDatabase(applicationId, _options);
        return result.toPromise();
    }

    /**
     * Remove database link to this application.
     * @param applicationId Application ID
     * @param targetDatabaseId Target database ID
     */
    public removeDatabaseFromApplication(applicationId: string, targetDatabaseId: string, _options?: Configuration): Promise<void> {
        const result = this.api.removeDatabaseFromApplication(applicationId, targetDatabaseId, _options);
        return result.toPromise();
    }

    /**
     * Remove logical database link to this application.
     * @param applicationId Application ID
     * @param targetLogicalDatabaseId Target database ID
     */
    public removeLogicalDatabaseFromApplication(applicationId: string, targetLogicalDatabaseId: string, _options?: Configuration): Promise<void> {
        const result = this.api.removeLogicalDatabaseFromApplication(applicationId, targetLogicalDatabaseId, _options);
        return result.toPromise();
    }


}



import { ObservableApplicationDeploymentHistoryApi } from './ObservableAPI';

import { ApplicationDeploymentHistoryApiRequestFactory, ApplicationDeploymentHistoryApiResponseProcessor} from "../apis/ApplicationDeploymentHistoryApi";
export class PromiseApplicationDeploymentHistoryApi {
    private api: ObservableApplicationDeploymentHistoryApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationDeploymentHistoryApiRequestFactory,
        responseProcessor?: ApplicationDeploymentHistoryApiResponseProcessor
    ) {
        this.api = new ObservableApplicationDeploymentHistoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter. You can also filter by status (FAILED or SUCCESS), and git_commit_id
     * List application deploys
     * @param applicationId Application ID
     * @param startId Starting point after which to return results
     */
    public listApplicationDeploymentHistory(applicationId: string, startId?: string, _options?: Configuration): Promise<DeploymentHistoryPaginatedResponseList> {
        const result = this.api.listApplicationDeploymentHistory(applicationId, startId, _options);
        return result.toPromise();
    }


}



import { ObservableApplicationEnvironmentVariableApi } from './ObservableAPI';

import { ApplicationEnvironmentVariableApiRequestFactory, ApplicationEnvironmentVariableApiResponseProcessor} from "../apis/ApplicationEnvironmentVariableApi";
export class PromiseApplicationEnvironmentVariableApi {
    private api: ObservableApplicationEnvironmentVariableApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationEnvironmentVariableApiRequestFactory,
        responseProcessor?: ApplicationEnvironmentVariableApiResponseProcessor
    ) {
        this.api = new ObservableApplicationEnvironmentVariableApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * - Add an environment variable to the application. 
     * Add an environment variable to the application
     * @param applicationId Application ID
     * @param environmentVariableRequest 
     */
    public createApplicationEnvironmentVariable(applicationId: string, environmentVariableRequest?: EnvironmentVariableRequest, _options?: Configuration): Promise<EnvironmentVariableResponse> {
        const result = this.api.createApplicationEnvironmentVariable(applicationId, environmentVariableRequest, _options);
        return result.toPromise();
    }

    /**
     * - Allows you to add an alias at application level on an existing environment variable having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new environment variable at application level with the same value as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the aliased_variable will be exposed in the \"aliased_variable\" field of the newly created variable - Only 1 alias level is allowed. You can't create an alias on an alias 
     * Create an environment variable alias at the application level
     * @param applicationId Application ID
     * @param environmentVariableId Environment Variable ID
     * @param key 
     */
    public createApplicationEnvironmentVariableAlias(applicationId: string, environmentVariableId: string, key?: Key, _options?: Configuration): Promise<EnvironmentVariableResponse> {
        const result = this.api.createApplicationEnvironmentVariableAlias(applicationId, environmentVariableId, key, _options);
        return result.toPromise();
    }

    /**
     * - Allows you to override at application level an environment variable that has a higher scope. - You only have to specify a value in the request body - The system will create a new environment variable at application level with the same key as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the overridden_variable will be exposed in the \"overridden_variable\" field of the newly created variable 
     * Create an environment variable override at the application level
     * @param applicationId Application ID
     * @param environmentVariableId Environment Variable ID
     * @param value 
     */
    public createApplicationEnvironmentVariableOverride(applicationId: string, environmentVariableId: string, value?: Value, _options?: Configuration): Promise<EnvironmentVariableResponse> {
        const result = this.api.createApplicationEnvironmentVariableOverride(applicationId, environmentVariableId, value, _options);
        return result.toPromise();
    }

    /**
     * - To delete an environment variable from an application you must have the project user permission - You can't delete a BUILT_IN variable - If you delete a variable having override or alias, the associated override/alias will be deleted as well 
     * Delete an environment variable from an application
     * @param applicationId Application ID
     * @param environmentVariableId Environment Variable ID
     */
    public deleteApplicationEnvironmentVariable(applicationId: string, environmentVariableId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteApplicationEnvironmentVariable(applicationId, environmentVariableId, _options);
        return result.toPromise();
    }

    /**
     * - You can't edit a BUILT_IN variable - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the variable it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 
     * Edit an environment variable belonging to the application
     * @param applicationId Application ID
     * @param environmentVariableId Environment Variable ID
     * @param environmentVariableEditRequest 
     */
    public editApplicationEnvironmentVariable(applicationId: string, environmentVariableId: string, environmentVariableEditRequest: EnvironmentVariableEditRequest, _options?: Configuration): Promise<EnvironmentVariableResponse> {
        const result = this.api.editApplicationEnvironmentVariable(applicationId, environmentVariableId, environmentVariableEditRequest, _options);
        return result.toPromise();
    }

    /**
     * Import environment variables in a defined scope, with a defined visibility.
     * Import variables
     * @param applicationId Application ID
     * @param variableImportRequest 
     */
    public importEnvironmentVariable(applicationId: string, variableImportRequest?: VariableImportRequest, _options?: Configuration): Promise<VariableImportResponse> {
        const result = this.api.importEnvironmentVariable(applicationId, variableImportRequest, _options);
        return result.toPromise();
    }

    /**
     * List environment variables
     * @param applicationId Application ID
     */
    public listApplicationEnvironmentVariable(applicationId: string, _options?: Configuration): Promise<EnvironmentVariableResponseList> {
        const result = this.api.listApplicationEnvironmentVariable(applicationId, _options);
        return result.toPromise();
    }


}



import { ObservableApplicationEventApi } from './ObservableAPI';

import { ApplicationEventApiRequestFactory, ApplicationEventApiResponseProcessor} from "../apis/ApplicationEventApi";
export class PromiseApplicationEventApi {
    private api: ObservableApplicationEventApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationEventApiRequestFactory,
        responseProcessor?: ApplicationEventApiResponseProcessor
    ) {
        this.api = new ObservableApplicationEventApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter
     * List application events
     * @param applicationId Application ID
     * @param startId Starting point after which to return results
     */
    public listApplicationEvent(applicationId: string, startId?: string, _options?: Configuration): Promise<EventPaginatedResponseList> {
        const result = this.api.listApplicationEvent(applicationId, startId, _options);
        return result.toPromise();
    }


}



import { ObservableApplicationLogsApi } from './ObservableAPI';

import { ApplicationLogsApiRequestFactory, ApplicationLogsApiResponseProcessor} from "../apis/ApplicationLogsApi";
export class PromiseApplicationLogsApi {
    private api: ObservableApplicationLogsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationLogsApiRequestFactory,
        responseProcessor?: ApplicationLogsApiResponseProcessor
    ) {
        this.api = new ObservableApplicationLogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This will list the last 1000 logs of the application
     * List logs
     * @param applicationId Application ID
     */
    public listApplicationLog(applicationId: string, _options?: Configuration): Promise<LogResponseList> {
        const result = this.api.listApplicationLog(applicationId, _options);
        return result.toPromise();
    }


}



import { ObservableApplicationMainCallsApi } from './ObservableAPI';

import { ApplicationMainCallsApiRequestFactory, ApplicationMainCallsApiResponseProcessor} from "../apis/ApplicationMainCallsApi";
export class PromiseApplicationMainCallsApi {
    private api: ObservableApplicationMainCallsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationMainCallsApiRequestFactory,
        responseProcessor?: ApplicationMainCallsApiResponseProcessor
    ) {
        this.api = new ObservableApplicationMainCallsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add application tag
     * @param applicationId Application ID
     * @param tagRequest 
     */
    public createApplicationTag(applicationId: string, tagRequest?: TagRequest, _options?: Configuration): Promise<TagResponseList> {
        const result = this.api.createApplicationTag(applicationId, tagRequest, _options);
        return result.toPromise();
    }

    /**
     * To delete the application you must have the admin permission
     * Delete application
     * @param applicationId Application ID
     */
    public deleteApplication(applicationId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteApplication(applicationId, _options);
        return result.toPromise();
    }

    /**
     * Delete application tag
     * @param applicationId Application ID
     * @param tagId Tag ID
     */
    public deleteApplicationTag(applicationId: string, tagId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteApplicationTag(applicationId, tagId, _options);
        return result.toPromise();
    }

    /**
     * - To edit the application you must have the admin permission. - For port edition, if you provide a port id, we will update the corresponding port. If you don't we will create a new one. If you remove a port from the payload, we will delete it. - For storage edition, if you provide a storage id, we will update the corresponding storage. If you don't we will create a new one. If you remove a storage from the payload, we will delete it. 
     * Edit application
     * @param applicationId Application ID
     * @param applicationEditRequest 
     */
    public editApplication(applicationId: string, applicationEditRequest?: ApplicationEditRequest, _options?: Configuration): Promise<ApplicationResponse> {
        const result = this.api.editApplication(applicationId, applicationEditRequest, _options);
        return result.toPromise();
    }

    /**
     * Get application by ID
     * @param applicationId Application ID
     */
    public getApplication(applicationId: string, _options?: Configuration): Promise<ApplicationResponse> {
        const result = this.api.getApplication(applicationId, _options);
        return result.toPromise();
    }

    /**
     * Get application status
     * @param applicationId Application ID
     */
    public getApplicationStatus(applicationId: string, _options?: Configuration): Promise<Status> {
        const result = this.api.getApplicationStatus(applicationId, _options);
        return result.toPromise();
    }

    /**
     * Returns list of the last 100 commits made on the repository linked to the application
     * List last commits
     * @param applicationId Application ID
     * @param startId Starting point after which to return results
     * @param gitCommitId Git Commit ID
     */
    public listApplicationCommit(applicationId: string, startId?: string, gitCommitId?: string, _options?: Configuration): Promise<CommitResponseList> {
        const result = this.api.listApplicationCommit(applicationId, startId, gitCommitId, _options);
        return result.toPromise();
    }

    /**
     * List contributors
     * @param applicationId Application ID
     */
    public listApplicationContributor(applicationId: string, _options?: Configuration): Promise<UserResponseList> {
        const result = this.api.listApplicationContributor(applicationId, _options);
        return result.toPromise();
    }

    /**
     * This will return all the custom domains and Qovery autogenerated domain for the given application
     * List all URLs of the application
     * @param applicationId Application ID
     */
    public listApplicationLinks(applicationId: string, _options?: Configuration): Promise<LinkResponseList> {
        const result = this.api.listApplicationLinks(applicationId, _options);
        return result.toPromise();
    }

    /**
     * List tags
     * @param applicationId Application ID
     */
    public listApplicationTag(applicationId: string, _options?: Configuration): Promise<TagResponseList> {
        const result = this.api.listApplicationTag(applicationId, _options);
        return result.toPromise();
    }


}



import { ObservableApplicationMetricsApi } from './ObservableAPI';

import { ApplicationMetricsApiRequestFactory, ApplicationMetricsApiResponseProcessor} from "../apis/ApplicationMetricsApi";
export class PromiseApplicationMetricsApi {
    private api: ObservableApplicationMetricsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationMetricsApiRequestFactory,
        responseProcessor?: ApplicationMetricsApiResponseProcessor
    ) {
        this.api = new ObservableApplicationMetricsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List currently running instances of the application with their CPU and RAM metrics
     * @param applicationId Application ID
     */
    public getApplicationCurrentInstance(applicationId: string, _options?: Configuration): Promise<InstanceResponseList> {
        const result = this.api.getApplicationCurrentInstance(applicationId, _options);
        return result.toPromise();
    }

    /**
     * Returns min, max, and running number of instances of the application
     * Get current scaling of the application
     * @param applicationId Application ID
     */
    public getApplicationCurrentScale(applicationId: string, _options?: Configuration): Promise<ApplicationCurrentScaleResponse> {
        const result = this.api.getApplicationCurrentScale(applicationId, _options);
        return result.toPromise();
    }

    /**
     * List current storage disk usage
     * @param applicationId Application ID
     */
    public getApplicationCurrentStorageDisk(applicationId: string, _options?: Configuration): Promise<StorageDiskResponseList> {
        const result = this.api.getApplicationCurrentStorageDisk(applicationId, _options);
        return result.toPromise();
    }

    /**
     * Get CPU consumption metric over time for the application
     * @param applicationId Application ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public getApplicationMetricCpu(applicationId: string, lastSeconds: number, _options?: Configuration): Promise<MetricCPUResponseList> {
        const result = this.api.getApplicationMetricCpu(applicationId, lastSeconds, _options);
        return result.toPromise();
    }

    /**
     * The value returned corresponds to the 95th centile
     * Get Health Check latency  metric over time for the application
     * @param applicationId Application ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public getApplicationMetricHealthCheck(applicationId: string, lastSeconds: number, _options?: Configuration): Promise<MetricGenericResponseList> {
        const result = this.api.getApplicationMetricHealthCheck(applicationId, lastSeconds, _options);
        return result.toPromise();
    }

    /**
     * Get Memory consumption metric over time for the application
     * @param applicationId Application ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public getApplicationMetricMemory(applicationId: string, lastSeconds: number, _options?: Configuration): Promise<MetricMemoryResponseList> {
        const result = this.api.getApplicationMetricMemory(applicationId, lastSeconds, _options);
        return result.toPromise();
    }

    /**
     * Get application restart message and timestamp.
     * List application restarts
     * @param applicationId Application ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public getApplicationMetricRestart(applicationId: string, lastSeconds: number, _options?: Configuration): Promise<MetricRestartResponse> {
        const result = this.api.getApplicationMetricRestart(applicationId, lastSeconds, _options);
        return result.toPromise();
    }

    /**
     * Get Storage consumption metric over time for the application
     * @param applicationId Application ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public getApplicationMetricStorage(applicationId: string, lastSeconds: number, _options?: Configuration): Promise<MetricStorageResponseList> {
        const result = this.api.getApplicationMetricStorage(applicationId, lastSeconds, _options);
        return result.toPromise();
    }


}



import { ObservableApplicationSecretApi } from './ObservableAPI';

import { ApplicationSecretApiRequestFactory, ApplicationSecretApiResponseProcessor} from "../apis/ApplicationSecretApi";
export class PromiseApplicationSecretApi {
    private api: ObservableApplicationSecretApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationSecretApiRequestFactory,
        responseProcessor?: ApplicationSecretApiResponseProcessor
    ) {
        this.api = new ObservableApplicationSecretApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * - Add a secret to the application. 
     * Add a secret to the application
     * @param applicationId Application ID
     * @param secretRequest 
     */
    public createApplicationSecret(applicationId: string, secretRequest?: SecretRequest, _options?: Configuration): Promise<SecretResponse> {
        const result = this.api.createApplicationSecret(applicationId, secretRequest, _options);
        return result.toPromise();
    }

    /**
     * - Allows you to add an alias at application level on an existing secret having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new secret at application level with the same value as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the aliased_secret will be exposed in the \"aliased_secret\" field of the newly created secret - Only 1 alias level is allowed. You can't create an alias on an alias 
     * Create a secret alias at the application level
     * @param applicationId Application ID
     * @param secretId Secret ID
     * @param key 
     */
    public createApplicationSecretAlias(applicationId: string, secretId: string, key?: Key, _options?: Configuration): Promise<SecretResponse> {
        const result = this.api.createApplicationSecretAlias(applicationId, secretId, key, _options);
        return result.toPromise();
    }

    /**
     * - Allows you to override at application level a secret that has a higher scope. - You only have to specify a value in the request body - The system will create a new secret at application level with the same key as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the overridden_secret will be exposed in the \"overridden_secret\" field of the newly created secret 
     * Create a secret override at the application level
     * @param applicationId Application ID
     * @param secretId Secret ID
     * @param value 
     */
    public createApplicationSecretOverride(applicationId: string, secretId: string, value?: Value, _options?: Configuration): Promise<SecretResponse> {
        const result = this.api.createApplicationSecretOverride(applicationId, secretId, value, _options);
        return result.toPromise();
    }

    /**
     * - To delete a secret you must have the project user permission - You can't delete a BUILT_IN secret - If you delete a secret having override or alias, the associated override/alias will be deleted as well 
     * Delete a secret from an application
     * @param applicationId Application ID
     * @param secretId Secret ID
     */
    public deleteApplicationSecret(applicationId: string, secretId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteApplicationSecret(applicationId, secretId, _options);
        return result.toPromise();
    }

    /**
     * - You can't edit a BUILT_IN secret - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the secret it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 
     * Edit a secret belonging to the application
     * @param applicationId Application ID
     * @param secretId Secret ID
     * @param secretEditRequest 
     */
    public editApplicationSecret(applicationId: string, secretId: string, secretEditRequest: SecretEditRequest, _options?: Configuration): Promise<SecretResponse> {
        const result = this.api.editApplicationSecret(applicationId, secretId, secretEditRequest, _options);
        return result.toPromise();
    }

    /**
     * Secrets are like environment variables, but they are secured and can't be revealed.
     * List application secrets
     * @param applicationId Application ID
     */
    public listApplicationSecrets(applicationId: string, _options?: Configuration): Promise<SecretResponseList> {
        const result = this.api.listApplicationSecrets(applicationId, _options);
        return result.toPromise();
    }


}



import { ObservableApplicationsApi } from './ObservableAPI';

import { ApplicationsApiRequestFactory, ApplicationsApiResponseProcessor} from "../apis/ApplicationsApi";
export class PromiseApplicationsApi {
    private api: ObservableApplicationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationsApiRequestFactory,
        responseProcessor?: ApplicationsApiResponseProcessor
    ) {
        this.api = new ObservableApplicationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an application
     * @param environmentId Environment ID
     * @param applicationRequest 
     */
    public createApplication(environmentId: string, applicationRequest?: ApplicationRequest, _options?: Configuration): Promise<ApplicationResponse> {
        const result = this.api.createApplication(environmentId, applicationRequest, _options);
        return result.toPromise();
    }

    /**
     * List running instances with CPU and RAM usage for each application
     * @param environmentId Environment ID
     */
    public getEnvironmentApplicationCurrentInstance(environmentId: string, _options?: Configuration): Promise<EnvironmentApplicationsInstanceResponseList> {
        const result = this.api.getEnvironmentApplicationCurrentInstance(environmentId, _options);
        return result.toPromise();
    }

    /**
     * Returns min, max, and running number of instances for each application
     * List current scaling information for each application
     * @param environmentId Environment ID
     */
    public getEnvironmentApplicationCurrentScale(environmentId: string, _options?: Configuration): Promise<EnvironmentApplicationsCurrentScaleResponseList> {
        const result = this.api.getEnvironmentApplicationCurrentScale(environmentId, _options);
        return result.toPromise();
    }

    /**
     * List current storage disk usage for each application
     * @param environmentId Environment ID
     */
    public getEnvironmentApplicationCurrentStorage(environmentId: string, _options?: Configuration): Promise<EnvironmentApplicationsStorageResponseList> {
        const result = this.api.getEnvironmentApplicationCurrentStorage(environmentId, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of applications with only their id and status.
     * List all environment applications statuses
     * @param environmentId Environment ID
     */
    public getEnvironmentApplicationStatus(environmentId: string, _options?: Configuration): Promise<ReferenceObjectStatusResponseList> {
        const result = this.api.getEnvironmentApplicationStatus(environmentId, _options);
        return result.toPromise();
    }

    /**
     * Returns list of languages supported by Buildpacks.
     * List supported languages
     * @param environmentId Environment ID
     */
    public getEnvironmentApplicationSupportedLanguages(environmentId: string, _options?: Configuration): Promise<EnvironmentApplicationsSupportedLanguageList> {
        const result = this.api.getEnvironmentApplicationSupportedLanguages(environmentId, _options);
        return result.toPromise();
    }

    /**
     * List applications
     * @param environmentId Environment ID
     * @param toUpdate return (or not) results that must be updated
     */
    public listApplication(environmentId: string, toUpdate?: boolean, _options?: Configuration): Promise<ApplicationResponseList> {
        const result = this.api.listApplication(environmentId, toUpdate, _options);
        return result.toPromise();
    }


}



import { ObservableBackupsApi } from './ObservableAPI';

import { BackupsApiRequestFactory, BackupsApiResponseProcessor} from "../apis/BackupsApi";
export class PromiseBackupsApi {
    private api: ObservableBackupsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BackupsApiRequestFactory,
        responseProcessor?: BackupsApiResponseProcessor
    ) {
        this.api = new ObservableBackupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a backup to the Database 
     * @param databaseId Database ID
     * @param backupRequest 
     */
    public addBackupDatabase(databaseId: string, backupRequest?: BackupRequest, _options?: Configuration): Promise<BackupResponse> {
        const result = this.api.addBackupDatabase(databaseId, backupRequest, _options);
        return result.toPromise();
    }

    /**
     * By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter
     * List database  backups
     * @param databaseId Database ID
     * @param startId Starting point after which to return results
     */
    public listDatabaseBackup(databaseId: string, startId?: string, _options?: Configuration): Promise<BackupPaginatedResponseList> {
        const result = this.api.listDatabaseBackup(databaseId, startId, _options);
        return result.toPromise();
    }

    /**
     * Remove database  backup
     * @param databaseId Database ID
     * @param backupId Database Backup ID
     */
    public removeDatabaseBackup(databaseId: string, backupId: string, _options?: Configuration): Promise<void> {
        const result = this.api.removeDatabaseBackup(databaseId, backupId, _options);
        return result.toPromise();
    }


}



import { ObservableBillingApi } from './ObservableAPI';

import { BillingApiRequestFactory, BillingApiResponseProcessor} from "../apis/BillingApi";
export class PromiseBillingApi {
    private api: ObservableBillingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BillingApiRequestFactory,
        responseProcessor?: BillingApiResponseProcessor
    ) {
        this.api = new ObservableBillingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add credit card
     * @param organizationId Organization ID
     * @param creditCardRequest 
     */
    public addCreditCard(organizationId: string, creditCardRequest?: CreditCardRequest, _options?: Configuration): Promise<CreditCardResponse> {
        const result = this.api.addCreditCard(organizationId, creditCardRequest, _options);
        return result.toPromise();
    }

    /**
     * Add credit code
     * @param organizationId Organization ID
     * @param organizationCreditCodeRequest 
     */
    public addCreditCode(organizationId: string, organizationCreditCodeRequest?: OrganizationCreditCodeRequest, _options?: Configuration): Promise<void> {
        const result = this.api.addCreditCode(organizationId, organizationCreditCodeRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete credit card
     * @param organizationId Organization ID
     * @param creditCardId Credit Card ID
     */
    public deleteCreditCard(organizationId: string, creditCardId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCreditCard(organizationId, creditCardId, _options);
        return result.toPromise();
    }

    /**
     * Edit Organization Billing Info
     * @param organizationId Organization ID
     * @param billingInfoRequest 
     */
    public editOrganizationBillingInfo(organizationId: string, billingInfoRequest?: BillingInfoRequest, _options?: Configuration): Promise<BillingInfoResponse> {
        const result = this.api.editOrganizationBillingInfo(organizationId, billingInfoRequest, _options);
        return result.toPromise();
    }

    /**
     * Get your cluster cost range. We are unable to give a precise cost of your infrastructure at the moment. But Qovery guarantees that the cost of your cluster will not exceed the max range. 
     * Get cluster current cost
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     */
    public getClusterCurrentCost(organizationId: string, clusterId: string, _options?: Configuration): Promise<CostRangeResponse> {
        const result = this.api.getClusterCurrentCost(organizationId, clusterId, _options);
        return result.toPromise();
    }

    /**
     * Get organization billing info
     * @param organizationId Organization ID
     */
    public getOrganizationBillingInfo(organizationId: string, _options?: Configuration): Promise<BillingInfoResponse> {
        const result = this.api.getOrganizationBillingInfo(organizationId, _options);
        return result.toPromise();
    }

    /**
     * This endpoint returns a \"is_valid\" boolean field reflecting the billing status of the organization: - If true, the organization billing is valid - For Startup organization, it returns false if there is at least 1 invoice unpaid since 1 week - For Community organization, it returns false if there is no credit left 
     * Get organization billing status
     * @param organizationId Organization ID
     */
    public getOrganizationBillingStatus(organizationId: string, _options?: Configuration): Promise<BillingStatus> {
        const result = this.api.getOrganizationBillingStatus(organizationId, _options);
        return result.toPromise();
    }

    /**
     * Get organization current cost
     * @param organizationId Organization ID
     */
    public getOrganizationCurrentCost(organizationId: string, _options?: Configuration): Promise<OrganizationCurrentCostResponse> {
        const result = this.api.getOrganizationCurrentCost(organizationId, _options);
        return result.toPromise();
    }

    /**
     * Get organization invoice
     * @param organizationId Organization ID
     * @param invoiceId Invoice ID
     */
    public getOrganizationInvoice(organizationId: string, invoiceId: string, _options?: Configuration): Promise<InvoiceResponse> {
        const result = this.api.getOrganizationInvoice(organizationId, invoiceId, _options);
        return result.toPromise();
    }

    /**
     * This will return URL of the invoice PDF
     * Get invoice link
     * @param organizationId Organization ID
     * @param invoiceId Invoice ID
     */
    public getOrganizationInvoicePDF(organizationId: string, invoiceId: string, _options?: Configuration): Promise<LinkResponse> {
        const result = this.api.getOrganizationInvoicePDF(organizationId, invoiceId, _options);
        return result.toPromise();
    }

    /**
     * List organization credit cards
     * @param organizationId Organization ID
     */
    public listOrganizationCreditCards(organizationId: string, _options?: Configuration): Promise<CreditCardResponseList> {
        const result = this.api.listOrganizationCreditCards(organizationId, _options);
        return result.toPromise();
    }

    /**
     * List organization invoices
     * @param organizationId Organization ID
     */
    public listOrganizationInvoice(organizationId: string, _options?: Configuration): Promise<InvoiceResponseList> {
        const result = this.api.listOrganizationInvoice(organizationId, _options);
        return result.toPromise();
    }

    /**
     * Download all invoices
     * @param organizationId Organization ID
     */
    public organizationDownloadAllInvoices(organizationId: string, _options?: Configuration): Promise<void> {
        const result = this.api.organizationDownloadAllInvoices(organizationId, _options);
        return result.toPromise();
    }


}



import { ObservableCloudProviderApi } from './ObservableAPI';

import { CloudProviderApiRequestFactory, CloudProviderApiResponseProcessor} from "../apis/CloudProviderApi";
export class PromiseCloudProviderApi {
    private api: ObservableCloudProviderApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CloudProviderApiRequestFactory,
        responseProcessor?: CloudProviderApiResponseProcessor
    ) {
        this.api = new ObservableCloudProviderApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List AWS features available
     */
    public listAWSFeatures(_options?: Configuration): Promise<ClusterFeatureResponseList> {
        const result = this.api.listAWSFeatures(_options);
        return result.toPromise();
    }

    /**
     * List AWS regions
     */
    public listAWSRegions(_options?: Configuration): Promise<ClusterRegionResponseList> {
        const result = this.api.listAWSRegions(_options);
        return result.toPromise();
    }

    /**
     * List Cloud providers available
     */
    public listCloudProvider(_options?: Configuration): Promise<CloudProviderResponseList> {
        const result = this.api.listCloudProvider(_options);
        return result.toPromise();
    }

    /**
     * List DO features available
     */
    public listDOFeatures(_options?: Configuration): Promise<ClusterFeatureResponseList> {
        const result = this.api.listDOFeatures(_options);
        return result.toPromise();
    }

    /**
     * List DO regions
     */
    public listDORegions(_options?: Configuration): Promise<ClusterRegionResponseList> {
        const result = this.api.listDORegions(_options);
        return result.toPromise();
    }

    /**
     * List Scaleway features available
     */
    public listScalewayFeatures(_options?: Configuration): Promise<ClusterFeatureResponseList> {
        const result = this.api.listScalewayFeatures(_options);
        return result.toPromise();
    }

    /**
     * List Scaleway regions
     */
    public listScalewayRegions(_options?: Configuration): Promise<ClusterRegionResponseList> {
        const result = this.api.listScalewayRegions(_options);
        return result.toPromise();
    }


}



import { ObservableCloudProviderCredentialsApi } from './ObservableAPI';

import { CloudProviderCredentialsApiRequestFactory, CloudProviderCredentialsApiResponseProcessor} from "../apis/CloudProviderCredentialsApi";
export class PromiseCloudProviderCredentialsApi {
    private api: ObservableCloudProviderCredentialsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CloudProviderCredentialsApiRequestFactory,
        responseProcessor?: CloudProviderCredentialsApiResponseProcessor
    ) {
        this.api = new ObservableCloudProviderCredentialsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create AWS credentials set
     * @param organizationId Organization ID
     * @param awsCredentialsRequest 
     */
    public createAWSCredentials(organizationId: string, awsCredentialsRequest?: AwsCredentialsRequest, _options?: Configuration): Promise<ClusterCredentialsResponse> {
        const result = this.api.createAWSCredentials(organizationId, awsCredentialsRequest, _options);
        return result.toPromise();
    }

    /**
     * Create Digital Ocean credentials set
     * @param organizationId Organization ID
     * @param doCredentialsRequest 
     */
    public createDOCredentials(organizationId: string, doCredentialsRequest?: DoCredentialsRequest, _options?: Configuration): Promise<ClusterCredentialsResponse> {
        const result = this.api.createDOCredentials(organizationId, doCredentialsRequest, _options);
        return result.toPromise();
    }

    /**
     * Create Scaleway credentials set
     * @param organizationId Organization ID
     * @param scalewayCredentialsRequest 
     */
    public createScalewayCredentials(organizationId: string, scalewayCredentialsRequest?: ScalewayCredentialsRequest, _options?: Configuration): Promise<ClusterCredentialsResponse> {
        const result = this.api.createScalewayCredentials(organizationId, scalewayCredentialsRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete a set of AWS credentials
     * @param credentialsId Credentials ID
     * @param organizationId Organization ID
     */
    public deleteAWSCredentials(credentialsId: string, organizationId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteAWSCredentials(credentialsId, organizationId, _options);
        return result.toPromise();
    }

    /**
     * Delete a set of Digital Ocean credentials
     * @param credentialsId Credentials ID
     * @param organizationId Organization ID
     */
    public deleteDOCredentials(credentialsId: string, organizationId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteDOCredentials(credentialsId, organizationId, _options);
        return result.toPromise();
    }

    /**
     * Delete a set of Scaleway credentials
     * @param credentialsId Credentials ID
     * @param organizationId Organization ID
     */
    public deleteScalewayCredentials(credentialsId: string, organizationId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteScalewayCredentials(credentialsId, organizationId, _options);
        return result.toPromise();
    }

    /**
     * Edit a set of AWS credentials
     * @param organizationId Organization ID
     * @param credentialsId Credentials ID
     * @param awsCredentialsRequest 
     */
    public editAWSCredentials(organizationId: string, credentialsId: string, awsCredentialsRequest?: AwsCredentialsRequest, _options?: Configuration): Promise<ClusterCredentialsResponse> {
        const result = this.api.editAWSCredentials(organizationId, credentialsId, awsCredentialsRequest, _options);
        return result.toPromise();
    }

    /**
     * Edit a set of Digital Ocean credentials
     * @param organizationId Organization ID
     * @param credentialsId Credentials ID
     * @param doCredentialsRequest 
     */
    public editDOCredentials(organizationId: string, credentialsId: string, doCredentialsRequest?: DoCredentialsRequest, _options?: Configuration): Promise<ClusterCredentialsResponse> {
        const result = this.api.editDOCredentials(organizationId, credentialsId, doCredentialsRequest, _options);
        return result.toPromise();
    }

    /**
     * Edit a set of Scaleway credentials
     * @param organizationId Organization ID
     * @param credentialsId Credentials ID
     * @param scalewayCredentialsRequest 
     */
    public editScalewayCredentials(organizationId: string, credentialsId: string, scalewayCredentialsRequest?: ScalewayCredentialsRequest, _options?: Configuration): Promise<ClusterCredentialsResponse> {
        const result = this.api.editScalewayCredentials(organizationId, credentialsId, scalewayCredentialsRequest, _options);
        return result.toPromise();
    }

    /**
     * List AWS credentials
     * @param organizationId Organization ID
     */
    public listAWSCredentials(organizationId: string, _options?: Configuration): Promise<ClusterCredentialsResponseList> {
        const result = this.api.listAWSCredentials(organizationId, _options);
        return result.toPromise();
    }

    /**
     * List DO credentials
     * @param organizationId Organization ID
     */
    public listDOCredentials(organizationId: string, _options?: Configuration): Promise<ClusterCredentialsResponseList> {
        const result = this.api.listDOCredentials(organizationId, _options);
        return result.toPromise();
    }

    /**
     * List Scaleway credentials
     * @param organizationId Organization ID
     */
    public listScalewayCredentials(organizationId: string, _options?: Configuration): Promise<ClusterCredentialsResponseList> {
        const result = this.api.listScalewayCredentials(organizationId, _options);
        return result.toPromise();
    }


}



import { ObservableClustersApi } from './ObservableAPI';

import { ClustersApiRequestFactory, ClustersApiResponseProcessor} from "../apis/ClustersApi";
export class PromiseClustersApi {
    private api: ObservableClustersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ClustersApiRequestFactory,
        responseProcessor?: ClustersApiResponseProcessor
    ) {
        this.api = new ObservableClustersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a cluster
     * @param organizationId Organization ID
     * @param clusterRequest 
     */
    public createCluster(organizationId: string, clusterRequest?: ClusterRequest, _options?: Configuration): Promise<ClusterResponse> {
        const result = this.api.createCluster(organizationId, clusterRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete a cluster
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     */
    public deleteCluster(organizationId: string, clusterId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCluster(organizationId, clusterId, _options);
        return result.toPromise();
    }

    /**
     * allows to deploy a cluster
     * Deploy a cluster
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     */
    public deployCluster(organizationId: string, clusterId: string, _options?: Configuration): Promise<ClusterStatusResponse> {
        const result = this.api.deployCluster(organizationId, clusterId, _options);
        return result.toPromise();
    }

    /**
     * Edit a cluster
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     * @param clusterRequest 
     */
    public editCluster(organizationId: string, clusterId: string, clusterRequest?: ClusterRequest, _options?: Configuration): Promise<ClusterResponse> {
        const result = this.api.editCluster(organizationId, clusterId, clusterRequest, _options);
        return result.toPromise();
    }

    /**
     * Edit routing table by returning updated table.
     * Edit routing table
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     * @param clusterRoutingTableRequest 
     */
    public editRoutingTable(organizationId: string, clusterId: string, clusterRoutingTableRequest?: ClusterRoutingTableRequest, _options?: Configuration): Promise<ClusterRoutingTableResponse> {
        const result = this.api.editRoutingTable(organizationId, clusterId, clusterRoutingTableRequest, _options);
        return result.toPromise();
    }

    /**
     * Know if a cluster is ready to be deployed or not
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     */
    public getClusterReadinessStatus(organizationId: string, clusterId: string, _options?: Configuration): Promise<ClusterReadinessStatus> {
        const result = this.api.getClusterReadinessStatus(organizationId, clusterId, _options);
        return result.toPromise();
    }

    /**
     * Get cluster status
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     */
    public getClusterStatus(organizationId: string, clusterId: string, _options?: Configuration): Promise<ClusterStatusResponse> {
        const result = this.api.getClusterStatus(organizationId, clusterId, _options);
        return result.toPromise();
    }

    /**
     * Get cluster cloud provider info and credentials
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     */
    public getOrganizationCloudProviderInfo(organizationId: string, clusterId: string, _options?: Configuration): Promise<ClusterCloudProviderInfoResponse> {
        const result = this.api.getOrganizationCloudProviderInfo(organizationId, clusterId, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of clusters with only their id and status.
     * List all clusters statuses
     * @param organizationId Organization ID
     */
    public getOrganizationClusterStatus(organizationId: string, _options?: Configuration): Promise<ClusterStatusResponseList> {
        const result = this.api.getOrganizationClusterStatus(organizationId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve network routing table where each line corresponds to a route between a destination and a target.
     * Get routing table
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     */
    public getRoutingTable(organizationId: string, clusterId: string, _options?: Configuration): Promise<ClusterRoutingTableResponse> {
        const result = this.api.getRoutingTable(organizationId, clusterId, _options);
        return result.toPromise();
    }

    /**
     * List organization clusters
     * @param organizationId Organization ID
     */
    public listOrganizationCluster(organizationId: string, _options?: Configuration): Promise<ClusterResponseList> {
        const result = this.api.listOrganizationCluster(organizationId, _options);
        return result.toPromise();
    }

    /**
     * Specify cluster cloud provider info and credentials
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     * @param clusterCloudProviderInfoRequest 
     */
    public specifyClusterCloudProviderInfo(organizationId: string, clusterId: string, clusterCloudProviderInfoRequest?: ClusterCloudProviderInfoRequest, _options?: Configuration): Promise<ClusterCloudProviderInfoResponse> {
        const result = this.api.specifyClusterCloudProviderInfo(organizationId, clusterId, clusterCloudProviderInfoRequest, _options);
        return result.toPromise();
    }

    /**
     * Cluster stop has been requester.
     * Stop cluster
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     */
    public stopCluster(organizationId: string, clusterId: string, _options?: Configuration): Promise<ClusterStatusResponse> {
        const result = this.api.stopCluster(organizationId, clusterId, _options);
        return result.toPromise();
    }

    /**
     * allows to update cluster version
     * Update a cluster Version
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     */
    public updateCluster(organizationId: string, clusterId: string, _options?: Configuration): Promise<ClusterStatusResponse> {
        const result = this.api.updateCluster(organizationId, clusterId, _options);
        return result.toPromise();
    }


}



import { ObservableCustomDomainApi } from './ObservableAPI';

import { CustomDomainApiRequestFactory, CustomDomainApiResponseProcessor} from "../apis/CustomDomainApi";
export class PromiseCustomDomainApi {
    private api: ObservableCustomDomainApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomDomainApiRequestFactory,
        responseProcessor?: CustomDomainApiResponseProcessor
    ) {
        this.api = new ObservableCustomDomainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a custom domain to this application in order not to use qovery autogenerated domain
     * Add custom domain to the application.
     * @param applicationId Application ID
     * @param customDomainRequest 
     */
    public createApplicationCustomDomain(applicationId: string, customDomainRequest?: CustomDomainRequest, _options?: Configuration): Promise<CustomDomainResponse> {
        const result = this.api.createApplicationCustomDomain(applicationId, customDomainRequest, _options);
        return result.toPromise();
    }

    /**
     * To delete an CustomDomain you must have the project user permission
     * Delete a Custom Domain
     * @param applicationId Application ID
     * @param customDomainId Custom Domain ID
     */
    public deleteCustomDomain(applicationId: string, customDomainId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCustomDomain(applicationId, customDomainId, _options);
        return result.toPromise();
    }

    /**
     * To edit a Custom Domain  you must have the project user permission
     * Edit a Custom Domain
     * @param applicationId Application ID
     * @param customDomainId Custom Domain ID
     * @param customDomainRequest 
     */
    public editCustomDomain(applicationId: string, customDomainId: string, customDomainRequest?: CustomDomainRequest, _options?: Configuration): Promise<CustomDomainResponse> {
        const result = this.api.editCustomDomain(applicationId, customDomainId, customDomainRequest, _options);
        return result.toPromise();
    }

    /**
     * Get Custom Domain status
     * @param applicationId Application ID
     * @param customDomainId Custom Domain ID
     */
    public getCustomDomainStatus(applicationId: string, customDomainId: string, _options?: Configuration): Promise<CustomDomainResponse> {
        const result = this.api.getCustomDomainStatus(applicationId, customDomainId, _options);
        return result.toPromise();
    }

    /**
     * List application custom domains
     * @param applicationId Application ID
     */
    public listApplicationCustomDomain(applicationId: string, _options?: Configuration): Promise<CustomDomainResponseList> {
        const result = this.api.listApplicationCustomDomain(applicationId, _options);
        return result.toPromise();
    }


}



import { ObservableDatabaseActionsApi } from './ObservableAPI';

import { DatabaseActionsApiRequestFactory, DatabaseActionsApiResponseProcessor} from "../apis/DatabaseActionsApi";
export class PromiseDatabaseActionsApi {
    private api: ObservableDatabaseActionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DatabaseActionsApiRequestFactory,
        responseProcessor?: DatabaseActionsApiResponseProcessor
    ) {
        this.api = new ObservableDatabaseActionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deploy database 
     * @param databaseId Database ID
     */
    public deployDatabase(databaseId: string, _options?: Configuration): Promise<Status> {
        const result = this.api.deployDatabase(databaseId, _options);
        return result.toPromise();
    }

    /**
     * Retart database
     * @param databaseId Database ID
     */
    public restartDatabase(databaseId: string, _options?: Configuration): Promise<Status> {
        const result = this.api.restartDatabase(databaseId, _options);
        return result.toPromise();
    }

    /**
     * Stop database
     * @param databaseId Database ID
     */
    public stopDatabase(databaseId: string, _options?: Configuration): Promise<Status> {
        const result = this.api.stopDatabase(databaseId, _options);
        return result.toPromise();
    }


}



import { ObservableDatabaseApplicationApi } from './ObservableAPI';

import { DatabaseApplicationApiRequestFactory, DatabaseApplicationApiResponseProcessor} from "../apis/DatabaseApplicationApi";
export class PromiseDatabaseApplicationApi {
    private api: ObservableDatabaseApplicationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DatabaseApplicationApiRequestFactory,
        responseProcessor?: DatabaseApplicationApiResponseProcessor
    ) {
        this.api = new ObservableDatabaseApplicationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List applications using the database
     * @param databaseId Database ID
     */
    public listDatabaseApplication(databaseId: string, _options?: Configuration): Promise<ApplicationResponseList> {
        const result = this.api.listDatabaseApplication(databaseId, _options);
        return result.toPromise();
    }

    /**
     * Remove an application from this database 
     * @param databaseId Database ID
     * @param targetApplicationId Target application ID
     */
    public removeApplicationFromDatabase(databaseId: string, targetApplicationId: string, _options?: Configuration): Promise<void> {
        const result = this.api.removeApplicationFromDatabase(databaseId, targetApplicationId, _options);
        return result.toPromise();
    }


}



import { ObservableDatabaseEventApi } from './ObservableAPI';

import { DatabaseEventApiRequestFactory, DatabaseEventApiResponseProcessor} from "../apis/DatabaseEventApi";
export class PromiseDatabaseEventApi {
    private api: ObservableDatabaseEventApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DatabaseEventApiRequestFactory,
        responseProcessor?: DatabaseEventApiResponseProcessor
    ) {
        this.api = new ObservableDatabaseEventApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter
     * List database  events
     * @param databaseId Database ID
     * @param startId Starting point after which to return results
     */
    public listDatabaseEvent(databaseId: string, startId?: string, _options?: Configuration): Promise<EventPaginatedResponseList> {
        const result = this.api.listDatabaseEvent(databaseId, startId, _options);
        return result.toPromise();
    }


}



import { ObservableDatabaseMainCallsApi } from './ObservableAPI';

import { DatabaseMainCallsApiRequestFactory, DatabaseMainCallsApiResponseProcessor} from "../apis/DatabaseMainCallsApi";
export class PromiseDatabaseMainCallsApi {
    private api: ObservableDatabaseMainCallsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DatabaseMainCallsApiRequestFactory,
        responseProcessor?: DatabaseMainCallsApiResponseProcessor
    ) {
        this.api = new ObservableDatabaseMainCallsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * To delete a database you must have the admin permission
     * Delete a database 
     * @param databaseId Database ID
     */
    public deleteDatabase(databaseId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteDatabase(databaseId, _options);
        return result.toPromise();
    }

    /**
     * To edit a database  you must have the admin permission
     * Edit a database 
     * @param databaseId Database ID
     * @param databaseEditRequest 
     */
    public editDatabase(databaseId: string, databaseEditRequest?: DatabaseEditRequest, _options?: Configuration): Promise<DatabaseResponse> {
        const result = this.api.editDatabase(databaseId, databaseEditRequest, _options);
        return result.toPromise();
    }

    /**
     * Edit database  master credentials
     * @param databaseId Database ID
     * @param credentialsRequest 
     */
    public editDatabaseCredentials(databaseId: string, credentialsRequest?: CredentialsRequest, _options?: Configuration): Promise<CredentialsResponse> {
        const result = this.api.editDatabaseCredentials(databaseId, credentialsRequest, _options);
        return result.toPromise();
    }

    /**
     * Get database by ID
     * @param databaseId Database ID
     */
    public getDatabase(databaseId: string, _options?: Configuration): Promise<DatabaseResponse> {
        const result = this.api.getDatabase(databaseId, _options);
        return result.toPromise();
    }

    /**
     * Get master credentials of the database
     * @param databaseId Database ID
     */
    public getDatabaseMasterCredentials(databaseId: string, _options?: Configuration): Promise<CredentialsResponse> {
        const result = this.api.getDatabaseMasterCredentials(databaseId, _options);
        return result.toPromise();
    }

    /**
     * Get database status
     * @param databaseId Database ID
     */
    public getDatabaseStatus(databaseId: string, _options?: Configuration): Promise<Status> {
        const result = this.api.getDatabaseStatus(databaseId, _options);
        return result.toPromise();
    }

    /**
     * List eligible versions for the database
     * @param databaseId Database ID
     */
    public listDatabaseVersion(databaseId: string, _options?: Configuration): Promise<VersionResponseList> {
        const result = this.api.listDatabaseVersion(databaseId, _options);
        return result.toPromise();
    }


}



import { ObservableDatabaseMetricsApi } from './ObservableAPI';

import { DatabaseMetricsApiRequestFactory, DatabaseMetricsApiResponseProcessor} from "../apis/DatabaseMetricsApi";
export class PromiseDatabaseMetricsApi {
    private api: ObservableDatabaseMetricsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DatabaseMetricsApiRequestFactory,
        responseProcessor?: DatabaseMetricsApiResponseProcessor
    ) {
        this.api = new ObservableDatabaseMetricsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get current metric consumption of the database 
     * @param databaseId Database ID
     */
    public getDatabaseCurrentMetric(databaseId: string, _options?: Configuration): Promise<DatabaseCurrentMetricResponse> {
        const result = this.api.getDatabaseCurrentMetric(databaseId, _options);
        return result.toPromise();
    }

    /**
     * Get CPU consumption metric over time for the database
     * @param databaseId Database ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public getDatabaseMetricCpu(databaseId: string, lastSeconds: number, _options?: Configuration): Promise<MetricCPUDatapointResponseList> {
        const result = this.api.getDatabaseMetricCpu(databaseId, lastSeconds, _options);
        return result.toPromise();
    }

    /**
     * The value returned corresponds to the 95th centile
     * Get Health Check latency  metric over time for the database
     * @param databaseId Database ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public getDatabaseMetricHealthCheck(databaseId: string, lastSeconds: number, _options?: Configuration): Promise<MetricGenericResponseList> {
        const result = this.api.getDatabaseMetricHealthCheck(databaseId, lastSeconds, _options);
        return result.toPromise();
    }

    /**
     * Get Memory consumption metric over time for the database
     * @param databaseId Database ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public getDatabaseMetricMemory(databaseId: string, lastSeconds: number, _options?: Configuration): Promise<MetricMemoryDatapointResponseList> {
        const result = this.api.getDatabaseMetricMemory(databaseId, lastSeconds, _options);
        return result.toPromise();
    }

    /**
     * Get database restart message and timestamp.
     * List database restarts
     * @param databaseId Database ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public getDatabaseMetricRestart(databaseId: string, lastSeconds: number, _options?: Configuration): Promise<MetricRestartResponse> {
        const result = this.api.getDatabaseMetricRestart(databaseId, lastSeconds, _options);
        return result.toPromise();
    }

    /**
     * Get Storage consumption metric over time for the database
     * @param databaseId Database ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public getDatabaseMetricStorage(databaseId: string, lastSeconds: number, _options?: Configuration): Promise<MetricStorageDatapointResponseList> {
        const result = this.api.getDatabaseMetricStorage(databaseId, lastSeconds, _options);
        return result.toPromise();
    }


}



import { ObservableDatabasesApi } from './ObservableAPI';

import { DatabasesApiRequestFactory, DatabasesApiResponseProcessor} from "../apis/DatabasesApi";
export class PromiseDatabasesApi {
    private api: ObservableDatabasesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DatabasesApiRequestFactory,
        responseProcessor?: DatabasesApiResponseProcessor
    ) {
        this.api = new ObservableDatabasesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a database
     * @param environmentId Environment ID
     * @param databaseRequest 
     */
    public createDatabase(environmentId: string, databaseRequest?: DatabaseRequest, _options?: Configuration): Promise<DatabaseResponse> {
        const result = this.api.createDatabase(environmentId, databaseRequest, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of databases with only their id and status.
     * List all environment databases statuses
     * @param environmentId Environment ID
     */
    public getEnvironmentDatabaseStatus(environmentId: string, _options?: Configuration): Promise<ReferenceObjectStatusResponseList> {
        const result = this.api.getEnvironmentDatabaseStatus(environmentId, _options);
        return result.toPromise();
    }

    /**
     * List environment databases
     * @param environmentId Environment ID
     */
    public listDatabase(environmentId: string, _options?: Configuration): Promise<DatabaseResponseList> {
        const result = this.api.listDatabase(environmentId, _options);
        return result.toPromise();
    }

    /**
     * List eligible database types, versions and modes for the environment
     * @param environmentId Environment ID
     */
    public listEnvironmentDatabaseConfig(environmentId: string, _options?: Configuration): Promise<DatabaseConfigurationResponseList> {
        const result = this.api.listEnvironmentDatabaseConfig(environmentId, _options);
        return result.toPromise();
    }

    /**
     * List current metric consumption for each database
     * @param environmentId Environment ID
     */
    public listEnvironmentDatabaseCurrentMetric(environmentId: string, _options?: Configuration): Promise<EnvironmentDatabasesCurrentMetricResponseList> {
        const result = this.api.listEnvironmentDatabaseCurrentMetric(environmentId, _options);
        return result.toPromise();
    }


}



import { ObservableDependencyApi } from './ObservableAPI';

import { DependencyApiRequestFactory, DependencyApiResponseProcessor} from "../apis/DependencyApi";
export class PromiseDependencyApi {
    private api: ObservableDependencyApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DependencyApiRequestFactory,
        responseProcessor?: DependencyApiResponseProcessor
    ) {
        this.api = new ObservableDependencyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add application dependency to this application to prevent this application starting before the linked dependencies
     * Add application dependency to this application.
     * @param applicationId Application ID
     * @param targetApplicationId Target application ID
     */
    public createApplicationDependency(applicationId: string, targetApplicationId: string, _options?: Configuration): Promise<ApplicationResponse> {
        const result = this.api.createApplicationDependency(applicationId, targetApplicationId, _options);
        return result.toPromise();
    }

    /**
     * List application dependencies
     * @param applicationId Application ID
     */
    public listApplicationDependency(applicationId: string, _options?: Configuration): Promise<ApplicationResponseList> {
        const result = this.api.listApplicationDependency(applicationId, _options);
        return result.toPromise();
    }

    /**
     * Remove application dependency to this application.
     * @param applicationId Application ID
     * @param targetApplicationId Target application ID
     */
    public removeApplicationDependency(applicationId: string, targetApplicationId: string, _options?: Configuration): Promise<void> {
        const result = this.api.removeApplicationDependency(applicationId, targetApplicationId, _options);
        return result.toPromise();
    }


}



import { ObservableEnvironmentActionsApi } from './ObservableAPI';

import { EnvironmentActionsApiRequestFactory, EnvironmentActionsApiResponseProcessor} from "../apis/EnvironmentActionsApi";
export class PromiseEnvironmentActionsApi {
    private api: ObservableEnvironmentActionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EnvironmentActionsApiRequestFactory,
        responseProcessor?: EnvironmentActionsApiResponseProcessor
    ) {
        this.api = new ObservableEnvironmentActionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Cancel the current deployment of your environment.
     * Cancel environment deployment
     * @param environmentId Environment ID
     */
    public cancelEnvironmentDeployment(environmentId: string, _options?: Configuration): Promise<Status> {
        const result = this.api.cancelEnvironmentDeployment(environmentId, _options);
        return result.toPromise();
    }

    /**
     * You must provide a name. This will create a new environment, with the same configuration, and same applications and databases. Database data is not cloned.
     * Clone environment
     * @param environmentId Environment ID
     * @param cloneRequest 
     */
    public cloneEnvironment(environmentId: string, cloneRequest?: CloneRequest, _options?: Configuration): Promise<EnvironmentResponse> {
        const result = this.api.cloneEnvironment(environmentId, cloneRequest, _options);
        return result.toPromise();
    }

    /**
     * This will deploy all the services of this environment to their latest version.
     * Deploy environment
     * @param environmentId Environment ID
     */
    public deployEnvironment(environmentId: string, _options?: Configuration): Promise<Status> {
        const result = this.api.deployEnvironment(environmentId, _options);
        return result.toPromise();
    }

    /**
     * Restart environment
     * @param environmentId Environment ID
     * @param environmentRestartRequest 
     */
    public restartEnvironment(environmentId: string, environmentRestartRequest?: EnvironmentRestartRequest, _options?: Configuration): Promise<Status> {
        const result = this.api.restartEnvironment(environmentId, environmentRestartRequest, _options);
        return result.toPromise();
    }

    /**
     * Stop environment
     * @param environmentId Environment ID
     */
    public stopEnvironment(environmentId: string, _options?: Configuration): Promise<Status> {
        const result = this.api.stopEnvironment(environmentId, _options);
        return result.toPromise();
    }


}



import { ObservableEnvironmentDeploymentHistoryApi } from './ObservableAPI';

import { EnvironmentDeploymentHistoryApiRequestFactory, EnvironmentDeploymentHistoryApiResponseProcessor} from "../apis/EnvironmentDeploymentHistoryApi";
export class PromiseEnvironmentDeploymentHistoryApi {
    private api: ObservableEnvironmentDeploymentHistoryApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EnvironmentDeploymentHistoryApiRequestFactory,
        responseProcessor?: EnvironmentDeploymentHistoryApiResponseProcessor
    ) {
        this.api = new ObservableEnvironmentDeploymentHistoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List previous and current environment deployments with the status deployment and the related services. By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter
     * List environment deployments
     * @param environmentId Environment ID
     * @param startId Starting point after which to return results
     */
    public listEnvironmentDeploymentHistory(environmentId: string, startId?: string, _options?: Configuration): Promise<DeploymentHistoryEnvironmentPaginatedResponseList> {
        const result = this.api.listEnvironmentDeploymentHistory(environmentId, startId, _options);
        return result.toPromise();
    }


}



import { ObservableEnvironmentDeploymentRuleApi } from './ObservableAPI';

import { EnvironmentDeploymentRuleApiRequestFactory, EnvironmentDeploymentRuleApiResponseProcessor} from "../apis/EnvironmentDeploymentRuleApi";
export class PromiseEnvironmentDeploymentRuleApi {
    private api: ObservableEnvironmentDeploymentRuleApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EnvironmentDeploymentRuleApiRequestFactory,
        responseProcessor?: EnvironmentDeploymentRuleApiResponseProcessor
    ) {
        this.api = new ObservableEnvironmentDeploymentRuleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Edit an environment deployment rule
     * @param environmentId Environment ID
     * @param deploymentRuleId Deployment Rule ID
     * @param environmentDeploymentRuleEditRequest 
     */
    public editEnvironmentDeploymentRule(environmentId: string, deploymentRuleId: string, environmentDeploymentRuleEditRequest?: EnvironmentDeploymentRuleEditRequest, _options?: Configuration): Promise<EnvironmentDeploymentRuleResponse> {
        const result = this.api.editEnvironmentDeploymentRule(environmentId, deploymentRuleId, environmentDeploymentRuleEditRequest, _options);
        return result.toPromise();
    }

    /**
     * Get environment deployment rule
     * @param environmentId Environment ID
     */
    public getEnvironmentDeploymentRule(environmentId: string, _options?: Configuration): Promise<EnvironmentDeploymentRuleResponse> {
        const result = this.api.getEnvironmentDeploymentRule(environmentId, _options);
        return result.toPromise();
    }


}



import { ObservableEnvironmentLogsApi } from './ObservableAPI';

import { EnvironmentLogsApiRequestFactory, EnvironmentLogsApiResponseProcessor} from "../apis/EnvironmentLogsApi";
export class PromiseEnvironmentLogsApi {
    private api: ObservableEnvironmentLogsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EnvironmentLogsApiRequestFactory,
        responseProcessor?: EnvironmentLogsApiResponseProcessor
    ) {
        this.api = new ObservableEnvironmentLogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This returns the last 1000 environment deployment logs.
     * List environment deployment logs
     * @param environmentId Environment ID
     */
    public listEnvironmentLog(environmentId: string, _options?: Configuration): Promise<EnvironmentLogResponseList> {
        const result = this.api.listEnvironmentLog(environmentId, _options);
        return result.toPromise();
    }


}



import { ObservableEnvironmentMainCallsApi } from './ObservableAPI';

import { EnvironmentMainCallsApiRequestFactory, EnvironmentMainCallsApiResponseProcessor} from "../apis/EnvironmentMainCallsApi";
export class PromiseEnvironmentMainCallsApi {
    private api: ObservableEnvironmentMainCallsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EnvironmentMainCallsApiRequestFactory,
        responseProcessor?: EnvironmentMainCallsApiResponseProcessor
    ) {
        this.api = new ObservableEnvironmentMainCallsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * To delete an environment you must have the admin permission
     * Delete an environment
     * @param environmentId Environment ID
     */
    public deleteEnvironment(environmentId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteEnvironment(environmentId, _options);
        return result.toPromise();
    }

    /**
     * To edit an environment you must have the admin permission
     * Edit an environment
     * @param environmentId Environment ID
     * @param environmentEditRequest 
     */
    public editEnvironment(environmentId: string, environmentEditRequest?: EnvironmentEditRequest, _options?: Configuration): Promise<EnvironmentResponse> {
        const result = this.api.editEnvironment(environmentId, environmentEditRequest, _options);
        return result.toPromise();
    }

    /**
     * Get environment by ID
     * @param environmentId Environment ID
     */
    public getEnvironment(environmentId: string, _options?: Configuration): Promise<EnvironmentResponse> {
        const result = this.api.getEnvironment(environmentId, _options);
        return result.toPromise();
    }

    /**
     * Get environment status
     * @param environmentId Environment ID
     */
    public getEnvironmentStatus(environmentId: string, _options?: Configuration): Promise<Status> {
        const result = this.api.getEnvironmentStatus(environmentId, _options);
        return result.toPromise();
    }

    /**
     * This will return all the custom domains and Qovery autogenerated domain for all the applications within this environment
     * List all URLs of the environment
     * @param environmentId Environment ID
     */
    public listEnvironmentLinks(environmentId: string, _options?: Configuration): Promise<LinkResponseList> {
        const result = this.api.listEnvironmentLinks(environmentId, _options);
        return result.toPromise();
    }


}



import { ObservableEnvironmentSecretApi } from './ObservableAPI';

import { EnvironmentSecretApiRequestFactory, EnvironmentSecretApiResponseProcessor} from "../apis/EnvironmentSecretApi";
export class PromiseEnvironmentSecretApi {
    private api: ObservableEnvironmentSecretApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EnvironmentSecretApiRequestFactory,
        responseProcessor?: EnvironmentSecretApiResponseProcessor
    ) {
        this.api = new ObservableEnvironmentSecretApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * - Add a secret to the environment.   - If the secret key already exists, then it will be replaced by the new one.   - If the secret value points toward an existing secret key, it will be considered as an alias. 
     * Add a secret to the environment
     * @param environmentId Environment ID
     * @param secretRequest 
     */
    public createEnvironmentSecret(environmentId: string, secretRequest?: SecretRequest, _options?: Configuration): Promise<SecretResponse> {
        const result = this.api.createEnvironmentSecret(environmentId, secretRequest, _options);
        return result.toPromise();
    }

    /**
     * - Allows you to add an alias at environment level on an existing secret having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new secret at environment level with the same value as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the aliased_secret will be exposed in the \"aliased_secret\" field of the newly created secret - Only 1 alias level is allowed. You can't create an alias on an alias 
     * Create a secret alias at the environment level
     * @param environmentId Environment ID
     * @param secretId Secret ID
     * @param key 
     */
    public createEnvironmentSecretAlias(environmentId: string, secretId: string, key?: Key, _options?: Configuration): Promise<SecretResponse> {
        const result = this.api.createEnvironmentSecretAlias(environmentId, secretId, key, _options);
        return result.toPromise();
    }

    /**
     * - Allows you to override at environment level a secret that has a higher scope. - You only have to specify a value in the request body - The system will create a new secret at environment level with the same key as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the overridden_secret will be exposed in the \"overridden_secret\" field of the newly created secret 
     * Create a secret override at the environment level
     * @param environmentId Environment ID
     * @param secretId Secret ID
     * @param value 
     */
    public createEnvironmentSecretOverride(environmentId: string, secretId: string, value?: Value, _options?: Configuration): Promise<SecretResponse> {
        const result = this.api.createEnvironmentSecretOverride(environmentId, secretId, value, _options);
        return result.toPromise();
    }

    /**
     * - To delete a secret you must have the project user permission - You can't delete a BUILT_IN secret - If you delete a secret having override or alias, the associated override/alias will be deleted as well  operationId: deleteEnvironmentSecret 
     * Delete a secret from the environment
     * @param environmentId Environment ID
     * @param secretId Secret ID
     */
    public deleteEnvironmentSecret(environmentId: string, secretId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteEnvironmentSecret(environmentId, secretId, _options);
        return result.toPromise();
    }

    /**
     * - You can't edit a BUILT_IN secret - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the secret it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 
     * Edit a secret belonging to the environment
     * @param environmentId Environment ID
     * @param secretId Secret ID
     * @param secretEditRequest 
     */
    public editEnvironmentSecret(environmentId: string, secretId: string, secretEditRequest: SecretEditRequest, _options?: Configuration): Promise<SecretResponse> {
        const result = this.api.editEnvironmentSecret(environmentId, secretId, secretEditRequest, _options);
        return result.toPromise();
    }

    /**
     * List environment secrets
     * @param environmentId Environment ID
     */
    public listEnvironmentSecrets(environmentId: string, _options?: Configuration): Promise<SecretResponseList> {
        const result = this.api.listEnvironmentSecrets(environmentId, _options);
        return result.toPromise();
    }


}



import { ObservableEnvironmentVariableApi } from './ObservableAPI';

import { EnvironmentVariableApiRequestFactory, EnvironmentVariableApiResponseProcessor} from "../apis/EnvironmentVariableApi";
export class PromiseEnvironmentVariableApi {
    private api: ObservableEnvironmentVariableApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EnvironmentVariableApiRequestFactory,
        responseProcessor?: EnvironmentVariableApiResponseProcessor
    ) {
        this.api = new ObservableEnvironmentVariableApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * - Add an environment variable to the environment.   - If the environment variable key already exists, then it will be replaced by the new one.   - If the environment variable value points toward an existing environment variable key, it will be considered as an alias. 
     * Add an environment variable to the environment
     * @param environmentId Environment ID
     * @param environmentVariableRequest 
     */
    public createEnvironmentEnvironmentVariable(environmentId: string, environmentVariableRequest?: EnvironmentVariableRequest, _options?: Configuration): Promise<EnvironmentVariableResponse> {
        const result = this.api.createEnvironmentEnvironmentVariable(environmentId, environmentVariableRequest, _options);
        return result.toPromise();
    }

    /**
     * - Allows you to add an alias at environment level on an existing environment variable having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new environment variable at environment level with the same value as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the aliased_variable will be exposed in the \"aliased_variable\" field of the newly created variable - Only 1 alias level is allowed. You can't create an alias on an alias 
     * Create an environment variable alias at the environment level
     * @param environmentId Environment ID
     * @param environmentVariableId Environment Variable ID
     * @param key 
     */
    public createEnvironmentEnvironmentVariableAlias(environmentId: string, environmentVariableId: string, key?: Key, _options?: Configuration): Promise<EnvironmentVariableResponse> {
        const result = this.api.createEnvironmentEnvironmentVariableAlias(environmentId, environmentVariableId, key, _options);
        return result.toPromise();
    }

    /**
     * - Allows you to override at environment level an environment variable that has a higher scope. - You only have to specify a value in the request body - The system will create a new environment variable at environment level with the same key as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the overridden_variable will be exposed in the \"overridden_variable\" field of the newly created variable 
     * Create an environment variable override at the environment level
     * @param environmentId Environment ID
     * @param environmentVariableId Environment Variable ID
     * @param value 
     */
    public createEnvironmentEnvironmentVariableOverride(environmentId: string, environmentVariableId: string, value?: Value, _options?: Configuration): Promise<EnvironmentVariableResponse> {
        const result = this.api.createEnvironmentEnvironmentVariableOverride(environmentId, environmentVariableId, value, _options);
        return result.toPromise();
    }

    /**
     * - To delete an environment variable you must have the project user permission - You can't delete a BUILT_IN variable - If you delete a variable having override or alias, the associated override/alias will be deleted as well 
     * Delete an environment variable from an environment
     * @param environmentId Environment ID
     * @param environmentVariableId Environment Variable ID
     */
    public deleteEnvironmentEnvironmentVariable(environmentId: string, environmentVariableId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteEnvironmentEnvironmentVariable(environmentId, environmentVariableId, _options);
        return result.toPromise();
    }

    /**
     * - You can't edit a BUILT_IN variable - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the variable it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 
     * Edit an environment variable belonging to the environment
     * @param environmentId Environment ID
     * @param environmentVariableId Environment Variable ID
     * @param environmentVariableEditRequest 
     */
    public editEnvironmentEnvironmentVariable(environmentId: string, environmentVariableId: string, environmentVariableEditRequest: EnvironmentVariableEditRequest, _options?: Configuration): Promise<EnvironmentVariableResponse> {
        const result = this.api.editEnvironmentEnvironmentVariable(environmentId, environmentVariableId, environmentVariableEditRequest, _options);
        return result.toPromise();
    }

    /**
     * List environment variables
     * @param environmentId Environment ID
     */
    public listEnvironmentEnvironmentVariable(environmentId: string, _options?: Configuration): Promise<EnvironmentVariableResponseList> {
        const result = this.api.listEnvironmentEnvironmentVariable(environmentId, _options);
        return result.toPromise();
    }


}



import { ObservableEnvironmentsApi } from './ObservableAPI';

import { EnvironmentsApiRequestFactory, EnvironmentsApiResponseProcessor} from "../apis/EnvironmentsApi";
export class PromiseEnvironmentsApi {
    private api: ObservableEnvironmentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EnvironmentsApiRequestFactory,
        responseProcessor?: EnvironmentsApiResponseProcessor
    ) {
        this.api = new ObservableEnvironmentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an environment
     * @param projectId Project ID
     * @param environmentRequest 
     */
    public createEnvironment(projectId: string, environmentRequest?: EnvironmentRequest, _options?: Configuration): Promise<EnvironmentResponse> {
        const result = this.api.createEnvironment(projectId, environmentRequest, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of environment ids, and for each its total numberof services
     * List total number of services for each environment of the project
     * @param projectId Project ID
     */
    public getProjectEnvironmentServiceNumber(projectId: string, _options?: Configuration): Promise<EnvironmentStatsResponseList> {
        const result = this.api.getProjectEnvironmentServiceNumber(projectId, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of environments with only their id and status.
     * List environments statuses
     * @param projectId Project ID
     */
    public getProjectEnvironmentStatus(projectId: string, _options?: Configuration): Promise<Status> {
        const result = this.api.getProjectEnvironmentStatus(projectId, _options);
        return result.toPromise();
    }

    /**
     * List environments
     * @param projectId Project ID
     */
    public listEnvironment(projectId: string, _options?: Configuration): Promise<EnvironmentResponseList> {
        const result = this.api.listEnvironment(projectId, _options);
        return result.toPromise();
    }


}



import { ObservableGitRepositoriesApi } from './ObservableAPI';

import { GitRepositoriesApiRequestFactory, GitRepositoriesApiResponseProcessor} from "../apis/GitRepositoriesApi";
export class PromiseGitRepositoriesApi {
    private api: ObservableGitRepositoriesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GitRepositoriesApiRequestFactory,
        responseProcessor?: GitRepositoriesApiResponseProcessor
    ) {
        this.api = new ObservableGitRepositoriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get bitbucket repositories of the connected user
     */
    public getBitbucketRepositories(_options?: Configuration): Promise<GitRepositoryResponseList> {
        const result = this.api.getBitbucketRepositories(_options);
        return result.toPromise();
    }

    /**
     * Get bitbucket branches of the specified repository
     * @param name The name of the repository where to retrieve the branches
     */
    public getBitbucketRepositoryBranches(name?: string, _options?: Configuration): Promise<GitRepositoryBranchResponseList> {
        const result = this.api.getBitbucketRepositoryBranches(name, _options);
        return result.toPromise();
    }

    /**
     * Get git provider accounts
     */
    public getGitProviderAccount(_options?: Configuration): Promise<GitAuthProviderResponseList> {
        const result = this.api.getGitProviderAccount(_options);
        return result.toPromise();
    }

    /**
     * Get github repositories of the connected user
     */
    public getGithubRepositories(_options?: Configuration): Promise<GitRepositoryResponseList> {
        const result = this.api.getGithubRepositories(_options);
        return result.toPromise();
    }

    /**
     * Get github branches of the specified repository
     * @param name The name of the repository where to retrieve the branches
     */
    public getGithubRepositoryBranches(name?: string, _options?: Configuration): Promise<GitRepositoryBranchResponseList> {
        const result = this.api.getGithubRepositoryBranches(name, _options);
        return result.toPromise();
    }

    /**
     * Get gitlab repositories of the connected user
     */
    public getGitlabRepositories(_options?: Configuration): Promise<GitRepositoryResponseList> {
        const result = this.api.getGitlabRepositories(_options);
        return result.toPromise();
    }

    /**
     * Get gitlab branches of the specified repository
     * @param name The name of the repository to retrieve the branches
     */
    public getGitlabRepositoryBranches(name?: string, _options?: Configuration): Promise<GitRepositoryBranchResponseList> {
        const result = this.api.getGitlabRepositoryBranches(name, _options);
        return result.toPromise();
    }


}



import { ObservableLogicalDatabaseApi } from './ObservableAPI';

import { LogicalDatabaseApiRequestFactory, LogicalDatabaseApiResponseProcessor} from "../apis/LogicalDatabaseApi";
export class PromiseLogicalDatabaseApi {
    private api: ObservableLogicalDatabaseApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LogicalDatabaseApiRequestFactory,
        responseProcessor?: LogicalDatabaseApiResponseProcessor
    ) {
        this.api = new ObservableLogicalDatabaseApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * If you don't specify credentials, Qovery will autogenerate them.
     * Create a logical database on the database
     * @param databaseId Database ID
     * @param logicalDatabaseRequest 
     */
    public createLogicalDatabaseOnDatabase(databaseId: string, logicalDatabaseRequest?: LogicalDatabaseRequest, _options?: Configuration): Promise<LogicalDatabaseResponse> {
        const result = this.api.createLogicalDatabaseOnDatabase(databaseId, logicalDatabaseRequest, _options);
        return result.toPromise();
    }

    /**
     * To delete a logical database you must have the project user permission
     * Delete a Logical database
     * @param logicalDatabaseId Logical Database ID
     */
    public deleteLogicalDatabase(logicalDatabaseId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteLogicalDatabase(logicalDatabaseId, _options);
        return result.toPromise();
    }

    /**
     * Edit a logical database
     * @param logicalDatabaseId Logical Database ID
     * @param logicalDatabaseRequest 
     */
    public editLogicalDatabase(logicalDatabaseId: string, logicalDatabaseRequest?: LogicalDatabaseRequest, _options?: Configuration): Promise<LogicalDatabaseResponse> {
        const result = this.api.editLogicalDatabase(logicalDatabaseId, logicalDatabaseRequest, _options);
        return result.toPromise();
    }

    /**
     * Edit logical database credentials
     * @param logicalDatabaseId Logical Database ID
     * @param credentialsRequest 
     */
    public editLogicalDatabaseCredentials(logicalDatabaseId: string, credentialsRequest?: CredentialsRequest, _options?: Configuration): Promise<CredentialsResponse> {
        const result = this.api.editLogicalDatabaseCredentials(logicalDatabaseId, credentialsRequest, _options);
        return result.toPromise();
    }

    /**
     * A logical database exists inside a database. The database is a service that exists within an environment, that you can deploy, and that has allocated resources. A database can have several logical databases
     * Get logical database by ID
     * @param logicalDatabaseId Logical Database ID
     */
    public getLogicalDatabase(logicalDatabaseId: string, _options?: Configuration): Promise<LogicalDatabaseResponse> {
        const result = this.api.getLogicalDatabase(logicalDatabaseId, _options);
        return result.toPromise();
    }

    /**
     * Get  credentials of the logical database
     * @param logicalDatabaseId Logical Database ID
     */
    public getLogicalDatabaseCredentials(logicalDatabaseId: string, _options?: Configuration): Promise<CredentialsResponse> {
        const result = this.api.getLogicalDatabaseCredentials(logicalDatabaseId, _options);
        return result.toPromise();
    }

    /**
     * List linked applications
     * @param logicalDatabaseId Logical Database ID
     */
    public listLogicalDatabaseApplication(logicalDatabaseId: string, _options?: Configuration): Promise<ApplicationResponseList> {
        const result = this.api.listLogicalDatabaseApplication(logicalDatabaseId, _options);
        return result.toPromise();
    }

    /**
     * A logical database exists inside a database. The database is a service that exists within an environment, that you can deploy, and that has allocated resources. A database can have several logical databases
     * List logical databases of a database
     * @param databaseId Database ID
     */
    public listLogicalDatabaseDatabase(databaseId: string, _options?: Configuration): Promise<LogicalDatabaseResponseList> {
        const result = this.api.listLogicalDatabaseDatabase(databaseId, _options);
        return result.toPromise();
    }


}



import { ObservableMembersApi } from './ObservableAPI';

import { MembersApiRequestFactory, MembersApiResponseProcessor} from "../apis/MembersApi";
export class PromiseMembersApi {
    private api: ObservableMembersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MembersApiRequestFactory,
        responseProcessor?: MembersApiResponseProcessor
    ) {
        this.api = new ObservableMembersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Remove an invited member
     * @param organizationId Organization ID
     */
    public deleteInviteMember(organizationId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteInviteMember(organizationId, _options);
        return result.toPromise();
    }

    /**
     * Remove a member
     * @param organizationId Organization ID
     * @param userId User ID
     */
    public deleteMember(organizationId: string, userId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteMember(organizationId, userId, _options);
        return result.toPromise();
    }

    /**
     * Get invited members
     * @param organizationId Organization ID
     */
    public getOrganizationInvitedMembers(organizationId: string, _options?: Configuration): Promise<InviteMemberResponseList> {
        const result = this.api.getOrganizationInvitedMembers(organizationId, _options);
        return result.toPromise();
    }

    /**
     * Get organization members
     * @param organizationId Organization ID
     */
    public getOrganizationMembers(organizationId: string, _options?: Configuration): Promise<MemberResponseList> {
        const result = this.api.getOrganizationMembers(organizationId, _options);
        return result.toPromise();
    }

    /**
     * Accept Invite in the organization
     * @param organizationId Organization ID
     * @param inviteId Invite ID
     */
    public postAcceptInviteMember(organizationId: string, inviteId: string, _options?: Configuration): Promise<InviteMemberResponse> {
        const result = this.api.postAcceptInviteMember(organizationId, inviteId, _options);
        return result.toPromise();
    }

    /**
     * Invite someone in the organization
     * @param organizationId Organization ID
     * @param inviteMemberRequest 
     */
    public postInviteMember(organizationId: string, inviteMemberRequest?: InviteMemberRequest, _options?: Configuration): Promise<InviteMemberResponse> {
        const result = this.api.postInviteMember(organizationId, inviteMemberRequest, _options);
        return result.toPromise();
    }

    /**
     * Transfer organization ownership to another user
     * @param organizationId Organization ID
     * @param transferOwnershipRequest 
     */
    public postOrganizationTransferOwnership(organizationId: string, transferOwnershipRequest?: TransferOwnershipRequest, _options?: Configuration): Promise<void> {
        const result = this.api.postOrganizationTransferOwnership(organizationId, transferOwnershipRequest, _options);
        return result.toPromise();
    }


}



import { ObservableOrganizationMainCallsApi } from './ObservableAPI';

import { OrganizationMainCallsApiRequestFactory, OrganizationMainCallsApiResponseProcessor} from "../apis/OrganizationMainCallsApi";
export class PromiseOrganizationMainCallsApi {
    private api: ObservableOrganizationMainCallsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationMainCallsApiRequestFactory,
        responseProcessor?: OrganizationMainCallsApiResponseProcessor
    ) {
        this.api = new ObservableOrganizationMainCallsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an organization
     * @param organizationRequest 
     */
    public createOrganization(organizationRequest?: OrganizationRequest, _options?: Configuration): Promise<OrganizationResponse> {
        const result = this.api.createOrganization(organizationRequest, _options);
        return result.toPromise();
    }

    /**
     * To delete an organization you must have the admin permission
     * Delete an organization
     * @param organizationId Organization ID
     */
    public deleteOrganization(organizationId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteOrganization(organizationId, _options);
        return result.toPromise();
    }

    /**
     * To edit an organization you must have the admin permission
     * Edit an organization
     * @param organizationId Organization ID
     * @param organizationEditRequest 
     */
    public editOrganization(organizationId: string, organizationEditRequest?: OrganizationEditRequest, _options?: Configuration): Promise<OrganizationResponse> {
        const result = this.api.editOrganization(organizationId, organizationEditRequest, _options);
        return result.toPromise();
    }

    /**
     * Get organization by ID
     * @param organizationId Organization ID
     */
    public getOrganization(organizationId: string, _options?: Configuration): Promise<OrganizationResponse> {
        const result = this.api.getOrganization(organizationId, _options);
        return result.toPromise();
    }

    /**
     * List user organizations
     */
    public listOrganization(_options?: Configuration): Promise<OrganizationResponseList> {
        const result = this.api.listOrganization(_options);
        return result.toPromise();
    }


}



import { ObservableProjectDeploymentRuleApi } from './ObservableAPI';

import { ProjectDeploymentRuleApiRequestFactory, ProjectDeploymentRuleApiResponseProcessor} from "../apis/ProjectDeploymentRuleApi";
export class PromiseProjectDeploymentRuleApi {
    private api: ObservableProjectDeploymentRuleApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProjectDeploymentRuleApiRequestFactory,
        responseProcessor?: ProjectDeploymentRuleApiResponseProcessor
    ) {
        this.api = new ObservableProjectDeploymentRuleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a deployment rule
     * @param projectId Project ID
     * @param projectDeploymentRuleRequest 
     */
    public createDeploymentRule(projectId: string, projectDeploymentRuleRequest?: ProjectDeploymentRuleRequest, _options?: Configuration): Promise<ProjectDeploymentRuleResponse> {
        const result = this.api.createDeploymentRule(projectId, projectDeploymentRuleRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete a project deployment rule
     * @param projectId Project ID
     * @param deploymentRuleId Deployment Rule ID
     */
    public deleteProjectDeploymentRule(projectId: string, deploymentRuleId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteProjectDeploymentRule(projectId, deploymentRuleId, _options);
        return result.toPromise();
    }

    /**
     * Edit a project deployment rule
     * @param projectId Project ID
     * @param deploymentRuleId Deployment Rule ID
     * @param projectDeploymentRuleRequest 
     */
    public editProjectDeployemtnRule(projectId: string, deploymentRuleId: string, projectDeploymentRuleRequest?: ProjectDeploymentRuleRequest, _options?: Configuration): Promise<ProjectDeploymentRuleResponse> {
        const result = this.api.editProjectDeployemtnRule(projectId, deploymentRuleId, projectDeploymentRuleRequest, _options);
        return result.toPromise();
    }

    /**
     * Get project deployment rule
     * @param projectId Project ID
     * @param deploymentRuleId Deployment Rule ID
     */
    public getProjectDeploymentRule(projectId: string, deploymentRuleId: string, _options?: Configuration): Promise<ProjectDeploymentRuleResponse> {
        const result = this.api.getProjectDeploymentRule(projectId, deploymentRuleId, _options);
        return result.toPromise();
    }

    /**
     * List project deployment rules
     * @param projectId Project ID
     */
    public listProjectDeploymentRule(projectId: string, _options?: Configuration): Promise<ProjectDeploymentRuleResponseList> {
        const result = this.api.listProjectDeploymentRule(projectId, _options);
        return result.toPromise();
    }


}



import { ObservableProjectEnvironmentVariableApi } from './ObservableAPI';

import { ProjectEnvironmentVariableApiRequestFactory, ProjectEnvironmentVariableApiResponseProcessor} from "../apis/ProjectEnvironmentVariableApi";
export class PromiseProjectEnvironmentVariableApi {
    private api: ObservableProjectEnvironmentVariableApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProjectEnvironmentVariableApiRequestFactory,
        responseProcessor?: ProjectEnvironmentVariableApiResponseProcessor
    ) {
        this.api = new ObservableProjectEnvironmentVariableApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * - Add an environment variable to the project.   - If the environment variable key already exists, then it will be replaced by the new one.   - If the environment variable value points toward an existing environment variable key, it will be considered as an alias. 
     * Add an environment variable to the project
     * @param projectId Project ID
     * @param environmentVariableRequest 
     */
    public createProjectEnvironmentVariable(projectId: string, environmentVariableRequest?: EnvironmentVariableRequest, _options?: Configuration): Promise<EnvironmentVariableResponse> {
        const result = this.api.createProjectEnvironmentVariable(projectId, environmentVariableRequest, _options);
        return result.toPromise();
    }

    /**
     * - Allows you to add an alias at project level on an existing environment variable having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new environment variable at project level with the same value as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the aliased_variable will be exposed in the \"aliased_variable\" field of the newly created variable - Only 1 alias level is allowed. You can't create an alias on an alias 
     * Create an environment variable alias at the project level
     * @param projectId Project ID
     * @param environmentVariableId Environment Variable ID
     * @param key 
     */
    public createProjectEnvironmentVariableAlias(projectId: string, environmentVariableId: string, key?: Key, _options?: Configuration): Promise<EnvironmentVariableResponse> {
        const result = this.api.createProjectEnvironmentVariableAlias(projectId, environmentVariableId, key, _options);
        return result.toPromise();
    }

    /**
     * - Allows you to override at project level an environment variable that has a higher scope. - You only have to specify a value in the request body - The system will create a new environment variable at project level with the same key as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the overridden_variable will be exposed in the \"overridden_variable\" field of the newly created variable 
     * Create an environment variable override at the project level
     * @param projectId Project ID
     * @param environmentVariableId Environment Variable ID
     * @param value 
     */
    public createProjectEnvironmentVariableOverride(projectId: string, environmentVariableId: string, value?: Value, _options?: Configuration): Promise<EnvironmentVariableResponse> {
        const result = this.api.createProjectEnvironmentVariableOverride(projectId, environmentVariableId, value, _options);
        return result.toPromise();
    }

    /**
     * - To delete an environment variable you must have the project user permission - You can't delete a BUILT_IN variable - If you delete a variable having override or alias, the associated override/alias will be deleted as well 
     * Delete an environment variable from a project
     * @param projectId Project ID
     * @param environmentVariableId Environment Variable ID
     */
    public deleteProjectEnvironmentVariable(projectId: string, environmentVariableId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteProjectEnvironmentVariable(projectId, environmentVariableId, _options);
        return result.toPromise();
    }

    /**
     * - You can't edit a BUILT_IN variable - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the variable it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 
     * Edit an environment variable belonging to the project
     * @param projectId Project ID
     * @param environmentVariableId Environment Variable ID
     * @param environmentVariableEditRequest 
     */
    public editProjectEnvironmentVariable(projectId: string, environmentVariableId: string, environmentVariableEditRequest: EnvironmentVariableEditRequest, _options?: Configuration): Promise<EnvironmentVariableResponse> {
        const result = this.api.editProjectEnvironmentVariable(projectId, environmentVariableId, environmentVariableEditRequest, _options);
        return result.toPromise();
    }

    /**
     * List project environment variables
     * @param projectId Project ID
     */
    public listProjectEnvironmentVariable(projectId: string, _options?: Configuration): Promise<EnvironmentVariableResponseList> {
        const result = this.api.listProjectEnvironmentVariable(projectId, _options);
        return result.toPromise();
    }


}



import { ObservableProjectMainCallsApi } from './ObservableAPI';

import { ProjectMainCallsApiRequestFactory, ProjectMainCallsApiResponseProcessor} from "../apis/ProjectMainCallsApi";
export class PromiseProjectMainCallsApi {
    private api: ObservableProjectMainCallsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProjectMainCallsApiRequestFactory,
        responseProcessor?: ProjectMainCallsApiResponseProcessor
    ) {
        this.api = new ObservableProjectMainCallsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * To delete a project you must have the admin permission
     * Delete a project
     * @param projectId Project ID
     */
    public deleteProject(projectId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteProject(projectId, _options);
        return result.toPromise();
    }

    /**
     * To edit a project you must have the admin permission
     * Edit a project
     * @param projectId Project ID
     * @param projectRequest 
     */
    public editProject(projectId: string, projectRequest?: ProjectRequest, _options?: Configuration): Promise<ProjectResponse> {
        const result = this.api.editProject(projectId, projectRequest, _options);
        return result.toPromise();
    }

    /**
     * Get project by ID
     * @param projectId Project ID
     */
    public getProject(projectId: string, _options?: Configuration): Promise<ProjectResponse> {
        const result = this.api.getProject(projectId, _options);
        return result.toPromise();
    }


}



import { ObservableProjectSecretApi } from './ObservableAPI';

import { ProjectSecretApiRequestFactory, ProjectSecretApiResponseProcessor} from "../apis/ProjectSecretApi";
export class PromiseProjectSecretApi {
    private api: ObservableProjectSecretApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProjectSecretApiRequestFactory,
        responseProcessor?: ProjectSecretApiResponseProcessor
    ) {
        this.api = new ObservableProjectSecretApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * - Add a secret to the project.   - If the secret key already exists, then it will be replaced by the new one.   - If the secret value points toward an existing secret key, it will be considered as an alias. 
     * Add a secret to the project
     * @param projectId Project ID
     * @param secretRequest 
     */
    public createProjectSecret(projectId: string, secretRequest?: SecretRequest, _options?: Configuration): Promise<SecretResponse> {
        const result = this.api.createProjectSecret(projectId, secretRequest, _options);
        return result.toPromise();
    }

    /**
     * - Allows you to add an alias at project level on an existing secret having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new secret at project level with the same value as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the aliased_secret will be exposed in the \"aliased_secret\" field of the newly created secret - Only 1 alias level is allowed. You can't create an alias on an alias 
     * Create a secret alias at the project level
     * @param projectId Project ID
     * @param secretId Secret ID
     * @param key 
     */
    public createProjectSecretAlias(projectId: string, secretId: string, key?: Key, _options?: Configuration): Promise<SecretResponse> {
        const result = this.api.createProjectSecretAlias(projectId, secretId, key, _options);
        return result.toPromise();
    }

    /**
     * - Allows you to override at project level a secret that has a higher scope. - You only have to specify a value in the request body - The system will create a new secret at project level with the same key as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the overridden_secret will be exposed in the \"overridden_secret\" field of the newly created secret 
     * Create a secret override at the project level
     * @param projectId Project ID
     * @param secretId Secret ID
     * @param value 
     */
    public createProjectSecretOverride(projectId: string, secretId: string, value?: Value, _options?: Configuration): Promise<SecretResponse> {
        const result = this.api.createProjectSecretOverride(projectId, secretId, value, _options);
        return result.toPromise();
    }

    /**
     * - To delete a secret you must have the project user permission - You can't delete a BUILT_IN secret - If you delete a secret having override or alias, the associated override/alias will be deleted as well  operationId: deleteProjectSecret 
     * Delete a secret from a project
     * @param projectId Project ID
     * @param secretId Secret ID
     */
    public deleteProjectSecret(projectId: string, secretId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteProjectSecret(projectId, secretId, _options);
        return result.toPromise();
    }

    /**
     * - You can't edit a BUILT_IN secret - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the secret it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 
     * Edit a secret belonging to the project
     * @param projectId Project ID
     * @param secretId Secret ID
     * @param secretEditRequest 
     */
    public editProjectSecret(projectId: string, secretId: string, secretEditRequest: SecretEditRequest, _options?: Configuration): Promise<SecretResponse> {
        const result = this.api.editProjectSecret(projectId, secretId, secretEditRequest, _options);
        return result.toPromise();
    }

    /**
     * List project secrets
     * @param projectId Project ID
     */
    public listProjectSecrets(projectId: string, _options?: Configuration): Promise<SecretResponseList> {
        const result = this.api.listProjectSecrets(projectId, _options);
        return result.toPromise();
    }


}



import { ObservableProjectsApi } from './ObservableAPI';

import { ProjectsApiRequestFactory, ProjectsApiResponseProcessor} from "../apis/ProjectsApi";
export class PromiseProjectsApi {
    private api: ObservableProjectsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProjectsApiRequestFactory,
        responseProcessor?: ProjectsApiResponseProcessor
    ) {
        this.api = new ObservableProjectsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a project
     * @param organizationId Organization ID
     * @param projectRequest 
     */
    public createProject(organizationId: string, projectRequest?: ProjectRequest, _options?: Configuration): Promise<ProjectResponse> {
        const result = this.api.createProject(organizationId, projectRequest, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of project ids, and for each its total numberof services and environments
     * List total number of services and environments for each project of the organization
     * @param organizationId Organization ID
     */
    public getOrganizationProjectStats(organizationId: string, _options?: Configuration): Promise<ProjectStatsResponseList> {
        const result = this.api.getOrganizationProjectStats(organizationId, _options);
        return result.toPromise();
    }

    /**
     * List projects
     * @param organizationId Organization ID
     */
    public listProject(organizationId: string, _options?: Configuration): Promise<ProjectResponseList> {
        const result = this.api.listProject(organizationId, _options);
        return result.toPromise();
    }


}



import { ObservableReferralRewardsApi } from './ObservableAPI';

import { ReferralRewardsApiRequestFactory, ReferralRewardsApiResponseProcessor} from "../apis/ReferralRewardsApi";
export class PromiseReferralRewardsApi {
    private api: ObservableReferralRewardsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ReferralRewardsApiRequestFactory,
        responseProcessor?: ReferralRewardsApiResponseProcessor
    ) {
        this.api = new ObservableReferralRewardsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get your referral information
     */
    public getAccountReferral(_options?: Configuration): Promise<ReferralResponse> {
        const result = this.api.getAccountReferral(_options);
        return result.toPromise();
    }

    /**
     * A same code can be claimed only 3 times at max
     * Claim a reward
     * @param rewardClaimResponse 
     */
    public postAccountRewardClaim(rewardClaimResponse?: RewardClaimResponse, _options?: Configuration): Promise<void> {
        const result = this.api.postAccountRewardClaim(rewardClaimResponse, _options);
        return result.toPromise();
    }


}



