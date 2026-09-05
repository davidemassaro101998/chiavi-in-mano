# Chiavi in mano — gestionale del noleggio, G.G.S. Gruppo GS

Questo repository **è** il sito: i file stanno già nella radice, non c'è
niente da compilare qui dentro.

| file | cos'è |
|---|---|
| `index.html` | tutto il gestionale, 501 kB, **zero richieste a internet** |
| `manifest.webmanifest` | fa sì che si installi come app |
| `sw.js` | tiene la copia sul telefono: funziona anche senza campo |
| `icona-180/192/512.png` | l'icona sulla schermata Home |
| `.nojekyll` | dice a GitHub Pages di non passare i file da Jekyll |
| `robots.txt` | tiene l'indirizzo fuori dai motori di ricerca |
| `COME-SI-INSTALLA.md` | le istruzioni per chi lo userà |

## Accendere il sito — un clic

**Settings → Pages** → *Source*: **Deploy from a branch** → ramo `main`,
cartella `/ (root)` → **Save**.

Dopo un minuto l'indirizzo è
**https://davidemassaro101998.github.io/chiavi-in-mano/**

Sul piano gratuito Pages pubblica **solo da un repository pubblico**: se
questo è privato, la voce Pages resta bloccata. Si cambia da
*Settings → General → Danger Zone → Change visibility → Public*.

## Perché «pubblico» qui non vuol dire esposto

Un sito GitHub Pages **è pubblico anche se il repository è privato** — il
piano a pagamento serve a *pubblicare da* un repository privato, non a
rendere privato il sito. Il controllo degli accessi esiste solo su GitHub
Enterprise Cloud.

Quello che si vede a quell'indirizzo è **il gestionale vuoto**. Nomi,
patenti, contratti, foto e incassi non passano di qui: stanno nel browser
del telefono di chi lo usa, e non escono mai. Esposto c'è lo strumento, non
i dati.

`robots.txt` e il `<meta name="robots" content="noindex">` tengono
l'indirizzo fuori da Google. Non è una protezione — chi ha il link entra —
è il motivo per cui nessuno ci arriva per caso.

## Chi lo userà deve fare una cosa sola

Aprire l'indirizzo in Safari (o Chrome) e **aggiungerlo alla schermata
Home**. Non è estetica: Safari cancella da solo tutti i dati di un sito dopo
sette giorni di uso del browser senza tornarci, e **le app aggiunte alla
schermata Home sono escluse**. Aperto come scheda e lasciato lì una
settimana, il gestionale si svuota.

Il resto è in `COME-SI-INSTALLA.md`.

## Aggiornarlo

Si rifà `costruisci.sh` nel repository della libreria e si ricopiano qui i
file di `progetti/gestionale-ggs-noleggio/offline/`. Il service worker si
accorge della versione nuova e si aggiorna da solo alla prima apertura con
rete.
