# «Chiavi in mano» offline — come si mette sul telefono

Questa cartella è il gestionale **senza internet**: un solo file
(`index.html`, ~490 kB) con dentro tutto — React, i caratteri, il codice già
compilato. Aperto, non fa **nessuna richiesta** a nessun server (misurato:
0 richieste esterne, con la rete abortita, in WebKit e Chromium).

I dati stanno **nel browser che lo apre**: su quel telefono, in quel
browser. Non passano da nessuna parte. Per questo conta *dove* lo si apre.

> ## ⚠ Va aggiunto alla schermata Home. Non e' un consiglio.
>
> Safari cancella da solo **tutti** i dati di un sito dopo **sette giorni di
> uso del browser senza tornarci** — schede, foto, contratti: tutto. Vale per
> i siti aperti in Safari. **Le app aggiunte alla schermata Home sono
> escluse**: hanno un conteggio loro, che riparte ogni volta che si aprono, e
> i loro dati non vengono cancellati.
>
> Quindi: aperto come sito e lasciato li' una settimana, **il gestionale si
> svuota**. Aggiunto alla schermata Home e usato, no.
>
> Il gestionale lo dice da solo: in **Azienda e dati → Spazio sul telefono**
> c'e' un bollino verde «Il browser non cancellera' questi dati» quando la
> protezione e' attiva, e uno giallo quando non lo e'. Se e' giallo, va
> aggiunto alla Home.
> ([WebKit / ITP](https://support.didomi.io/apple-adds-a-7-day-cap-on-all-script-writable-storage),
> [Apple Developer Forums](https://developer.apple.com/forums/thread/710157))

## La via giusta: un indirizzo, poi «Aggiungi alla schermata Home»

Si mette questa cartella su un qualsiasi hosting statico gratuito (GitHub
Pages, Netlify, Cloudflare Pages: basta trascinare la cartella). Si ottiene
un indirizzo `https://…`. Poi, sul telefono:

- **iPhone** — Safari → apri l'indirizzo → tasto Condividi → *Aggiungi alla
  schermata Home*.
- **Android** — Chrome → apri l'indirizzo → menu ⋮ → *Installa app* (o
  *Aggiungi a schermata Home*).

Da quel momento è **un'icona come le altre**, si apre a schermo intero, e il
service worker tiene una copia del file sul telefono: **funziona anche senza
campo**, in cantiere o in garage (misurato: server spento, si riapre dalla
cache con i dati, in WebKit e Chromium). Quando la cartella viene aggiornata
sull'hosting, la copia sul telefono si aggiorna da sola alla prima apertura
con rete.

L'indirizzo è anche l'unica cosa che rende **stabili i dati**: il browser li
lega a quell'indirizzo, e restano finché non si cancellano i dati del sito.

## Se l'hai ricevuto in chat e «non si apre»

Su **iPhone**, toccare un file `.html` in Messaggi, Mail o File apre
un'**anteprima senza JavaScript**: si vede una pagina bianca o mezza rotta, e
sembra che il gestionale non funzioni. Non e' rotto, e' l'anteprima.

**Va aperto in Safari:**

1. salva il file in **File** (tocca il file → Condividi → Salva su File);
2. aprilo da File, poi **Condividi → Safari** (oppure «Apri in Safari»).

Su **Android** in genere Chrome lo apre direttamente.

Resta comunque la via di fortuna: i dati sono legati al percorso del file, e
se lo si rispedisce o lo si sposta il browser lo tratta come un altro sito.
Per lavorarci davvero serve un indirizzo, come scritto sopra.

## La via di fortuna: il file spedito

Si può anche mandare `index.html` via WhatsApp, mail o AirDrop e aprirlo.
Su **computer** (Chrome, Edge, Firefox) funziona bene. Su **telefono** è
fragile:

- su iPhone, toccare un `.html` nei File apre un'anteprima **senza
  JavaScript**: sembra rotto. Va aperto *in Safari* (Condividi → Safari), e
  anche così i dati sono legati al percorso del file: se lo si rispedisce o
  lo si sposta, il browser lo tratta come un altro sito e non si vedono più;
- su Android Chrome apre il file, ma vale la stessa fragilità sul percorso.

Quindi: il file spedito va bene **per provarlo**, non per lavorarci mesi.

## Parte vuoto

Alla prima apertura non c'e' niente dentro, ed e' voluto: si comincia
inserendo il primo mezzo (targa, tariffe, scadenze), poi il primo cliente, poi
il primo contratto. Non ci sono dati finti da cancellare prima di lavorare.

## In ogni caso: la copia di sicurezza

Da **Altro → Azienda e dati → Fai una copia di sicurezza** esce **un file**
(`chiavi-in-mano-2026-09-05-1830.json`) con dentro tutto, **foto comprese**.
Sul telefono si apre il foglio di condivisione: si salva in File, si manda su
WhatsApp a se stessi, si spedisce per email — basta che non resti solo li'.
Con *Ripristina da una copia* si sceglie quel file e torna tutto, su un altro
telefono o dopo un cambio di browser.

La schermata dice da quanti giorni non se ne fa una, e se sono passati sette
giorni lo scrive in giallo. **E' l'unica rete di sicurezza**: i dati stanno su
un telefono solo, e un telefono si perde.

Quanto pesa: le schede sono qualche decina di kB; le foto circa 100 kB
l'una. Una copia con 120 foto pesa ~25 MB (misurato) — troppo per gli
appunti, giusta per un file.

## Quante foto ci stanno

Le foto **non** stanno nell'archivio piccolo del browser (5 MB, misurato:
ci starebbero una cinquantina di foto e poi il salvataggio fallirebbe).
Stanno in un archivio a parte che sullo stesso telefono ha spazio in
gigabyte: **misurate 120 foto = 18 MB salvate, chiuse e ritrovate tutte.**

Nella scheda del mezzo resta solo il riferimento: un furgone con quattro
foto pesa 334 byte di testo. Il massimo per scheda e' 4 foto sul mezzo e 6
alla consegna piu' 6 al rientro su ogni contratto.

Se lo spazio dovesse finire davvero, compare **una fascia rossa in cima che
non se ne va**: «La memoria e' piena: quello che scrivi adesso non viene
salvato». Prima si perdeva in silenzio.

## La privacy da firmare

Per ora è **spenta**: si accende da *Azienda e dati → Firma della privacy*
quando si vuole cominciare a raccoglierla. Prima di accenderla vanno compilati
partita IVA e indirizzo nella stessa schermata, se no l'informativa che il
cliente firma è incompleta.

## Cosa non c'è

Nessuna condivisione fra due telefoni: se lo usano in due, ognuno vede i
propri dati. Per averli in comune serve un server, e questo file non ne ha.
