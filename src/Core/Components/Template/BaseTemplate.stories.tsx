import { Meta, StoryFn } from "@storybook/react";

import BaseTemplate, { IBaseTemplate } from "./BaseTemplate";
import { baseTemplateMockProps } from "./BaseTemplate.mocks";

export default {
  component: BaseTemplate,
  title: "Templates/BaseTemplate",
  argTypes: {},
} as Meta<typeof BaseTemplate>;

const Template: StoryFn<typeof BaseTemplate> = args => <BaseTemplate {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...baseTemplateMockProps.base,
} as IBaseTemplate;
