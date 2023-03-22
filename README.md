[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Ana-Coronel-Final-Project-front-202301-bcn&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Ana-Coronel-Final-Project-front-202301-bcn)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Ana-Coronel-Final-Project-front-202301-bcn&metric=coverage)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Ana-Coronel-Final-Project-front-202301-bcn)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Ana-Coronel-Final-Project-front-202301-bcn&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Ana-Coronel-Final-Project-front-202301-bcn)

# **Go and Padel**
Go and Padel is an app website to manage paddle matches and let the users join them.

![Login](/src/utils/images/login.webp)
![Home](/src/utils/images/list.webp)

[Visit Go and Padel](https://ana-coronel-final-project-front-2023.netlify.app/)

## **Features**

- Create paddle matches
- Delete matches
- Secure authentication to create matches checking the existence of a token

## **Tech Stack**

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
[![NGRX badge](https://img.shields.io/badge/-NGRX-333333?style=flat&logo=ReactiveX&logoColor=a829c3)](https://github.com/ngrx)&nbsp;
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

- Angular: a popular frontend class-based framework for building web applications
- Ngrx: a Redux-inspired state management library for Angular apps
- SCSS: a CSS preprocessor that adds advanced features such as variables and nested rules
- Jest: a popular JavaScript testing framework
- Angular Testing Library: a library that makes it easier to test Angular components
- JSON web tokens: a JSON-based open standard for creating access tokens that can be securely transmitted between parties.

## **Future Implementations**

- Allow admins to modify matches
- Allow users to join matches
- Implement Auth Guard to protect routes
- Implement roles in database to know when the logged client is an user or an admin

## **Getting Started**

To get started using Go and Padel, you'll need to have the following tools installed in your device:

- **[Node.js](https://nodejs.org/en/)**
- **[Angular CLI](https://cli.angular.io/)**

Once you have these tools installed, you can clone the Go and Padel repository and install the dependencies by running the following commands:

After the dependencies have been installed, you can start the development server by running **`ng serve --open`** that opens the **`http://localhost:4200/`** automatically in your web browser.

## **Running Tests**

Go and Padel uses Jest and Angular Testing Library for unit and integration tests. To run the test suite, use the **`npm test`** command.

## **Deployment**

To deploy Go and Padel to a production environment, run the **`ng build`** command to build a production-ready version of the app. This will generate a **`dist`** directory containing the compiled code, which you can then serve using a static file server.

## **Backend**

You can check for the backend project that complements this in **[Go and Padel backend](https://github.com/isdi-coders-2023/Ana-Coronel-Final-Project-back-202301-bcn)**
