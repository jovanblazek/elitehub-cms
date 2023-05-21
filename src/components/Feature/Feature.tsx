/* eslint-disable */
import { storyblokEditable } from '@storyblok/react'

// @ts-ignore 
const Feature = ({ blok }) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    {blok.name}
  </div>
);
 
export default Feature;
