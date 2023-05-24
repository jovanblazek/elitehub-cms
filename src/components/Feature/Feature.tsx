/* eslint-disable */
import { storyblokEditable } from '@storyblok/react'

// TEMPORARY COMPONENT
// @ts-ignore 
export const Feature = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    {blok.name}
  </div>
);
 
