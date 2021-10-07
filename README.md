# Procesverslag




## Jij

<details open>

### Auteur:
Robin van Rooij

#### Je startniveau:
Rood

#### Je focus:
Responsive
 
</details>





## Je website

<details open>
<summary>uitwerken voor kick-off werkgroep</summary>

### Je opdracht:
https://www.centraalmuseum.nl/nl

#### Screenshot(s) van de eerste pagina (small screen): 
<img src="/images/1a.png" width="375px" alt="homepage van het centraal museum">

#### Screenshot(s) van de tweede pagina (small screen):
<img src="images/2b.jpg" width="375px" alt="about us page van het centraal museum">
 
</details>





## Breakdownschets (week 1)

<details open>
<summary>uitwerken na afloop 2e werkgroep</summary>

### de hele pagina: 
<img src="images/breakdown-01.jpg" width="375px" alt="breakdown van de 1e pagina en menu">
<img src="images/breakdown-02.jpg" width="375px" alt="breakdown van de 2e pagina">

### dynamisch deel (bijv menu): 
<img src="images/carousel.jpg" width="375px" alt="breakdown van image carousel">
// kan ook de lijst in een flexbox zetten met overflow:scroll
<img src="images/navigation.jpg" width="375px" alt="breakdown van de navigatie"> 
<img src="images/scroll.jpg" width="375px" alt="breakdown van het text over image scrollen">

</details>





## Voortgang 1 (week 2)

<details open>
<summary>uitwerken voor 1e voortgang</summary>

### Stand van zaken
- Ik heb alle html geschreven voor de eerste pagina en ik heb de styling geschreven voor de header. De breakdown schets was heel handig hierbij.
- Bij het stylen van de header vond ik de iframe vervelend, want de video die erin geladen wordt heeft wat witruimte boven en beneden die ik dus niet met styling van het iframe kan wegkrijgen, alleen door bijvoorbeeld top:-2em; op de iframe te zetten.


### Verslag van meeting
- Als je een link hebt die nog nergens heen gaat omdat je nog maar 1 pagina van een website hebt, kan je een # in de href zetten, hierdoor werkt het als een link maar wordt de pagina gewoon herladen. Dit heb ik nu zelf ook gedaan in mijn html.
- Ik heb de iframe nu in de html gestyled, terwijl het eigenlijk de bedoeling is dat de styling zoveel mogelijk in de css gebeurt.
- Ik heb nu veel button elementen gebruikt, terwijl het eigenlijk links zijn die eruit moeten gaan zien als buttons. Daarom wil ik de button elementen gaan vervangen met linkjes en ze dan weer stylen.

</details>





## Voortgang 2 (week 3)

<details open>
<summary>uitwerken voor 2e voortgang</summary>

### Stand van zaken
- Ik had eerst moeite met het laten openen en sluiten van het hamburger menu, maar met hulp in de les was dit gelukkig snel opgelost. De iframe blokkeerde de klik, daarom moest ik in de css "pointer-events: none;" toevoegen aan de iframe, nu is de menu button wel klikbaar.
- Verder ben ik bijna klaar met het stylen van de eerste pagina. Ik ben nog niet begonnen met de tweede pagina, maar de basis hiervan is heel vergelijkbaar met de eerste.


### Verslag van meeting
- Ik gebruik nu al 2 keer een id in de header, dat is niet nodig want je kan die links selecteren met bijvoorbeeld nth-of-type(2).
- Ik wil de animatie voor de hamburger menu button proberen te maken zoals de originele site ook heeft. Om dat zo makkelijk mogelijk te doen kan ik twee icons nemen en ze in elkaar laten overgaan met een transitie. Ik kan met classList in javascript een class toevoegen voor het veranderen van de icon.
- De css ziet er netjes uit maar ik kan wat beter letten op de manier waarop ik inspringt in de html om het beter leesbaar te maken.

</details>





## Toegankelijkheidstest (week 4)

<details open>
<summary>uitwerken na test</summary>

### Bevindingen
Lijst met je bevindingen die in de test naar voren kwamen:

#### Zicht.
Bril 1: Combined eyeloss, Diabetic eye disease.
Goed te doen, want de tekst is groot. Maar op de 2e pagina bij de witte tekst moet je iets meer moeite doen, en op p1 dunne zwarte tekst op beige. Oplossing: Achtergrond bij witte tekst kan donkerder, een schaduw achter de tekst of de tekst zwart maken.

Bril 2: blur/glare.
Alleen de aller grootste titels zijn te lezen, vanaf ongeveer 30px begint de tekst leesbaar te worden.

Bril 3: central field loss.
Als de tekst op het midden van het scherm staat is het niet leesbaar door de vlek heen. Je moet echt langs de vlek heenlezen. Omdat veel tekst left aligned is kan je nog wel een beetje lezen wat er staat, dus dat helpt best wel.

Bril 4: peripheral screen loss.
De kleine tekst is slechter leesbaar, de grote tekst is okay en de pagina structuur is duidelijk door de achtergrondkleuren (duidelijke opdeling in sections en articles) maar het kost wel veel moeite om te lezen.

#### Screenreader. 
De screenreader slaat sommige onderdelen van de site over. vooral op de 2e pagina. Er wordt niet aangegeven dat je het hamburger menu ingaat. Het zou sowieso fijn zijn om de optie te hebben om dit over te slaan en meteen naar de content te gaan. Niet alle kopjes worden voorgelezen en niet alle afbeeldingen worden opgenoemd, ook als ze wel een alt tekst hebben. Wel worden de linkjes goed voorgelezen.

Op de officiele website van het centraal museum worden wel alle kopjes goed voorgelezen. Wat ook anders is dan bij mijn site is dat het menu pas onderaan de pagina wordt geselecteerd. De inhoudt wordt ook niet automatische voorgelezen, maar je opent het door op enter te drukken.

Oplossing: Je moet het menu kunnen openen met bijvoorbeeld enter. En alle kopjes moeten geselecteerd kunnen worden.

#### Keyboard users. 
Ik heb nog geen states zoals focus state voor toetsenbord gebruikers. Je kan op alle links en knoppen tabben. Andere elementen worden wel soms overgeslagen zoals sommige tekst en het hamburger menu. Je moet het hamburger menu wel kunnen selecteren anders kan je het nooit openen als je alleen je keyboard gebruikt.

Oplossing: Ik moet focus states toevoegen. En het menu moet selecteerbaar en openbaar zijn met een keyboard.

#### Motoriek. 
Met een elastiek om je hand (minder motoriek in je hand) gaat het nog wel goed op de site. Dat komt denk ik vooral doordat al mijn knoppen groot zijn, hierdoor zijn ze makkelijk te drukken. In de footer zijn de linkjes iets kleiner dus daar heb ik al meer moeite mee om ze goed te selecteren.

Oplossing: Alle knoppen en linkjes lekker groot maken zodat het makkelijk is om erop te klikken. Je kan ook meer ruimte tussen de linkjes zetten zodat je niet per ongeluk op de verkeerde klikt.

</details>


## Voortgang 3 (week 4)

<details open>
<summary>uitwerken voor 3e voortgang</summary>

### Stand van zaken
Ik heb deze week de tweede pagina gemaakt en de toegankelijksheids test gedaan. Ik wilde een aantal regels schrijven in de css die alleen zouden gelden voor de tweede pagina, daarom heb ik nu de tweede pagina een id gegeven op de body, hiermee selecteer ik de paar elementen die anders moeten dan de homepage. Na de toegankelijkheids testen heb ik het hamburger menu aangepast. Je kon eerst niet de menu button selecteren met toetsenbord en er stond geen focus state op. Ik heb de link met de image erin verandert naar een button met een background-image. Als er gefocust wordt op de menu knop wordt hij groter en verandert de achtergrond van kleur. Nu moet ik nog states maken voor de rest van de links op de site, en de site responsive maken met media queries.

Na de toegankelijkheids test heb ik aangepast:
- Hamburger menu button kan nu met keyboard geopend worden.
- States toegevoegd aan de links en buttons op de site.
- Linkjes een grotere padding gegeven waardoor ze makkelijker zijn om te klikken.
- De achtergrond waar witte tekst op staat donkerder gemaakt zodat de tekst beter leesbaar is.

### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- Ik kreeg de tip: Zet genoeg comments neer, ook meer in de html, dat zorgt voor betere overdraagbaarheid. Nu heb ik heeel veeel comments geschreven.
- Je kan met a href="" linken naar de andere pagina van de site (is ook relaxed voor iemand door je site heen gaat om te testen).

</details>





## Eindgesprek (week 5)

<details open>

### Stand van zaken
Wat goed ging was het gebruiken van semantische html en selectors en het vermijden van divs, classes en id's. Ik heb bijvoorbeeld veel nth-of-type selectors gebruikt. Ik vond het hierdoor wel soms moeilijk om overzicht te houden in de code, het zou helpen als ik eerder was begonnen met het schrijven van comments.

Ik vond het jammer dat ik geen tijd meer had om bijvoorbeeld het scroll effect met de tekst op de tweede pagina uit te werken (zie breakdown schets), of een darkmode te schrijven, want het responsive maken van de site nam meer tijd in beslag dan ik dacht.

Uiteindelijk heb ik de site 3 verschillende indelingen gegeven voor 3 device grootes: mobiel(375x643), tablet(768x643) en desktop(1024x857) (zie screenshots eindresultaat). 
Ik had eerst wat moeite met het responsive maken van de website. Het was makkelijker geweest als ik in het begin al had geweten hoe ik de site responsive ging maken. Ik wilde bijvoorbeeld articles naast elkaar laten komen ipv eronder, en tekst naast een afbeelding in plaats van eronder. Ik heb uiteindelijk grid hiervoor gebruikt (in plaats van flexbox wat ik eerst probeerde), want met grid kon ik de afbeelding en tekst mooi naast elkaar zetten zonder extra div's te gebruiken.

### Screenshot(s)

hier screenshot(s) van je eindresultaat

<img src="images/mobiel.PNG" width="375px" alt="responsive resultaat mobiel">
<img src="images/tablet.PNG" width="375px" alt="responsive resultaat tablet">
<img src="images/desktop.PNG" width="375px" alt="responsive resultaat desktop">
<img src="images/grid.PNG" width="375px" alt="voorbeeld grid menu">

</details>





## Bronnenlijst

<details open>

1. Centraal Museum Utrecht. Alle gebruikte content komt van de site van het museum. (url:https://www.centraalmuseum.nl/nl) Eén van de video's is gelinkt vanuit hun Vimeo naar de site van het museum: https://player.vimeo.com/video/546015896?dnt=1&loop=1&background=1 
2. Social media icons gedownload van flaticon.com en gecreerd door Pixel Perfect. (url: https://www.flaticon.com)
3. Wes Bos - CSS Grid (url: https://cssgrid.io).
4. CodyHouse. Experiments - HTML, CSS, JS experiments - Full-screen pushing navigation (url: https://codyhouse.co/gem/full-screen-pushing-navigation).
5. Shay Howe - Learn to Code Advances HTML & CSS, Lesson 3: Advanced Selectors (url: https://learn.shayhowe.com/advanced-html-css/complex-selectors).
6. Sitepoint, Asha Laxmi & Maria Antonietta Perna - CSS Viewpoint Units: A Quick Start (url: https://www.sitepoint.com/css-viewport-units-quick-start).
7. Michael Scharnagl - The Do's and Dont's of implementing a hamburger menu (url: https://justmarkup.com/articles/2019-12-04-hamburger-menu).

</details>