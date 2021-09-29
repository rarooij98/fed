# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
<summary>uitwerken voor kick-off werkgroep</summary>

### Auteur:
Robin van Rooij

#### Je startniveau:
Rode piste

#### Je focus:
Responsive
 
</details>





## Je website

<details open>
<summary>uitwerken voor kick-off werkgroep</summary>

### Je opdracht:
https://www.centraalmuseum.nl/nl

#### Screenshot(s) van de eerste pagina (small screen): 
homepage  
<img src="/images/1a.png" width="375px" alt="homepage van het centraal museum">

#### Screenshot(s) van de tweede pagina (small screen):
about us page; de witte tekst beweegt over de afbeelding heen omhoog als je scrolt
<img src="images/2b.jpg" width="375px" alt="about us page van het centraal museum">
 
</details>





## Breakdownschets (week 1)

<details>
<summary>uitwerken na afloop 2e werkgroep</summary>

### de hele pagina: 
<img src="images/breakdown-01.jpg" width="375px" alt="breakdown van de 1e pagina en menu">
<img src="images/breakdown-02.jpg" width="375px" alt="breakdown van de 2e pagina">

### dynamisch deel (bijv menu): 
<img src="images/carousel.jpg" width="375px" alt="breakdown van image carousel">
// kan ook de lijst in een flexbox zetten en overflow:scroll gebruiken
<img src="images/navigation.jpg" width="375px" alt="breakdown van de navigatie"> 
<img src="images/scroll.jpg" width="375px" alt="breakdown van het text over image scrollen">

</details>





## Voortgang 1 (week 2)

<details>
<summary>uitwerken voor 1e voortgang</summary>

### Stand van zaken
- Ik heb alle html geschreven voor de eerste pagina en ik heb de styling geschreven voor de header. Ik heb hiervoor heel erg veel mijn breakdown schets gebruikt dus hierdoor was het best wel snel af. Ik verwacht dat het schrijven van de css wat langer gaat duren.
- Bij het stylen van de header vond ik de iframe vervelend, in de video die erin geladen wordt zit wat witruimte boven en beneden die ik dus niet met styling van het iframe kan wegkrijgen, alleen door bijvoorbeeld top:-2em; op de iframe te zetten.


### Verslag van meeting
- Als je een link hebt die nog nergens heen gaat omdat je nog maar 1 pagina van een website hebt, kan je een # in de href zetten, hierdoor werkt het als een link maar wordt de pagina gewoon herladen. Dit heb ik nu zelf ook gedaan in mijn html.
- Ik heb de iframe nu in de html gestyled, terwijl het eigenlijk de bedoeling is dat de styling zoveel mogelijk in de css gebeurt. Ik had eerder wat moeite gehad met het stylen van de iframe via css (er leek niks te veranderen aan de width en height), maar ik zou het nog eens kunnen proberen met een id: iframe (id="video") en #video {width: 100vw;}.
- Ik heb nu veel button elementen gebruikt, terwijl het eigenlijk links zijn die eruit moeten gaan zien als buttons. Daarom wil ik de button elementen gaan vervangen met linkjes en ze dan weer stylen.

</details>





## Voortgang 2 (week 3)

<details>
<summary>uitwerken voor 2e voortgang</summary>

### Stand van zaken
- Ik had eerst moeite met het laten openen en sluiten van het hamburger menu, maar met hulp in de les was dit gelukkig snel opgelost. De iframe blokkeerde de klik, daarom moest ik in de css "click-..." toevoegen aan het menu, nu is het wel klikbaar.
- Verder ben ik bijna klaar met het stylen van de eerste pagina. Ik ben nog niet begonnen met de tweede pagina, maar de basis hiervan is heel vergelijkbaar met de eerste dus dat komt wel goed.


### Verslag van meeting
- Ik gebruik nu 2x een id in de header, dat is niet nodig want je kan die links selecteren met bijvoorbeeld nth-of-type(2).
- De icons voor de hamburger menu heeft de originele site waarschijnlijk van fontawesome.
- Ik wil de animatie voor de hamburger menu button proberen na te maken. Om dat makkelijk te doen kan ik twee icons nemen en ze in elkaar laten overgaan met een animatie. Ik kan met classList in javascript een class toevoegen voor het start en eind punt, dus bijvoorbeeld als de animatie moet eindigen voeg ik een class toe die een pijl icoon weergeeft.
- De css ziet er netjes uit en ik kan wat beter letten op de manier waarop ik inspringt in de html om het beter leesbaar te maken.

</details>





## Toegankelijkheidstest (week 4)

<details>
<summary>uitwerken na test in 8e voortgang</summary>

### Bevindingen
Lijst met je bevindingen die in de test naar voren kwamen:

#### Titel eerste bevinding
Hier korte omschrijving (met indien nodig een afbeelding)

Hier een omschrijving van hoe het opgelost kan worden (met indien nodig een afbeelding)


#### Titel tweede bevinding. 
Hier korte omschrijving (met indien nodig een afbeelding)

Hier een omschrijving van hoe het opgelost kan worden (met indien nodig een afbeelding)


#### Titel volgende bevinding. 
Hier korte omschrijving (met indien nodig een afbeelding)

Hier een omschrijving van hoe het opgelost kan worden (met indien nodig een afbeelding)


#### Titel nog een bevinding. 
Hier korte omschrijving (met indien nodig een afbeelding)

Hier een omschrijving van hoe het opgelost kan worden (met indien nodig een afbeelding)

</details>





## Voortgang 3 (week 4)

<details>
<summary>uitwerken voor 3e voortgang</summary>

### Stand van zaken
hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


### Agenda voor meeting
samen met je groepje opstellen

| student 1      | student 2          | student 3    | student 4        |
| ---            | ---                | ---          | ---              |
| dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
| en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
| ...            | ...                | ...          | ...              |


### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- punt 1
- punt 2
- nog een punt
- ...

</details>





## Eindgesprek (week 5)

<details>
<summary>uitwerken voor eindgesprek</summary>

### Stand van zaken
hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

### Screenshot(s)

hier screenshot(s) van je eindresultaat

</details>





## Bronnenlijst

<details open>
<summary>continu bijhouden terwijl je werkt</summary>

Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

1. Centraal Museum Utrecht. Alle gebruikte content komt van de site van het museum. (url:https://www.centraalmuseum.nl/nl) Eén van de video's is gelinkt vanuit Vimeo naar de site van het museum: https://player.vimeo.com/video/546015896?dnt=1&loop=1&background=1 
2. SquareSpace Forum. Scrolling text over a fixed background within a section. Gepost door nsdoyle, 9 juli 2020. 
(url: https://forum.squarespace.com/topic/165962-scrolling-text-over-a-fixed-background-within-a-section)
3. CodyHouse. Experiments - HTML, CSS, JS experiments - Full-screen pushing navigation. (url: https://codyhouse.co/gem/full-screen-pushing-navigation)
4. Font Awesome. Facebook, Twitter, Mail, Youtube en Instagram icoon. (url: https://fontawesome.com/v5.15/icons/twitter?style=brands)
5. CSS-Tricks. CSS-Only Carousel. Door Chris Coyier, 10 jan 2020. (url: https://css-tricks.com/css-only-carousel)
6. Social media icons gedownload van flaticon.com en gecreerd door Pixel Perfect. (url: https://www.flaticon.com)

</details>