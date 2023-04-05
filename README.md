# Ohjeita

## Luo react sovellus testeineen paikalliseen ympäristöön 

### Uusi react app 

    npx create-react-app react-app-1

### Kokeile (http://localhost:3000/ oletus) 

    npm start 

### Aja testit 

    npm run test 

### Käännä koodit (kääntää koodin jsx->html/js ja jos esim. webpack, niin pakkaa myös)

    npm run build 

### Siirrä testit src/test hakemistoon, jotta selkeämpää

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

### Lisää Counter.test.js test-hakemistoon

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

### Asenna kaikki lintterit ohjeella:

    https://binary-studio.com/2021/12/21/lint-your-project-with-github-actions/

### Testaa lintterit (jos haluat ohittaa, niin yksi tapa on poistaa käynnistys package.json tiedostosta)

    npm run lint

### Testaa testien kattavuus    
    
    npm test -- --coverage

### Testaa testien kattavuus    
    
    npm test -- --coverage

### Lokaaliympäristöon nyt done

## Vie koodit Githubiin ja tee CI/CD

### Luo repository, kloonaa, kopioi sovellus ja vie koodit Githubiin

1. Luo Githubissa repository ja tee siitä public (huom. näkyy muille)
2. Kloonaa se sun koneelle paikalliseen hakemistoon. Yksi helppo tapa on 

    -   Avaa VSCode (ei väliä mistä tai mitä sisältää) 
    -   Paina shift+ctrl+p
    -   Kirjoita ja valitse Git:clone
    -   Laita urliksi Githubin repon urli (se löytyy Githubin vihreästä code painikkeesta)
    -   Valitse mikä tahansa paikka sun koneelta
    -   Sulje VSCode tässä hakemistossa

3. Kopioi kaikki reat-app tiedostot äsken kloonattuun hakemistoon
4. Avaa VSCode
5. Git huomaa uudet tiedostot. Lisään ne paikalliseen gitiin.
    
    -   Painamalla plussaa, joka muuttaa niiden tilaksi : a = added
    -   Tekemällä commitin, jonka jälkeen muutokset on tallessa paikallisessa gitissä

5. Tee push paikallisesta gitistä Githubiin (sama kuin git push -u REMOTE-NAME BRANCH-NAME eli usein 'git push -u origin main')
6. Varmista, että koodit tuli Githubiin 

## Lisää Continuous Integration (CI) Github Actionilla
    
1. Paina Githubissa actions painiketta
2. Valitse: Configure -> Continuous Integration -> Node.js
3. Muuta jos haluat skriptiä

    -   Oletus asentaa sovelluksen ubuntuun, kääntää koodit ja ajaa testit git muutoksissa
    -   Lintterien ajo kannattaa lisätä jossain vaiheessa

4. Tee commit, jonka jälkeen action kiinnittyy sovellukseen ja CI käytössä
5. Valitse actions ja kokeile, että CI toimii

## Asenna sovellus Github Pagesiin

1. Lisää paikallisessa hakemistossa nodeen tuki gh-pagesiin

Asenna:

    npm install gh-pages --save-dev

2. Lisää package.json tiedostoon (vaikka ekaksi riviksi) 

Rivi:

    "homepage": "http://username.github.io/repositoryn",

Esimerkikki:

    "homepage": "http://eswe74.github.io/repo_1",
    
3. Lisää package.json tiedoston script kohtaan (esim. startin alle)

Rivit:

    "predeploy": "npm run build",

    "deploy": "gh-pages -d build",

4. Tee commit ja push (commit + sync painike)

5. Suorita asennus paikallisesta ympäristössä 

Ajamalla:

    npm run deploy

Ilmoituksessa pitäisi lukea mm. Compiled succesfully, File sizes after gzip, project was built ja erityisesti Published.

Nyt Githubiin on ilmestynyt uusi branch: gh-pages (joka näkyy kaikille). 

Tarkempia tietoja pages sivustosta löytyy: Settings -> Pages. Sieltä voi esimerkiksi käydä katsomassa miltä sovellus näyttää.


## Lisää automaattinen asennus eli Continuous Delivery (CD) aikaisemmin tehtyyn skriptiin. 

Tarkat ohjeet CD vaiheesta löytyy täältä:

https://dev.to/dyarleniber/setting-up-a-ci-cd-workflow-on-github-actions-for-a-react-app-with-github-pages-and-codecov-4hnp


## Nyt CI/CD on käytössä!