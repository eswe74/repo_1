# Ohjeita

## Luo react sovellus paikalliseen ympäristöön 

### React app 

    npx create-react-app react-app-1

### Kokeile

    npm start 

Oletus http://localhost:3000/ 

### Aja testit 

    npm run test 

### Käännä koodit

    npm run build 

### Siirrä testit src/test hakemistoon 

Näin selkeämpää. 

### Lisää Counter.js komponentti

    import React, { useState } from "react";

    const Counter = () => {

        const [counter, setCounter] = useState(0);

        const incrementCounter = () => {
            setCounter((prevCounter) => prevCounter + 1);
        };

        const decrementCounter = () => {
            setCounter((prevCounter) => prevCounter - 1);
        };

        return (
            <>
                <button data-testid="increment" onClick={incrementCounter}>
                    +
                </button>
                <p data-testid="counter">{counter}</p>
                <button data-testid="decrement" onClick={decrementCounter}>
                    -
                </button>
            </>
        );
    };

    export default Counter;

Käytä App.js komponentista

### Lisää Counter.test.js 

Lisää test-hakemistoon.

    import { render, fireEvent, screen } from "@testing-library/react";
    import Counter from "../Counter";

    test("increments counter", () => {
    
        render(<Counter />);

        const counter = screen.getByTestId("counter");
        const incrementBtn = screen.getByTestId("increment");

        fireEvent.click(incrementBtn);

        expect(counter).toHaveTextContent("1");
    });

    it("increments counter with two button click", () => {
    
        render(<Counter />);

        const counter = screen.getByTestId("counter");
        const incrementBtn = screen.getByTestId("increment");

        fireEvent.click(incrementBtn);
        fireEvent.click(incrementBtn); 
        
        expect(counter).toHaveTextContent("2");
    });

### Asenna lintterit ohjeella:

    https://binary-studio.com/2021/12/21/lint-your-project-with-github-actions/

### Testaa lintterit 

    npm run lint

Jos haluat ohittaa, niin yksi tapa on poistaa käynnistys package.json tiedostosta.

### Testaa testien kattavuus    
    
    npm test -- --coverage

## Koodit Githubiin ja CI/CD käyttöön

### Luo repository, kloonaa, kopioi sovellus ja vie koodit Githubiin

1. Luo Githubissa repository ja tee siitä julkinen
2. Kloonaa se paikalliseen hakemistoon. Esimerkiksi: 

    -   Avaa VSCode -> shift+ctrl+p -> Git:clone
    -   Laita urliksi Githubin repon urli (löytyy Githubissa vihreästä code painikkeesta)
    -   Valitse mihin ladataaan
    -   Sulje VSCode

3. Kopioi kaikki reat-app tiedostot äsken kloonattuun hakemistoon
4. Avaa VSCode
5. Git huomaa uudet tiedostot ja lisään ne gitiin.

VSCodessa:    

    -   Painamalla plus-merkkiä, muutetaan tilaksi : a = added
    -   Painamalla committia, muutokset on tallessa paikallisessa gitissä
    -   Painamalla sync tekee pushin Githubiin (sama kuin git push -u REMOTE-NAME BRANCH-NAME eli usein 'git push -u origin main'
    -   Tarkista Githubista 

## Lisää Continuous Integration (CI) Github Actionilla
    
1. Paina Githubissa actions painiketta
2. Valitse: Configure -> Continuous Integration -> Node.js
3. Tee Actionille commit suoraan Githubissa ja nyt sekin osa sovellusta. 
4. Valitse actions ja kokeile, että CI toimii

## Asenna sovellus Github Pagesiin

Lisää paikallisesti tuki gh-pagesille

    npm install gh-pages --save-dev

Lisää package.json tiedostoon (vaikka ekaksi riviksi) 

    "homepage": "http://username.github.io/repositoryn",

Esimerkiksi:

    "homepage": "http://eswe74.github.io/repo_1",
    
Lisää package.json tiedoston script kohtaan (esim. startin alle):

    "predeploy": "npm run build",

    "deploy": "gh-pages -d build",

Tee commit ja push (commit + sync painike)

Suorita asennus paikallisesta ympäristössä 

    npm run deploy

Homma ok, jos kuittaa: 'Published'. Nyt Githubiin on luotu uusi branch gh-pages ja sovellus on asennettu sinne. 

Tarkempia tietoja pages sivustosta löytyy: Settings -> Pages. Sieltä voi esimerkiksi käydä katsomassa miltä sovellus näyttää.

## Lisää automaattinen asennus eli Continuous Delivery (CD) aikaisemmin tehtyyn skriptiin. 

Tarkat ohjeet CD vaiheesta löytyy täältä (kohdasta 'Now we are going to create a new access token, in order to deploy our application through the workflow.'):

https://dev.to/dyarleniber/setting-up-a-ci-cd-workflow-on-github-actions-for-a-react-app-with-github-pages-and-codecov-4hnp

## CI/CD done