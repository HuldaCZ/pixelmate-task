export interface ButtonPropsI {
  onClick: () => void;
  text: string;
  design: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export interface NavbarPropsI {
  dark: boolean;
}

interface Address {
  street: string;
  city: string;
  zipcode: string;
}

export interface UserI {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
}

export interface DesignerCardI {
  user: UserI;
}

export interface SearchFieldPropsI {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ModalPropsI {
  onClose: () => void;
}
