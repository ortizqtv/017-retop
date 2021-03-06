import { Component, ReactElement } from 'react';
import FormEducationStyled from './FormEducation.styled';
import FormEducationGroup from './FormEducationGroup/FormEducationGroup';
import Legend from '../../Utils/Legend/Legend';
import ButtonAdd from '../../Utils/Button/ButtonAdd/ButtonAdd';
import FormEducationProps from './interfaces/FormEducation.interfaces';
import Section from '../../Utils/Section/Section';

class FormEducation extends Component<FormEducationProps> {
  constructor(props: FormEducationProps) {
    super(props);
  }
  render(): ReactElement {
    const formEducationGroup = this.props.education?.group?.map(
      (object, index) => {
        return (
          <FormEducationGroup
            fns={{
              updateGroupRemoveObject: this.props.fns?.updateGroupRemoveObject,
              updateValuesGroupObject: this.props.fns?.updateValuesGroupObject
            }}
            group='education'
            key={index}
            position={index}
            value={{ ...object }}
            rtlTestID={{ ...this.props.rtlTestID }}
          />
        );
      }
    );

    const btnAddEvent = this.props.fns?.updateGroupAddObject;

    return (
      <Section>
        <FormEducationStyled>
          <Legend>education \⤥</Legend>
          {formEducationGroup}
          <ButtonAdd
            attrs={{
              type: 'button',
              value: 'add'
            }}
            event={{ btnAddEvent }}
            group='education'
          >
            add education
          </ButtonAdd>
        </FormEducationStyled>
      </Section>
    );
  }
}

export default FormEducation;
