import { MyButton } from "./MyButton";

export default {
    title: 'MyButton',
    component: MyButton,
    argTypes: {
        type: {
            type: 'string',
            description: 'choose style',
            defaultValue: 'checked',
            control: {
                type: "radio",

            },
            options: ['checked', 'error', 'disabled', 'input-style'],

        },
        isDisabled: {
            control: 'boolean'
        },
        text: {
            type: 'string',
            description: 'button text',
        }

    }
}

const Template = (arg) => <MyButton {...arg} />

export const Default = Template.bind({})

Default.args = {
    type: 'primary'
}

// export const Default = () => <MyButton>Кнопка</MyButton>