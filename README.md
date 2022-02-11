# Image Processing API


## Introduction
This document is a specification of how you can use image processing API. You can use our API to resize images with specififc width and height. Image is resized when you reach the endpoint for the first time and store the image so when you request the same size again will load the stored image.
* Note: this is the first version, So it has a limited features.
        Also, you can use images from our library, only 5 images available now (santamonica.jpg - palmtunnel.jpg - icelandwaterfall.jpg - fjord.jpg - encenadaport.jpg) 

________________________________________________________________________________________________________________________________
________________________________________________ API Documentation _____________________________________________________________
________________________________________________________________________________________________________________________________

### Anatomy of an endpoint
```
/api/images?filename=[imageName]&width=[width-value]&height=[height-value]
```
### Request methods
| Method   | Description                              |
| -------- | ---------------------------------------- |
| `GET`    | Used to retrieve an image with new size. |

### Examples

| Method   | URL                                                       | Description                                                             |
| -------- | ----------------------------------------------------------| ------------------------------------------------                        |
| `GET`    | `/api/images?filename=encenadaport`                       | Retrieve the origin image which name encenadaport.jpg.                  |
| `GET`    | `/api/images?filename=encenadaport&width=200&height=100`  | Retrieve resized image with size 200x100 which name encenadaport.jpg.   |

### Queries
| Query key  | Type     | Description           |
| ---------- | -------- | ----------------------|
| `filename` | `String` | Name of the image.    |
| `width`    | `Int`    | Width of the image.   |
| `height`   | `Int`    | Height of the image.  |

### Errors
When an error occurs the user will get a text message shown in the browser whith the reason of the error.

__________________________________________________________________________________________________________________________________
________________________________________________ Running the Project _____________________________________________________________
__________________________________________________________________________________________________________________________________

### Setup the project locally 
1. Download the zip file locally.
2. Get inside the project directory using `cd` command.
3. install all dependencies using `npm install command`.

    #### Running the project locally in development mode
```
        npm run start
```
    #### Running the project locally in production mode
```
        npm run build
        node dist/index.js
```
#### the project will run on port 3000 | `localhost:3000`

### Testing
I am using Unittesting with jasmin in this project so to run tests you need to run this command :
```
    npm run test.
```
### code Formatting 
I am using Prettier and ESlint to format the code and reduce errors. To run Prettier and Lint scripts use this command :
```
    npm run prettier
    npm run lint
```

