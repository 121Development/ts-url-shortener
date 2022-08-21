## Info

This is a bare bones Next, Prisma and Planetscale URl shortener. It does not validate duplicated, provide a UI or other. This is as proof of concept of next and working together with Prisma and Planetscale.

## Steps:

- First create Next app: 

npx create-next-app --ts

Initiate DB on Planetscale

Install planetscale CLI https://github.com/planetscale/cli

Set .env DB variable according to Planetscale connect promt

- Then set up Planetscale and Prisma: https://planetscale.com/docs/tutorials/prisma-quickstart  

```
#Connect to DB 
$ pscale connect ts-url-shortener main --port 3309

#Push changes
$ npx prisma db push

#Inspect schema in webbrowswer
$ npx prisma studio

#Generate client
$ npx prisma generate

# create src folder
$ mkdir src

#Move folders (styles, pages, public) into src
Inspect project

$ npm run dev 
https://localhost:3000
```

