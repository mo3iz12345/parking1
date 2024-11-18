import { html } from "hono/html";
type Props={
children: any,
pageTitle:String
}
export const Layout = ( { children}:Props) => html`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,
initial-scale=1.0">
<title></title>
</head>
<body>
${children}
</body>
</html>`;
