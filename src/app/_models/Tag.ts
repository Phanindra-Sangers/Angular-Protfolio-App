export class Tag { 

    static readonly ANGULAR = new Tag('Angular','red');
    static readonly TERRAFORM = new Tag('Terraform','darkred');
    static readonly KUBERNETES = new Tag('Kubernetes','red');
    static readonly AWS = new Tag('Aws','orange');
    static readonly CONTAINERS = new Tag('containers','red');
    static readonly DEVOPS = new Tag('DevOps','blue');
    private constructor(private readonly key: string, public readonly color: string){
    }

    toString(){
        return this.key;

    }
}