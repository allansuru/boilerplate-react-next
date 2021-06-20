import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default',
    author: 'author default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'title basic',
  description: 'description basic',
  author: 'author default'
}

export const Default: Story = (args) => <Main {...args} />

export const RealLife: Story = (args) => <Main {...args} />
RealLife.args = {
  title: 'React Avançado',
  description: 'Estudos de React Avançado',
  author: 'Allan Passos'
}
