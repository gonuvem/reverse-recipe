import React from 'react';
import { Story } from '@storybook/react';

import RecipeCard, { RecipeCardProps } from '../RecipeCard';

export default {
  title: 'Recipe Card',
}

const Template: Story<RecipeCardProps> = args => <RecipeCard {...args} />

const defaultRecipe = {
  cover: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  title: 'Receita A',
  totalIngredients: 10,
  matchedIgredients: 5,
  steps: [
    'Step 01',
    'Step 02',
    'Step 03'
  ]
}

export const Default = Template.bind({});
Default.args = {
  recipe: { ...defaultRecipe },
  isSelected: false,
}

export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
  isSelected: true,
}

export const WithoutRecipeCover = Template.bind({});
WithoutRecipeCover.args = {
  ...Default.args,
  recipe: { ...defaultRecipe, cover: undefined }
}

export const RecipeTitleLarger = Template.bind({});
RecipeTitleLarger.args = {
  ...Default.args,
  recipe: {
    ...defaultRecipe,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }
}

export const ManySteps = Template.bind({});
ManySteps.args = {
  ...Default.args,
  recipe: {
    ...defaultRecipe,
    steps: [
      'Step 01',
      'Step 02',
      'Step 03',
      'Step 04',
      'Step 05',
      'Step 06',
      'Step 07',
    ]
  }
}

export const StepTooLarge = Template.bind({})
StepTooLarge.args = {
  ...Default.args,
  recipe: {
    ...defaultRecipe,
    steps: [
      'Step 01',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    ]
  }
}