import { createContext, useContext, useState, ReactNode } from 'react';
import ApplicationFormModal from '@/components/ApplicationFormModal';

interface ApplicationFormContextType {
  openApplicationForm: () => void;
}

const ApplicationFormContext = createContext<ApplicationFormContextType>({ openApplicationForm: () => {} });

export const useApplicationForm = () => useContext(ApplicationFormContext);

export const ApplicationFormProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <ApplicationFormContext.Provider value={{ openApplicationForm: () => setOpen(true) }}>
      {children}
      <ApplicationFormModal open={open} onClose={() => setOpen(false)} />
    </ApplicationFormContext.Provider>
  );
};
