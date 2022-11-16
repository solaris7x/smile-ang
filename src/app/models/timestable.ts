interface TimestableType {
  facultyId: string;
  subject: string;
  batch: string;
  startTime: string;
  endTime: string;
  duration?: string;
}

export class Timestable implements TimestableType {
  constructor(
    public facultyId: string,
    public subject: string,
    public batch: string,
    public startTime: string,
    public endTime: string,
    public duration?: string
  ) {}
}
