import React from "react";
import CardCover from './index';

export default {
  title: 'Cards/cardcover',
  component: CardCover,
  argTypes: {
    backgroundColor: { control: "color"},
  },
};

const Template = (args) => <CardCover {...args}></CardCover>

export const cardCover = Template.bind({});

cardCover.args ={
  title : 'Queen experience in concert - Porto Alegre',
}