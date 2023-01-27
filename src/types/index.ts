

export interface iCropperOptions {
  viewMode: number;
  dragMode: string;
  aspectRatio: number
}


export interface iColor {
  100: string;
  200: string;
  600: string;
  700: string;
}

export interface iObserver {
  pLabel: string; // parent label
  cLabel: string; // child label
  direction: string; // direction of scroll 
}

export interface iUpload {
  path: string;
  name: string;
  file: string;
  type: string;
}

export interface iGlobalState {
  fromRoute: string;
  toRoute: string;
}

export interface iDataApiOptions {
  column: string;
  value: string;
  table: string;
  update?: any;
  foreignkey: string;
}

export interface iAuthType {
  key: string,
  value: string;
}

export interface iRoute {
  fromRoute: string;
  toRoute: string;
}

export interface iDynamicObject {
  // 👇️ key         value
  [key: string]: string | number;
}

export interface iSwitch {
  enabled: boolean;
  left: string;
  right: string;
}

export interface iNoteDetail {
  note_title: string;
  note_description: string;
  event_string_id: string;
}

export interface iFWData {
  link: string;
}

export interface iFWResponse {
  data: iFWData
  message: string;
  status: string;
}

export interface iCustomer {
  email: string;
  phonenumber: string;
  name: string;
}

export interface iDonate {
  amount: string;
  currency: string;
  customer: iCustomer;
}