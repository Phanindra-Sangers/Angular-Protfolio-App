import { Injectable } from '@angular/core';
import { Project } from '../_models/Project-card';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


    projects: Project[] = [
      {id: 1, name: "Integrating Kubiya AI in your AWS Account ", pictures: ["../../assets/ecs_service_discovery_diagram.png","../../assets/ecs_service_discovery.png"], projectLink: "https://medium.com/@phanindra.sangers/kubiya-ai-generative-ai-for-aws-38977a62e8fd", summary: "Integrating Kubiya AI into your AWS Account ", description: "Kubiya Is an Generative AI tool", tags: [Tag.CONTAINERS,Tag.DEVOPS,Tag.AWS]},
     {id: 1, name: "Integrating AWS ECS with Service Discovery and XRay", pictures: ["../../assets/ecs_service_discovery_diagram.png","../../assets/ecs_service_discovery.png"], projectLink: "https://medium.com/@phanindra.sangers/integrating-aws-ecs-with-service-discovery-and-xray-02388422cfc8", summary: "Integrating AWS ECS with Service Discovery and XRay", description: "Integrating AWS ECS with Service Discovery and XRay", tags: [Tag.CONTAINERS,Tag.DEVOPS,Tag.AWS]},
     {id: 2, name: "EKS Integration With Secret Manager", pictures: ["../../assets/eks_secret_manager.png/","../../assets/eks.png"], projectLink: "https://medium.com/@phanindra.sangers/integrating-aws-secret-manager-in-aws-eks-0044ab194a76", summary: "Integrating AWS Secret Manager In AWS EKS", description: "Integrating AWS Secret Manager In AWS EKS", tags: [Tag.KUBERNETES,Tag.AWS]},
     {id: 3, name: "Kubernetes Cluster Setup From Scratch Using Release Binaries-Provisioning Release Binaries", pictures: ["../../assets/eks_release_binaries.png","../../assets/eks_release_binaries.png"], projectLink: "https://medium.com/@phanindra.sangers/kubernetes-cluster-setup-from-scratch-using-release-binaries-chapter-2-provisioning-release-0722e3851aa1", summary: "k8's Setup using Release Binaries", description: "k8's Setup using Release Binaries", tags: [Tag.KUBERNETES,Tag.DEVOPS]},
     {id: 4, name: "Provision Kubernetes Cluster using Kubeadm", pictures: ["../../assets/eks_kubeadm.png","../../assets/eks.png"], projectLink: "https://medium.com/@phanindra.sangers/provision-kubernetes-cluster-using-kubeadm-4a3210234668",  summary: "Provision Kubernetes Cluster using Kubeadm", description: "Integrating AWS Secret Manager In AWS EKS", tags: [Tag.KUBERNETES,Tag.DEVOPS,Tag.CONTAINERS]},
     {id: 5, name: "Amazon S3 CSI Driver Mount Point", pictures: ["../../assets/S3_mount_point.png","../../assets/eks.png"], projectLink: "https://medium.com/@phanindra.sangers/amazon-s3-csi-driver-mount-point-ae6ebfeaa6de",  summary: "Amazon S3 CSI Driver Mount Point", description: "Amazon S3 CSI Driver Mount Point", tags: [Tag.KUBERNETES,Tag.DEVOPS,Tag.CONTAINERS]},
     {id: 6, name: "AWS Codepipeline for Automated ECS deployments && ECS Blue/Green,canary deployments", pictures: ["../../assets/ecs_blue_green.png","../../assets/aws.png"], projectLink: "https://medium.com/@phanindra.sangers/aws-codepipeline-for-automated-ecs-deployments-ecs-blue-green-canary-deployments-b6f65a1f112a",  summary: "AWS Codepipeline for Automated ECS deployments && ECS Blue/Green , canary deployments", description: "AWS Codepipeline for Automated ECS deployments && ECS Blue/Green , canary deployments", tags: [Tag.KUBERNETES,Tag.DEVOPS,Tag.CONTAINERS]},
     {id: 7, name: "AWS DevSecOps CodePipeline", pictures: ["../../assets/devsecops_pipeline.png","../../assets/eks.png"], projectLink: "https://medium.com/@phanindra.sangers/aws-devsecops-codepipeline-d0b3af041e59",  summary: "AWS DevSecOps CodePipeline", description: "AWS DevSecOps CodePipeline", tags: [Tag.KUBERNETES,Tag.DEVOPS,Tag.CONTAINERS]},
     {id: 8, name: "DataSync Terraform Automation Moving data from EFS to S3", pictures: ["../../assets/datasync.png","../../assets/terraform.png"], projectLink: "https://medium.com/@phanindra.sangers/datasync-terraform-automation-moving-data-from-efs-to-s3-102e68c44daf",  summary: "DataSync Terraform Automation Moving data from EFS to S3", description: "DataSync Terraform Automation Moving data from EFS to S3", tags: [Tag.KUBERNETES,Tag.DEVOPS,Tag.CONTAINERS,Tag.TERRAFORM]},
     {id: 9, name: "ALB Ingress Controller in EKS Complete tutorial", pictures: ["../../assets/alb_ingress.png","../../assets/eks.png"], projectLink: "https://medium.com/@phanindra.sangers/alb-ingress-controller-in-eks-complete-tutorial-970466036868",  summary: "ALB Ingress Controller in EKS Complete tutorial", description: "ALB Ingress Controller in EKS Complete tutorial", tags: [Tag.KUBERNETES,Tag.DEVOPS,Tag.CONTAINERS]},
     {id: 10, name: "MFA For Vault UserPass Auth Method using Vault TOTP Secret Engine", pictures: ["../../assets/vault.png"], projectLink: "https://medium.com/@phanindra.sangers/mfa-using-vault-totp-secret-engine-for-vault-userpass-auth-method-817ad9733bdf",  summary: "MFA For Vault UserPass Auth Method using Vault TOTP Secret Engine", description: "MFA For Vault UserPass Auth Method using Vault TOTP Secret Engine", tags: [Tag.DEVOPS]},
     {id: 11, name: "How to Install Hashicorp Vault in Amazon EC2 Linux Instance", pictures: ["../../assets/vault.png"], projectLink: "https://medium.com/@phanindra.sangers/how-to-install-hashicorp-vault-in-amazon-ec2-linux-instance-89d250ef1330",  summary: "How to Install Hashicorp Vault in Amazon EC2 Linux Instance", description: "How to Install Hashicorp Vault in Amazon EC2 Linux Instance", tags: [Tag.DEVOPS]},
     {id: 12, name: "Monitoring EC2 Instance using Prometheus and Grafana", pictures: ["../../assets/prometheus_grafana.png","../../assets/grafana.png"], projectLink: "https://medium.com/@phanindra.sangers/monitoring-ec2-instance-using-prometheus-and-grafana-767aea3bbf14",  summary: "Monitoring EC2 Instance using Prometheus and Grafana", description: "Monitoring EC2 Instance using Prometheus and Grafana", tags: [Tag.DEVOPS,Tag.CONTAINERS]},
     {id: 13, name: "AWS ECR Docker image Scanning using AWS Inspector", pictures: ["../../assets/ecr_inspector.png","../../assets/aws.png"], projectLink: "https://medium.com/@phanindra.sangers/aws-ecr-docker-image-scanning-using-aws-inspector-fe6f36b113e4",  summary: "AWS ECR Docker image Scanning using AWS Inspector", description: "AWS ECR Docker image Scanning using AWS Inspector", tags: [Tag.DEVOPS,Tag.CONTAINERS,Tag.AWS]},
     {id: 14, name: "Part -2 vault- Hashicorp vault Auto Unseal With AWS KMS with File Storage Backend", pictures: ["../../assets/vault.png","../../assets/aws.png"], projectLink: "https://medium.com/@phanindra.sangers/part-2-vault-hashicorp-vault-auto-unseal-with-aws-kms-with-file-storage-backend-dc019eea6a1",  summary: "Part -2 vault Hashicorp vault Auto Unseal With AWS KMS with File Storage Backend", description: "Part -2 vault Hashicorp vault Auto Unseal With AWS KMS with File Storage Backend", tags: [Tag.KUBERNETES,Tag.DEVOPS,Tag.CONTAINERS]},
     {id: 15, name: "Integration of Jenkins with AWS code commit using SQS SNS", pictures: ["../../assets/jenkins.png","../../assets/sqs.png"], projectLink: "https://medium.com/@phanindra.sangers/integration-of-jenkins-with-aws-code-commit-using-sqs-sns-6f0a83935ebe",  summary: "Integration of Jenkins with AWS code commit using SQS SNS", description: "Integration of Jenkins with AWS code commit using SQS SNS", tags: [Tag.DEVOPS,Tag.CONTAINERS,Tag.TERRAFORM]},
     {id: 16, name: "AWS Federated Authentication with Active Directory Federation Services (AD FS)", pictures: ["../../assets/adfs.png"], projectLink: "https://medium.com/@phanindra.sangers/aws-federated-authentication-with-active-directory-federation-services-ad-fs-82ef291135bb",  summary: "AWS Federated Authentication with Active Directory Federation Services (AD FS)", description: "AWS Federated Authentication with Active Directory Federation Services (AD FS)", tags: [Tag.DEVOPS,Tag.CONTAINERS]},    
     {id: 17, name: "How to Deploy SFTP server in EKS using AWS EFS as Persistent volume", pictures: ["../../assets/sftp.png","../../assets/aws.png"], projectLink: "https://medium.com/@phanindra.sangers/how-to-deploy-sftp-server-in-eks-using-aws-efs-as-persistent-volume-78933803e3b7",  summary: "How to Deploy SFTP server in EKS using AWS EFS as Persistent volume", description: "How to Deploy SFTP server in EKS using AWS EFS as Persistent volume", tags: [Tag.KUBERNETES,Tag.DEVOPS,Tag.CONTAINERS,Tag.AWS]},
     {id: 18, name: "Install Jenkins In EC2 using Terraform", pictures: ["../../assets/jenkins.png","../../assets/terraform.png"], projectLink: "https://medium.com/@phanindra.sangers/install-jenkins-in-ec2-using-terraform-3a50c2f45c9d",  summary: "Install Jenkins In EC2 using Terraform", description: "Install Jenkins In EC2 using Terraform", tags: [Tag.KUBERNETES,Tag.DEVOPS,Tag.CONTAINERS,Tag.AWS]},
    ];


  constructor() { }

  GetProjects() {
    return this.projects;
  }
  GetProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id == id);
    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }
   return project;
  }
  GetProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];
    this.projects.forEach(function (project){
      let foundAll = true;
      filterTags.forEach(function (filterTag){
        if (project.tags.includes(filterTag) == false) { 
          foundAll = false;
        }

      });
      if (foundAll) { 
        filteredProjects.push(project);
      }
    });
    return filteredProjects
  }
}
