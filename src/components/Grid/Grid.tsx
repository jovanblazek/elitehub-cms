/* eslint-disable */
import { StoryblokComponent, storyblokEditable } from '@storyblok/react'

// @ts-ignore
const Grid = ({ blok }) => {
  return (
    <div className="grid" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok: unknown) => (
        // @ts-ignore
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
 
export default Grid;
