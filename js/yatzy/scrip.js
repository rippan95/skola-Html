function visaInnehall() {
  var falt, valtIndex, valtText, valtVarde;
  //Hämta referens till fält
  falt = document.forms[0].MinLista;
  //Hämta index för markerat alternativ
  valtIndex = falt.selectedIndex;
  //Om något alternativ markerat - index > -1
  if( valtIndex >= 0 )
  {
    //Hämta text + värde fr attributet VALUE
    valtText = falt.options[valtIndex].text;
    valtVarde = falt.options[valtIndex].value;

      //Visa meddelanderuta med variablerna
    alert("Text för markerat alternativ är: " 
      + valtText + "\n\n"
      + "Värde för markerat alternativ är: " 
      + valtVarde);
  }
  else
    alert('Du har inte markerat något alternativ!');
}

<form name="Yatzy">
  <p>Markera ett alternativ i listan och klicka på 
    knappen.</p>
  <p>
  <select name="Ya" size="8">
    <option value="1">Ett</option>
    <option value="2">Två</option>
    <option value="3">Tre</option>
    <option value="4">Fyra</option>
    <option value="5">Fem</option>
  </select>

  <input type="button" value="Kör funktion" 
    onclick="visaInnehall()">
  </p>
</form>