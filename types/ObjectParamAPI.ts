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
import { InlineObject } from '../models/InlineObject';
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
import { ProjectProjectIdDeploymentRuleOrderProjectDeploymentRuleIdsInOrder } from '../models/ProjectProjectIdDeploymentRuleOrderProjectDeploymentRuleIdsInOrder';
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

import { ObservableAccountInfoApi } from "./ObservableAPI";
import { AccountInfoApiRequestFactory, AccountInfoApiResponseProcessor} from "../apis/AccountInfoApi";

export interface AccountInfoApiGetAccountInformationRequest {
}

export class ObjectAccountInfoApi {
    private api: ObservableAccountInfoApi

    public constructor(configuration: Configuration, requestFactory?: AccountInfoApiRequestFactory, responseProcessor?: AccountInfoApiResponseProcessor) {
        this.api = new ObservableAccountInfoApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Account information
     * @param param the request object
     */
    public getAccountInformation(param: AccountInfoApiGetAccountInformationRequest = {}, options?: Configuration): Promise<AccountInfoResponse> {
        return this.api.getAccountInformation( options).toPromise();
    }

}

import { ObservableApplicationActionsApi } from "./ObservableAPI";
import { ApplicationActionsApiRequestFactory, ApplicationActionsApiResponseProcessor} from "../apis/ApplicationActionsApi";

export interface ApplicationActionsApiDeployApplicationRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationActionsApideployApplication
     */
    applicationId: string
    /**
     * 
     * @type DeployRequest
     * @memberof ApplicationActionsApideployApplication
     */
    deployRequest?: DeployRequest
}

export interface ApplicationActionsApiRestartApplicationRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationActionsApirestartApplication
     */
    applicationId: string
}

export interface ApplicationActionsApiStopApplicationRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationActionsApistopApplication
     */
    applicationId: string
}

export class ObjectApplicationActionsApi {
    private api: ObservableApplicationActionsApi

    public constructor(configuration: Configuration, requestFactory?: ApplicationActionsApiRequestFactory, responseProcessor?: ApplicationActionsApiResponseProcessor) {
        this.api = new ObservableApplicationActionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * You must provide a git commit id
     * Deploy application
     * @param param the request object
     */
    public deployApplication(param: ApplicationActionsApiDeployApplicationRequest, options?: Configuration): Promise<Status> {
        return this.api.deployApplication(param.applicationId, param.deployRequest,  options).toPromise();
    }

    /**
     * Restart application
     * @param param the request object
     */
    public restartApplication(param: ApplicationActionsApiRestartApplicationRequest, options?: Configuration): Promise<Status> {
        return this.api.restartApplication(param.applicationId,  options).toPromise();
    }

    /**
     * Stop application
     * @param param the request object
     */
    public stopApplication(param: ApplicationActionsApiStopApplicationRequest, options?: Configuration): Promise<Status> {
        return this.api.stopApplication(param.applicationId,  options).toPromise();
    }

}

import { ObservableApplicationConfigurationApi } from "./ObservableAPI";
import { ApplicationConfigurationApiRequestFactory, ApplicationConfigurationApiResponseProcessor} from "../apis/ApplicationConfigurationApi";

export interface ApplicationConfigurationApiEditApplicationNetworkRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationConfigurationApieditApplicationNetwork
     */
    applicationId: string
    /**
     * 
     * @type ApplicationNetworkRequest
     * @memberof ApplicationConfigurationApieditApplicationNetwork
     */
    applicationNetworkRequest?: ApplicationNetworkRequest
}

export interface ApplicationConfigurationApiGetApplicationNetworkRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationConfigurationApigetApplicationNetwork
     */
    applicationId: string
}

export class ObjectApplicationConfigurationApi {
    private api: ObservableApplicationConfigurationApi

    public constructor(configuration: Configuration, requestFactory?: ApplicationConfigurationApiRequestFactory, responseProcessor?: ApplicationConfigurationApiResponseProcessor) {
        this.api = new ObservableApplicationConfigurationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Edit the Network settings of the application.
     * Edit Application Network
     * @param param the request object
     */
    public editApplicationNetwork(param: ApplicationConfigurationApiEditApplicationNetworkRequest, options?: Configuration): Promise<ApplicationNetworkResponse> {
        return this.api.editApplicationNetwork(param.applicationId, param.applicationNetworkRequest,  options).toPromise();
    }

    /**
     * Get status of the application network settings.
     * Get Application Network information
     * @param param the request object
     */
    public getApplicationNetwork(param: ApplicationConfigurationApiGetApplicationNetworkRequest, options?: Configuration): Promise<ApplicationNetworkResponse> {
        return this.api.getApplicationNetwork(param.applicationId,  options).toPromise();
    }

}

import { ObservableApplicationDatabaseApi } from "./ObservableAPI";
import { ApplicationDatabaseApiRequestFactory, ApplicationDatabaseApiResponseProcessor} from "../apis/ApplicationDatabaseApi";

export interface ApplicationDatabaseApiAttachDatabasetoApplicationRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationDatabaseApiattachDatabasetoApplication
     */
    applicationId: string
    /**
     * Target database ID
     * @type string
     * @memberof ApplicationDatabaseApiattachDatabasetoApplication
     */
    targetDatabaseId: string
}

export interface ApplicationDatabaseApiAttachLogicalDatabasetoApplicationRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationDatabaseApiattachLogicalDatabasetoApplication
     */
    applicationId: string
    /**
     * Target database ID
     * @type string
     * @memberof ApplicationDatabaseApiattachLogicalDatabasetoApplication
     */
    targetLogicalDatabaseId: string
}

export interface ApplicationDatabaseApiListApplicationDatabaseRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationDatabaseApilistApplicationDatabase
     */
    applicationId: string
}

export interface ApplicationDatabaseApiListApplicationLogicalDatabaseRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationDatabaseApilistApplicationLogicalDatabase
     */
    applicationId: string
}

export interface ApplicationDatabaseApiRemoveDatabaseFromApplicationRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationDatabaseApiremoveDatabaseFromApplication
     */
    applicationId: string
    /**
     * Target database ID
     * @type string
     * @memberof ApplicationDatabaseApiremoveDatabaseFromApplication
     */
    targetDatabaseId: string
}

export interface ApplicationDatabaseApiRemoveLogicalDatabaseFromApplicationRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationDatabaseApiremoveLogicalDatabaseFromApplication
     */
    applicationId: string
    /**
     * Target database ID
     * @type string
     * @memberof ApplicationDatabaseApiremoveLogicalDatabaseFromApplication
     */
    targetLogicalDatabaseId: string
}

export class ObjectApplicationDatabaseApi {
    private api: ObservableApplicationDatabaseApi

    public constructor(configuration: Configuration, requestFactory?: ApplicationDatabaseApiRequestFactory, responseProcessor?: ApplicationDatabaseApiResponseProcessor) {
        this.api = new ObservableApplicationDatabaseApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Link a database to the application
     * @param param the request object
     */
    public attachDatabasetoApplication(param: ApplicationDatabaseApiAttachDatabasetoApplicationRequest, options?: Configuration): Promise<DatabaseResponse> {
        return this.api.attachDatabasetoApplication(param.applicationId, param.targetDatabaseId,  options).toPromise();
    }

    /**
     * Link a logical database to the application
     * @param param the request object
     */
    public attachLogicalDatabasetoApplication(param: ApplicationDatabaseApiAttachLogicalDatabasetoApplicationRequest, options?: Configuration): Promise<LogicalDatabaseResponse> {
        return this.api.attachLogicalDatabasetoApplication(param.applicationId, param.targetLogicalDatabaseId,  options).toPromise();
    }

    /**
     * List linked databases
     * @param param the request object
     */
    public listApplicationDatabase(param: ApplicationDatabaseApiListApplicationDatabaseRequest, options?: Configuration): Promise<DatabaseResponseList> {
        return this.api.listApplicationDatabase(param.applicationId,  options).toPromise();
    }

    /**
     * List linked logical databases
     * @param param the request object
     */
    public listApplicationLogicalDatabase(param: ApplicationDatabaseApiListApplicationLogicalDatabaseRequest, options?: Configuration): Promise<LogicalDatabaseResponseList> {
        return this.api.listApplicationLogicalDatabase(param.applicationId,  options).toPromise();
    }

    /**
     * Remove database link to this application.
     * @param param the request object
     */
    public removeDatabaseFromApplication(param: ApplicationDatabaseApiRemoveDatabaseFromApplicationRequest, options?: Configuration): Promise<void> {
        return this.api.removeDatabaseFromApplication(param.applicationId, param.targetDatabaseId,  options).toPromise();
    }

    /**
     * Remove logical database link to this application.
     * @param param the request object
     */
    public removeLogicalDatabaseFromApplication(param: ApplicationDatabaseApiRemoveLogicalDatabaseFromApplicationRequest, options?: Configuration): Promise<void> {
        return this.api.removeLogicalDatabaseFromApplication(param.applicationId, param.targetLogicalDatabaseId,  options).toPromise();
    }

}

import { ObservableApplicationDeploymentHistoryApi } from "./ObservableAPI";
import { ApplicationDeploymentHistoryApiRequestFactory, ApplicationDeploymentHistoryApiResponseProcessor} from "../apis/ApplicationDeploymentHistoryApi";

export interface ApplicationDeploymentHistoryApiListApplicationDeploymentHistoryRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationDeploymentHistoryApilistApplicationDeploymentHistory
     */
    applicationId: string
    /**
     * Starting point after which to return results
     * @type string
     * @memberof ApplicationDeploymentHistoryApilistApplicationDeploymentHistory
     */
    startId?: string
}

export class ObjectApplicationDeploymentHistoryApi {
    private api: ObservableApplicationDeploymentHistoryApi

    public constructor(configuration: Configuration, requestFactory?: ApplicationDeploymentHistoryApiRequestFactory, responseProcessor?: ApplicationDeploymentHistoryApiResponseProcessor) {
        this.api = new ObservableApplicationDeploymentHistoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter. You can also filter by status (FAILED or SUCCESS), and git_commit_id
     * List application deploys
     * @param param the request object
     */
    public listApplicationDeploymentHistory(param: ApplicationDeploymentHistoryApiListApplicationDeploymentHistoryRequest, options?: Configuration): Promise<DeploymentHistoryPaginatedResponseList> {
        return this.api.listApplicationDeploymentHistory(param.applicationId, param.startId,  options).toPromise();
    }

}

import { ObservableApplicationEnvironmentVariableApi } from "./ObservableAPI";
import { ApplicationEnvironmentVariableApiRequestFactory, ApplicationEnvironmentVariableApiResponseProcessor} from "../apis/ApplicationEnvironmentVariableApi";

export interface ApplicationEnvironmentVariableApiCreateApplicationEnvironmentVariableRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationEnvironmentVariableApicreateApplicationEnvironmentVariable
     */
    applicationId: string
    /**
     * 
     * @type EnvironmentVariableRequest
     * @memberof ApplicationEnvironmentVariableApicreateApplicationEnvironmentVariable
     */
    environmentVariableRequest?: EnvironmentVariableRequest
}

export interface ApplicationEnvironmentVariableApiCreateApplicationEnvironmentVariableAliasRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationEnvironmentVariableApicreateApplicationEnvironmentVariableAlias
     */
    applicationId: string
    /**
     * Environment Variable ID
     * @type string
     * @memberof ApplicationEnvironmentVariableApicreateApplicationEnvironmentVariableAlias
     */
    environmentVariableId: string
    /**
     * 
     * @type Key
     * @memberof ApplicationEnvironmentVariableApicreateApplicationEnvironmentVariableAlias
     */
    key?: Key
}

export interface ApplicationEnvironmentVariableApiCreateApplicationEnvironmentVariableOverrideRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationEnvironmentVariableApicreateApplicationEnvironmentVariableOverride
     */
    applicationId: string
    /**
     * Environment Variable ID
     * @type string
     * @memberof ApplicationEnvironmentVariableApicreateApplicationEnvironmentVariableOverride
     */
    environmentVariableId: string
    /**
     * 
     * @type Value
     * @memberof ApplicationEnvironmentVariableApicreateApplicationEnvironmentVariableOverride
     */
    value?: Value
}

export interface ApplicationEnvironmentVariableApiDeleteApplicationEnvironmentVariableRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationEnvironmentVariableApideleteApplicationEnvironmentVariable
     */
    applicationId: string
    /**
     * Environment Variable ID
     * @type string
     * @memberof ApplicationEnvironmentVariableApideleteApplicationEnvironmentVariable
     */
    environmentVariableId: string
}

export interface ApplicationEnvironmentVariableApiEditApplicationEnvironmentVariableRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationEnvironmentVariableApieditApplicationEnvironmentVariable
     */
    applicationId: string
    /**
     * Environment Variable ID
     * @type string
     * @memberof ApplicationEnvironmentVariableApieditApplicationEnvironmentVariable
     */
    environmentVariableId: string
    /**
     * 
     * @type EnvironmentVariableEditRequest
     * @memberof ApplicationEnvironmentVariableApieditApplicationEnvironmentVariable
     */
    environmentVariableEditRequest: EnvironmentVariableEditRequest
}

export interface ApplicationEnvironmentVariableApiImportEnvironmentVariableRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationEnvironmentVariableApiimportEnvironmentVariable
     */
    applicationId: string
    /**
     * 
     * @type VariableImportRequest
     * @memberof ApplicationEnvironmentVariableApiimportEnvironmentVariable
     */
    variableImportRequest?: VariableImportRequest
}

export interface ApplicationEnvironmentVariableApiListApplicationEnvironmentVariableRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationEnvironmentVariableApilistApplicationEnvironmentVariable
     */
    applicationId: string
}

export class ObjectApplicationEnvironmentVariableApi {
    private api: ObservableApplicationEnvironmentVariableApi

    public constructor(configuration: Configuration, requestFactory?: ApplicationEnvironmentVariableApiRequestFactory, responseProcessor?: ApplicationEnvironmentVariableApiResponseProcessor) {
        this.api = new ObservableApplicationEnvironmentVariableApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * - Add an environment variable to the application. 
     * Add an environment variable to the application
     * @param param the request object
     */
    public createApplicationEnvironmentVariable(param: ApplicationEnvironmentVariableApiCreateApplicationEnvironmentVariableRequest, options?: Configuration): Promise<EnvironmentVariableResponse> {
        return this.api.createApplicationEnvironmentVariable(param.applicationId, param.environmentVariableRequest,  options).toPromise();
    }

    /**
     * - Allows you to add an alias at application level on an existing environment variable having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new environment variable at application level with the same value as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the aliased_variable will be exposed in the \"aliased_variable\" field of the newly created variable - Only 1 alias level is allowed. You can't create an alias on an alias 
     * Create an environment variable alias at the application level
     * @param param the request object
     */
    public createApplicationEnvironmentVariableAlias(param: ApplicationEnvironmentVariableApiCreateApplicationEnvironmentVariableAliasRequest, options?: Configuration): Promise<EnvironmentVariableResponse> {
        return this.api.createApplicationEnvironmentVariableAlias(param.applicationId, param.environmentVariableId, param.key,  options).toPromise();
    }

    /**
     * - Allows you to override at application level an environment variable that has a higher scope. - You only have to specify a value in the request body - The system will create a new environment variable at application level with the same key as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the overridden_variable will be exposed in the \"overridden_variable\" field of the newly created variable 
     * Create an environment variable override at the application level
     * @param param the request object
     */
    public createApplicationEnvironmentVariableOverride(param: ApplicationEnvironmentVariableApiCreateApplicationEnvironmentVariableOverrideRequest, options?: Configuration): Promise<EnvironmentVariableResponse> {
        return this.api.createApplicationEnvironmentVariableOverride(param.applicationId, param.environmentVariableId, param.value,  options).toPromise();
    }

    /**
     * - To delete an environment variable from an application you must have the project user permission - You can't delete a BUILT_IN variable - If you delete a variable having override or alias, the associated override/alias will be deleted as well 
     * Delete an environment variable from an application
     * @param param the request object
     */
    public deleteApplicationEnvironmentVariable(param: ApplicationEnvironmentVariableApiDeleteApplicationEnvironmentVariableRequest, options?: Configuration): Promise<void> {
        return this.api.deleteApplicationEnvironmentVariable(param.applicationId, param.environmentVariableId,  options).toPromise();
    }

    /**
     * - You can't edit a BUILT_IN variable - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the variable it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 
     * Edit an environment variable belonging to the application
     * @param param the request object
     */
    public editApplicationEnvironmentVariable(param: ApplicationEnvironmentVariableApiEditApplicationEnvironmentVariableRequest, options?: Configuration): Promise<EnvironmentVariableResponse> {
        return this.api.editApplicationEnvironmentVariable(param.applicationId, param.environmentVariableId, param.environmentVariableEditRequest,  options).toPromise();
    }

    /**
     * Import environment variables in a defined scope, with a defined visibility.
     * Import variables
     * @param param the request object
     */
    public importEnvironmentVariable(param: ApplicationEnvironmentVariableApiImportEnvironmentVariableRequest, options?: Configuration): Promise<VariableImportResponse> {
        return this.api.importEnvironmentVariable(param.applicationId, param.variableImportRequest,  options).toPromise();
    }

    /**
     * List environment variables
     * @param param the request object
     */
    public listApplicationEnvironmentVariable(param: ApplicationEnvironmentVariableApiListApplicationEnvironmentVariableRequest, options?: Configuration): Promise<EnvironmentVariableResponseList> {
        return this.api.listApplicationEnvironmentVariable(param.applicationId,  options).toPromise();
    }

}

import { ObservableApplicationEventApi } from "./ObservableAPI";
import { ApplicationEventApiRequestFactory, ApplicationEventApiResponseProcessor} from "../apis/ApplicationEventApi";

export interface ApplicationEventApiListApplicationEventRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationEventApilistApplicationEvent
     */
    applicationId: string
    /**
     * Starting point after which to return results
     * @type string
     * @memberof ApplicationEventApilistApplicationEvent
     */
    startId?: string
}

export class ObjectApplicationEventApi {
    private api: ObservableApplicationEventApi

    public constructor(configuration: Configuration, requestFactory?: ApplicationEventApiRequestFactory, responseProcessor?: ApplicationEventApiResponseProcessor) {
        this.api = new ObservableApplicationEventApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter
     * List application events
     * @param param the request object
     */
    public listApplicationEvent(param: ApplicationEventApiListApplicationEventRequest, options?: Configuration): Promise<EventPaginatedResponseList> {
        return this.api.listApplicationEvent(param.applicationId, param.startId,  options).toPromise();
    }

}

import { ObservableApplicationLogsApi } from "./ObservableAPI";
import { ApplicationLogsApiRequestFactory, ApplicationLogsApiResponseProcessor} from "../apis/ApplicationLogsApi";

export interface ApplicationLogsApiListApplicationLogRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationLogsApilistApplicationLog
     */
    applicationId: string
}

export class ObjectApplicationLogsApi {
    private api: ObservableApplicationLogsApi

    public constructor(configuration: Configuration, requestFactory?: ApplicationLogsApiRequestFactory, responseProcessor?: ApplicationLogsApiResponseProcessor) {
        this.api = new ObservableApplicationLogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This will list the last 1000 logs of the application
     * List logs
     * @param param the request object
     */
    public listApplicationLog(param: ApplicationLogsApiListApplicationLogRequest, options?: Configuration): Promise<LogResponseList> {
        return this.api.listApplicationLog(param.applicationId,  options).toPromise();
    }

}

import { ObservableApplicationMainCallsApi } from "./ObservableAPI";
import { ApplicationMainCallsApiRequestFactory, ApplicationMainCallsApiResponseProcessor} from "../apis/ApplicationMainCallsApi";

export interface ApplicationMainCallsApiCreateApplicationTagRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationMainCallsApicreateApplicationTag
     */
    applicationId: string
    /**
     * 
     * @type TagRequest
     * @memberof ApplicationMainCallsApicreateApplicationTag
     */
    tagRequest?: TagRequest
}

export interface ApplicationMainCallsApiDeleteApplicationRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationMainCallsApideleteApplication
     */
    applicationId: string
}

export interface ApplicationMainCallsApiDeleteApplicationTagRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationMainCallsApideleteApplicationTag
     */
    applicationId: string
    /**
     * Tag ID
     * @type string
     * @memberof ApplicationMainCallsApideleteApplicationTag
     */
    tagId: string
}

export interface ApplicationMainCallsApiEditApplicationRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationMainCallsApieditApplication
     */
    applicationId: string
    /**
     * 
     * @type ApplicationEditRequest
     * @memberof ApplicationMainCallsApieditApplication
     */
    applicationEditRequest?: ApplicationEditRequest
}

export interface ApplicationMainCallsApiGetApplicationRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationMainCallsApigetApplication
     */
    applicationId: string
}

export interface ApplicationMainCallsApiGetApplicationStatusRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationMainCallsApigetApplicationStatus
     */
    applicationId: string
}

export interface ApplicationMainCallsApiListApplicationCommitRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationMainCallsApilistApplicationCommit
     */
    applicationId: string
    /**
     * Starting point after which to return results
     * @type string
     * @memberof ApplicationMainCallsApilistApplicationCommit
     */
    startId?: string
    /**
     * Git Commit ID
     * @type string
     * @memberof ApplicationMainCallsApilistApplicationCommit
     */
    gitCommitId?: string
}

export interface ApplicationMainCallsApiListApplicationContributorRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationMainCallsApilistApplicationContributor
     */
    applicationId: string
}

export interface ApplicationMainCallsApiListApplicationLinksRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationMainCallsApilistApplicationLinks
     */
    applicationId: string
}

export interface ApplicationMainCallsApiListApplicationTagRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationMainCallsApilistApplicationTag
     */
    applicationId: string
}

export class ObjectApplicationMainCallsApi {
    private api: ObservableApplicationMainCallsApi

    public constructor(configuration: Configuration, requestFactory?: ApplicationMainCallsApiRequestFactory, responseProcessor?: ApplicationMainCallsApiResponseProcessor) {
        this.api = new ObservableApplicationMainCallsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add application tag
     * @param param the request object
     */
    public createApplicationTag(param: ApplicationMainCallsApiCreateApplicationTagRequest, options?: Configuration): Promise<TagResponseList> {
        return this.api.createApplicationTag(param.applicationId, param.tagRequest,  options).toPromise();
    }

    /**
     * To delete the application you must have the admin permission
     * Delete application
     * @param param the request object
     */
    public deleteApplication(param: ApplicationMainCallsApiDeleteApplicationRequest, options?: Configuration): Promise<void> {
        return this.api.deleteApplication(param.applicationId,  options).toPromise();
    }

    /**
     * Delete application tag
     * @param param the request object
     */
    public deleteApplicationTag(param: ApplicationMainCallsApiDeleteApplicationTagRequest, options?: Configuration): Promise<void> {
        return this.api.deleteApplicationTag(param.applicationId, param.tagId,  options).toPromise();
    }

    /**
     * - To edit the application you must have the admin permission. - For port edition, if you provide a port id, we will update the corresponding port. If you don't we will create a new one. If you remove a port from the payload, we will delete it. - For storage edition, if you provide a storage id, we will update the corresponding storage. If you don't we will create a new one. If you remove a storage from the payload, we will delete it. 
     * Edit application
     * @param param the request object
     */
    public editApplication(param: ApplicationMainCallsApiEditApplicationRequest, options?: Configuration): Promise<ApplicationResponse> {
        return this.api.editApplication(param.applicationId, param.applicationEditRequest,  options).toPromise();
    }

    /**
     * Get application by ID
     * @param param the request object
     */
    public getApplication(param: ApplicationMainCallsApiGetApplicationRequest, options?: Configuration): Promise<ApplicationResponse> {
        return this.api.getApplication(param.applicationId,  options).toPromise();
    }

    /**
     * Get application status
     * @param param the request object
     */
    public getApplicationStatus(param: ApplicationMainCallsApiGetApplicationStatusRequest, options?: Configuration): Promise<Status> {
        return this.api.getApplicationStatus(param.applicationId,  options).toPromise();
    }

    /**
     * Returns list of the last 100 commits made on the repository linked to the application
     * List last commits
     * @param param the request object
     */
    public listApplicationCommit(param: ApplicationMainCallsApiListApplicationCommitRequest, options?: Configuration): Promise<CommitResponseList> {
        return this.api.listApplicationCommit(param.applicationId, param.startId, param.gitCommitId,  options).toPromise();
    }

    /**
     * List contributors
     * @param param the request object
     */
    public listApplicationContributor(param: ApplicationMainCallsApiListApplicationContributorRequest, options?: Configuration): Promise<UserResponseList> {
        return this.api.listApplicationContributor(param.applicationId,  options).toPromise();
    }

    /**
     * This will return all the custom domains and Qovery autogenerated domain for the given application
     * List all URLs of the application
     * @param param the request object
     */
    public listApplicationLinks(param: ApplicationMainCallsApiListApplicationLinksRequest, options?: Configuration): Promise<LinkResponseList> {
        return this.api.listApplicationLinks(param.applicationId,  options).toPromise();
    }

    /**
     * List tags
     * @param param the request object
     */
    public listApplicationTag(param: ApplicationMainCallsApiListApplicationTagRequest, options?: Configuration): Promise<TagResponseList> {
        return this.api.listApplicationTag(param.applicationId,  options).toPromise();
    }

}

import { ObservableApplicationMetricsApi } from "./ObservableAPI";
import { ApplicationMetricsApiRequestFactory, ApplicationMetricsApiResponseProcessor} from "../apis/ApplicationMetricsApi";

export interface ApplicationMetricsApiGetApplicationCurrentInstanceRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationMetricsApigetApplicationCurrentInstance
     */
    applicationId: string
}

export interface ApplicationMetricsApiGetApplicationCurrentScaleRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationMetricsApigetApplicationCurrentScale
     */
    applicationId: string
}

export interface ApplicationMetricsApiGetApplicationCurrentStorageDiskRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationMetricsApigetApplicationCurrentStorageDisk
     */
    applicationId: string
}

export interface ApplicationMetricsApiGetApplicationMetricCpuRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationMetricsApigetApplicationMetricCpu
     */
    applicationId: string
    /**
     * Up to how many seconds in the past to ask analytics results
     * @type number
     * @memberof ApplicationMetricsApigetApplicationMetricCpu
     */
    lastSeconds: number
}

export interface ApplicationMetricsApiGetApplicationMetricHealthCheckRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationMetricsApigetApplicationMetricHealthCheck
     */
    applicationId: string
    /**
     * Up to how many seconds in the past to ask analytics results
     * @type number
     * @memberof ApplicationMetricsApigetApplicationMetricHealthCheck
     */
    lastSeconds: number
}

export interface ApplicationMetricsApiGetApplicationMetricMemoryRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationMetricsApigetApplicationMetricMemory
     */
    applicationId: string
    /**
     * Up to how many seconds in the past to ask analytics results
     * @type number
     * @memberof ApplicationMetricsApigetApplicationMetricMemory
     */
    lastSeconds: number
}

export interface ApplicationMetricsApiGetApplicationMetricRestartRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationMetricsApigetApplicationMetricRestart
     */
    applicationId: string
    /**
     * Up to how many seconds in the past to ask analytics results
     * @type number
     * @memberof ApplicationMetricsApigetApplicationMetricRestart
     */
    lastSeconds: number
}

export interface ApplicationMetricsApiGetApplicationMetricStorageRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationMetricsApigetApplicationMetricStorage
     */
    applicationId: string
    /**
     * Up to how many seconds in the past to ask analytics results
     * @type number
     * @memberof ApplicationMetricsApigetApplicationMetricStorage
     */
    lastSeconds: number
}

export class ObjectApplicationMetricsApi {
    private api: ObservableApplicationMetricsApi

    public constructor(configuration: Configuration, requestFactory?: ApplicationMetricsApiRequestFactory, responseProcessor?: ApplicationMetricsApiResponseProcessor) {
        this.api = new ObservableApplicationMetricsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List currently running instances of the application with their CPU and RAM metrics
     * @param param the request object
     */
    public getApplicationCurrentInstance(param: ApplicationMetricsApiGetApplicationCurrentInstanceRequest, options?: Configuration): Promise<InstanceResponseList> {
        return this.api.getApplicationCurrentInstance(param.applicationId,  options).toPromise();
    }

    /**
     * Returns min, max, and running number of instances of the application
     * Get current scaling of the application
     * @param param the request object
     */
    public getApplicationCurrentScale(param: ApplicationMetricsApiGetApplicationCurrentScaleRequest, options?: Configuration): Promise<ApplicationCurrentScaleResponse> {
        return this.api.getApplicationCurrentScale(param.applicationId,  options).toPromise();
    }

    /**
     * List current storage disk usage
     * @param param the request object
     */
    public getApplicationCurrentStorageDisk(param: ApplicationMetricsApiGetApplicationCurrentStorageDiskRequest, options?: Configuration): Promise<StorageDiskResponseList> {
        return this.api.getApplicationCurrentStorageDisk(param.applicationId,  options).toPromise();
    }

    /**
     * Get CPU consumption metric over time for the application
     * @param param the request object
     */
    public getApplicationMetricCpu(param: ApplicationMetricsApiGetApplicationMetricCpuRequest, options?: Configuration): Promise<MetricCPUResponseList> {
        return this.api.getApplicationMetricCpu(param.applicationId, param.lastSeconds,  options).toPromise();
    }

    /**
     * The value returned corresponds to the 95th centile
     * Get Health Check latency  metric over time for the application
     * @param param the request object
     */
    public getApplicationMetricHealthCheck(param: ApplicationMetricsApiGetApplicationMetricHealthCheckRequest, options?: Configuration): Promise<MetricGenericResponseList> {
        return this.api.getApplicationMetricHealthCheck(param.applicationId, param.lastSeconds,  options).toPromise();
    }

    /**
     * Get Memory consumption metric over time for the application
     * @param param the request object
     */
    public getApplicationMetricMemory(param: ApplicationMetricsApiGetApplicationMetricMemoryRequest, options?: Configuration): Promise<MetricMemoryResponseList> {
        return this.api.getApplicationMetricMemory(param.applicationId, param.lastSeconds,  options).toPromise();
    }

    /**
     * Get application restart message and timestamp.
     * List application restarts
     * @param param the request object
     */
    public getApplicationMetricRestart(param: ApplicationMetricsApiGetApplicationMetricRestartRequest, options?: Configuration): Promise<MetricRestartResponse> {
        return this.api.getApplicationMetricRestart(param.applicationId, param.lastSeconds,  options).toPromise();
    }

    /**
     * Get Storage consumption metric over time for the application
     * @param param the request object
     */
    public getApplicationMetricStorage(param: ApplicationMetricsApiGetApplicationMetricStorageRequest, options?: Configuration): Promise<MetricStorageResponseList> {
        return this.api.getApplicationMetricStorage(param.applicationId, param.lastSeconds,  options).toPromise();
    }

}

import { ObservableApplicationSecretApi } from "./ObservableAPI";
import { ApplicationSecretApiRequestFactory, ApplicationSecretApiResponseProcessor} from "../apis/ApplicationSecretApi";

export interface ApplicationSecretApiCreateApplicationSecretRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationSecretApicreateApplicationSecret
     */
    applicationId: string
    /**
     * 
     * @type SecretRequest
     * @memberof ApplicationSecretApicreateApplicationSecret
     */
    secretRequest?: SecretRequest
}

export interface ApplicationSecretApiCreateApplicationSecretAliasRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationSecretApicreateApplicationSecretAlias
     */
    applicationId: string
    /**
     * Secret ID
     * @type string
     * @memberof ApplicationSecretApicreateApplicationSecretAlias
     */
    secretId: string
    /**
     * 
     * @type Key
     * @memberof ApplicationSecretApicreateApplicationSecretAlias
     */
    key?: Key
}

export interface ApplicationSecretApiCreateApplicationSecretOverrideRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationSecretApicreateApplicationSecretOverride
     */
    applicationId: string
    /**
     * Secret ID
     * @type string
     * @memberof ApplicationSecretApicreateApplicationSecretOverride
     */
    secretId: string
    /**
     * 
     * @type Value
     * @memberof ApplicationSecretApicreateApplicationSecretOverride
     */
    value?: Value
}

export interface ApplicationSecretApiDeleteApplicationSecretRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationSecretApideleteApplicationSecret
     */
    applicationId: string
    /**
     * Secret ID
     * @type string
     * @memberof ApplicationSecretApideleteApplicationSecret
     */
    secretId: string
}

export interface ApplicationSecretApiEditApplicationSecretRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationSecretApieditApplicationSecret
     */
    applicationId: string
    /**
     * Secret ID
     * @type string
     * @memberof ApplicationSecretApieditApplicationSecret
     */
    secretId: string
    /**
     * 
     * @type SecretEditRequest
     * @memberof ApplicationSecretApieditApplicationSecret
     */
    secretEditRequest: SecretEditRequest
}

export interface ApplicationSecretApiListApplicationSecretsRequest {
    /**
     * Application ID
     * @type string
     * @memberof ApplicationSecretApilistApplicationSecrets
     */
    applicationId: string
}

export class ObjectApplicationSecretApi {
    private api: ObservableApplicationSecretApi

    public constructor(configuration: Configuration, requestFactory?: ApplicationSecretApiRequestFactory, responseProcessor?: ApplicationSecretApiResponseProcessor) {
        this.api = new ObservableApplicationSecretApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * - Add a secret to the application. 
     * Add a secret to the application
     * @param param the request object
     */
    public createApplicationSecret(param: ApplicationSecretApiCreateApplicationSecretRequest, options?: Configuration): Promise<SecretResponse> {
        return this.api.createApplicationSecret(param.applicationId, param.secretRequest,  options).toPromise();
    }

    /**
     * - Allows you to add an alias at application level on an existing secret having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new secret at application level with the same value as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the aliased_secret will be exposed in the \"aliased_secret\" field of the newly created secret - Only 1 alias level is allowed. You can't create an alias on an alias 
     * Create a secret alias at the application level
     * @param param the request object
     */
    public createApplicationSecretAlias(param: ApplicationSecretApiCreateApplicationSecretAliasRequest, options?: Configuration): Promise<SecretResponse> {
        return this.api.createApplicationSecretAlias(param.applicationId, param.secretId, param.key,  options).toPromise();
    }

    /**
     * - Allows you to override at application level a secret that has a higher scope. - You only have to specify a value in the request body - The system will create a new secret at application level with the same key as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the overridden_secret will be exposed in the \"overridden_secret\" field of the newly created secret 
     * Create a secret override at the application level
     * @param param the request object
     */
    public createApplicationSecretOverride(param: ApplicationSecretApiCreateApplicationSecretOverrideRequest, options?: Configuration): Promise<SecretResponse> {
        return this.api.createApplicationSecretOverride(param.applicationId, param.secretId, param.value,  options).toPromise();
    }

    /**
     * - To delete a secret you must have the project user permission - You can't delete a BUILT_IN secret - If you delete a secret having override or alias, the associated override/alias will be deleted as well 
     * Delete a secret from an application
     * @param param the request object
     */
    public deleteApplicationSecret(param: ApplicationSecretApiDeleteApplicationSecretRequest, options?: Configuration): Promise<void> {
        return this.api.deleteApplicationSecret(param.applicationId, param.secretId,  options).toPromise();
    }

    /**
     * - You can't edit a BUILT_IN secret - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the secret it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 
     * Edit a secret belonging to the application
     * @param param the request object
     */
    public editApplicationSecret(param: ApplicationSecretApiEditApplicationSecretRequest, options?: Configuration): Promise<SecretResponse> {
        return this.api.editApplicationSecret(param.applicationId, param.secretId, param.secretEditRequest,  options).toPromise();
    }

    /**
     * Secrets are like environment variables, but they are secured and can't be revealed.
     * List application secrets
     * @param param the request object
     */
    public listApplicationSecrets(param: ApplicationSecretApiListApplicationSecretsRequest, options?: Configuration): Promise<SecretResponseList> {
        return this.api.listApplicationSecrets(param.applicationId,  options).toPromise();
    }

}

import { ObservableApplicationsApi } from "./ObservableAPI";
import { ApplicationsApiRequestFactory, ApplicationsApiResponseProcessor} from "../apis/ApplicationsApi";

export interface ApplicationsApiCreateApplicationRequest {
    /**
     * Environment ID
     * @type string
     * @memberof ApplicationsApicreateApplication
     */
    environmentId: string
    /**
     * 
     * @type ApplicationRequest
     * @memberof ApplicationsApicreateApplication
     */
    applicationRequest?: ApplicationRequest
}

export interface ApplicationsApiGetEnvironmentApplicationCurrentInstanceRequest {
    /**
     * Environment ID
     * @type string
     * @memberof ApplicationsApigetEnvironmentApplicationCurrentInstance
     */
    environmentId: string
}

export interface ApplicationsApiGetEnvironmentApplicationCurrentScaleRequest {
    /**
     * Environment ID
     * @type string
     * @memberof ApplicationsApigetEnvironmentApplicationCurrentScale
     */
    environmentId: string
}

export interface ApplicationsApiGetEnvironmentApplicationCurrentStorageRequest {
    /**
     * Environment ID
     * @type string
     * @memberof ApplicationsApigetEnvironmentApplicationCurrentStorage
     */
    environmentId: string
}

export interface ApplicationsApiGetEnvironmentApplicationStatusRequest {
    /**
     * Environment ID
     * @type string
     * @memberof ApplicationsApigetEnvironmentApplicationStatus
     */
    environmentId: string
}

export interface ApplicationsApiGetEnvironmentApplicationSupportedLanguagesRequest {
    /**
     * Environment ID
     * @type string
     * @memberof ApplicationsApigetEnvironmentApplicationSupportedLanguages
     */
    environmentId: string
}

export interface ApplicationsApiListApplicationRequest {
    /**
     * Environment ID
     * @type string
     * @memberof ApplicationsApilistApplication
     */
    environmentId: string
    /**
     * return (or not) results that must be updated
     * @type boolean
     * @memberof ApplicationsApilistApplication
     */
    toUpdate?: boolean
}

export class ObjectApplicationsApi {
    private api: ObservableApplicationsApi

    public constructor(configuration: Configuration, requestFactory?: ApplicationsApiRequestFactory, responseProcessor?: ApplicationsApiResponseProcessor) {
        this.api = new ObservableApplicationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an application
     * @param param the request object
     */
    public createApplication(param: ApplicationsApiCreateApplicationRequest, options?: Configuration): Promise<ApplicationResponse> {
        return this.api.createApplication(param.environmentId, param.applicationRequest,  options).toPromise();
    }

    /**
     * List running instances with CPU and RAM usage for each application
     * @param param the request object
     */
    public getEnvironmentApplicationCurrentInstance(param: ApplicationsApiGetEnvironmentApplicationCurrentInstanceRequest, options?: Configuration): Promise<EnvironmentApplicationsInstanceResponseList> {
        return this.api.getEnvironmentApplicationCurrentInstance(param.environmentId,  options).toPromise();
    }

    /**
     * Returns min, max, and running number of instances for each application
     * List current scaling information for each application
     * @param param the request object
     */
    public getEnvironmentApplicationCurrentScale(param: ApplicationsApiGetEnvironmentApplicationCurrentScaleRequest, options?: Configuration): Promise<EnvironmentApplicationsCurrentScaleResponseList> {
        return this.api.getEnvironmentApplicationCurrentScale(param.environmentId,  options).toPromise();
    }

    /**
     * List current storage disk usage for each application
     * @param param the request object
     */
    public getEnvironmentApplicationCurrentStorage(param: ApplicationsApiGetEnvironmentApplicationCurrentStorageRequest, options?: Configuration): Promise<EnvironmentApplicationsStorageResponseList> {
        return this.api.getEnvironmentApplicationCurrentStorage(param.environmentId,  options).toPromise();
    }

    /**
     * Returns a list of applications with only their id and status.
     * List all environment applications statuses
     * @param param the request object
     */
    public getEnvironmentApplicationStatus(param: ApplicationsApiGetEnvironmentApplicationStatusRequest, options?: Configuration): Promise<ReferenceObjectStatusResponseList> {
        return this.api.getEnvironmentApplicationStatus(param.environmentId,  options).toPromise();
    }

    /**
     * Returns list of languages supported by Buildpacks.
     * List supported languages
     * @param param the request object
     */
    public getEnvironmentApplicationSupportedLanguages(param: ApplicationsApiGetEnvironmentApplicationSupportedLanguagesRequest, options?: Configuration): Promise<EnvironmentApplicationsSupportedLanguageList> {
        return this.api.getEnvironmentApplicationSupportedLanguages(param.environmentId,  options).toPromise();
    }

    /**
     * List applications
     * @param param the request object
     */
    public listApplication(param: ApplicationsApiListApplicationRequest, options?: Configuration): Promise<ApplicationResponseList> {
        return this.api.listApplication(param.environmentId, param.toUpdate,  options).toPromise();
    }

}

import { ObservableBackupsApi } from "./ObservableAPI";
import { BackupsApiRequestFactory, BackupsApiResponseProcessor} from "../apis/BackupsApi";

export interface BackupsApiAddBackupDatabaseRequest {
    /**
     * Database ID
     * @type string
     * @memberof BackupsApiaddBackupDatabase
     */
    databaseId: string
    /**
     * 
     * @type BackupRequest
     * @memberof BackupsApiaddBackupDatabase
     */
    backupRequest?: BackupRequest
}

export interface BackupsApiListDatabaseBackupRequest {
    /**
     * Database ID
     * @type string
     * @memberof BackupsApilistDatabaseBackup
     */
    databaseId: string
    /**
     * Starting point after which to return results
     * @type string
     * @memberof BackupsApilistDatabaseBackup
     */
    startId?: string
}

export interface BackupsApiRemoveDatabaseBackupRequest {
    /**
     * Database ID
     * @type string
     * @memberof BackupsApiremoveDatabaseBackup
     */
    databaseId: string
    /**
     * Database Backup ID
     * @type string
     * @memberof BackupsApiremoveDatabaseBackup
     */
    backupId: string
}

export class ObjectBackupsApi {
    private api: ObservableBackupsApi

    public constructor(configuration: Configuration, requestFactory?: BackupsApiRequestFactory, responseProcessor?: BackupsApiResponseProcessor) {
        this.api = new ObservableBackupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a backup to the Database 
     * @param param the request object
     */
    public addBackupDatabase(param: BackupsApiAddBackupDatabaseRequest, options?: Configuration): Promise<BackupResponse> {
        return this.api.addBackupDatabase(param.databaseId, param.backupRequest,  options).toPromise();
    }

    /**
     * By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter
     * List database  backups
     * @param param the request object
     */
    public listDatabaseBackup(param: BackupsApiListDatabaseBackupRequest, options?: Configuration): Promise<BackupPaginatedResponseList> {
        return this.api.listDatabaseBackup(param.databaseId, param.startId,  options).toPromise();
    }

    /**
     * Remove database  backup
     * @param param the request object
     */
    public removeDatabaseBackup(param: BackupsApiRemoveDatabaseBackupRequest, options?: Configuration): Promise<void> {
        return this.api.removeDatabaseBackup(param.databaseId, param.backupId,  options).toPromise();
    }

}

import { ObservableBillingApi } from "./ObservableAPI";
import { BillingApiRequestFactory, BillingApiResponseProcessor} from "../apis/BillingApi";

export interface BillingApiAddCreditCardRequest {
    /**
     * Organization ID
     * @type string
     * @memberof BillingApiaddCreditCard
     */
    organizationId: string
    /**
     * 
     * @type CreditCardRequest
     * @memberof BillingApiaddCreditCard
     */
    creditCardRequest?: CreditCardRequest
}

export interface BillingApiAddCreditCodeRequest {
    /**
     * Organization ID
     * @type string
     * @memberof BillingApiaddCreditCode
     */
    organizationId: string
    /**
     * 
     * @type OrganizationCreditCodeRequest
     * @memberof BillingApiaddCreditCode
     */
    organizationCreditCodeRequest?: OrganizationCreditCodeRequest
}

export interface BillingApiDeleteCreditCardRequest {
    /**
     * Organization ID
     * @type string
     * @memberof BillingApideleteCreditCard
     */
    organizationId: string
    /**
     * Credit Card ID
     * @type string
     * @memberof BillingApideleteCreditCard
     */
    creditCardId: string
}

export interface BillingApiEditOrganizationBillingInfoRequest {
    /**
     * Organization ID
     * @type string
     * @memberof BillingApieditOrganizationBillingInfo
     */
    organizationId: string
    /**
     * 
     * @type BillingInfoRequest
     * @memberof BillingApieditOrganizationBillingInfo
     */
    billingInfoRequest?: BillingInfoRequest
}

export interface BillingApiGetClusterCurrentCostRequest {
    /**
     * Organization ID
     * @type string
     * @memberof BillingApigetClusterCurrentCost
     */
    organizationId: string
    /**
     * Cluster ID
     * @type string
     * @memberof BillingApigetClusterCurrentCost
     */
    clusterId: string
}

export interface BillingApiGetOrganizationBillingInfoRequest {
    /**
     * Organization ID
     * @type string
     * @memberof BillingApigetOrganizationBillingInfo
     */
    organizationId: string
}

export interface BillingApiGetOrganizationBillingStatusRequest {
    /**
     * Organization ID
     * @type string
     * @memberof BillingApigetOrganizationBillingStatus
     */
    organizationId: string
}

export interface BillingApiGetOrganizationCurrentCostRequest {
    /**
     * Organization ID
     * @type string
     * @memberof BillingApigetOrganizationCurrentCost
     */
    organizationId: string
}

export interface BillingApiGetOrganizationInvoiceRequest {
    /**
     * Organization ID
     * @type string
     * @memberof BillingApigetOrganizationInvoice
     */
    organizationId: string
    /**
     * Invoice ID
     * @type string
     * @memberof BillingApigetOrganizationInvoice
     */
    invoiceId: string
}

export interface BillingApiGetOrganizationInvoicePDFRequest {
    /**
     * Organization ID
     * @type string
     * @memberof BillingApigetOrganizationInvoicePDF
     */
    organizationId: string
    /**
     * Invoice ID
     * @type string
     * @memberof BillingApigetOrganizationInvoicePDF
     */
    invoiceId: string
}

export interface BillingApiListOrganizationCreditCardsRequest {
    /**
     * Organization ID
     * @type string
     * @memberof BillingApilistOrganizationCreditCards
     */
    organizationId: string
}

export interface BillingApiListOrganizationInvoiceRequest {
    /**
     * Organization ID
     * @type string
     * @memberof BillingApilistOrganizationInvoice
     */
    organizationId: string
}

export interface BillingApiOrganizationDownloadAllInvoicesRequest {
    /**
     * Organization ID
     * @type string
     * @memberof BillingApiorganizationDownloadAllInvoices
     */
    organizationId: string
}

export class ObjectBillingApi {
    private api: ObservableBillingApi

    public constructor(configuration: Configuration, requestFactory?: BillingApiRequestFactory, responseProcessor?: BillingApiResponseProcessor) {
        this.api = new ObservableBillingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add credit card
     * @param param the request object
     */
    public addCreditCard(param: BillingApiAddCreditCardRequest, options?: Configuration): Promise<CreditCardResponse> {
        return this.api.addCreditCard(param.organizationId, param.creditCardRequest,  options).toPromise();
    }

    /**
     * Add credit code
     * @param param the request object
     */
    public addCreditCode(param: BillingApiAddCreditCodeRequest, options?: Configuration): Promise<void> {
        return this.api.addCreditCode(param.organizationId, param.organizationCreditCodeRequest,  options).toPromise();
    }

    /**
     * Delete credit card
     * @param param the request object
     */
    public deleteCreditCard(param: BillingApiDeleteCreditCardRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCreditCard(param.organizationId, param.creditCardId,  options).toPromise();
    }

    /**
     * Edit Organization Billing Info
     * @param param the request object
     */
    public editOrganizationBillingInfo(param: BillingApiEditOrganizationBillingInfoRequest, options?: Configuration): Promise<BillingInfoResponse> {
        return this.api.editOrganizationBillingInfo(param.organizationId, param.billingInfoRequest,  options).toPromise();
    }

    /**
     * Get your cluster cost range. We are unable to give a precise cost of your infrastructure at the moment. But Qovery guarantees that the cost of your cluster will not exceed the max range. 
     * Get cluster current cost
     * @param param the request object
     */
    public getClusterCurrentCost(param: BillingApiGetClusterCurrentCostRequest, options?: Configuration): Promise<CostRangeResponse> {
        return this.api.getClusterCurrentCost(param.organizationId, param.clusterId,  options).toPromise();
    }

    /**
     * Get organization billing info
     * @param param the request object
     */
    public getOrganizationBillingInfo(param: BillingApiGetOrganizationBillingInfoRequest, options?: Configuration): Promise<BillingInfoResponse> {
        return this.api.getOrganizationBillingInfo(param.organizationId,  options).toPromise();
    }

    /**
     * This endpoint returns a \"is_valid\" boolean field reflecting the billing status of the organization: - If true, the organization billing is valid - For Startup organization, it returns false if there is at least 1 invoice unpaid since 1 week - For Community organization, it returns false if there is no credit left 
     * Get organization billing status
     * @param param the request object
     */
    public getOrganizationBillingStatus(param: BillingApiGetOrganizationBillingStatusRequest, options?: Configuration): Promise<BillingStatus> {
        return this.api.getOrganizationBillingStatus(param.organizationId,  options).toPromise();
    }

    /**
     * Get organization current cost
     * @param param the request object
     */
    public getOrganizationCurrentCost(param: BillingApiGetOrganizationCurrentCostRequest, options?: Configuration): Promise<OrganizationCurrentCostResponse> {
        return this.api.getOrganizationCurrentCost(param.organizationId,  options).toPromise();
    }

    /**
     * Get organization invoice
     * @param param the request object
     */
    public getOrganizationInvoice(param: BillingApiGetOrganizationInvoiceRequest, options?: Configuration): Promise<InvoiceResponse> {
        return this.api.getOrganizationInvoice(param.organizationId, param.invoiceId,  options).toPromise();
    }

    /**
     * This will return URL of the invoice PDF
     * Get invoice link
     * @param param the request object
     */
    public getOrganizationInvoicePDF(param: BillingApiGetOrganizationInvoicePDFRequest, options?: Configuration): Promise<LinkResponse> {
        return this.api.getOrganizationInvoicePDF(param.organizationId, param.invoiceId,  options).toPromise();
    }

    /**
     * List organization credit cards
     * @param param the request object
     */
    public listOrganizationCreditCards(param: BillingApiListOrganizationCreditCardsRequest, options?: Configuration): Promise<CreditCardResponseList> {
        return this.api.listOrganizationCreditCards(param.organizationId,  options).toPromise();
    }

    /**
     * List organization invoices
     * @param param the request object
     */
    public listOrganizationInvoice(param: BillingApiListOrganizationInvoiceRequest, options?: Configuration): Promise<InvoiceResponseList> {
        return this.api.listOrganizationInvoice(param.organizationId,  options).toPromise();
    }

    /**
     * Download all invoices
     * @param param the request object
     */
    public organizationDownloadAllInvoices(param: BillingApiOrganizationDownloadAllInvoicesRequest, options?: Configuration): Promise<void> {
        return this.api.organizationDownloadAllInvoices(param.organizationId,  options).toPromise();
    }

}

import { ObservableCloudProviderApi } from "./ObservableAPI";
import { CloudProviderApiRequestFactory, CloudProviderApiResponseProcessor} from "../apis/CloudProviderApi";

export interface CloudProviderApiListAWSFeaturesRequest {
}

export interface CloudProviderApiListAWSRegionsRequest {
}

export interface CloudProviderApiListCloudProviderRequest {
}

export interface CloudProviderApiListDOFeaturesRequest {
}

export interface CloudProviderApiListDORegionsRequest {
}

export interface CloudProviderApiListScalewayFeaturesRequest {
}

export interface CloudProviderApiListScalewayRegionsRequest {
}

export class ObjectCloudProviderApi {
    private api: ObservableCloudProviderApi

    public constructor(configuration: Configuration, requestFactory?: CloudProviderApiRequestFactory, responseProcessor?: CloudProviderApiResponseProcessor) {
        this.api = new ObservableCloudProviderApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List AWS features available
     * @param param the request object
     */
    public listAWSFeatures(param: CloudProviderApiListAWSFeaturesRequest = {}, options?: Configuration): Promise<ClusterFeatureResponseList> {
        return this.api.listAWSFeatures( options).toPromise();
    }

    /**
     * List AWS regions
     * @param param the request object
     */
    public listAWSRegions(param: CloudProviderApiListAWSRegionsRequest = {}, options?: Configuration): Promise<ClusterRegionResponseList> {
        return this.api.listAWSRegions( options).toPromise();
    }

    /**
     * List Cloud providers available
     * @param param the request object
     */
    public listCloudProvider(param: CloudProviderApiListCloudProviderRequest = {}, options?: Configuration): Promise<CloudProviderResponseList> {
        return this.api.listCloudProvider( options).toPromise();
    }

    /**
     * List DO features available
     * @param param the request object
     */
    public listDOFeatures(param: CloudProviderApiListDOFeaturesRequest = {}, options?: Configuration): Promise<ClusterFeatureResponseList> {
        return this.api.listDOFeatures( options).toPromise();
    }

    /**
     * List DO regions
     * @param param the request object
     */
    public listDORegions(param: CloudProviderApiListDORegionsRequest = {}, options?: Configuration): Promise<ClusterRegionResponseList> {
        return this.api.listDORegions( options).toPromise();
    }

    /**
     * List Scaleway features available
     * @param param the request object
     */
    public listScalewayFeatures(param: CloudProviderApiListScalewayFeaturesRequest = {}, options?: Configuration): Promise<ClusterFeatureResponseList> {
        return this.api.listScalewayFeatures( options).toPromise();
    }

    /**
     * List Scaleway regions
     * @param param the request object
     */
    public listScalewayRegions(param: CloudProviderApiListScalewayRegionsRequest = {}, options?: Configuration): Promise<ClusterRegionResponseList> {
        return this.api.listScalewayRegions( options).toPromise();
    }

}

import { ObservableCloudProviderCredentialsApi } from "./ObservableAPI";
import { CloudProviderCredentialsApiRequestFactory, CloudProviderCredentialsApiResponseProcessor} from "../apis/CloudProviderCredentialsApi";

export interface CloudProviderCredentialsApiCreateAWSCredentialsRequest {
    /**
     * Organization ID
     * @type string
     * @memberof CloudProviderCredentialsApicreateAWSCredentials
     */
    organizationId: string
    /**
     * 
     * @type AwsCredentialsRequest
     * @memberof CloudProviderCredentialsApicreateAWSCredentials
     */
    awsCredentialsRequest?: AwsCredentialsRequest
}

export interface CloudProviderCredentialsApiCreateDOCredentialsRequest {
    /**
     * Organization ID
     * @type string
     * @memberof CloudProviderCredentialsApicreateDOCredentials
     */
    organizationId: string
    /**
     * 
     * @type DoCredentialsRequest
     * @memberof CloudProviderCredentialsApicreateDOCredentials
     */
    doCredentialsRequest?: DoCredentialsRequest
}

export interface CloudProviderCredentialsApiCreateScalewayCredentialsRequest {
    /**
     * Organization ID
     * @type string
     * @memberof CloudProviderCredentialsApicreateScalewayCredentials
     */
    organizationId: string
    /**
     * 
     * @type ScalewayCredentialsRequest
     * @memberof CloudProviderCredentialsApicreateScalewayCredentials
     */
    scalewayCredentialsRequest?: ScalewayCredentialsRequest
}

export interface CloudProviderCredentialsApiDeleteAWSCredentialsRequest {
    /**
     * Credentials ID
     * @type string
     * @memberof CloudProviderCredentialsApideleteAWSCredentials
     */
    credentialsId: string
    /**
     * Organization ID
     * @type string
     * @memberof CloudProviderCredentialsApideleteAWSCredentials
     */
    organizationId: string
}

export interface CloudProviderCredentialsApiDeleteDOCredentialsRequest {
    /**
     * Credentials ID
     * @type string
     * @memberof CloudProviderCredentialsApideleteDOCredentials
     */
    credentialsId: string
    /**
     * Organization ID
     * @type string
     * @memberof CloudProviderCredentialsApideleteDOCredentials
     */
    organizationId: string
}

export interface CloudProviderCredentialsApiDeleteScalewayCredentialsRequest {
    /**
     * Credentials ID
     * @type string
     * @memberof CloudProviderCredentialsApideleteScalewayCredentials
     */
    credentialsId: string
    /**
     * Organization ID
     * @type string
     * @memberof CloudProviderCredentialsApideleteScalewayCredentials
     */
    organizationId: string
}

export interface CloudProviderCredentialsApiEditAWSCredentialsRequest {
    /**
     * Organization ID
     * @type string
     * @memberof CloudProviderCredentialsApieditAWSCredentials
     */
    organizationId: string
    /**
     * Credentials ID
     * @type string
     * @memberof CloudProviderCredentialsApieditAWSCredentials
     */
    credentialsId: string
    /**
     * 
     * @type AwsCredentialsRequest
     * @memberof CloudProviderCredentialsApieditAWSCredentials
     */
    awsCredentialsRequest?: AwsCredentialsRequest
}

export interface CloudProviderCredentialsApiEditDOCredentialsRequest {
    /**
     * Organization ID
     * @type string
     * @memberof CloudProviderCredentialsApieditDOCredentials
     */
    organizationId: string
    /**
     * Credentials ID
     * @type string
     * @memberof CloudProviderCredentialsApieditDOCredentials
     */
    credentialsId: string
    /**
     * 
     * @type DoCredentialsRequest
     * @memberof CloudProviderCredentialsApieditDOCredentials
     */
    doCredentialsRequest?: DoCredentialsRequest
}

export interface CloudProviderCredentialsApiEditScalewayCredentialsRequest {
    /**
     * Organization ID
     * @type string
     * @memberof CloudProviderCredentialsApieditScalewayCredentials
     */
    organizationId: string
    /**
     * Credentials ID
     * @type string
     * @memberof CloudProviderCredentialsApieditScalewayCredentials
     */
    credentialsId: string
    /**
     * 
     * @type ScalewayCredentialsRequest
     * @memberof CloudProviderCredentialsApieditScalewayCredentials
     */
    scalewayCredentialsRequest?: ScalewayCredentialsRequest
}

export interface CloudProviderCredentialsApiListAWSCredentialsRequest {
    /**
     * Organization ID
     * @type string
     * @memberof CloudProviderCredentialsApilistAWSCredentials
     */
    organizationId: string
}

export interface CloudProviderCredentialsApiListDOCredentialsRequest {
    /**
     * Organization ID
     * @type string
     * @memberof CloudProviderCredentialsApilistDOCredentials
     */
    organizationId: string
}

export interface CloudProviderCredentialsApiListScalewayCredentialsRequest {
    /**
     * Organization ID
     * @type string
     * @memberof CloudProviderCredentialsApilistScalewayCredentials
     */
    organizationId: string
}

export class ObjectCloudProviderCredentialsApi {
    private api: ObservableCloudProviderCredentialsApi

    public constructor(configuration: Configuration, requestFactory?: CloudProviderCredentialsApiRequestFactory, responseProcessor?: CloudProviderCredentialsApiResponseProcessor) {
        this.api = new ObservableCloudProviderCredentialsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create AWS credentials set
     * @param param the request object
     */
    public createAWSCredentials(param: CloudProviderCredentialsApiCreateAWSCredentialsRequest, options?: Configuration): Promise<ClusterCredentialsResponse> {
        return this.api.createAWSCredentials(param.organizationId, param.awsCredentialsRequest,  options).toPromise();
    }

    /**
     * Create Digital Ocean credentials set
     * @param param the request object
     */
    public createDOCredentials(param: CloudProviderCredentialsApiCreateDOCredentialsRequest, options?: Configuration): Promise<ClusterCredentialsResponse> {
        return this.api.createDOCredentials(param.organizationId, param.doCredentialsRequest,  options).toPromise();
    }

    /**
     * Create Scaleway credentials set
     * @param param the request object
     */
    public createScalewayCredentials(param: CloudProviderCredentialsApiCreateScalewayCredentialsRequest, options?: Configuration): Promise<ClusterCredentialsResponse> {
        return this.api.createScalewayCredentials(param.organizationId, param.scalewayCredentialsRequest,  options).toPromise();
    }

    /**
     * Delete a set of AWS credentials
     * @param param the request object
     */
    public deleteAWSCredentials(param: CloudProviderCredentialsApiDeleteAWSCredentialsRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAWSCredentials(param.credentialsId, param.organizationId,  options).toPromise();
    }

    /**
     * Delete a set of Digital Ocean credentials
     * @param param the request object
     */
    public deleteDOCredentials(param: CloudProviderCredentialsApiDeleteDOCredentialsRequest, options?: Configuration): Promise<void> {
        return this.api.deleteDOCredentials(param.credentialsId, param.organizationId,  options).toPromise();
    }

    /**
     * Delete a set of Scaleway credentials
     * @param param the request object
     */
    public deleteScalewayCredentials(param: CloudProviderCredentialsApiDeleteScalewayCredentialsRequest, options?: Configuration): Promise<void> {
        return this.api.deleteScalewayCredentials(param.credentialsId, param.organizationId,  options).toPromise();
    }

    /**
     * Edit a set of AWS credentials
     * @param param the request object
     */
    public editAWSCredentials(param: CloudProviderCredentialsApiEditAWSCredentialsRequest, options?: Configuration): Promise<ClusterCredentialsResponse> {
        return this.api.editAWSCredentials(param.organizationId, param.credentialsId, param.awsCredentialsRequest,  options).toPromise();
    }

    /**
     * Edit a set of Digital Ocean credentials
     * @param param the request object
     */
    public editDOCredentials(param: CloudProviderCredentialsApiEditDOCredentialsRequest, options?: Configuration): Promise<ClusterCredentialsResponse> {
        return this.api.editDOCredentials(param.organizationId, param.credentialsId, param.doCredentialsRequest,  options).toPromise();
    }

    /**
     * Edit a set of Scaleway credentials
     * @param param the request object
     */
    public editScalewayCredentials(param: CloudProviderCredentialsApiEditScalewayCredentialsRequest, options?: Configuration): Promise<ClusterCredentialsResponse> {
        return this.api.editScalewayCredentials(param.organizationId, param.credentialsId, param.scalewayCredentialsRequest,  options).toPromise();
    }

    /**
     * List AWS credentials
     * @param param the request object
     */
    public listAWSCredentials(param: CloudProviderCredentialsApiListAWSCredentialsRequest, options?: Configuration): Promise<ClusterCredentialsResponseList> {
        return this.api.listAWSCredentials(param.organizationId,  options).toPromise();
    }

    /**
     * List DO credentials
     * @param param the request object
     */
    public listDOCredentials(param: CloudProviderCredentialsApiListDOCredentialsRequest, options?: Configuration): Promise<ClusterCredentialsResponseList> {
        return this.api.listDOCredentials(param.organizationId,  options).toPromise();
    }

    /**
     * List Scaleway credentials
     * @param param the request object
     */
    public listScalewayCredentials(param: CloudProviderCredentialsApiListScalewayCredentialsRequest, options?: Configuration): Promise<ClusterCredentialsResponseList> {
        return this.api.listScalewayCredentials(param.organizationId,  options).toPromise();
    }

}

import { ObservableClustersApi } from "./ObservableAPI";
import { ClustersApiRequestFactory, ClustersApiResponseProcessor} from "../apis/ClustersApi";

export interface ClustersApiCreateClusterRequest {
    /**
     * Organization ID
     * @type string
     * @memberof ClustersApicreateCluster
     */
    organizationId: string
    /**
     * 
     * @type ClusterRequest
     * @memberof ClustersApicreateCluster
     */
    clusterRequest?: ClusterRequest
}

export interface ClustersApiDeleteClusterRequest {
    /**
     * Organization ID
     * @type string
     * @memberof ClustersApideleteCluster
     */
    organizationId: string
    /**
     * Cluster ID
     * @type string
     * @memberof ClustersApideleteCluster
     */
    clusterId: string
}

export interface ClustersApiDeployClusterRequest {
    /**
     * Organization ID
     * @type string
     * @memberof ClustersApideployCluster
     */
    organizationId: string
    /**
     * Cluster ID
     * @type string
     * @memberof ClustersApideployCluster
     */
    clusterId: string
}

export interface ClustersApiEditClusterRequest {
    /**
     * Organization ID
     * @type string
     * @memberof ClustersApieditCluster
     */
    organizationId: string
    /**
     * Cluster ID
     * @type string
     * @memberof ClustersApieditCluster
     */
    clusterId: string
    /**
     * 
     * @type ClusterRequest
     * @memberof ClustersApieditCluster
     */
    clusterRequest?: ClusterRequest
}

export interface ClustersApiEditRoutingTableRequest {
    /**
     * Organization ID
     * @type string
     * @memberof ClustersApieditRoutingTable
     */
    organizationId: string
    /**
     * Cluster ID
     * @type string
     * @memberof ClustersApieditRoutingTable
     */
    clusterId: string
    /**
     * 
     * @type ClusterRoutingTableRequest
     * @memberof ClustersApieditRoutingTable
     */
    clusterRoutingTableRequest?: ClusterRoutingTableRequest
}

export interface ClustersApiGetClusterReadinessStatusRequest {
    /**
     * Organization ID
     * @type string
     * @memberof ClustersApigetClusterReadinessStatus
     */
    organizationId: string
    /**
     * Cluster ID
     * @type string
     * @memberof ClustersApigetClusterReadinessStatus
     */
    clusterId: string
}

export interface ClustersApiGetClusterStatusRequest {
    /**
     * Organization ID
     * @type string
     * @memberof ClustersApigetClusterStatus
     */
    organizationId: string
    /**
     * Cluster ID
     * @type string
     * @memberof ClustersApigetClusterStatus
     */
    clusterId: string
}

export interface ClustersApiGetOrganizationCloudProviderInfoRequest {
    /**
     * Organization ID
     * @type string
     * @memberof ClustersApigetOrganizationCloudProviderInfo
     */
    organizationId: string
    /**
     * Cluster ID
     * @type string
     * @memberof ClustersApigetOrganizationCloudProviderInfo
     */
    clusterId: string
}

export interface ClustersApiGetOrganizationClusterStatusRequest {
    /**
     * Organization ID
     * @type string
     * @memberof ClustersApigetOrganizationClusterStatus
     */
    organizationId: string
}

export interface ClustersApiGetRoutingTableRequest {
    /**
     * Organization ID
     * @type string
     * @memberof ClustersApigetRoutingTable
     */
    organizationId: string
    /**
     * Cluster ID
     * @type string
     * @memberof ClustersApigetRoutingTable
     */
    clusterId: string
}

export interface ClustersApiListOrganizationClusterRequest {
    /**
     * Organization ID
     * @type string
     * @memberof ClustersApilistOrganizationCluster
     */
    organizationId: string
}

export interface ClustersApiSpecifyClusterCloudProviderInfoRequest {
    /**
     * Organization ID
     * @type string
     * @memberof ClustersApispecifyClusterCloudProviderInfo
     */
    organizationId: string
    /**
     * Cluster ID
     * @type string
     * @memberof ClustersApispecifyClusterCloudProviderInfo
     */
    clusterId: string
    /**
     * 
     * @type ClusterCloudProviderInfoRequest
     * @memberof ClustersApispecifyClusterCloudProviderInfo
     */
    clusterCloudProviderInfoRequest?: ClusterCloudProviderInfoRequest
}

export interface ClustersApiStopClusterRequest {
    /**
     * Organization ID
     * @type string
     * @memberof ClustersApistopCluster
     */
    organizationId: string
    /**
     * Cluster ID
     * @type string
     * @memberof ClustersApistopCluster
     */
    clusterId: string
}

export interface ClustersApiUpdateClusterRequest {
    /**
     * Organization ID
     * @type string
     * @memberof ClustersApiupdateCluster
     */
    organizationId: string
    /**
     * Cluster ID
     * @type string
     * @memberof ClustersApiupdateCluster
     */
    clusterId: string
}

export class ObjectClustersApi {
    private api: ObservableClustersApi

    public constructor(configuration: Configuration, requestFactory?: ClustersApiRequestFactory, responseProcessor?: ClustersApiResponseProcessor) {
        this.api = new ObservableClustersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a cluster
     * @param param the request object
     */
    public createCluster(param: ClustersApiCreateClusterRequest, options?: Configuration): Promise<ClusterResponse> {
        return this.api.createCluster(param.organizationId, param.clusterRequest,  options).toPromise();
    }

    /**
     * Delete a cluster
     * @param param the request object
     */
    public deleteCluster(param: ClustersApiDeleteClusterRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCluster(param.organizationId, param.clusterId,  options).toPromise();
    }

    /**
     * allows to deploy a cluster
     * Deploy a cluster
     * @param param the request object
     */
    public deployCluster(param: ClustersApiDeployClusterRequest, options?: Configuration): Promise<ClusterStatusResponse> {
        return this.api.deployCluster(param.organizationId, param.clusterId,  options).toPromise();
    }

    /**
     * Edit a cluster
     * @param param the request object
     */
    public editCluster(param: ClustersApiEditClusterRequest, options?: Configuration): Promise<ClusterResponse> {
        return this.api.editCluster(param.organizationId, param.clusterId, param.clusterRequest,  options).toPromise();
    }

    /**
     * Edit routing table by returning updated table.
     * Edit routing table
     * @param param the request object
     */
    public editRoutingTable(param: ClustersApiEditRoutingTableRequest, options?: Configuration): Promise<ClusterRoutingTableResponse> {
        return this.api.editRoutingTable(param.organizationId, param.clusterId, param.clusterRoutingTableRequest,  options).toPromise();
    }

    /**
     * Know if a cluster is ready to be deployed or not
     * @param param the request object
     */
    public getClusterReadinessStatus(param: ClustersApiGetClusterReadinessStatusRequest, options?: Configuration): Promise<ClusterReadinessStatus> {
        return this.api.getClusterReadinessStatus(param.organizationId, param.clusterId,  options).toPromise();
    }

    /**
     * Get cluster status
     * @param param the request object
     */
    public getClusterStatus(param: ClustersApiGetClusterStatusRequest, options?: Configuration): Promise<ClusterStatusResponse> {
        return this.api.getClusterStatus(param.organizationId, param.clusterId,  options).toPromise();
    }

    /**
     * Get cluster cloud provider info and credentials
     * @param param the request object
     */
    public getOrganizationCloudProviderInfo(param: ClustersApiGetOrganizationCloudProviderInfoRequest, options?: Configuration): Promise<ClusterCloudProviderInfoResponse> {
        return this.api.getOrganizationCloudProviderInfo(param.organizationId, param.clusterId,  options).toPromise();
    }

    /**
     * Returns a list of clusters with only their id and status.
     * List all clusters statuses
     * @param param the request object
     */
    public getOrganizationClusterStatus(param: ClustersApiGetOrganizationClusterStatusRequest, options?: Configuration): Promise<ClusterStatusResponseList> {
        return this.api.getOrganizationClusterStatus(param.organizationId,  options).toPromise();
    }

    /**
     * Retrieve network routing table where each line corresponds to a route between a destination and a target.
     * Get routing table
     * @param param the request object
     */
    public getRoutingTable(param: ClustersApiGetRoutingTableRequest, options?: Configuration): Promise<ClusterRoutingTableResponse> {
        return this.api.getRoutingTable(param.organizationId, param.clusterId,  options).toPromise();
    }

    /**
     * List organization clusters
     * @param param the request object
     */
    public listOrganizationCluster(param: ClustersApiListOrganizationClusterRequest, options?: Configuration): Promise<ClusterResponseList> {
        return this.api.listOrganizationCluster(param.organizationId,  options).toPromise();
    }

    /**
     * Specify cluster cloud provider info and credentials
     * @param param the request object
     */
    public specifyClusterCloudProviderInfo(param: ClustersApiSpecifyClusterCloudProviderInfoRequest, options?: Configuration): Promise<ClusterCloudProviderInfoResponse> {
        return this.api.specifyClusterCloudProviderInfo(param.organizationId, param.clusterId, param.clusterCloudProviderInfoRequest,  options).toPromise();
    }

    /**
     * Cluster stop has been requester.
     * Stop cluster
     * @param param the request object
     */
    public stopCluster(param: ClustersApiStopClusterRequest, options?: Configuration): Promise<ClusterStatusResponse> {
        return this.api.stopCluster(param.organizationId, param.clusterId,  options).toPromise();
    }

    /**
     * allows to update cluster version
     * Update a cluster Version
     * @param param the request object
     */
    public updateCluster(param: ClustersApiUpdateClusterRequest, options?: Configuration): Promise<ClusterStatusResponse> {
        return this.api.updateCluster(param.organizationId, param.clusterId,  options).toPromise();
    }

}

import { ObservableCustomDomainApi } from "./ObservableAPI";
import { CustomDomainApiRequestFactory, CustomDomainApiResponseProcessor} from "../apis/CustomDomainApi";

export interface CustomDomainApiCreateApplicationCustomDomainRequest {
    /**
     * Application ID
     * @type string
     * @memberof CustomDomainApicreateApplicationCustomDomain
     */
    applicationId: string
    /**
     * 
     * @type CustomDomainRequest
     * @memberof CustomDomainApicreateApplicationCustomDomain
     */
    customDomainRequest?: CustomDomainRequest
}

export interface CustomDomainApiDeleteCustomDomainRequest {
    /**
     * Application ID
     * @type string
     * @memberof CustomDomainApideleteCustomDomain
     */
    applicationId: string
    /**
     * Custom Domain ID
     * @type string
     * @memberof CustomDomainApideleteCustomDomain
     */
    customDomainId: string
}

export interface CustomDomainApiEditCustomDomainRequest {
    /**
     * Application ID
     * @type string
     * @memberof CustomDomainApieditCustomDomain
     */
    applicationId: string
    /**
     * Custom Domain ID
     * @type string
     * @memberof CustomDomainApieditCustomDomain
     */
    customDomainId: string
    /**
     * 
     * @type CustomDomainRequest
     * @memberof CustomDomainApieditCustomDomain
     */
    customDomainRequest?: CustomDomainRequest
}

export interface CustomDomainApiGetCustomDomainStatusRequest {
    /**
     * Application ID
     * @type string
     * @memberof CustomDomainApigetCustomDomainStatus
     */
    applicationId: string
    /**
     * Custom Domain ID
     * @type string
     * @memberof CustomDomainApigetCustomDomainStatus
     */
    customDomainId: string
}

export interface CustomDomainApiListApplicationCustomDomainRequest {
    /**
     * Application ID
     * @type string
     * @memberof CustomDomainApilistApplicationCustomDomain
     */
    applicationId: string
}

export class ObjectCustomDomainApi {
    private api: ObservableCustomDomainApi

    public constructor(configuration: Configuration, requestFactory?: CustomDomainApiRequestFactory, responseProcessor?: CustomDomainApiResponseProcessor) {
        this.api = new ObservableCustomDomainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a custom domain to this application in order not to use qovery autogenerated domain
     * Add custom domain to the application.
     * @param param the request object
     */
    public createApplicationCustomDomain(param: CustomDomainApiCreateApplicationCustomDomainRequest, options?: Configuration): Promise<CustomDomainResponse> {
        return this.api.createApplicationCustomDomain(param.applicationId, param.customDomainRequest,  options).toPromise();
    }

    /**
     * To delete an CustomDomain you must have the project user permission
     * Delete a Custom Domain
     * @param param the request object
     */
    public deleteCustomDomain(param: CustomDomainApiDeleteCustomDomainRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCustomDomain(param.applicationId, param.customDomainId,  options).toPromise();
    }

    /**
     * To edit a Custom Domain  you must have the project user permission
     * Edit a Custom Domain
     * @param param the request object
     */
    public editCustomDomain(param: CustomDomainApiEditCustomDomainRequest, options?: Configuration): Promise<CustomDomainResponse> {
        return this.api.editCustomDomain(param.applicationId, param.customDomainId, param.customDomainRequest,  options).toPromise();
    }

    /**
     * Get Custom Domain status
     * @param param the request object
     */
    public getCustomDomainStatus(param: CustomDomainApiGetCustomDomainStatusRequest, options?: Configuration): Promise<CustomDomainResponse> {
        return this.api.getCustomDomainStatus(param.applicationId, param.customDomainId,  options).toPromise();
    }

    /**
     * List application custom domains
     * @param param the request object
     */
    public listApplicationCustomDomain(param: CustomDomainApiListApplicationCustomDomainRequest, options?: Configuration): Promise<CustomDomainResponseList> {
        return this.api.listApplicationCustomDomain(param.applicationId,  options).toPromise();
    }

}

import { ObservableDatabaseActionsApi } from "./ObservableAPI";
import { DatabaseActionsApiRequestFactory, DatabaseActionsApiResponseProcessor} from "../apis/DatabaseActionsApi";

export interface DatabaseActionsApiDeployDatabaseRequest {
    /**
     * Database ID
     * @type string
     * @memberof DatabaseActionsApideployDatabase
     */
    databaseId: string
}

export interface DatabaseActionsApiRestartDatabaseRequest {
    /**
     * Database ID
     * @type string
     * @memberof DatabaseActionsApirestartDatabase
     */
    databaseId: string
}

export interface DatabaseActionsApiStopDatabaseRequest {
    /**
     * Database ID
     * @type string
     * @memberof DatabaseActionsApistopDatabase
     */
    databaseId: string
}

export class ObjectDatabaseActionsApi {
    private api: ObservableDatabaseActionsApi

    public constructor(configuration: Configuration, requestFactory?: DatabaseActionsApiRequestFactory, responseProcessor?: DatabaseActionsApiResponseProcessor) {
        this.api = new ObservableDatabaseActionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deploy database 
     * @param param the request object
     */
    public deployDatabase(param: DatabaseActionsApiDeployDatabaseRequest, options?: Configuration): Promise<Status> {
        return this.api.deployDatabase(param.databaseId,  options).toPromise();
    }

    /**
     * Retart database
     * @param param the request object
     */
    public restartDatabase(param: DatabaseActionsApiRestartDatabaseRequest, options?: Configuration): Promise<Status> {
        return this.api.restartDatabase(param.databaseId,  options).toPromise();
    }

    /**
     * Stop database
     * @param param the request object
     */
    public stopDatabase(param: DatabaseActionsApiStopDatabaseRequest, options?: Configuration): Promise<Status> {
        return this.api.stopDatabase(param.databaseId,  options).toPromise();
    }

}

import { ObservableDatabaseApplicationApi } from "./ObservableAPI";
import { DatabaseApplicationApiRequestFactory, DatabaseApplicationApiResponseProcessor} from "../apis/DatabaseApplicationApi";

export interface DatabaseApplicationApiListDatabaseApplicationRequest {
    /**
     * Database ID
     * @type string
     * @memberof DatabaseApplicationApilistDatabaseApplication
     */
    databaseId: string
}

export interface DatabaseApplicationApiRemoveApplicationFromDatabaseRequest {
    /**
     * Database ID
     * @type string
     * @memberof DatabaseApplicationApiremoveApplicationFromDatabase
     */
    databaseId: string
    /**
     * Target application ID
     * @type string
     * @memberof DatabaseApplicationApiremoveApplicationFromDatabase
     */
    targetApplicationId: string
}

export class ObjectDatabaseApplicationApi {
    private api: ObservableDatabaseApplicationApi

    public constructor(configuration: Configuration, requestFactory?: DatabaseApplicationApiRequestFactory, responseProcessor?: DatabaseApplicationApiResponseProcessor) {
        this.api = new ObservableDatabaseApplicationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List applications using the database
     * @param param the request object
     */
    public listDatabaseApplication(param: DatabaseApplicationApiListDatabaseApplicationRequest, options?: Configuration): Promise<ApplicationResponseList> {
        return this.api.listDatabaseApplication(param.databaseId,  options).toPromise();
    }

    /**
     * Remove an application from this database 
     * @param param the request object
     */
    public removeApplicationFromDatabase(param: DatabaseApplicationApiRemoveApplicationFromDatabaseRequest, options?: Configuration): Promise<void> {
        return this.api.removeApplicationFromDatabase(param.databaseId, param.targetApplicationId,  options).toPromise();
    }

}

import { ObservableDatabaseEventApi } from "./ObservableAPI";
import { DatabaseEventApiRequestFactory, DatabaseEventApiResponseProcessor} from "../apis/DatabaseEventApi";

export interface DatabaseEventApiListDatabaseEventRequest {
    /**
     * Database ID
     * @type string
     * @memberof DatabaseEventApilistDatabaseEvent
     */
    databaseId: string
    /**
     * Starting point after which to return results
     * @type string
     * @memberof DatabaseEventApilistDatabaseEvent
     */
    startId?: string
}

export class ObjectDatabaseEventApi {
    private api: ObservableDatabaseEventApi

    public constructor(configuration: Configuration, requestFactory?: DatabaseEventApiRequestFactory, responseProcessor?: DatabaseEventApiResponseProcessor) {
        this.api = new ObservableDatabaseEventApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter
     * List database  events
     * @param param the request object
     */
    public listDatabaseEvent(param: DatabaseEventApiListDatabaseEventRequest, options?: Configuration): Promise<EventPaginatedResponseList> {
        return this.api.listDatabaseEvent(param.databaseId, param.startId,  options).toPromise();
    }

}

import { ObservableDatabaseMainCallsApi } from "./ObservableAPI";
import { DatabaseMainCallsApiRequestFactory, DatabaseMainCallsApiResponseProcessor} from "../apis/DatabaseMainCallsApi";

export interface DatabaseMainCallsApiDeleteDatabaseRequest {
    /**
     * Database ID
     * @type string
     * @memberof DatabaseMainCallsApideleteDatabase
     */
    databaseId: string
}

export interface DatabaseMainCallsApiEditDatabaseRequest {
    /**
     * Database ID
     * @type string
     * @memberof DatabaseMainCallsApieditDatabase
     */
    databaseId: string
    /**
     * 
     * @type DatabaseEditRequest
     * @memberof DatabaseMainCallsApieditDatabase
     */
    databaseEditRequest?: DatabaseEditRequest
}

export interface DatabaseMainCallsApiEditDatabaseCredentialsRequest {
    /**
     * Database ID
     * @type string
     * @memberof DatabaseMainCallsApieditDatabaseCredentials
     */
    databaseId: string
    /**
     * 
     * @type CredentialsRequest
     * @memberof DatabaseMainCallsApieditDatabaseCredentials
     */
    credentialsRequest?: CredentialsRequest
}

export interface DatabaseMainCallsApiGetDatabaseRequest {
    /**
     * Database ID
     * @type string
     * @memberof DatabaseMainCallsApigetDatabase
     */
    databaseId: string
}

export interface DatabaseMainCallsApiGetDatabaseMasterCredentialsRequest {
    /**
     * Database ID
     * @type string
     * @memberof DatabaseMainCallsApigetDatabaseMasterCredentials
     */
    databaseId: string
}

export interface DatabaseMainCallsApiGetDatabaseStatusRequest {
    /**
     * Database ID
     * @type string
     * @memberof DatabaseMainCallsApigetDatabaseStatus
     */
    databaseId: string
}

export interface DatabaseMainCallsApiListDatabaseVersionRequest {
    /**
     * Database ID
     * @type string
     * @memberof DatabaseMainCallsApilistDatabaseVersion
     */
    databaseId: string
}

export class ObjectDatabaseMainCallsApi {
    private api: ObservableDatabaseMainCallsApi

    public constructor(configuration: Configuration, requestFactory?: DatabaseMainCallsApiRequestFactory, responseProcessor?: DatabaseMainCallsApiResponseProcessor) {
        this.api = new ObservableDatabaseMainCallsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * To delete a database you must have the admin permission
     * Delete a database 
     * @param param the request object
     */
    public deleteDatabase(param: DatabaseMainCallsApiDeleteDatabaseRequest, options?: Configuration): Promise<void> {
        return this.api.deleteDatabase(param.databaseId,  options).toPromise();
    }

    /**
     * To edit a database  you must have the admin permission
     * Edit a database 
     * @param param the request object
     */
    public editDatabase(param: DatabaseMainCallsApiEditDatabaseRequest, options?: Configuration): Promise<DatabaseResponse> {
        return this.api.editDatabase(param.databaseId, param.databaseEditRequest,  options).toPromise();
    }

    /**
     * Edit database  master credentials
     * @param param the request object
     */
    public editDatabaseCredentials(param: DatabaseMainCallsApiEditDatabaseCredentialsRequest, options?: Configuration): Promise<CredentialsResponse> {
        return this.api.editDatabaseCredentials(param.databaseId, param.credentialsRequest,  options).toPromise();
    }

    /**
     * Get database by ID
     * @param param the request object
     */
    public getDatabase(param: DatabaseMainCallsApiGetDatabaseRequest, options?: Configuration): Promise<DatabaseResponse> {
        return this.api.getDatabase(param.databaseId,  options).toPromise();
    }

    /**
     * Get master credentials of the database
     * @param param the request object
     */
    public getDatabaseMasterCredentials(param: DatabaseMainCallsApiGetDatabaseMasterCredentialsRequest, options?: Configuration): Promise<CredentialsResponse> {
        return this.api.getDatabaseMasterCredentials(param.databaseId,  options).toPromise();
    }

    /**
     * Get database status
     * @param param the request object
     */
    public getDatabaseStatus(param: DatabaseMainCallsApiGetDatabaseStatusRequest, options?: Configuration): Promise<Status> {
        return this.api.getDatabaseStatus(param.databaseId,  options).toPromise();
    }

    /**
     * List eligible versions for the database
     * @param param the request object
     */
    public listDatabaseVersion(param: DatabaseMainCallsApiListDatabaseVersionRequest, options?: Configuration): Promise<VersionResponseList> {
        return this.api.listDatabaseVersion(param.databaseId,  options).toPromise();
    }

}

import { ObservableDatabaseMetricsApi } from "./ObservableAPI";
import { DatabaseMetricsApiRequestFactory, DatabaseMetricsApiResponseProcessor} from "../apis/DatabaseMetricsApi";

export interface DatabaseMetricsApiGetDatabaseCurrentMetricRequest {
    /**
     * Database ID
     * @type string
     * @memberof DatabaseMetricsApigetDatabaseCurrentMetric
     */
    databaseId: string
}

export interface DatabaseMetricsApiGetDatabaseMetricCpuRequest {
    /**
     * Database ID
     * @type string
     * @memberof DatabaseMetricsApigetDatabaseMetricCpu
     */
    databaseId: string
    /**
     * Up to how many seconds in the past to ask analytics results
     * @type number
     * @memberof DatabaseMetricsApigetDatabaseMetricCpu
     */
    lastSeconds: number
}

export interface DatabaseMetricsApiGetDatabaseMetricHealthCheckRequest {
    /**
     * Database ID
     * @type string
     * @memberof DatabaseMetricsApigetDatabaseMetricHealthCheck
     */
    databaseId: string
    /**
     * Up to how many seconds in the past to ask analytics results
     * @type number
     * @memberof DatabaseMetricsApigetDatabaseMetricHealthCheck
     */
    lastSeconds: number
}

export interface DatabaseMetricsApiGetDatabaseMetricMemoryRequest {
    /**
     * Database ID
     * @type string
     * @memberof DatabaseMetricsApigetDatabaseMetricMemory
     */
    databaseId: string
    /**
     * Up to how many seconds in the past to ask analytics results
     * @type number
     * @memberof DatabaseMetricsApigetDatabaseMetricMemory
     */
    lastSeconds: number
}

export interface DatabaseMetricsApiGetDatabaseMetricRestartRequest {
    /**
     * Database ID
     * @type string
     * @memberof DatabaseMetricsApigetDatabaseMetricRestart
     */
    databaseId: string
    /**
     * Up to how many seconds in the past to ask analytics results
     * @type number
     * @memberof DatabaseMetricsApigetDatabaseMetricRestart
     */
    lastSeconds: number
}

export interface DatabaseMetricsApiGetDatabaseMetricStorageRequest {
    /**
     * Database ID
     * @type string
     * @memberof DatabaseMetricsApigetDatabaseMetricStorage
     */
    databaseId: string
    /**
     * Up to how many seconds in the past to ask analytics results
     * @type number
     * @memberof DatabaseMetricsApigetDatabaseMetricStorage
     */
    lastSeconds: number
}

export class ObjectDatabaseMetricsApi {
    private api: ObservableDatabaseMetricsApi

    public constructor(configuration: Configuration, requestFactory?: DatabaseMetricsApiRequestFactory, responseProcessor?: DatabaseMetricsApiResponseProcessor) {
        this.api = new ObservableDatabaseMetricsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get current metric consumption of the database 
     * @param param the request object
     */
    public getDatabaseCurrentMetric(param: DatabaseMetricsApiGetDatabaseCurrentMetricRequest, options?: Configuration): Promise<DatabaseCurrentMetricResponse> {
        return this.api.getDatabaseCurrentMetric(param.databaseId,  options).toPromise();
    }

    /**
     * Get CPU consumption metric over time for the database
     * @param param the request object
     */
    public getDatabaseMetricCpu(param: DatabaseMetricsApiGetDatabaseMetricCpuRequest, options?: Configuration): Promise<MetricCPUDatapointResponseList> {
        return this.api.getDatabaseMetricCpu(param.databaseId, param.lastSeconds,  options).toPromise();
    }

    /**
     * The value returned corresponds to the 95th centile
     * Get Health Check latency  metric over time for the database
     * @param param the request object
     */
    public getDatabaseMetricHealthCheck(param: DatabaseMetricsApiGetDatabaseMetricHealthCheckRequest, options?: Configuration): Promise<MetricGenericResponseList> {
        return this.api.getDatabaseMetricHealthCheck(param.databaseId, param.lastSeconds,  options).toPromise();
    }

    /**
     * Get Memory consumption metric over time for the database
     * @param param the request object
     */
    public getDatabaseMetricMemory(param: DatabaseMetricsApiGetDatabaseMetricMemoryRequest, options?: Configuration): Promise<MetricMemoryDatapointResponseList> {
        return this.api.getDatabaseMetricMemory(param.databaseId, param.lastSeconds,  options).toPromise();
    }

    /**
     * Get database restart message and timestamp.
     * List database restarts
     * @param param the request object
     */
    public getDatabaseMetricRestart(param: DatabaseMetricsApiGetDatabaseMetricRestartRequest, options?: Configuration): Promise<MetricRestartResponse> {
        return this.api.getDatabaseMetricRestart(param.databaseId, param.lastSeconds,  options).toPromise();
    }

    /**
     * Get Storage consumption metric over time for the database
     * @param param the request object
     */
    public getDatabaseMetricStorage(param: DatabaseMetricsApiGetDatabaseMetricStorageRequest, options?: Configuration): Promise<MetricStorageDatapointResponseList> {
        return this.api.getDatabaseMetricStorage(param.databaseId, param.lastSeconds,  options).toPromise();
    }

}

import { ObservableDatabasesApi } from "./ObservableAPI";
import { DatabasesApiRequestFactory, DatabasesApiResponseProcessor} from "../apis/DatabasesApi";

export interface DatabasesApiCreateDatabaseRequest {
    /**
     * Environment ID
     * @type string
     * @memberof DatabasesApicreateDatabase
     */
    environmentId: string
    /**
     * 
     * @type DatabaseRequest
     * @memberof DatabasesApicreateDatabase
     */
    databaseRequest?: DatabaseRequest
}

export interface DatabasesApiGetEnvironmentDatabaseStatusRequest {
    /**
     * Environment ID
     * @type string
     * @memberof DatabasesApigetEnvironmentDatabaseStatus
     */
    environmentId: string
}

export interface DatabasesApiListDatabaseRequest {
    /**
     * Environment ID
     * @type string
     * @memberof DatabasesApilistDatabase
     */
    environmentId: string
}

export interface DatabasesApiListEnvironmentDatabaseConfigRequest {
    /**
     * Environment ID
     * @type string
     * @memberof DatabasesApilistEnvironmentDatabaseConfig
     */
    environmentId: string
}

export interface DatabasesApiListEnvironmentDatabaseCurrentMetricRequest {
    /**
     * Environment ID
     * @type string
     * @memberof DatabasesApilistEnvironmentDatabaseCurrentMetric
     */
    environmentId: string
}

export class ObjectDatabasesApi {
    private api: ObservableDatabasesApi

    public constructor(configuration: Configuration, requestFactory?: DatabasesApiRequestFactory, responseProcessor?: DatabasesApiResponseProcessor) {
        this.api = new ObservableDatabasesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a database
     * @param param the request object
     */
    public createDatabase(param: DatabasesApiCreateDatabaseRequest, options?: Configuration): Promise<DatabaseResponse> {
        return this.api.createDatabase(param.environmentId, param.databaseRequest,  options).toPromise();
    }

    /**
     * Returns a list of databases with only their id and status.
     * List all environment databases statuses
     * @param param the request object
     */
    public getEnvironmentDatabaseStatus(param: DatabasesApiGetEnvironmentDatabaseStatusRequest, options?: Configuration): Promise<ReferenceObjectStatusResponseList> {
        return this.api.getEnvironmentDatabaseStatus(param.environmentId,  options).toPromise();
    }

    /**
     * List environment databases
     * @param param the request object
     */
    public listDatabase(param: DatabasesApiListDatabaseRequest, options?: Configuration): Promise<DatabaseResponseList> {
        return this.api.listDatabase(param.environmentId,  options).toPromise();
    }

    /**
     * List eligible database types, versions and modes for the environment
     * @param param the request object
     */
    public listEnvironmentDatabaseConfig(param: DatabasesApiListEnvironmentDatabaseConfigRequest, options?: Configuration): Promise<DatabaseConfigurationResponseList> {
        return this.api.listEnvironmentDatabaseConfig(param.environmentId,  options).toPromise();
    }

    /**
     * List current metric consumption for each database
     * @param param the request object
     */
    public listEnvironmentDatabaseCurrentMetric(param: DatabasesApiListEnvironmentDatabaseCurrentMetricRequest, options?: Configuration): Promise<EnvironmentDatabasesCurrentMetricResponseList> {
        return this.api.listEnvironmentDatabaseCurrentMetric(param.environmentId,  options).toPromise();
    }

}

import { ObservableDependencyApi } from "./ObservableAPI";
import { DependencyApiRequestFactory, DependencyApiResponseProcessor} from "../apis/DependencyApi";

export interface DependencyApiCreateApplicationDependencyRequest {
    /**
     * Application ID
     * @type string
     * @memberof DependencyApicreateApplicationDependency
     */
    applicationId: string
    /**
     * Target application ID
     * @type string
     * @memberof DependencyApicreateApplicationDependency
     */
    targetApplicationId: string
}

export interface DependencyApiListApplicationDependencyRequest {
    /**
     * Application ID
     * @type string
     * @memberof DependencyApilistApplicationDependency
     */
    applicationId: string
}

export interface DependencyApiRemoveApplicationDependencyRequest {
    /**
     * Application ID
     * @type string
     * @memberof DependencyApiremoveApplicationDependency
     */
    applicationId: string
    /**
     * Target application ID
     * @type string
     * @memberof DependencyApiremoveApplicationDependency
     */
    targetApplicationId: string
}

export class ObjectDependencyApi {
    private api: ObservableDependencyApi

    public constructor(configuration: Configuration, requestFactory?: DependencyApiRequestFactory, responseProcessor?: DependencyApiResponseProcessor) {
        this.api = new ObservableDependencyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add application dependency to this application to prevent this application starting before the linked dependencies
     * Add application dependency to this application.
     * @param param the request object
     */
    public createApplicationDependency(param: DependencyApiCreateApplicationDependencyRequest, options?: Configuration): Promise<ApplicationResponse> {
        return this.api.createApplicationDependency(param.applicationId, param.targetApplicationId,  options).toPromise();
    }

    /**
     * List application dependencies
     * @param param the request object
     */
    public listApplicationDependency(param: DependencyApiListApplicationDependencyRequest, options?: Configuration): Promise<ApplicationResponseList> {
        return this.api.listApplicationDependency(param.applicationId,  options).toPromise();
    }

    /**
     * Remove application dependency to this application.
     * @param param the request object
     */
    public removeApplicationDependency(param: DependencyApiRemoveApplicationDependencyRequest, options?: Configuration): Promise<void> {
        return this.api.removeApplicationDependency(param.applicationId, param.targetApplicationId,  options).toPromise();
    }

}

import { ObservableEnvironmentActionsApi } from "./ObservableAPI";
import { EnvironmentActionsApiRequestFactory, EnvironmentActionsApiResponseProcessor} from "../apis/EnvironmentActionsApi";

export interface EnvironmentActionsApiCancelEnvironmentDeploymentRequest {
    /**
     * Environment ID
     * @type string
     * @memberof EnvironmentActionsApicancelEnvironmentDeployment
     */
    environmentId: string
}

export interface EnvironmentActionsApiCloneEnvironmentRequest {
    /**
     * Environment ID
     * @type string
     * @memberof EnvironmentActionsApicloneEnvironment
     */
    environmentId: string
    /**
     * 
     * @type CloneRequest
     * @memberof EnvironmentActionsApicloneEnvironment
     */
    cloneRequest?: CloneRequest
}

export interface EnvironmentActionsApiDeployEnvironmentRequest {
    /**
     * Environment ID
     * @type string
     * @memberof EnvironmentActionsApideployEnvironment
     */
    environmentId: string
}

export interface EnvironmentActionsApiRestartEnvironmentRequest {
    /**
     * Environment ID
     * @type string
     * @memberof EnvironmentActionsApirestartEnvironment
     */
    environmentId: string
    /**
     * 
     * @type EnvironmentRestartRequest
     * @memberof EnvironmentActionsApirestartEnvironment
     */
    environmentRestartRequest?: EnvironmentRestartRequest
}

export interface EnvironmentActionsApiStopEnvironmentRequest {
    /**
     * Environment ID
     * @type string
     * @memberof EnvironmentActionsApistopEnvironment
     */
    environmentId: string
}

export class ObjectEnvironmentActionsApi {
    private api: ObservableEnvironmentActionsApi

    public constructor(configuration: Configuration, requestFactory?: EnvironmentActionsApiRequestFactory, responseProcessor?: EnvironmentActionsApiResponseProcessor) {
        this.api = new ObservableEnvironmentActionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Cancel the current deployment of your environment.
     * Cancel environment deployment
     * @param param the request object
     */
    public cancelEnvironmentDeployment(param: EnvironmentActionsApiCancelEnvironmentDeploymentRequest, options?: Configuration): Promise<Status> {
        return this.api.cancelEnvironmentDeployment(param.environmentId,  options).toPromise();
    }

    /**
     * You must provide a name. This will create a new environment, with the same configuration, and same applications and databases. Database data is not cloned.
     * Clone environment
     * @param param the request object
     */
    public cloneEnvironment(param: EnvironmentActionsApiCloneEnvironmentRequest, options?: Configuration): Promise<EnvironmentResponse> {
        return this.api.cloneEnvironment(param.environmentId, param.cloneRequest,  options).toPromise();
    }

    /**
     * This will deploy all the services of this environment to their latest version.
     * Deploy environment
     * @param param the request object
     */
    public deployEnvironment(param: EnvironmentActionsApiDeployEnvironmentRequest, options?: Configuration): Promise<Status> {
        return this.api.deployEnvironment(param.environmentId,  options).toPromise();
    }

    /**
     * Restart environment
     * @param param the request object
     */
    public restartEnvironment(param: EnvironmentActionsApiRestartEnvironmentRequest, options?: Configuration): Promise<Status> {
        return this.api.restartEnvironment(param.environmentId, param.environmentRestartRequest,  options).toPromise();
    }

    /**
     * Stop environment
     * @param param the request object
     */
    public stopEnvironment(param: EnvironmentActionsApiStopEnvironmentRequest, options?: Configuration): Promise<Status> {
        return this.api.stopEnvironment(param.environmentId,  options).toPromise();
    }

}

import { ObservableEnvironmentDeploymentHistoryApi } from "./ObservableAPI";
import { EnvironmentDeploymentHistoryApiRequestFactory, EnvironmentDeploymentHistoryApiResponseProcessor} from "../apis/EnvironmentDeploymentHistoryApi";

export interface EnvironmentDeploymentHistoryApiListEnvironmentDeploymentHistoryRequest {
    /**
     * Environment ID
     * @type string
     * @memberof EnvironmentDeploymentHistoryApilistEnvironmentDeploymentHistory
     */
    environmentId: string
    /**
     * Starting point after which to return results
     * @type string
     * @memberof EnvironmentDeploymentHistoryApilistEnvironmentDeploymentHistory
     */
    startId?: string
}

export class ObjectEnvironmentDeploymentHistoryApi {
    private api: ObservableEnvironmentDeploymentHistoryApi

    public constructor(configuration: Configuration, requestFactory?: EnvironmentDeploymentHistoryApiRequestFactory, responseProcessor?: EnvironmentDeploymentHistoryApiResponseProcessor) {
        this.api = new ObservableEnvironmentDeploymentHistoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List previous and current environment deployments with the status deployment and the related services. By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter
     * List environment deployments
     * @param param the request object
     */
    public listEnvironmentDeploymentHistory(param: EnvironmentDeploymentHistoryApiListEnvironmentDeploymentHistoryRequest, options?: Configuration): Promise<DeploymentHistoryEnvironmentPaginatedResponseList> {
        return this.api.listEnvironmentDeploymentHistory(param.environmentId, param.startId,  options).toPromise();
    }

}

import { ObservableEnvironmentDeploymentRuleApi } from "./ObservableAPI";
import { EnvironmentDeploymentRuleApiRequestFactory, EnvironmentDeploymentRuleApiResponseProcessor} from "../apis/EnvironmentDeploymentRuleApi";

export interface EnvironmentDeploymentRuleApiEditEnvironmentDeploymentRuleRequest {
    /**
     * Environment ID
     * @type string
     * @memberof EnvironmentDeploymentRuleApieditEnvironmentDeploymentRule
     */
    environmentId: string
    /**
     * Deployment Rule ID
     * @type string
     * @memberof EnvironmentDeploymentRuleApieditEnvironmentDeploymentRule
     */
    deploymentRuleId: string
    /**
     * 
     * @type EnvironmentDeploymentRuleEditRequest
     * @memberof EnvironmentDeploymentRuleApieditEnvironmentDeploymentRule
     */
    environmentDeploymentRuleEditRequest?: EnvironmentDeploymentRuleEditRequest
}

export interface EnvironmentDeploymentRuleApiGetEnvironmentDeploymentRuleRequest {
    /**
     * Environment ID
     * @type string
     * @memberof EnvironmentDeploymentRuleApigetEnvironmentDeploymentRule
     */
    environmentId: string
}

export class ObjectEnvironmentDeploymentRuleApi {
    private api: ObservableEnvironmentDeploymentRuleApi

    public constructor(configuration: Configuration, requestFactory?: EnvironmentDeploymentRuleApiRequestFactory, responseProcessor?: EnvironmentDeploymentRuleApiResponseProcessor) {
        this.api = new ObservableEnvironmentDeploymentRuleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Edit an environment deployment rule
     * @param param the request object
     */
    public editEnvironmentDeploymentRule(param: EnvironmentDeploymentRuleApiEditEnvironmentDeploymentRuleRequest, options?: Configuration): Promise<EnvironmentDeploymentRuleResponse> {
        return this.api.editEnvironmentDeploymentRule(param.environmentId, param.deploymentRuleId, param.environmentDeploymentRuleEditRequest,  options).toPromise();
    }

    /**
     * Get environment deployment rule
     * @param param the request object
     */
    public getEnvironmentDeploymentRule(param: EnvironmentDeploymentRuleApiGetEnvironmentDeploymentRuleRequest, options?: Configuration): Promise<EnvironmentDeploymentRuleResponse> {
        return this.api.getEnvironmentDeploymentRule(param.environmentId,  options).toPromise();
    }

}

import { ObservableEnvironmentLogsApi } from "./ObservableAPI";
import { EnvironmentLogsApiRequestFactory, EnvironmentLogsApiResponseProcessor} from "../apis/EnvironmentLogsApi";

export interface EnvironmentLogsApiListEnvironmentLogRequest {
    /**
     * Environment ID
     * @type string
     * @memberof EnvironmentLogsApilistEnvironmentLog
     */
    environmentId: string
}

export class ObjectEnvironmentLogsApi {
    private api: ObservableEnvironmentLogsApi

    public constructor(configuration: Configuration, requestFactory?: EnvironmentLogsApiRequestFactory, responseProcessor?: EnvironmentLogsApiResponseProcessor) {
        this.api = new ObservableEnvironmentLogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This returns the last 1000 environment deployment logs.
     * List environment deployment logs
     * @param param the request object
     */
    public listEnvironmentLog(param: EnvironmentLogsApiListEnvironmentLogRequest, options?: Configuration): Promise<EnvironmentLogResponseList> {
        return this.api.listEnvironmentLog(param.environmentId,  options).toPromise();
    }

}

import { ObservableEnvironmentMainCallsApi } from "./ObservableAPI";
import { EnvironmentMainCallsApiRequestFactory, EnvironmentMainCallsApiResponseProcessor} from "../apis/EnvironmentMainCallsApi";

export interface EnvironmentMainCallsApiDeleteEnvironmentRequest {
    /**
     * Environment ID
     * @type string
     * @memberof EnvironmentMainCallsApideleteEnvironment
     */
    environmentId: string
}

export interface EnvironmentMainCallsApiEditEnvironmentRequest {
    /**
     * Environment ID
     * @type string
     * @memberof EnvironmentMainCallsApieditEnvironment
     */
    environmentId: string
    /**
     * 
     * @type EnvironmentEditRequest
     * @memberof EnvironmentMainCallsApieditEnvironment
     */
    environmentEditRequest?: EnvironmentEditRequest
}

export interface EnvironmentMainCallsApiGetEnvironmentRequest {
    /**
     * Environment ID
     * @type string
     * @memberof EnvironmentMainCallsApigetEnvironment
     */
    environmentId: string
}

export interface EnvironmentMainCallsApiGetEnvironmentStatusRequest {
    /**
     * Environment ID
     * @type string
     * @memberof EnvironmentMainCallsApigetEnvironmentStatus
     */
    environmentId: string
}

export interface EnvironmentMainCallsApiListEnvironmentLinksRequest {
    /**
     * Environment ID
     * @type string
     * @memberof EnvironmentMainCallsApilistEnvironmentLinks
     */
    environmentId: string
}

export class ObjectEnvironmentMainCallsApi {
    private api: ObservableEnvironmentMainCallsApi

    public constructor(configuration: Configuration, requestFactory?: EnvironmentMainCallsApiRequestFactory, responseProcessor?: EnvironmentMainCallsApiResponseProcessor) {
        this.api = new ObservableEnvironmentMainCallsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * To delete an environment you must have the admin permission
     * Delete an environment
     * @param param the request object
     */
    public deleteEnvironment(param: EnvironmentMainCallsApiDeleteEnvironmentRequest, options?: Configuration): Promise<void> {
        return this.api.deleteEnvironment(param.environmentId,  options).toPromise();
    }

    /**
     * To edit an environment you must have the admin permission
     * Edit an environment
     * @param param the request object
     */
    public editEnvironment(param: EnvironmentMainCallsApiEditEnvironmentRequest, options?: Configuration): Promise<EnvironmentResponse> {
        return this.api.editEnvironment(param.environmentId, param.environmentEditRequest,  options).toPromise();
    }

    /**
     * Get environment by ID
     * @param param the request object
     */
    public getEnvironment(param: EnvironmentMainCallsApiGetEnvironmentRequest, options?: Configuration): Promise<EnvironmentResponse> {
        return this.api.getEnvironment(param.environmentId,  options).toPromise();
    }

    /**
     * Get environment status
     * @param param the request object
     */
    public getEnvironmentStatus(param: EnvironmentMainCallsApiGetEnvironmentStatusRequest, options?: Configuration): Promise<Status> {
        return this.api.getEnvironmentStatus(param.environmentId,  options).toPromise();
    }

    /**
     * This will return all the custom domains and Qovery autogenerated domain for all the applications within this environment
     * List all URLs of the environment
     * @param param the request object
     */
    public listEnvironmentLinks(param: EnvironmentMainCallsApiListEnvironmentLinksRequest, options?: Configuration): Promise<LinkResponseList> {
        return this.api.listEnvironmentLinks(param.environmentId,  options).toPromise();
    }

}

import { ObservableEnvironmentSecretApi } from "./ObservableAPI";
import { EnvironmentSecretApiRequestFactory, EnvironmentSecretApiResponseProcessor} from "../apis/EnvironmentSecretApi";

export interface EnvironmentSecretApiCreateEnvironmentSecretRequest {
    /**
     * Environment ID
     * @type string
     * @memberof EnvironmentSecretApicreateEnvironmentSecret
     */
    environmentId: string
    /**
     * 
     * @type SecretRequest
     * @memberof EnvironmentSecretApicreateEnvironmentSecret
     */
    secretRequest?: SecretRequest
}

export interface EnvironmentSecretApiCreateEnvironmentSecretAliasRequest {
    /**
     * Environment ID
     * @type string
     * @memberof EnvironmentSecretApicreateEnvironmentSecretAlias
     */
    environmentId: string
    /**
     * Secret ID
     * @type string
     * @memberof EnvironmentSecretApicreateEnvironmentSecretAlias
     */
    secretId: string
    /**
     * 
     * @type Key
     * @memberof EnvironmentSecretApicreateEnvironmentSecretAlias
     */
    key?: Key
}

export interface EnvironmentSecretApiCreateEnvironmentSecretOverrideRequest {
    /**
     * Environment ID
     * @type string
     * @memberof EnvironmentSecretApicreateEnvironmentSecretOverride
     */
    environmentId: string
    /**
     * Secret ID
     * @type string
     * @memberof EnvironmentSecretApicreateEnvironmentSecretOverride
     */
    secretId: string
    /**
     * 
     * @type Value
     * @memberof EnvironmentSecretApicreateEnvironmentSecretOverride
     */
    value?: Value
}

export interface EnvironmentSecretApiDeleteEnvironmentSecretRequest {
    /**
     * Environment ID
     * @type string
     * @memberof EnvironmentSecretApideleteEnvironmentSecret
     */
    environmentId: string
    /**
     * Secret ID
     * @type string
     * @memberof EnvironmentSecretApideleteEnvironmentSecret
     */
    secretId: string
}

export interface EnvironmentSecretApiEditEnvironmentSecretRequest {
    /**
     * Environment ID
     * @type string
     * @memberof EnvironmentSecretApieditEnvironmentSecret
     */
    environmentId: string
    /**
     * Secret ID
     * @type string
     * @memberof EnvironmentSecretApieditEnvironmentSecret
     */
    secretId: string
    /**
     * 
     * @type SecretEditRequest
     * @memberof EnvironmentSecretApieditEnvironmentSecret
     */
    secretEditRequest: SecretEditRequest
}

export interface EnvironmentSecretApiListEnvironmentSecretsRequest {
    /**
     * Environment ID
     * @type string
     * @memberof EnvironmentSecretApilistEnvironmentSecrets
     */
    environmentId: string
}

export class ObjectEnvironmentSecretApi {
    private api: ObservableEnvironmentSecretApi

    public constructor(configuration: Configuration, requestFactory?: EnvironmentSecretApiRequestFactory, responseProcessor?: EnvironmentSecretApiResponseProcessor) {
        this.api = new ObservableEnvironmentSecretApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * - Add a secret to the environment.   - If the secret key already exists, then it will be replaced by the new one.   - If the secret value points toward an existing secret key, it will be considered as an alias. 
     * Add a secret to the environment
     * @param param the request object
     */
    public createEnvironmentSecret(param: EnvironmentSecretApiCreateEnvironmentSecretRequest, options?: Configuration): Promise<SecretResponse> {
        return this.api.createEnvironmentSecret(param.environmentId, param.secretRequest,  options).toPromise();
    }

    /**
     * - Allows you to add an alias at environment level on an existing secret having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new secret at environment level with the same value as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the aliased_secret will be exposed in the \"aliased_secret\" field of the newly created secret - Only 1 alias level is allowed. You can't create an alias on an alias 
     * Create a secret alias at the environment level
     * @param param the request object
     */
    public createEnvironmentSecretAlias(param: EnvironmentSecretApiCreateEnvironmentSecretAliasRequest, options?: Configuration): Promise<SecretResponse> {
        return this.api.createEnvironmentSecretAlias(param.environmentId, param.secretId, param.key,  options).toPromise();
    }

    /**
     * - Allows you to override at environment level a secret that has a higher scope. - You only have to specify a value in the request body - The system will create a new secret at environment level with the same key as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the overridden_secret will be exposed in the \"overridden_secret\" field of the newly created secret 
     * Create a secret override at the environment level
     * @param param the request object
     */
    public createEnvironmentSecretOverride(param: EnvironmentSecretApiCreateEnvironmentSecretOverrideRequest, options?: Configuration): Promise<SecretResponse> {
        return this.api.createEnvironmentSecretOverride(param.environmentId, param.secretId, param.value,  options).toPromise();
    }

    /**
     * - To delete a secret you must have the project user permission - You can't delete a BUILT_IN secret - If you delete a secret having override or alias, the associated override/alias will be deleted as well  operationId: deleteEnvironmentSecret 
     * Delete a secret from the environment
     * @param param the request object
     */
    public deleteEnvironmentSecret(param: EnvironmentSecretApiDeleteEnvironmentSecretRequest, options?: Configuration): Promise<void> {
        return this.api.deleteEnvironmentSecret(param.environmentId, param.secretId,  options).toPromise();
    }

    /**
     * - You can't edit a BUILT_IN secret - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the secret it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 
     * Edit a secret belonging to the environment
     * @param param the request object
     */
    public editEnvironmentSecret(param: EnvironmentSecretApiEditEnvironmentSecretRequest, options?: Configuration): Promise<SecretResponse> {
        return this.api.editEnvironmentSecret(param.environmentId, param.secretId, param.secretEditRequest,  options).toPromise();
    }

    /**
     * List environment secrets
     * @param param the request object
     */
    public listEnvironmentSecrets(param: EnvironmentSecretApiListEnvironmentSecretsRequest, options?: Configuration): Promise<SecretResponseList> {
        return this.api.listEnvironmentSecrets(param.environmentId,  options).toPromise();
    }

}

import { ObservableEnvironmentVariableApi } from "./ObservableAPI";
import { EnvironmentVariableApiRequestFactory, EnvironmentVariableApiResponseProcessor} from "../apis/EnvironmentVariableApi";

export interface EnvironmentVariableApiCreateEnvironmentEnvironmentVariableRequest {
    /**
     * Environment ID
     * @type string
     * @memberof EnvironmentVariableApicreateEnvironmentEnvironmentVariable
     */
    environmentId: string
    /**
     * 
     * @type EnvironmentVariableRequest
     * @memberof EnvironmentVariableApicreateEnvironmentEnvironmentVariable
     */
    environmentVariableRequest?: EnvironmentVariableRequest
}

export interface EnvironmentVariableApiCreateEnvironmentEnvironmentVariableAliasRequest {
    /**
     * Environment ID
     * @type string
     * @memberof EnvironmentVariableApicreateEnvironmentEnvironmentVariableAlias
     */
    environmentId: string
    /**
     * Environment Variable ID
     * @type string
     * @memberof EnvironmentVariableApicreateEnvironmentEnvironmentVariableAlias
     */
    environmentVariableId: string
    /**
     * 
     * @type Key
     * @memberof EnvironmentVariableApicreateEnvironmentEnvironmentVariableAlias
     */
    key?: Key
}

export interface EnvironmentVariableApiCreateEnvironmentEnvironmentVariableOverrideRequest {
    /**
     * Environment ID
     * @type string
     * @memberof EnvironmentVariableApicreateEnvironmentEnvironmentVariableOverride
     */
    environmentId: string
    /**
     * Environment Variable ID
     * @type string
     * @memberof EnvironmentVariableApicreateEnvironmentEnvironmentVariableOverride
     */
    environmentVariableId: string
    /**
     * 
     * @type Value
     * @memberof EnvironmentVariableApicreateEnvironmentEnvironmentVariableOverride
     */
    value?: Value
}

export interface EnvironmentVariableApiDeleteEnvironmentEnvironmentVariableRequest {
    /**
     * Environment ID
     * @type string
     * @memberof EnvironmentVariableApideleteEnvironmentEnvironmentVariable
     */
    environmentId: string
    /**
     * Environment Variable ID
     * @type string
     * @memberof EnvironmentVariableApideleteEnvironmentEnvironmentVariable
     */
    environmentVariableId: string
}

export interface EnvironmentVariableApiEditEnvironmentEnvironmentVariableRequest {
    /**
     * Environment ID
     * @type string
     * @memberof EnvironmentVariableApieditEnvironmentEnvironmentVariable
     */
    environmentId: string
    /**
     * Environment Variable ID
     * @type string
     * @memberof EnvironmentVariableApieditEnvironmentEnvironmentVariable
     */
    environmentVariableId: string
    /**
     * 
     * @type EnvironmentVariableEditRequest
     * @memberof EnvironmentVariableApieditEnvironmentEnvironmentVariable
     */
    environmentVariableEditRequest: EnvironmentVariableEditRequest
}

export interface EnvironmentVariableApiListEnvironmentEnvironmentVariableRequest {
    /**
     * Environment ID
     * @type string
     * @memberof EnvironmentVariableApilistEnvironmentEnvironmentVariable
     */
    environmentId: string
}

export class ObjectEnvironmentVariableApi {
    private api: ObservableEnvironmentVariableApi

    public constructor(configuration: Configuration, requestFactory?: EnvironmentVariableApiRequestFactory, responseProcessor?: EnvironmentVariableApiResponseProcessor) {
        this.api = new ObservableEnvironmentVariableApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * - Add an environment variable to the environment.   - If the environment variable key already exists, then it will be replaced by the new one.   - If the environment variable value points toward an existing environment variable key, it will be considered as an alias. 
     * Add an environment variable to the environment
     * @param param the request object
     */
    public createEnvironmentEnvironmentVariable(param: EnvironmentVariableApiCreateEnvironmentEnvironmentVariableRequest, options?: Configuration): Promise<EnvironmentVariableResponse> {
        return this.api.createEnvironmentEnvironmentVariable(param.environmentId, param.environmentVariableRequest,  options).toPromise();
    }

    /**
     * - Allows you to add an alias at environment level on an existing environment variable having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new environment variable at environment level with the same value as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the aliased_variable will be exposed in the \"aliased_variable\" field of the newly created variable - Only 1 alias level is allowed. You can't create an alias on an alias 
     * Create an environment variable alias at the environment level
     * @param param the request object
     */
    public createEnvironmentEnvironmentVariableAlias(param: EnvironmentVariableApiCreateEnvironmentEnvironmentVariableAliasRequest, options?: Configuration): Promise<EnvironmentVariableResponse> {
        return this.api.createEnvironmentEnvironmentVariableAlias(param.environmentId, param.environmentVariableId, param.key,  options).toPromise();
    }

    /**
     * - Allows you to override at environment level an environment variable that has a higher scope. - You only have to specify a value in the request body - The system will create a new environment variable at environment level with the same key as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the overridden_variable will be exposed in the \"overridden_variable\" field of the newly created variable 
     * Create an environment variable override at the environment level
     * @param param the request object
     */
    public createEnvironmentEnvironmentVariableOverride(param: EnvironmentVariableApiCreateEnvironmentEnvironmentVariableOverrideRequest, options?: Configuration): Promise<EnvironmentVariableResponse> {
        return this.api.createEnvironmentEnvironmentVariableOverride(param.environmentId, param.environmentVariableId, param.value,  options).toPromise();
    }

    /**
     * - To delete an environment variable you must have the project user permission - You can't delete a BUILT_IN variable - If you delete a variable having override or alias, the associated override/alias will be deleted as well 
     * Delete an environment variable from an environment
     * @param param the request object
     */
    public deleteEnvironmentEnvironmentVariable(param: EnvironmentVariableApiDeleteEnvironmentEnvironmentVariableRequest, options?: Configuration): Promise<void> {
        return this.api.deleteEnvironmentEnvironmentVariable(param.environmentId, param.environmentVariableId,  options).toPromise();
    }

    /**
     * - You can't edit a BUILT_IN variable - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the variable it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 
     * Edit an environment variable belonging to the environment
     * @param param the request object
     */
    public editEnvironmentEnvironmentVariable(param: EnvironmentVariableApiEditEnvironmentEnvironmentVariableRequest, options?: Configuration): Promise<EnvironmentVariableResponse> {
        return this.api.editEnvironmentEnvironmentVariable(param.environmentId, param.environmentVariableId, param.environmentVariableEditRequest,  options).toPromise();
    }

    /**
     * List environment variables
     * @param param the request object
     */
    public listEnvironmentEnvironmentVariable(param: EnvironmentVariableApiListEnvironmentEnvironmentVariableRequest, options?: Configuration): Promise<EnvironmentVariableResponseList> {
        return this.api.listEnvironmentEnvironmentVariable(param.environmentId,  options).toPromise();
    }

}

import { ObservableEnvironmentsApi } from "./ObservableAPI";
import { EnvironmentsApiRequestFactory, EnvironmentsApiResponseProcessor} from "../apis/EnvironmentsApi";

export interface EnvironmentsApiCreateEnvironmentRequest {
    /**
     * Project ID
     * @type string
     * @memberof EnvironmentsApicreateEnvironment
     */
    projectId: string
    /**
     * 
     * @type EnvironmentRequest
     * @memberof EnvironmentsApicreateEnvironment
     */
    environmentRequest?: EnvironmentRequest
}

export interface EnvironmentsApiGetProjectEnvironmentServiceNumberRequest {
    /**
     * Project ID
     * @type string
     * @memberof EnvironmentsApigetProjectEnvironmentServiceNumber
     */
    projectId: string
}

export interface EnvironmentsApiGetProjectEnvironmentStatusRequest {
    /**
     * Project ID
     * @type string
     * @memberof EnvironmentsApigetProjectEnvironmentStatus
     */
    projectId: string
}

export interface EnvironmentsApiListEnvironmentRequest {
    /**
     * Project ID
     * @type string
     * @memberof EnvironmentsApilistEnvironment
     */
    projectId: string
}

export class ObjectEnvironmentsApi {
    private api: ObservableEnvironmentsApi

    public constructor(configuration: Configuration, requestFactory?: EnvironmentsApiRequestFactory, responseProcessor?: EnvironmentsApiResponseProcessor) {
        this.api = new ObservableEnvironmentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an environment
     * @param param the request object
     */
    public createEnvironment(param: EnvironmentsApiCreateEnvironmentRequest, options?: Configuration): Promise<EnvironmentResponse> {
        return this.api.createEnvironment(param.projectId, param.environmentRequest,  options).toPromise();
    }

    /**
     * Returns a list of environment ids, and for each its total numberof services
     * List total number of services for each environment of the project
     * @param param the request object
     */
    public getProjectEnvironmentServiceNumber(param: EnvironmentsApiGetProjectEnvironmentServiceNumberRequest, options?: Configuration): Promise<EnvironmentStatsResponseList> {
        return this.api.getProjectEnvironmentServiceNumber(param.projectId,  options).toPromise();
    }

    /**
     * Returns a list of environments with only their id and status.
     * List environments statuses
     * @param param the request object
     */
    public getProjectEnvironmentStatus(param: EnvironmentsApiGetProjectEnvironmentStatusRequest, options?: Configuration): Promise<Status> {
        return this.api.getProjectEnvironmentStatus(param.projectId,  options).toPromise();
    }

    /**
     * List environments
     * @param param the request object
     */
    public listEnvironment(param: EnvironmentsApiListEnvironmentRequest, options?: Configuration): Promise<EnvironmentResponseList> {
        return this.api.listEnvironment(param.projectId,  options).toPromise();
    }

}

import { ObservableGitRepositoriesApi } from "./ObservableAPI";
import { GitRepositoriesApiRequestFactory, GitRepositoriesApiResponseProcessor} from "../apis/GitRepositoriesApi";

export interface GitRepositoriesApiGetBitbucketRepositoriesRequest {
}

export interface GitRepositoriesApiGetBitbucketRepositoryBranchesRequest {
    /**
     * The name of the repository where to retrieve the branches
     * @type string
     * @memberof GitRepositoriesApigetBitbucketRepositoryBranches
     */
    name?: string
}

export interface GitRepositoriesApiGetGitProviderAccountRequest {
}

export interface GitRepositoriesApiGetGithubRepositoriesRequest {
}

export interface GitRepositoriesApiGetGithubRepositoryBranchesRequest {
    /**
     * The name of the repository where to retrieve the branches
     * @type string
     * @memberof GitRepositoriesApigetGithubRepositoryBranches
     */
    name?: string
}

export interface GitRepositoriesApiGetGitlabRepositoriesRequest {
}

export interface GitRepositoriesApiGetGitlabRepositoryBranchesRequest {
    /**
     * The name of the repository to retrieve the branches
     * @type string
     * @memberof GitRepositoriesApigetGitlabRepositoryBranches
     */
    name?: string
}

export class ObjectGitRepositoriesApi {
    private api: ObservableGitRepositoriesApi

    public constructor(configuration: Configuration, requestFactory?: GitRepositoriesApiRequestFactory, responseProcessor?: GitRepositoriesApiResponseProcessor) {
        this.api = new ObservableGitRepositoriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get bitbucket repositories of the connected user
     * @param param the request object
     */
    public getBitbucketRepositories(param: GitRepositoriesApiGetBitbucketRepositoriesRequest = {}, options?: Configuration): Promise<GitRepositoryResponseList> {
        return this.api.getBitbucketRepositories( options).toPromise();
    }

    /**
     * Get bitbucket branches of the specified repository
     * @param param the request object
     */
    public getBitbucketRepositoryBranches(param: GitRepositoriesApiGetBitbucketRepositoryBranchesRequest = {}, options?: Configuration): Promise<GitRepositoryBranchResponseList> {
        return this.api.getBitbucketRepositoryBranches(param.name,  options).toPromise();
    }

    /**
     * Get git provider accounts
     * @param param the request object
     */
    public getGitProviderAccount(param: GitRepositoriesApiGetGitProviderAccountRequest = {}, options?: Configuration): Promise<GitAuthProviderResponseList> {
        return this.api.getGitProviderAccount( options).toPromise();
    }

    /**
     * Get github repositories of the connected user
     * @param param the request object
     */
    public getGithubRepositories(param: GitRepositoriesApiGetGithubRepositoriesRequest = {}, options?: Configuration): Promise<GitRepositoryResponseList> {
        return this.api.getGithubRepositories( options).toPromise();
    }

    /**
     * Get github branches of the specified repository
     * @param param the request object
     */
    public getGithubRepositoryBranches(param: GitRepositoriesApiGetGithubRepositoryBranchesRequest = {}, options?: Configuration): Promise<GitRepositoryBranchResponseList> {
        return this.api.getGithubRepositoryBranches(param.name,  options).toPromise();
    }

    /**
     * Get gitlab repositories of the connected user
     * @param param the request object
     */
    public getGitlabRepositories(param: GitRepositoriesApiGetGitlabRepositoriesRequest = {}, options?: Configuration): Promise<GitRepositoryResponseList> {
        return this.api.getGitlabRepositories( options).toPromise();
    }

    /**
     * Get gitlab branches of the specified repository
     * @param param the request object
     */
    public getGitlabRepositoryBranches(param: GitRepositoriesApiGetGitlabRepositoryBranchesRequest = {}, options?: Configuration): Promise<GitRepositoryBranchResponseList> {
        return this.api.getGitlabRepositoryBranches(param.name,  options).toPromise();
    }

}

import { ObservableLogicalDatabaseApi } from "./ObservableAPI";
import { LogicalDatabaseApiRequestFactory, LogicalDatabaseApiResponseProcessor} from "../apis/LogicalDatabaseApi";

export interface LogicalDatabaseApiCreateLogicalDatabaseOnDatabaseRequest {
    /**
     * Database ID
     * @type string
     * @memberof LogicalDatabaseApicreateLogicalDatabaseOnDatabase
     */
    databaseId: string
    /**
     * 
     * @type LogicalDatabaseRequest
     * @memberof LogicalDatabaseApicreateLogicalDatabaseOnDatabase
     */
    logicalDatabaseRequest?: LogicalDatabaseRequest
}

export interface LogicalDatabaseApiDeleteLogicalDatabaseRequest {
    /**
     * Logical Database ID
     * @type string
     * @memberof LogicalDatabaseApideleteLogicalDatabase
     */
    logicalDatabaseId: string
}

export interface LogicalDatabaseApiEditLogicalDatabaseRequest {
    /**
     * Logical Database ID
     * @type string
     * @memberof LogicalDatabaseApieditLogicalDatabase
     */
    logicalDatabaseId: string
    /**
     * 
     * @type LogicalDatabaseRequest
     * @memberof LogicalDatabaseApieditLogicalDatabase
     */
    logicalDatabaseRequest?: LogicalDatabaseRequest
}

export interface LogicalDatabaseApiEditLogicalDatabaseCredentialsRequest {
    /**
     * Logical Database ID
     * @type string
     * @memberof LogicalDatabaseApieditLogicalDatabaseCredentials
     */
    logicalDatabaseId: string
    /**
     * 
     * @type CredentialsRequest
     * @memberof LogicalDatabaseApieditLogicalDatabaseCredentials
     */
    credentialsRequest?: CredentialsRequest
}

export interface LogicalDatabaseApiGetLogicalDatabaseRequest {
    /**
     * Logical Database ID
     * @type string
     * @memberof LogicalDatabaseApigetLogicalDatabase
     */
    logicalDatabaseId: string
}

export interface LogicalDatabaseApiGetLogicalDatabaseCredentialsRequest {
    /**
     * Logical Database ID
     * @type string
     * @memberof LogicalDatabaseApigetLogicalDatabaseCredentials
     */
    logicalDatabaseId: string
}

export interface LogicalDatabaseApiListLogicalDatabaseApplicationRequest {
    /**
     * Logical Database ID
     * @type string
     * @memberof LogicalDatabaseApilistLogicalDatabaseApplication
     */
    logicalDatabaseId: string
}

export interface LogicalDatabaseApiListLogicalDatabaseDatabaseRequest {
    /**
     * Database ID
     * @type string
     * @memberof LogicalDatabaseApilistLogicalDatabaseDatabase
     */
    databaseId: string
}

export class ObjectLogicalDatabaseApi {
    private api: ObservableLogicalDatabaseApi

    public constructor(configuration: Configuration, requestFactory?: LogicalDatabaseApiRequestFactory, responseProcessor?: LogicalDatabaseApiResponseProcessor) {
        this.api = new ObservableLogicalDatabaseApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * If you don't specify credentials, Qovery will autogenerate them.
     * Create a logical database on the database
     * @param param the request object
     */
    public createLogicalDatabaseOnDatabase(param: LogicalDatabaseApiCreateLogicalDatabaseOnDatabaseRequest, options?: Configuration): Promise<LogicalDatabaseResponse> {
        return this.api.createLogicalDatabaseOnDatabase(param.databaseId, param.logicalDatabaseRequest,  options).toPromise();
    }

    /**
     * To delete a logical database you must have the project user permission
     * Delete a Logical database
     * @param param the request object
     */
    public deleteLogicalDatabase(param: LogicalDatabaseApiDeleteLogicalDatabaseRequest, options?: Configuration): Promise<void> {
        return this.api.deleteLogicalDatabase(param.logicalDatabaseId,  options).toPromise();
    }

    /**
     * Edit a logical database
     * @param param the request object
     */
    public editLogicalDatabase(param: LogicalDatabaseApiEditLogicalDatabaseRequest, options?: Configuration): Promise<LogicalDatabaseResponse> {
        return this.api.editLogicalDatabase(param.logicalDatabaseId, param.logicalDatabaseRequest,  options).toPromise();
    }

    /**
     * Edit logical database credentials
     * @param param the request object
     */
    public editLogicalDatabaseCredentials(param: LogicalDatabaseApiEditLogicalDatabaseCredentialsRequest, options?: Configuration): Promise<CredentialsResponse> {
        return this.api.editLogicalDatabaseCredentials(param.logicalDatabaseId, param.credentialsRequest,  options).toPromise();
    }

    /**
     * A logical database exists inside a database. The database is a service that exists within an environment, that you can deploy, and that has allocated resources. A database can have several logical databases
     * Get logical database by ID
     * @param param the request object
     */
    public getLogicalDatabase(param: LogicalDatabaseApiGetLogicalDatabaseRequest, options?: Configuration): Promise<LogicalDatabaseResponse> {
        return this.api.getLogicalDatabase(param.logicalDatabaseId,  options).toPromise();
    }

    /**
     * Get  credentials of the logical database
     * @param param the request object
     */
    public getLogicalDatabaseCredentials(param: LogicalDatabaseApiGetLogicalDatabaseCredentialsRequest, options?: Configuration): Promise<CredentialsResponse> {
        return this.api.getLogicalDatabaseCredentials(param.logicalDatabaseId,  options).toPromise();
    }

    /**
     * List linked applications
     * @param param the request object
     */
    public listLogicalDatabaseApplication(param: LogicalDatabaseApiListLogicalDatabaseApplicationRequest, options?: Configuration): Promise<ApplicationResponseList> {
        return this.api.listLogicalDatabaseApplication(param.logicalDatabaseId,  options).toPromise();
    }

    /**
     * A logical database exists inside a database. The database is a service that exists within an environment, that you can deploy, and that has allocated resources. A database can have several logical databases
     * List logical databases of a database
     * @param param the request object
     */
    public listLogicalDatabaseDatabase(param: LogicalDatabaseApiListLogicalDatabaseDatabaseRequest, options?: Configuration): Promise<LogicalDatabaseResponseList> {
        return this.api.listLogicalDatabaseDatabase(param.databaseId,  options).toPromise();
    }

}

import { ObservableMembersApi } from "./ObservableAPI";
import { MembersApiRequestFactory, MembersApiResponseProcessor} from "../apis/MembersApi";

export interface MembersApiDeleteInviteMemberRequest {
    /**
     * Organization ID
     * @type string
     * @memberof MembersApideleteInviteMember
     */
    organizationId: string
}

export interface MembersApiDeleteMemberRequest {
    /**
     * Organization ID
     * @type string
     * @memberof MembersApideleteMember
     */
    organizationId: string
    /**
     * User ID
     * @type string
     * @memberof MembersApideleteMember
     */
    userId: string
}

export interface MembersApiGetOrganizationInvitedMembersRequest {
    /**
     * Organization ID
     * @type string
     * @memberof MembersApigetOrganizationInvitedMembers
     */
    organizationId: string
}

export interface MembersApiGetOrganizationMembersRequest {
    /**
     * Organization ID
     * @type string
     * @memberof MembersApigetOrganizationMembers
     */
    organizationId: string
}

export interface MembersApiPostAcceptInviteMemberRequest {
    /**
     * Organization ID
     * @type string
     * @memberof MembersApipostAcceptInviteMember
     */
    organizationId: string
    /**
     * Invite ID
     * @type string
     * @memberof MembersApipostAcceptInviteMember
     */
    inviteId: string
}

export interface MembersApiPostInviteMemberRequest {
    /**
     * Organization ID
     * @type string
     * @memberof MembersApipostInviteMember
     */
    organizationId: string
    /**
     * 
     * @type InviteMemberRequest
     * @memberof MembersApipostInviteMember
     */
    inviteMemberRequest?: InviteMemberRequest
}

export interface MembersApiPostOrganizationTransferOwnershipRequest {
    /**
     * Organization ID
     * @type string
     * @memberof MembersApipostOrganizationTransferOwnership
     */
    organizationId: string
    /**
     * 
     * @type TransferOwnershipRequest
     * @memberof MembersApipostOrganizationTransferOwnership
     */
    transferOwnershipRequest?: TransferOwnershipRequest
}

export class ObjectMembersApi {
    private api: ObservableMembersApi

    public constructor(configuration: Configuration, requestFactory?: MembersApiRequestFactory, responseProcessor?: MembersApiResponseProcessor) {
        this.api = new ObservableMembersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Remove an invited member
     * @param param the request object
     */
    public deleteInviteMember(param: MembersApiDeleteInviteMemberRequest, options?: Configuration): Promise<void> {
        return this.api.deleteInviteMember(param.organizationId,  options).toPromise();
    }

    /**
     * Remove a member
     * @param param the request object
     */
    public deleteMember(param: MembersApiDeleteMemberRequest, options?: Configuration): Promise<void> {
        return this.api.deleteMember(param.organizationId, param.userId,  options).toPromise();
    }

    /**
     * Get invited members
     * @param param the request object
     */
    public getOrganizationInvitedMembers(param: MembersApiGetOrganizationInvitedMembersRequest, options?: Configuration): Promise<InviteMemberResponseList> {
        return this.api.getOrganizationInvitedMembers(param.organizationId,  options).toPromise();
    }

    /**
     * Get organization members
     * @param param the request object
     */
    public getOrganizationMembers(param: MembersApiGetOrganizationMembersRequest, options?: Configuration): Promise<MemberResponseList> {
        return this.api.getOrganizationMembers(param.organizationId,  options).toPromise();
    }

    /**
     * Accept Invite in the organization
     * @param param the request object
     */
    public postAcceptInviteMember(param: MembersApiPostAcceptInviteMemberRequest, options?: Configuration): Promise<InviteMemberResponse> {
        return this.api.postAcceptInviteMember(param.organizationId, param.inviteId,  options).toPromise();
    }

    /**
     * Invite someone in the organization
     * @param param the request object
     */
    public postInviteMember(param: MembersApiPostInviteMemberRequest, options?: Configuration): Promise<InviteMemberResponse> {
        return this.api.postInviteMember(param.organizationId, param.inviteMemberRequest,  options).toPromise();
    }

    /**
     * Transfer organization ownership to another user
     * @param param the request object
     */
    public postOrganizationTransferOwnership(param: MembersApiPostOrganizationTransferOwnershipRequest, options?: Configuration): Promise<void> {
        return this.api.postOrganizationTransferOwnership(param.organizationId, param.transferOwnershipRequest,  options).toPromise();
    }

}

import { ObservableOrganizationMainCallsApi } from "./ObservableAPI";
import { OrganizationMainCallsApiRequestFactory, OrganizationMainCallsApiResponseProcessor} from "../apis/OrganizationMainCallsApi";

export interface OrganizationMainCallsApiCreateOrganizationRequest {
    /**
     * 
     * @type OrganizationRequest
     * @memberof OrganizationMainCallsApicreateOrganization
     */
    organizationRequest?: OrganizationRequest
}

export interface OrganizationMainCallsApiDeleteOrganizationRequest {
    /**
     * Organization ID
     * @type string
     * @memberof OrganizationMainCallsApideleteOrganization
     */
    organizationId: string
}

export interface OrganizationMainCallsApiEditOrganizationRequest {
    /**
     * Organization ID
     * @type string
     * @memberof OrganizationMainCallsApieditOrganization
     */
    organizationId: string
    /**
     * 
     * @type OrganizationEditRequest
     * @memberof OrganizationMainCallsApieditOrganization
     */
    organizationEditRequest?: OrganizationEditRequest
}

export interface OrganizationMainCallsApiGetOrganizationRequest {
    /**
     * Organization ID
     * @type string
     * @memberof OrganizationMainCallsApigetOrganization
     */
    organizationId: string
}

export interface OrganizationMainCallsApiListOrganizationRequest {
}

export class ObjectOrganizationMainCallsApi {
    private api: ObservableOrganizationMainCallsApi

    public constructor(configuration: Configuration, requestFactory?: OrganizationMainCallsApiRequestFactory, responseProcessor?: OrganizationMainCallsApiResponseProcessor) {
        this.api = new ObservableOrganizationMainCallsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an organization
     * @param param the request object
     */
    public createOrganization(param: OrganizationMainCallsApiCreateOrganizationRequest = {}, options?: Configuration): Promise<OrganizationResponse> {
        return this.api.createOrganization(param.organizationRequest,  options).toPromise();
    }

    /**
     * To delete an organization you must have the admin permission
     * Delete an organization
     * @param param the request object
     */
    public deleteOrganization(param: OrganizationMainCallsApiDeleteOrganizationRequest, options?: Configuration): Promise<void> {
        return this.api.deleteOrganization(param.organizationId,  options).toPromise();
    }

    /**
     * To edit an organization you must have the admin permission
     * Edit an organization
     * @param param the request object
     */
    public editOrganization(param: OrganizationMainCallsApiEditOrganizationRequest, options?: Configuration): Promise<OrganizationResponse> {
        return this.api.editOrganization(param.organizationId, param.organizationEditRequest,  options).toPromise();
    }

    /**
     * Get organization by ID
     * @param param the request object
     */
    public getOrganization(param: OrganizationMainCallsApiGetOrganizationRequest, options?: Configuration): Promise<OrganizationResponse> {
        return this.api.getOrganization(param.organizationId,  options).toPromise();
    }

    /**
     * List user organizations
     * @param param the request object
     */
    public listOrganization(param: OrganizationMainCallsApiListOrganizationRequest = {}, options?: Configuration): Promise<OrganizationResponseList> {
        return this.api.listOrganization( options).toPromise();
    }

}

import { ObservableProjectDeploymentRuleApi } from "./ObservableAPI";
import { ProjectDeploymentRuleApiRequestFactory, ProjectDeploymentRuleApiResponseProcessor} from "../apis/ProjectDeploymentRuleApi";

export interface ProjectDeploymentRuleApiCreateDeploymentRuleRequest {
    /**
     * Project ID
     * @type string
     * @memberof ProjectDeploymentRuleApicreateDeploymentRule
     */
    projectId: string
    /**
     * 
     * @type ProjectDeploymentRuleRequest
     * @memberof ProjectDeploymentRuleApicreateDeploymentRule
     */
    projectDeploymentRuleRequest?: ProjectDeploymentRuleRequest
}

export interface ProjectDeploymentRuleApiDeleteProjectDeploymentRuleRequest {
    /**
     * Project ID
     * @type string
     * @memberof ProjectDeploymentRuleApideleteProjectDeploymentRule
     */
    projectId: string
    /**
     * Deployment Rule ID
     * @type string
     * @memberof ProjectDeploymentRuleApideleteProjectDeploymentRule
     */
    deploymentRuleId: string
}

export interface ProjectDeploymentRuleApiEditProjectDeployemtnRuleRequest {
    /**
     * Project ID
     * @type string
     * @memberof ProjectDeploymentRuleApieditProjectDeployemtnRule
     */
    projectId: string
    /**
     * Deployment Rule ID
     * @type string
     * @memberof ProjectDeploymentRuleApieditProjectDeployemtnRule
     */
    deploymentRuleId: string
    /**
     * 
     * @type ProjectDeploymentRuleRequest
     * @memberof ProjectDeploymentRuleApieditProjectDeployemtnRule
     */
    projectDeploymentRuleRequest?: ProjectDeploymentRuleRequest
}

export interface ProjectDeploymentRuleApiGetProjectDeploymentRuleRequest {
    /**
     * Project ID
     * @type string
     * @memberof ProjectDeploymentRuleApigetProjectDeploymentRule
     */
    projectId: string
    /**
     * Deployment Rule ID
     * @type string
     * @memberof ProjectDeploymentRuleApigetProjectDeploymentRule
     */
    deploymentRuleId: string
}

export interface ProjectDeploymentRuleApiListProjectDeploymentRulesRequest {
    /**
     * Project ID
     * @type string
     * @memberof ProjectDeploymentRuleApilistProjectDeploymentRules
     */
    projectId: string
}

export interface ProjectDeploymentRuleApiUpdateDeploymentRulesPriorityOrderRequest {
    /**
     * Project ID
     * @type string
     * @memberof ProjectDeploymentRuleApiupdateDeploymentRulesPriorityOrder
     */
    projectId: string
    /**
     * 
     * @type InlineObject
     * @memberof ProjectDeploymentRuleApiupdateDeploymentRulesPriorityOrder
     */
    inlineObject?: InlineObject
}

export class ObjectProjectDeploymentRuleApi {
    private api: ObservableProjectDeploymentRuleApi

    public constructor(configuration: Configuration, requestFactory?: ProjectDeploymentRuleApiRequestFactory, responseProcessor?: ProjectDeploymentRuleApiResponseProcessor) {
        this.api = new ObservableProjectDeploymentRuleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a deployment rule
     * Create a deployment rule
     * @param param the request object
     */
    public createDeploymentRule(param: ProjectDeploymentRuleApiCreateDeploymentRuleRequest, options?: Configuration): Promise<ProjectDeploymentRuleResponse> {
        return this.api.createDeploymentRule(param.projectId, param.projectDeploymentRuleRequest,  options).toPromise();
    }

    /**
     * Delete a project deployment rule
     * Delete a project deployment rule
     * @param param the request object
     */
    public deleteProjectDeploymentRule(param: ProjectDeploymentRuleApiDeleteProjectDeploymentRuleRequest, options?: Configuration): Promise<void> {
        return this.api.deleteProjectDeploymentRule(param.projectId, param.deploymentRuleId,  options).toPromise();
    }

    /**
     * Edit a project deployment rule
     * Edit a project deployment rule
     * @param param the request object
     */
    public editProjectDeployemtnRule(param: ProjectDeploymentRuleApiEditProjectDeployemtnRuleRequest, options?: Configuration): Promise<ProjectDeploymentRuleResponse> {
        return this.api.editProjectDeployemtnRule(param.projectId, param.deploymentRuleId, param.projectDeploymentRuleRequest,  options).toPromise();
    }

    /**
     * Get a project deployment rule
     * Get a project deployment rule
     * @param param the request object
     */
    public getProjectDeploymentRule(param: ProjectDeploymentRuleApiGetProjectDeploymentRuleRequest, options?: Configuration): Promise<ProjectDeploymentRuleResponse> {
        return this.api.getProjectDeploymentRule(param.projectId, param.deploymentRuleId,  options).toPromise();
    }

    /**
     * List project deployment rules
     * List project deployment rules
     * @param param the request object
     */
    public listProjectDeploymentRules(param: ProjectDeploymentRuleApiListProjectDeploymentRulesRequest, options?: Configuration): Promise<ProjectDeploymentRuleResponseList> {
        return this.api.listProjectDeploymentRules(param.projectId,  options).toPromise();
    }

    /**
     * Update deployment rules priority order
     * Update deployment rules priority order
     * @param param the request object
     */
    public updateDeploymentRulesPriorityOrder(param: ProjectDeploymentRuleApiUpdateDeploymentRulesPriorityOrderRequest, options?: Configuration): Promise<void> {
        return this.api.updateDeploymentRulesPriorityOrder(param.projectId, param.inlineObject,  options).toPromise();
    }

}

import { ObservableProjectEnvironmentVariableApi } from "./ObservableAPI";
import { ProjectEnvironmentVariableApiRequestFactory, ProjectEnvironmentVariableApiResponseProcessor} from "../apis/ProjectEnvironmentVariableApi";

export interface ProjectEnvironmentVariableApiCreateProjectEnvironmentVariableRequest {
    /**
     * Project ID
     * @type string
     * @memberof ProjectEnvironmentVariableApicreateProjectEnvironmentVariable
     */
    projectId: string
    /**
     * 
     * @type EnvironmentVariableRequest
     * @memberof ProjectEnvironmentVariableApicreateProjectEnvironmentVariable
     */
    environmentVariableRequest?: EnvironmentVariableRequest
}

export interface ProjectEnvironmentVariableApiCreateProjectEnvironmentVariableAliasRequest {
    /**
     * Project ID
     * @type string
     * @memberof ProjectEnvironmentVariableApicreateProjectEnvironmentVariableAlias
     */
    projectId: string
    /**
     * Environment Variable ID
     * @type string
     * @memberof ProjectEnvironmentVariableApicreateProjectEnvironmentVariableAlias
     */
    environmentVariableId: string
    /**
     * 
     * @type Key
     * @memberof ProjectEnvironmentVariableApicreateProjectEnvironmentVariableAlias
     */
    key?: Key
}

export interface ProjectEnvironmentVariableApiCreateProjectEnvironmentVariableOverrideRequest {
    /**
     * Project ID
     * @type string
     * @memberof ProjectEnvironmentVariableApicreateProjectEnvironmentVariableOverride
     */
    projectId: string
    /**
     * Environment Variable ID
     * @type string
     * @memberof ProjectEnvironmentVariableApicreateProjectEnvironmentVariableOverride
     */
    environmentVariableId: string
    /**
     * 
     * @type Value
     * @memberof ProjectEnvironmentVariableApicreateProjectEnvironmentVariableOverride
     */
    value?: Value
}

export interface ProjectEnvironmentVariableApiDeleteProjectEnvironmentVariableRequest {
    /**
     * Project ID
     * @type string
     * @memberof ProjectEnvironmentVariableApideleteProjectEnvironmentVariable
     */
    projectId: string
    /**
     * Environment Variable ID
     * @type string
     * @memberof ProjectEnvironmentVariableApideleteProjectEnvironmentVariable
     */
    environmentVariableId: string
}

export interface ProjectEnvironmentVariableApiEditProjectEnvironmentVariableRequest {
    /**
     * Project ID
     * @type string
     * @memberof ProjectEnvironmentVariableApieditProjectEnvironmentVariable
     */
    projectId: string
    /**
     * Environment Variable ID
     * @type string
     * @memberof ProjectEnvironmentVariableApieditProjectEnvironmentVariable
     */
    environmentVariableId: string
    /**
     * 
     * @type EnvironmentVariableEditRequest
     * @memberof ProjectEnvironmentVariableApieditProjectEnvironmentVariable
     */
    environmentVariableEditRequest: EnvironmentVariableEditRequest
}

export interface ProjectEnvironmentVariableApiListProjectEnvironmentVariableRequest {
    /**
     * Project ID
     * @type string
     * @memberof ProjectEnvironmentVariableApilistProjectEnvironmentVariable
     */
    projectId: string
}

export class ObjectProjectEnvironmentVariableApi {
    private api: ObservableProjectEnvironmentVariableApi

    public constructor(configuration: Configuration, requestFactory?: ProjectEnvironmentVariableApiRequestFactory, responseProcessor?: ProjectEnvironmentVariableApiResponseProcessor) {
        this.api = new ObservableProjectEnvironmentVariableApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * - Add an environment variable to the project.   - If the environment variable key already exists, then it will be replaced by the new one.   - If the environment variable value points toward an existing environment variable key, it will be considered as an alias. 
     * Add an environment variable to the project
     * @param param the request object
     */
    public createProjectEnvironmentVariable(param: ProjectEnvironmentVariableApiCreateProjectEnvironmentVariableRequest, options?: Configuration): Promise<EnvironmentVariableResponse> {
        return this.api.createProjectEnvironmentVariable(param.projectId, param.environmentVariableRequest,  options).toPromise();
    }

    /**
     * - Allows you to add an alias at project level on an existing environment variable having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new environment variable at project level with the same value as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the aliased_variable will be exposed in the \"aliased_variable\" field of the newly created variable - Only 1 alias level is allowed. You can't create an alias on an alias 
     * Create an environment variable alias at the project level
     * @param param the request object
     */
    public createProjectEnvironmentVariableAlias(param: ProjectEnvironmentVariableApiCreateProjectEnvironmentVariableAliasRequest, options?: Configuration): Promise<EnvironmentVariableResponse> {
        return this.api.createProjectEnvironmentVariableAlias(param.projectId, param.environmentVariableId, param.key,  options).toPromise();
    }

    /**
     * - Allows you to override at project level an environment variable that has a higher scope. - You only have to specify a value in the request body - The system will create a new environment variable at project level with the same key as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the overridden_variable will be exposed in the \"overridden_variable\" field of the newly created variable 
     * Create an environment variable override at the project level
     * @param param the request object
     */
    public createProjectEnvironmentVariableOverride(param: ProjectEnvironmentVariableApiCreateProjectEnvironmentVariableOverrideRequest, options?: Configuration): Promise<EnvironmentVariableResponse> {
        return this.api.createProjectEnvironmentVariableOverride(param.projectId, param.environmentVariableId, param.value,  options).toPromise();
    }

    /**
     * - To delete an environment variable you must have the project user permission - You can't delete a BUILT_IN variable - If you delete a variable having override or alias, the associated override/alias will be deleted as well 
     * Delete an environment variable from a project
     * @param param the request object
     */
    public deleteProjectEnvironmentVariable(param: ProjectEnvironmentVariableApiDeleteProjectEnvironmentVariableRequest, options?: Configuration): Promise<void> {
        return this.api.deleteProjectEnvironmentVariable(param.projectId, param.environmentVariableId,  options).toPromise();
    }

    /**
     * - You can't edit a BUILT_IN variable - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the variable it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 
     * Edit an environment variable belonging to the project
     * @param param the request object
     */
    public editProjectEnvironmentVariable(param: ProjectEnvironmentVariableApiEditProjectEnvironmentVariableRequest, options?: Configuration): Promise<EnvironmentVariableResponse> {
        return this.api.editProjectEnvironmentVariable(param.projectId, param.environmentVariableId, param.environmentVariableEditRequest,  options).toPromise();
    }

    /**
     * List project environment variables
     * @param param the request object
     */
    public listProjectEnvironmentVariable(param: ProjectEnvironmentVariableApiListProjectEnvironmentVariableRequest, options?: Configuration): Promise<EnvironmentVariableResponseList> {
        return this.api.listProjectEnvironmentVariable(param.projectId,  options).toPromise();
    }

}

import { ObservableProjectMainCallsApi } from "./ObservableAPI";
import { ProjectMainCallsApiRequestFactory, ProjectMainCallsApiResponseProcessor} from "../apis/ProjectMainCallsApi";

export interface ProjectMainCallsApiDeleteProjectRequest {
    /**
     * Project ID
     * @type string
     * @memberof ProjectMainCallsApideleteProject
     */
    projectId: string
}

export interface ProjectMainCallsApiEditProjectRequest {
    /**
     * Project ID
     * @type string
     * @memberof ProjectMainCallsApieditProject
     */
    projectId: string
    /**
     * 
     * @type ProjectRequest
     * @memberof ProjectMainCallsApieditProject
     */
    projectRequest?: ProjectRequest
}

export interface ProjectMainCallsApiGetProjectRequest {
    /**
     * Project ID
     * @type string
     * @memberof ProjectMainCallsApigetProject
     */
    projectId: string
}

export class ObjectProjectMainCallsApi {
    private api: ObservableProjectMainCallsApi

    public constructor(configuration: Configuration, requestFactory?: ProjectMainCallsApiRequestFactory, responseProcessor?: ProjectMainCallsApiResponseProcessor) {
        this.api = new ObservableProjectMainCallsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * To delete a project you must have the admin permission
     * Delete a project
     * @param param the request object
     */
    public deleteProject(param: ProjectMainCallsApiDeleteProjectRequest, options?: Configuration): Promise<void> {
        return this.api.deleteProject(param.projectId,  options).toPromise();
    }

    /**
     * To edit a project you must have the admin permission
     * Edit a project
     * @param param the request object
     */
    public editProject(param: ProjectMainCallsApiEditProjectRequest, options?: Configuration): Promise<ProjectResponse> {
        return this.api.editProject(param.projectId, param.projectRequest,  options).toPromise();
    }

    /**
     * Get project by ID
     * @param param the request object
     */
    public getProject(param: ProjectMainCallsApiGetProjectRequest, options?: Configuration): Promise<ProjectResponse> {
        return this.api.getProject(param.projectId,  options).toPromise();
    }

}

import { ObservableProjectSecretApi } from "./ObservableAPI";
import { ProjectSecretApiRequestFactory, ProjectSecretApiResponseProcessor} from "../apis/ProjectSecretApi";

export interface ProjectSecretApiCreateProjectSecretRequest {
    /**
     * Project ID
     * @type string
     * @memberof ProjectSecretApicreateProjectSecret
     */
    projectId: string
    /**
     * 
     * @type SecretRequest
     * @memberof ProjectSecretApicreateProjectSecret
     */
    secretRequest?: SecretRequest
}

export interface ProjectSecretApiCreateProjectSecretAliasRequest {
    /**
     * Project ID
     * @type string
     * @memberof ProjectSecretApicreateProjectSecretAlias
     */
    projectId: string
    /**
     * Secret ID
     * @type string
     * @memberof ProjectSecretApicreateProjectSecretAlias
     */
    secretId: string
    /**
     * 
     * @type Key
     * @memberof ProjectSecretApicreateProjectSecretAlias
     */
    key?: Key
}

export interface ProjectSecretApiCreateProjectSecretOverrideRequest {
    /**
     * Project ID
     * @type string
     * @memberof ProjectSecretApicreateProjectSecretOverride
     */
    projectId: string
    /**
     * Secret ID
     * @type string
     * @memberof ProjectSecretApicreateProjectSecretOverride
     */
    secretId: string
    /**
     * 
     * @type Value
     * @memberof ProjectSecretApicreateProjectSecretOverride
     */
    value?: Value
}

export interface ProjectSecretApiDeleteProjectSecretRequest {
    /**
     * Project ID
     * @type string
     * @memberof ProjectSecretApideleteProjectSecret
     */
    projectId: string
    /**
     * Secret ID
     * @type string
     * @memberof ProjectSecretApideleteProjectSecret
     */
    secretId: string
}

export interface ProjectSecretApiEditProjectSecretRequest {
    /**
     * Project ID
     * @type string
     * @memberof ProjectSecretApieditProjectSecret
     */
    projectId: string
    /**
     * Secret ID
     * @type string
     * @memberof ProjectSecretApieditProjectSecret
     */
    secretId: string
    /**
     * 
     * @type SecretEditRequest
     * @memberof ProjectSecretApieditProjectSecret
     */
    secretEditRequest: SecretEditRequest
}

export interface ProjectSecretApiListProjectSecretsRequest {
    /**
     * Project ID
     * @type string
     * @memberof ProjectSecretApilistProjectSecrets
     */
    projectId: string
}

export class ObjectProjectSecretApi {
    private api: ObservableProjectSecretApi

    public constructor(configuration: Configuration, requestFactory?: ProjectSecretApiRequestFactory, responseProcessor?: ProjectSecretApiResponseProcessor) {
        this.api = new ObservableProjectSecretApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * - Add a secret to the project.   - If the secret key already exists, then it will be replaced by the new one.   - If the secret value points toward an existing secret key, it will be considered as an alias. 
     * Add a secret to the project
     * @param param the request object
     */
    public createProjectSecret(param: ProjectSecretApiCreateProjectSecretRequest, options?: Configuration): Promise<SecretResponse> {
        return this.api.createProjectSecret(param.projectId, param.secretRequest,  options).toPromise();
    }

    /**
     * - Allows you to add an alias at project level on an existing secret having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new secret at project level with the same value as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the aliased_secret will be exposed in the \"aliased_secret\" field of the newly created secret - Only 1 alias level is allowed. You can't create an alias on an alias 
     * Create a secret alias at the project level
     * @param param the request object
     */
    public createProjectSecretAlias(param: ProjectSecretApiCreateProjectSecretAliasRequest, options?: Configuration): Promise<SecretResponse> {
        return this.api.createProjectSecretAlias(param.projectId, param.secretId, param.key,  options).toPromise();
    }

    /**
     * - Allows you to override at project level a secret that has a higher scope. - You only have to specify a value in the request body - The system will create a new secret at project level with the same key as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the overridden_secret will be exposed in the \"overridden_secret\" field of the newly created secret 
     * Create a secret override at the project level
     * @param param the request object
     */
    public createProjectSecretOverride(param: ProjectSecretApiCreateProjectSecretOverrideRequest, options?: Configuration): Promise<SecretResponse> {
        return this.api.createProjectSecretOverride(param.projectId, param.secretId, param.value,  options).toPromise();
    }

    /**
     * - To delete a secret you must have the project user permission - You can't delete a BUILT_IN secret - If you delete a secret having override or alias, the associated override/alias will be deleted as well  operationId: deleteProjectSecret 
     * Delete a secret from a project
     * @param param the request object
     */
    public deleteProjectSecret(param: ProjectSecretApiDeleteProjectSecretRequest, options?: Configuration): Promise<void> {
        return this.api.deleteProjectSecret(param.projectId, param.secretId,  options).toPromise();
    }

    /**
     * - You can't edit a BUILT_IN secret - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the secret it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 
     * Edit a secret belonging to the project
     * @param param the request object
     */
    public editProjectSecret(param: ProjectSecretApiEditProjectSecretRequest, options?: Configuration): Promise<SecretResponse> {
        return this.api.editProjectSecret(param.projectId, param.secretId, param.secretEditRequest,  options).toPromise();
    }

    /**
     * List project secrets
     * @param param the request object
     */
    public listProjectSecrets(param: ProjectSecretApiListProjectSecretsRequest, options?: Configuration): Promise<SecretResponseList> {
        return this.api.listProjectSecrets(param.projectId,  options).toPromise();
    }

}

import { ObservableProjectsApi } from "./ObservableAPI";
import { ProjectsApiRequestFactory, ProjectsApiResponseProcessor} from "../apis/ProjectsApi";

export interface ProjectsApiCreateProjectRequest {
    /**
     * Organization ID
     * @type string
     * @memberof ProjectsApicreateProject
     */
    organizationId: string
    /**
     * 
     * @type ProjectRequest
     * @memberof ProjectsApicreateProject
     */
    projectRequest?: ProjectRequest
}

export interface ProjectsApiGetOrganizationProjectStatsRequest {
    /**
     * Organization ID
     * @type string
     * @memberof ProjectsApigetOrganizationProjectStats
     */
    organizationId: string
}

export interface ProjectsApiListProjectRequest {
    /**
     * Organization ID
     * @type string
     * @memberof ProjectsApilistProject
     */
    organizationId: string
}

export class ObjectProjectsApi {
    private api: ObservableProjectsApi

    public constructor(configuration: Configuration, requestFactory?: ProjectsApiRequestFactory, responseProcessor?: ProjectsApiResponseProcessor) {
        this.api = new ObservableProjectsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a project
     * @param param the request object
     */
    public createProject(param: ProjectsApiCreateProjectRequest, options?: Configuration): Promise<ProjectResponse> {
        return this.api.createProject(param.organizationId, param.projectRequest,  options).toPromise();
    }

    /**
     * Returns a list of project ids, and for each its total numberof services and environments
     * List total number of services and environments for each project of the organization
     * @param param the request object
     */
    public getOrganizationProjectStats(param: ProjectsApiGetOrganizationProjectStatsRequest, options?: Configuration): Promise<ProjectStatsResponseList> {
        return this.api.getOrganizationProjectStats(param.organizationId,  options).toPromise();
    }

    /**
     * List projects
     * @param param the request object
     */
    public listProject(param: ProjectsApiListProjectRequest, options?: Configuration): Promise<ProjectResponseList> {
        return this.api.listProject(param.organizationId,  options).toPromise();
    }

}

import { ObservableReferralRewardsApi } from "./ObservableAPI";
import { ReferralRewardsApiRequestFactory, ReferralRewardsApiResponseProcessor} from "../apis/ReferralRewardsApi";

export interface ReferralRewardsApiGetAccountReferralRequest {
}

export interface ReferralRewardsApiPostAccountRewardClaimRequest {
    /**
     * 
     * @type RewardClaimResponse
     * @memberof ReferralRewardsApipostAccountRewardClaim
     */
    rewardClaimResponse?: RewardClaimResponse
}

export class ObjectReferralRewardsApi {
    private api: ObservableReferralRewardsApi

    public constructor(configuration: Configuration, requestFactory?: ReferralRewardsApiRequestFactory, responseProcessor?: ReferralRewardsApiResponseProcessor) {
        this.api = new ObservableReferralRewardsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get your referral information
     * @param param the request object
     */
    public getAccountReferral(param: ReferralRewardsApiGetAccountReferralRequest = {}, options?: Configuration): Promise<ReferralResponse> {
        return this.api.getAccountReferral( options).toPromise();
    }

    /**
     * A same code can be claimed only 3 times at max
     * Claim a reward
     * @param param the request object
     */
    public postAccountRewardClaim(param: ReferralRewardsApiPostAccountRewardClaimRequest = {}, options?: Configuration): Promise<void> {
        return this.api.postAccountRewardClaim(param.rewardClaimResponse,  options).toPromise();
    }

}
