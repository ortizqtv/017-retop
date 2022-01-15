import { Component, ReactNode } from 'react';
import ButtonExample from '../Utils/Button/ButtonExample/ButtonExample';
import ButtonPrint from '../Utils/Button/ButtonPrint/ButtonPrint';
import ButtonReset from '../Utils/Button/ButtonReset/ButtonReset';
import FormStyled from './Form.styled';
import FormEducation from './FormEducation/FormEducation';
import FormExperience from './FormExperience/FormExperience';
import FormPersonal from './FormPersonal/FormPersonal';
import FormProps from './interfaces/Form.interfaces';

class Form extends Component<FormProps> {
  constructor(props: FormProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <FormStyled {...this.props.attrs}>
        <FormPersonal personal={{ ...this.props.values?.personal }} />
        <FormExperience
          experience={{ ...this.props.values?.experience }}
          events={{ ...this.props.events }}
        />
        <FormEducation
          education={{ ...this.props.values?.education }}
          events={{ ...this.props.events }}
        />
        <ButtonReset attrs={{ type: 'button', value: 'reset' }}>
          reset
        </ButtonReset>
        <ButtonExample attrs={{ type: 'button', value: 'example' }}>
          example
        </ButtonExample>
        <ButtonPrint attrs={{ type: 'button', value: 'print' }}>
          print
        </ButtonPrint>
      </FormStyled>
    );
  }
}

export default Form;
