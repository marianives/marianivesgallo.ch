# --------------------------------------------
# Datei:		Swiss_Lozzo
# Datum:		19.06.2022
# Erstellerin:	Maria-Nives Gallo
# Version:		<1>
# Beschreibung: <Erstellt Lottozahlen und zusätzliche Zahl und speichert diese in einer Datei ab>
# --------------------------------------------


# VARIABLEN
$PfadTippZahlen = "c:\temp\lotto\LOTTOZAHLEN.txt"
$PfadTempOrdner = "c:\temp"
$PfadLottoOrdner = "c:\temp\lotto"

$ZahlenLotto = 1..42
$Glueckszahlen = 1..6

$Glueckszahl = 123
$Zahlen = 1, 2, 3, 4, 5, 6

$LottoDatum = "Datum"
$Finish = 1
[int32]$EingabeAnzahlTipps = 0
$EingabeGemacht = $false


#MAIN
do {

    Clear-Host 

    #Datei für Zahlenabspeicherung suchen
    if (test-path $PfadTippZahlen) {
        Write-Host "Datei gefunden :) "
    }
    #Nicht gefunden -> Sucht ob Ordner existieren, erstellt diese und Erstellt Dateo
    else {
        if (test-path $PfadTempOrdner) {
            Write-Host "Ordner gefunden :)"
            if (test-path $PfadLottoOrdner) {
                Write-Host "Ordner gefunden :)"
                "LOTTOZAHLEN" >> $PfadTippZahlen
                Write-Host "Datei wurde erstellt :)"
            }
            else {
                mkdir $PfadLottoOrdner
                "LOTTOZAHLEN" >> $PfadTippZahlen
                Write-Host "Ordner und Datei wurden erstellt :)"
            }
        }
        else {
            Write-Host "Beide Ordner und Datei wurden erstellt :)"
            mkdir $PfadLottoOrdner
            "LOTTOZAHLEN" >> $PfadTippZahlen
        }
    }

    #Clear Bildschirm, Write Title
    Write-Host "Willkommen zum Generator für Lottozahlen!!"
    
    #Einlesen der Anzahl Tipps, überprüfung Typ und Wertebereich
    do {
        try {
            #Überprüfung Typ
            [int]$EingabeAnzahlTipps = read-host "Bitte Anzahl Tipps von 1-100 eingeben"
        }
        catch {
            Write-Host "Bitte geben Sie eine gültige Zahl ein."
        }
        #Wertebereich prüfen
        if ($EingabeAnzahlTipps -gt 0 -and $Eingabeanzahltipps -le 100) {
            $EingabeGemacht = $true
        }
    } Until($EingabeGemacht -eq $true)

    #Lottozahlen pro Tipp ausgeben
    for ($iii = 1; $iii -le $EingabeAnzahlTipps; $iii++) {
        Write-host "Tipp-Nummer: " $iii
        $Glueckszahl = (get-random -inputobject $Glueckszahlen)
        $Zahlen = ((get-random -inputobject $ZahlenLotto -Count 6) | Sort-Object)
        Write-Host "Lottozahlen:  $Zahlen"
        Write-Host "Glückszahl:  $Glueckszahl "
 
        $LottoDatum = get-date

        Add-Content $PfadTippZahlen "Datum Tipp: $LottoDatum "
        Add-Content $PfadTippZahlen "Lottozahlen: $Zahlen "
        Add-Content $PfadTippZahlen "Glückszahl: $Glueckszahl "
        Add-Content $PfadTippZahlen " "

    }

    #Abbruchsbedingung einlesen
    $Finish = Read-Host "Möchten Sie nochmals Tippen, ja = 1, nein = 0 ?"

}Until ($Finish -eq 0)


