export {}; // ensure this file is a module

declare global {
  interface Window {
    sellAuthEmbed?: {
      checkout: (
        element: any,
        options: { cart: any[]; shopId: number; modal: boolean }
      ) => void;
    };
  }
}
