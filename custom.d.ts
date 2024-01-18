declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module 'react-slick' {
  const Slider: any; // Change 'any' to the actual type if available
  export default Slider;
}