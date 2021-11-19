
var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

var mojaPitanja = [
    {
      pitanje: "1. Kako bi opisao sebe?",
      odgovori: {
        a: 'Umetnicka dusa',
        b: 'Ekstrovert',
        c: 'Introvert',
        d: 'U zdravom telu zdrav duh'
      },
    },
    {
      pitanje: "2. Izaberi pice:",
      odgovori: {
        a: 'Bilo sta',
        b: 'Alkohol',
        c: 'Sok',
        d: 'Voda'
      },
    },

    {
        pitanje: "3. Kako obicno izgleda tvoj vikend?",
        odgovori: {
          a: 'Netflix',
          b: 'Zurke',
          c: 'Igranje igrica',
          d: 'Gledanje utakmice'
        },
      },

      {
        pitanje: "4. Koja ti je omiljena vrsta muzike?",
        odgovori: {
          a: 'Volim svaku vrstu muzike',
          b: 'Komercijalna i narodna',
          c: 'Trep',
          d: 'Muzika koja me motivise'
        },

      },

      {
        pitanje: "5. S kim najvise volis da provodis slobodno vreme?",
        odgovori: {
          a: 'Sa osobama koje su mi bliske',
          b: 'Sa osobama koje su uvek raspolozene za dobar provod',
          c: 'Volim da budem sam',
          d: 'Svejedno mi je da li sam sam ili u drustvu'
        },

      },

      {
        pitanje: "6. Koji stil ti najvise odgovara?",
        odgovori: {
          a: 'Comfy',
          b: 'Casual',
          c: 'Ne pratim modne trendove',
          d: 'Sportski'
        },

      },

      {
        pitanje: "7. Koje je pravo vreme za izlazak?",
        odgovori: {
          a: 'Uvece',
          b: 'Bitno da se partija',
          c: 'Zar je bitno?',
          d: 'Tokom dana'
        },
      }
  ];
  
  var quizContainer = document.getElementById('quiz');
  var rezultatiContainer = document.getElementById('rezultati');
  var zavrsiDugme = document.getElementById('zavrsi');
  var porukaContainer=document.getElementById('poruka');

  pokreniQuiz(mojaPitanja, quizContainer, rezultatiContainer, zavrsiDugme);
  
  function pokreniQuiz(pitanja, quizContainer, rezultatiContainer, zavrsiDugme){
  
    function prikaziPitanja(pitanja, quizContainer){
      
      var output = [];
      var odgovori;
  
      
      for(var i=0; i<pitanja.length; i++){
        
       
        odgovori = [];
  
        
        for(slovo in pitanja[i].odgovori){
  
          
          odgovori.push(
            '<label>'
              + '<input type="radio" name="pitanje'+i+'" value="'+slovo+'" " style="display: flex; flex-direction: row; justify-content: center; align-items: center;">'
              + slovo + ': '
              + pitanja[i].odgovori[slovo]
            + '</label>'
          );
        }
  
        
        output.push(
          '<div class="pitanje" style="position: relative; padding: 30px; box-shadow: 20px 20px 50px rgba(0,0,0,0.5); border-radius: 15px; background: rgba(255,255,255,0.1); overflow: hidden; display: flex; justify-content:center; margin-left:30px; margin-right:30px; align-items:center; border-top: 1px solid rgba(255,255,255,0.5); border-left: 1px solid rgba(255,255,255,0.5); backdrop-filter: blur(5px); font-family: "Quicksand", sans-serif; >' + pitanja[i].pitanje + '</div>'
          + '<div class="odgovori" style="position: relative; padding: 30px; box-shadow: 20px 20px 50px rgba(0,0,0,0.5); border-radius: 15px; background: rgba(255,255,255,0.1); overflow: hidden; margin-left:30px; margin-right:30px; align-items:center; border-top: 1px solid rgba(255,255,255,0.5); border-left: 1px solid rgba(255,255,255,0.5); backdrop-filter: blur(5px); margin-top:5px; ">' + odgovori.join('') + '</div>'
        );
      }
  
      
      quizContainer.innerHTML = output.join('');
    }
  
  
    function prikaziOdgovore(pitanja, quizContainer, rezultatiContainer){
      
      
      var odgovoriContainers = quizContainer.querySelectorAll('.odgovori');
      

      var odgovorKorisnika = '';
      var karaokeAndDance = 0;
      var drinkingNight = 0;
      var gameNight = 0;
      var sportDay = 0;
      var movieNight = 0;
      
      
      for(var i=0; i<pitanja.length; i++){
  
        
        odgovorKorisnika = (odgovoriContainers[i].querySelector('input[name=pitanje'+i+']:checked')||{}).value;
        
        
        if(odgovorKorisnika ==='a'){
         karaokeAndDance++;
        }

        if(odgovorKorisnika === 'b') {
          drinkingNight++;
        }

        if(odgovorKorisnika === 'c') {
          gameNight++;
        }

        if(odgovorKorisnika ==='d') {
          sportDay++;
        }
      }
  
      if (karaokeAndDance > (drinkingNight + gameNight + sportDay)) {
        porukaContainer.textContent="Idealan teambuilding za tebe je karaoke vece!\
        TB za tb je definitivno Karaoke&Dance night sa prijateljima. Mozes sa drustvom organizovati takmicenje u pevanju ili plesanju i dobro se zabaviti i partijati do jutra.";
      }

      if (drinkingNight > (karaokeAndDance + gameNight + sportDay)) {
        porukaContainer.textContent="Idealan teambuilding za tebe je  zurka!\
        TB za tb je definitivno Drinking night. Mozes sa prijatelijma organizovati takmicenje u BeerPong-u, Flip Cup-u, Kings Cup-u ili jednostavno otici na neku dobru zurku u nekom klubu ili na nekom splavu. Ako pak to nije fazon i vise si ljubitelj narodne muzike vece provedeno u kafani je jos jedna od dobrih ideja.";
      }

      if (gameNight > (karaokeAndDance + drinkingNight + sportDay)) {
        porukaContainer.textContent="Idealan teambuilding za tebe je gejmersko vece!\
        TB za tb je definitivno Game night. Mozes sa prijateljima otici u  escape room ili kucu strave, a mozete odabrati i jednostavniju varijantu kao sto je igranje društvenih igara poput board games, tvistera, pikada, bilijara ili stoni fudbala.";
      }

      if (sportDay > (karaokeAndDance + drinkingNight + gameNight)) {
        porukaContainer.textContent="Idealan teambuilding za tebe je sport vece!\
        TB za tb je definitivno Sport day. Mozes sa prijateljima otici na Paintball ili pak igrati kosarku, fudbal, tenis ili bilo koji sport koji svi volite. Ako pak nisi za fizicko razgibavanje mozete provesti dan u gledanju utakmica. Ukoliko imate vise vremena i ako je vreme lepo mozete organizovati voznju kajakom ili mozda još ekstremniji TB – Bungee Jumping ";
      }

    }
  
    prikaziPitanja(pitanja, quizContainer);
    
    zavrsiDugme.onclick = function(){
      modal.style.display = "block";
      prikaziOdgovore(pitanja, quizContainer, rezultatiContainer);
    }
  
  }

function fadeOut() {
  document.getElementById("pocetna-container").style.display="none";
  document.getElementById("kviz-container").style.display="block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}