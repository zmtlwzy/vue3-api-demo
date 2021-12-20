<template>
  <FormProvider :form="form">
    <SchemaField :schema="schema" />
  </FormProvider>
  <div>666</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  NInput,
  NInputGroup,
  NInputNumber,
  NSelect,
  NTreeSelect,
  NTransfer,
  NRadioGroup,
  NCheckbox,
  NCheckboxGroup,
  NAutoComplete,
  NCascader,
  NDatePicker,
  NColorPicker,
  NTimePicker,
  NSwitch,
  NUpload,
  NSlider,
  NRate,
  NFormItem
} from 'naive-ui';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField, ISchema } from '@formily/vue';

const { SchemaField } = createSchemaField({
  components: {
    NInput,
    NInputGroup,
    NInputNumber,
    NSelect,
    NTreeSelect,
    NTransfer,
    NRadioGroup,
    NCheckbox,
    NCheckboxGroup,
    NAutoComplete,
    NCascader,
    NDatePicker,
    NColorPicker,
    NTimePicker,
    NSwitch,
    NUpload,
    NSlider,
    NRate,
    NFormItem
  }
});

export default defineComponent({
  name: 'BasicForm',
  components: { FormProvider, SchemaField },
  setup() {
    const schema: ISchema = {
      type: 'object',
      properties: {
        input: {
          type: 'string',
          default: 66,
          'x-component': 'NSelect',
          'x-editable': true,
          'x-decorator': 'NFormItem',
          'x-decorator-props': {
            label: 'sdfsdf'
          },
          'x-component-props': {
            options: [
              {
                label: 'dsfsd',
                value: 66
              }
            ],
            onUpdateValue: val => {
              console.log(val, 'val');
            },
            onChange: undefined
          }
        }
      }
    };
    return {
      form: createForm(),
      schema
    };
  }
});
</script>
