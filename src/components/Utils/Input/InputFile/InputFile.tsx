import { ReactNode } from 'react';
import LabelFile from '../../Label/LabelFile/LabelFile';
import Input from '../Input';
import InputFileStyled from './InputFile.styled';

class InputFile extends Input {
  render(): ReactNode {
    return (
      <LabelFile
        attrs={{ htmlFor: this.props.label?.htmlFor || this.props.attrs?.id }}
        text={this.props.label?.text}
      >
        <InputFileStyled
          attrs={{ ...this.props.attrs }}
          onChange={(event) =>
            this.props.event?.updateValuesPersonalPhotoEvent &&
            this.props.event?.updateValuesPersonalPhotoEvent(event)
          }
        />
      </LabelFile>
    );
  }
}

export default InputFile;
