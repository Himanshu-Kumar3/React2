# React 
this is a repo for react class

# parcel
- Dev Build
- Local server
- HMR - Hot Module Replacement
- File watching algorithm :- Written in C++
- Caching :- Build faster 
- Image Optimization
- Minification
- Bundle
- Compress our file
- Consistent hashing
- Code splitting
- Differential building :- Supports older browser
- Diagnostic
- Error handling 
- Can host proj. HTTPs
- Tree shaking :- Remove unused code
- Different dev and prod bundles



# App Layout
/**
 * Head
 * - logo
 * - nav-list
 * Body
 * - search
 * - rest-cards-container
 *   - rest-cards
 * Footer
 * - copyright
 * - links 
 * - adresses
 */



 # Routing
  - server side routing
  - client side routing
  
# Redux 
  - install @redux/toolkit and react-redux
  - build our store
  - connect to the store (react-redux)
  - create slice (cart slice)
  - dispatch (action)
  - selector (subscribing to the store)
  
# Testing :
 - Unit Testing
 - Integration testing
 - e2e testing (end-to-end)

# Setting up testing in our app 
 - install @testing/library-react
 - install jest
 - install babel and some additional 
 - configure babel - babel.config.js  in root  file -> copy and paste
 - configure parcel config file   to disable the default babel transpilation
 - configure jest - npm init jest@latest  ->installed and in jest.config.js ->testEnvironment: "jest-fixed-jsdom" 
 - install jsdom library
 - install preset -> npm i -D @babel/preset-react -> so that jsx code  in the test file can be transpiled
 - install @testing-library/jest-dom -> npm i -D @testing-library/jest-dom
 - npm install --save-dev @types/testing-library__jest-dom -> For intellisence in the testFile after expect().