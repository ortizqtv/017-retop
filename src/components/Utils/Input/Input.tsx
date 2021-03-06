import { ChangeEvent, Component, ReactNode } from 'react';
import Label from '../Label/Label';
import InputStyled from './Input.styled';
import InputProps from './interfaces/Input.interfaces';

class Input extends Component<InputProps> {
  constructor(props: InputProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <Label
        attrs={{ htmlFor: this.props.label?.htmlFor || this.props.attrs?.id }}
        text={this.props.label?.text}
      >
        <InputStyled
          attrs={{ ...this.props.attrs }}
          onChange={(event) =>
            (this.props.event?.updateValuesPersonalEvent &&
              this.props.event?.updateValuesPersonalEvent(event)) ||
            (this.props.event?.updateValuesGroupObjectEvent &&
              this.props.event?.updateValuesGroupObjectEvent(
                event,
                this.props.group ?? '',
                this.props.position ?? 0
              ))
          }
        />
      </Label>
    );
  }
}

export default Input;
