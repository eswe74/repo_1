# Ohjeita

## Luo react app 

    ### `npx create-react-app react-app-1`

## Kokeile (http://localhost:3000/ oletus) 

    ### `npm start` 

## Aja testit 

    ### `npm run test` 

## Käännä (kääntää koodin jsx->html/js)

    ### `npm run build` 

## Asenna js lintteri

    ### `npm install eslint --global`

## Asenna style-lintteri

    ### `npm install stylelint stylelint-config-standard -DE`

## Asenna editor-lintteri

    ### `npm install editorconfig-checker -DE`

## Asenna ls lintteri (filename ja directory)

    ### `npm install @ls-lint/ls-lint -DE`

## Lisää lintterit package.json tiedostoon

    ### `"lint": "npm run lint:ls && npm run lint:editorconfig && npm run lint:css && npm run lint:js"`

## Testaa lintterit

    ### `npm run lint`

## Testaa testien kattavuus    
    
    ### `npm test -- --coverage`

## Testaa testien kattavuus    
    
    ### `npm test -- --coverage`

## Lokaaliympäristöon nyt done

## Vie koodit Githubiin

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

    5. Tee push paikallisesta gitistä Githubiin (sama kuin git push REMOTE-NAME BRANCH-NAME)
    6. Varmista, että koodit tuli Githubiin 

## Lisää Continuous Integration (CI) Github Actionilla
    
    1. Paina Githubissa actions painiketta
    2. Valitse: Configure -> Continuous Integration -> Node.js
    3. Muuta jos haluat skriptiä
        - oletus asentaa sovelluksen ubuntuun, kääntää koodit ja ajaa testit git muutoksissa
        - Lintterien ajo kannattaa lisätä jossain vaiheessa
    4. Tee commit, jonka jälkeen action kiinnittyy sovellukseen ja CI käytössä
    5. Valitse actions ja kokeile, että CI toimii

## Lisää Continuous Delivery (CD) Github Actionilla



