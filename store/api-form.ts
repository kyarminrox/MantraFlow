import { create } from 'zustand';

export type AuthType = 'none' | 'apiKey' | 'oauth2' | 'jwt';
export type ApiType = 'rest' | 'graphql';
export type DatabaseType = 'postgresql' | 'mongodb' | 'mysql' | 'none';

interface Endpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  description: string;
}

interface ApiFormState {
  isOpen: boolean;
  step: number;
  formData: {
    name: string;
    description: string;
    baseUrl: string;
    authType: AuthType;
    apiType: ApiType;
    databaseType: DatabaseType;
    endpoints: Endpoint[];
    githubRepo: string;
  };
  setOpen: (open: boolean) => void;
  setStep: (step: number) => void;
  updateFormData: (data: Partial<ApiFormState['formData']>) => void;
  addEndpoint: (endpoint: Endpoint) => void;
  removeEndpoint: (index: number) => void;
  resetForm: () => void;
}

const initialFormData = {
  name: '',
  description: '',
  baseUrl: '',
  authType: 'none' as AuthType,
  apiType: 'rest' as ApiType,
  databaseType: 'none' as DatabaseType,
  endpoints: [],
  githubRepo: '',
};

export const useApiFormStore = create<ApiFormState>((set) => ({
  isOpen: false,
  step: 0,
  formData: initialFormData,
  setOpen: (open) => set({ isOpen: open }),
  setStep: (step) => set({ step }),
  updateFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
  addEndpoint: (endpoint) =>
    set((state) => ({
      formData: {
        ...state.formData,
        endpoints: [...state.formData.endpoints, endpoint],
      },
    })),
  removeEndpoint: (index) =>
    set((state) => ({
      formData: {
        ...state.formData,
        endpoints: state.formData.endpoints.filter((_, i) => i !== index),
      },
    })),
  resetForm: () => set({ formData: initialFormData, step: 0 }),
}));