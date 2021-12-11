export enum TransactionStatus {
  complete = "complete",
  fail = "fail",
  unknown = "unknown",
  draft = "draft",
  pending = "complete",
}

export class Transaction {
  id: string = "";
  referenceId: string = "";
  from: string = "";
  to: string = "";
  amount: string = "";
  deleted_at: Date = new Date();
  created_at: Date = new Date();
  updated_at: Date = new Date();
  status: TransactionStatus = TransactionStatus.unknown;
}
