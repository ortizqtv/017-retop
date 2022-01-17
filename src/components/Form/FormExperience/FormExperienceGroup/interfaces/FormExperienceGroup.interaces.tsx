/* eslint-disable no-unused-vars */

interface FormExperienceGroupProps {
  attrs?: {
    print?: boolean;
    rtlTestID?: {
      btn?: {
        experience?: string;
        education?: string;
      };
      form?: string;
    };
  };
  fns?: {
    addExperienceGroup?: () => void;
    addEducationGroup?: () => void;
    removeExperienceGroup?: (position: number) => void;
    removeEducationGroup?: (position: number) => void;
  };
  position?: number;
  value?: {
    position?: string;
    company?: string;
    date?: string;
    description?: string;
  };
}

export default FormExperienceGroupProps;