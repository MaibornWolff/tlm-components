import '../../global/global.css';

export default {
  title: 'Components/Textfield',
  component: 'mw-textfield',
  argTypes: {
    value: {
      description: 'Input value',
      control: {
        type: 'text',
        default: null,
      },
    },
  },
};

const DefaultTemplate = args => `
<mw-textfield
  test-id="${args.testId}"
  disabled="${args.disabled}"
  type="${args.type}"
  value="${args.value}"
  name="${args.name}"
  label="${args.label}"
  placeholder="${args.placeholder}"
  helper-text="${args['helper-text']}"
  has-error="${args['has-error']}"
  required="${args.required}"
  inline="${args.inline}"
>
</mw-textfield>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
  testId: 'textfield',
  value: '',
  disabled: false,
  type: 'text',
  name: 'test-input',
  label: '',
  placeholder: '',
  'helper-text': '',
  'has-error': false,
  required: false,
  inline: false,
};

export const Label = DefaultTemplate.bind({});
Label.args = {
  testId: 'textfield',
  value: '',
  disabled: false,
  type: 'text',
  name: 'test-input',
  label: 'Input Label',
  placeholder: '',
  'helper-text': '',
  'has-error': false,
  required: false,
  inline: false,
};

export const Placeholder = DefaultTemplate.bind({});
Placeholder.args = {
  testId: 'textfield',
  value: '',
  disabled: false,
  type: 'text',
  name: 'test-input',
  label: '',
  placeholder: 'Type something...',
  'helper-text': '',
  'has-error': false,
  required: false,
  inline: false,
};

export const HelperText = DefaultTemplate.bind({});
HelperText.args = {
  testId: 'textfield',
  value: '',
  disabled: false,
  type: 'text',
  name: 'test-input',
  label: '',
  placeholder: 'Type something...',
  'helper-text': 'helper text',
  'has-error': false,
  required: false,
  inline: false,
};

export const ErrorState = DefaultTemplate.bind({});
ErrorState.args = {
  testId: 'textfield',
  value: 'wrong input',
  disabled: false,
  type: 'text',
  name: 'test-input',
  label: '',
  placeholder: 'Type something...',
  'helper-text': 'error text',
  'has-error': true,
  required: false,
  inline: false,
};

export const Required = DefaultTemplate.bind({});
Required.args = {
  testId: 'textfield',
  value: '',
  disabled: false,
  type: 'text',
  name: 'test-input',
  label: 'Name',
  placeholder: '',
  'helper-text': '',
  'has-error': false,
  required: true,
  inline: false,
};

export const Inline = DefaultTemplate.bind({});
Inline.args = {
  testId: 'textfield',
  value: 'Some value',
  disabled: false,
  type: 'text',
  name: 'test-input',
  label: 'Name',
  placeholder: '',
  'helper-text': 'helper text',
  'has-error': false,
  required: true,
  inline: true,
};

const IconStartTemplate = args => `
<mw-textfield
  test-id="${args.testId}"
  disabled="${args.disabled}"
  type="${args.type}"
  value="${args.value}"
  name="${args.name}"
  label="${args.label}"
  placeholder="${args.placeholder}"
  helper-text="${args['helper-text']}"
  has-error="${args['has-error']}"
  required="${args.required}"
  inline="${args.inline}"
>
  <mw-icon icon="search" slot="icon-start"></mw-icon>
</mw-textfield>`;

export const WithIconStart = IconStartTemplate.bind({});
WithIconStart.args = {
  testId: 'textfield',
  value: 'Some value',
  disabled: false,
  type: 'text',
  name: 'test-input',
  label: 'Name',
  placeholder: '',
  'helper-text': 'helper text',
  'has-error': false,
  required: true,
  inline: false,
};

const IconEndTemplate = args => `
<mw-textfield
  test-id="${args.testId}"
  disabled="${args.disabled}"
  type="${args.type}"
  value="${args.value}"
  name="${args.name}"
  label="${args.label}"
  placeholder="${args.placeholder}"
  helper-text="${args['helper-text']}"
  has-error="${args['has-error']}"
  required="${args.required}"
  inline="${args.inline}"
>
  <mw-icon icon="search" slot="icon-end"></mw-icon>
</mw-textfield>`;

export const WithIconEnd = IconEndTemplate.bind({});
WithIconEnd.args = {
  testId: 'textfield',
  value: 'Some value',
  disabled: false,
  type: 'text',
  name: 'test-input',
  label: 'Name',
  placeholder: '',
  'helper-text': 'helper text',
  'has-error': false,
  required: true,
  inline: false,
};

const IconStartEndTemplate = args => `
<mw-textfield
  test-id="${args.testId}"
  disabled="${args.disabled}"
  type="${args.type}"
  value="${args.value}"
  name="${args.name}"
  label="${args.label}"
  placeholder="${args.placeholder}"
  helper-text="${args['helper-text']}"
  has-error="${args['has-error']}"
  required="${args.required}"
  inline="${args.inline}"
>
  <mw-icon icon="search" slot="icon-start"></mw-icon>
  <mw-icon icon="close" slot="icon-end"></mw-icon>
</mw-textfield>`;

export const WithIconBoth = IconStartEndTemplate.bind({});
WithIconBoth.args = {
  testId: 'textfield',
  value: 'Some value',
  disabled: false,
  type: 'text',
  name: 'test-input',
  label: 'Name',
  placeholder: '',
  'helper-text': 'helper text',
  'has-error': false,
  required: true,
  inline: false,
};
