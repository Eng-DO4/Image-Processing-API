# Image-Processing-API

1st Project on APIs for Udacity nano degree course "Avanced Full-Stack Web Development".

The project is for Resizing an image using Sharp: The API fetch the image inputted in query then sharp resizes it and returns it again with the new width and height

### Commands to run in terminal

After downloading the project from GitHub run the commands in root directory 

0. `npm i` to install all dependencies
1. `npm run build` to build js files from ts files
2. `npm run start` to build then start the live server at main endpoint
3. `npm run check` to check formating with prettier
4. `npm rum format` to format all files found by check using prettier
5. `npm run lint` to make eslint check errors and warnings
6. `npm run lint:f` to fix all errors and warnings in ts files

### End-points for the API

1. `http://localhost:3000/` main end-point => greeting users
2. `http://localhost:3000/resize?name={name}&width={width}&height={height}`
