# Ohjeita

## Luo react sovellus testeineen paikalliseen ympäristöön 

### Luo react app 

    npx create-react-app react-app-1

### Kokeile (http://localhost:3000/ oletus) 

    npm start 

### Aja testit 

    npm run test 

### Käännä koodit (kääntää koodin jsx->html/js ja jos esim. webpack, niin pakkaa myös)

    npm run build 

### Siirrä testi src/test hakemistoon

### Lisää Counter.js koodiin

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

### Lisää Counter.test.js

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

1. Luo Githubissa repository ja tee siitä private (ei näy muille!)
2. Kloonaa se sun koneelle paikalliseen hakemistoon. Yksi helppo tapa on 

    1. Avaa VSCode (ei väliä mistä tai mitä sisältää) 
    2. Paina shift+ctrl+p
    3. Kirjoita ja valitse Git:clone
    4. Laita urliksi Githubin repon urli (se löytyy Githubin vihreästä code painikkeesta)
    5. Valitse mikä tahansa paikka sun koneelta
    6. Sulje VSCode tässä hakemistossa

3. Kopioi kaikki reat-app tiedostot äsken kloonattuun hakemistoon
4. Avaa VSCode
5. Git huomaa uudet tiedostot. Lisään ne paikalliseen gitiin.
    
    1. Painamalla plussaa, joka muuttaa niiden tilaksi : a = added
    2. Tekemällä commitin, jonka jälkeen muutokset on tallessa paikallisessa gitissä

5. Tee push paikallisesta gitistä Githubiin (sama kuin git push -u REMOTE-NAME BRANCH-NAME eli usein 'git push -u origin main')
6. Varmista, että koodit tuli Githubiin 

## Lisää Continuous Integration (CI) Github Actionilla
    
1. Paina Githubissa actions painiketta
2. Valitse: Configure -> Continuous Integration -> Node.js
3. Muuta jos haluat skriptiä
    - oletus asentaa sovelluksen ubuntuun, kääntää koodit ja ajaa testit git muutoksissa
    - Lintterien ajo kannattaa lisätä jossain vaiheessa
4. Tee commit, jonka jälkeen action kiinnittyy sovellukseen ja CI käytössä
5. Valitse actions ja kokeile, että CI toimii

## Asenna sovellus eli tee Continuous Delivery (CD) Github Actionilla Github Pagesiin

1. Lisää paikallisessa hakemistossa nodeen tuki gh-pagesiin

    npm install gh-pages --save-dev

2. Lisää package.json tiedostoon (vaikka ekaksi riviksi) 

    "homepage": "http://username.github.io/repositoryn",

Esimerkiksi

    "homepage": "http://eswe74.github.io/repo_1",

3. Lisää package.json tiedoston script kohtaan kaksi uutta riviä (esim. startin alle)

    "predeploy": "npm run build",
    "deploy : "gh-pages -d build",