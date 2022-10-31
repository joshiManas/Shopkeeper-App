export type CustomerType = {
  id: number;
  name: string;
  items: string;
  amount: string;
  deleted: boolean;
  display: boolean;
};

export type ModalType = {
  action: boolean;
  customerId: number | null;
};

export type CustomerState = {
  customerList: CustomerType[];
  selectedCustomerId: number | null;
  showModal: ModalType;
};

export type GlobalState = {
  customer: CustomerState;
};
