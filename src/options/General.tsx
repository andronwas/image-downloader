import { h } from '../dom';
import { Checkbox } from './Checkbox';
import { Fieldset } from './Fieldset';
import { InputEvent } from './InputEvent';
import { SetOption } from './SetOption';

export interface GeneralOptions {
  show_download_confirmation: boolean;
  show_download_notification: boolean;
  show_file_renaming: boolean;
}

export const General = (props: { options: GeneralOptions, setOption: SetOption }) => (
  <Fieldset legend="General">
    <Checkbox
      checked={props.options.show_download_confirmation}
      onChange={(e: InputEvent) => props.setOption('show_download_confirmation', e.currentTarget.checked)}
      title="Requires confirmation when you press the Download button"
    >
      Show download confirmation
    </Checkbox>

    <br />

    <Checkbox
      checked={props.options.show_download_notification}
      onChange={(e: InputEvent) => props.setOption('show_download_notification', e.currentTarget.checked)}
      title="Flashes a message to let you know your download is starting"
    >
      Show <b>downloading</b> message
    </Checkbox>

    <br />

    <Checkbox
      checked={props.options.show_file_renaming}
      onChange={(e: InputEvent) => props.setOption('show_file_renaming', e.currentTarget.checked)}
      title="Lets you specify a new file name for downloaded files"
    >
      Show file renaming textbox
    </Checkbox>
  </Fieldset>
);
