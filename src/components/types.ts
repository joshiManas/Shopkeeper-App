export type CustomerType = {
  id: number;
  name: string;
  items: number;
  amount: number;
  deleted: true | false;
  display: boolean;
};

export type CustomerState = {
  customerList: CustomerType[];
  selectedCustomerId: number | null;
  showModal: {
    action: boolean;
    customerId: number | null;
  };
};

export type GlobalState = {
  customer: CustomerState;
};
