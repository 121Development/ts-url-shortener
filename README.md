## Steps:
npx create-next-app --ts

Initiate DB on Planetscale

Install planetscale CLI https://github.com/planetscale/cli

Set .env DB variable to...

Prisma-Planetscale

Set up Prisma and Planetscale https://planetscale.com/docs/tutorials/prisma-quickstart  

Connect to DB $ pscale connect ts-url-shortener main --port 3309

```
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

