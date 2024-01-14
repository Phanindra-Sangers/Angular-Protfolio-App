export class Tag { 

    static readonly ANGULAR = new Tag('Angular','pink');
    static readonly TERRAFORM = new Tag('Terraform','darkred');
    static readonly KUBERNETES = new Tag('Kubernetes','red');
    static readonly AWS = new Tag('Aws','orange');
    static readonly CONTAINERS = new Tag('containers','red');
    static readonly DEVOPS = new Tag('DevOps','blue');
    static readonly DOCKER = new Tag('Docker','yellow');
    private constructor(private readonly key: string, public readonly color: string){
    }

    toString(){
        return this.key;

    }
}