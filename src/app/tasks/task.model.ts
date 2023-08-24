export class CTask {
    Id: number ;
    Name: string ;
    Manager: string ;
    Type: string ;
    Duration: string;
    Status: string ;
    Department: string;

    constructor(taskId: number,
        taskName: string,
        taskManager: string,
        taskType: string,
        duration: string,
        taskStatus: string,
        department: string) {
        this.Id = taskId;
        this.Name = taskName;
        this.Manager = taskManager;
        this.Type = taskType;
        this.Duration = duration;
        this.Status = taskStatus;
        this.Department = department;
    }

}
