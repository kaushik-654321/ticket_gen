import React, { useState, useContext, createContext, ReactNode } from "react";

interface FormContextType {
  formData: { [key: string]: string };
  updateFormData: (
    name: string,
    email: string,
    imageUrl: string,
    github: string
  ) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useForm = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const updateFormData = (
    name: string,
    email: string,
    imageUrl: string,
    github: string
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      name,
      email,
      imageUrl,
      github,
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
