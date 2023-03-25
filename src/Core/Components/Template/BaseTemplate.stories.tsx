import { ComponentMeta, ComponentStory } from "@storybook/react";

import BaseTemplate, { IBaseTemplate } from "./BaseTemplate";
import { baseTemplateMockProps } from "./BaseTemplate.mocks";

export default {
  component: BaseTemplate,
  title: "Templates/BaseTemplate",
  argTypes: {},
} as ComponentMeta<typeof BaseTemplate>;

const Template: ComponentStory<typeof BaseTemplate> = args => <BaseTemplate {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...baseTemplateMockProps.base,
} as IBaseTemplate;

export const Red = Template.bind({});
Red.args = {
  ...baseTemplateMockProps.red,
} as IBaseTemplate;

export const Blue = Template.bind({});
Blue.args = {
  name: "Blue!",
  backgroundColor: "blue",
} as IBaseTemplate;
