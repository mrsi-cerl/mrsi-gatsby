// So we can import svg files in tsx
declare module "*.svg" {
  const content: any;
  export default content;
}
// Ditto for png files
declare module "*.png" {
  const content: any;
  export default content;
}
