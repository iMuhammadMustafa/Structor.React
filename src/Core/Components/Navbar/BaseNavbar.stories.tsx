import { ComponentMeta, ComponentStory } from "@storybook/react";

import BaseNavbar, { IBaseNavbar } from "./BaseNavbar";
import { baseNavbareMockProps } from "./BaseNavbar.mocks";

export default {
  component: BaseNavbar,
  title: "Templates/BaseNavbar",
  argTypes: {},
} as ComponentMeta<typeof BaseNavbar>;

const Template: ComponentStory<typeof BaseNavbar> = args => <BaseNavbar {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...baseNavbareMockProps.base,
} as IBaseNavbar;
