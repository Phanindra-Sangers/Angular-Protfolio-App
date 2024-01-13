import { Injectable } from '@angular/core';
import { Project } from '../_models/Project-card';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


    projects: Project[] = [
     {id: 0, name: "Integrating AWS ECS with Service Discovery and XRay", pictures: ["../../assets/ecs_service_discovery_diagram.png","../../assets/ecs_service_discovery.png"], projectLink: "https://medium.com/@phanindra.sangers/integrating-aws-ecs-with-service-discovery-and-xray-02388422cfc8", summary: "Integrating AWS ECS with Service Discovery and XRay", description: "Integrating AWS ECS with Service Discovery and XRay", tags: [Tag.CONTAINERS,Tag.DEVOPS,Tag.AWS]},
     {id: 1, name: "EKS Integration With Secret Manager", pictures: ["../../assets/eks_secret_manager.png/","../../assets/eks.png"], projectLink: "https://medium.com/@phanindra.sangers/integrating-aws-secret-manager-in-aws-eks-0044ab194a76", summary: "Integrating AWS Secret Manager In AWS EKS", description: "Integrating AWS Secret Manager In AWS EKS", tags: [Tag.KUBERNETES,Tag.AWS]},
     {id: 2, name: "Kubernetes Cluster Setup From Scratch Using Release Binaries-Provisioning Release Binaries", pictures: ["../../assets/eks_release_binaries.png","../../assets/eks_release_binaries.png"], projectLink: "https://medium.com/@phanindra.sangers/kubernetes-cluster-setup-from-scratch-using-release-binaries-chapter-2-provisioning-release-0722e3851aa1", summary: "k8's Setup using Release Binaries", description: "k8's Setup using Release Binaries", tags: [Tag.KUBERNETES,Tag.DEVOPS]},
     {id: 3, name: "Provision Kubernetes Cluster using Kubeadm", pictures: ["../../assets/eks_kubeadm.png","../../assets/eks.png"], projectLink: "https://medium.com/@phanindra.sangers/provision-kubernetes-cluster-using-kubeadm-4a3210234668",  summary: "Provision Kubernetes Cluster using Kubeadm", description: "Integrating AWS Secret Manager In AWS EKS", tags: [Tag.KUBERNETES,Tag.DEVOPS,Tag.CONTAINERS]},
      
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
}
