export interface ITask {
    taskName: string;
    isDone: boolean;
    taskId: number;
    toggle?: (id: number) => void;
}
