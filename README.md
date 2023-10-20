# Hi !

I wanted to apply my graphql experinces in this task. 
Installed apollo-graphql to query data from the graphql environment "https://unicorn-staging.eu.saleor.cloud/graphql/".

Created two hooks to get all products details and a single product details. 
There are four main components which are products lists, a single product details, header and cart.

Product tiles links to single product page.
Category buttons are to navigate to selected category products.


TO DO:
- Search feature is not completed
- Category page doesn't render correctly
- Render the image that is clicked in single product page
- Creating a CART_ITEMS query where I'll add products in the cart
- Creating an AddToCartHandle function
- Creating a CHECKOUT query to delete items in my cart
- Add a success page after check out completed
- Creating a REMOVE_CART_ITEMS to remove an item from cart
- Creating a RemoveItem function


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
