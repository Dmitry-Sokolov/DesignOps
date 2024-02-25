import type { StoryObj } from '@storybook/vue3';

import tokenFile from "../../../../json/token.json";
import SettingsTable from './SettingsTable.vue';

const allColours: string[] = [];

const getAllColors = (object: any = {}, base = `-`) => {

  Object.entries(object).reduce((css, [key, value]) => {
    let newBase: string = base + (object instanceof Array ? "" : `-${key}`);
    if (typeof value !== "object") {
      allColours.push(newBase);
      return css + newBase;
    }
    return css + getAllColors(value, newBase)
  }, ``)
}
getAllColors({ color: tokenFile.color })
console.log(allColours)

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'SettingsTable',
  component: SettingsTable,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    headerBackgroundColor: { control: 'select', options: [...allColours] },
    headerBorderBottomColor: { control: 'select', options: [...allColours] },
    headerGap: { control: 'select', options: []},
  },
  args: { headerBorderBottomColor: '--color-light-neutral-6',  headerBackgroundColor: '--color-light-neutral-1',  }, // default values
};

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
  },
};