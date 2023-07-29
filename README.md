# Boilerplate Nextjs + Typescript + Styled Components

Boilerplate for a NextJS App built using Typescript and Styled Components

## Tech stack

- [Nextjs](https://nextjs.org/)
- [Styled-components](https://styled-components.com/docs/api)
- Typescript

---

## Run server

1. Install dependencies

```
npm install
```

2. Start server

```
npm run dev
```

You can access your server at http://localhost:3000/

---

## Theme

This boilerplate comes with a Default Theme already defined. To update your theme, declare your theme type in [/styles/theme/styled.d.ts](/styles/theme/styled.d.ts).

If you want to add more themes, define them inside [`lib`](/styles/theme/lib/) folder and add them to the `Themes` object in [/styles/theme/lib/index.ts](/styles/theme/lib/index.ts)

---

## Layout

This boilerplate integrates support for screen responsiveness, by providing css helpers to easily change the visibility of your components via props.

These helpers can be found at [/styles/layout.ts](/styles/layout.ts).
Here's an example on how to use these helpers when creating a component.

    const MyResponsiveComponent = styled.div<LayoutProps>`
        ${(props) => css`
            ${layout.apply(props)};
        `}
    `;

then you can do:

```jsx
<MyResponsiveComponent hideOnMobile mdMgt={16}>
```

Layout constrains are defined in [/styles/layout.types.ts](/styles/layout.types.ts).
