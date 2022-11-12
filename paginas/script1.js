window.sr = ScrollReveal({ reset: true});
sr.reveal('section main div', {duration: 2000});

function inicialmodal(modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
        if(e.target.id == 'X' || e.target.id == 'X2' || e.target.id == 'criar btn') {
            modal.classList.remove('mostrar');
        }
    });
};

const imagem = document.querySelector('.modalimg')
const nome = document.querySelector('#nomealbum')
const spotify = document.querySelector('#spotify')
const deezer = document.querySelector('#deezer')
const youtube = document.querySelector('#youtube')
const musicas = document.querySelector('#musicas')

function skymodal() {
    imagem.src = 'https://static.stereogum.com/uploads/2022/11/fleet-fox-es-a-sky-like-ive-never-seen-1667928474.jpg';
    nome.innerHTML = "A Sky Like I've Never Seen";
    musicas.innerHTML = "<li>A Sky Like I've Never Seen <br>(From the Amazon Original Movie “Wildcat”)</li>"
    spotify.href = 'https://open.spotify.com/album/6ymOerT4d3L6DYJLZSsWze?si=4QcWfKxcQlmzl8LMteAXRg'
    deezer.href = 'https://deezer.page.link/oSkHwuxCzKGYTFvK6'
    youtube.href = 'https://youtu.be/_DDi7lqEmSI'
} 

function solsticemodal() {
    imagem.src = "https://media.pitchfork.com/photos/61ae20c045c013baf49b7f74/master/pass/Fleet-Foxes.jpg";
    nome.innerHTML = "A Very Lonely Solstice";
    musicas.innerHTML = "<li>Wading In Waist-High Water</li><li>Sunblind</li><li>In The Morning</li><li>Tiger Mountain Peasant Song</li><li>Maestranza</li><li>Helplessness Blues</li><li>Silver Dagger</li><li>Featherweight</li><li>A Long Way Past The Past</li><li>Blue Spotted Tail</li><li>If You Need To, Keep Time On Me</li><li>I'm Not My Season</li><li>Can I Belive you?</li>"
    spotify.href = 'https://open.spotify.com/album/28aerKYZtxvFfNflCyE29h?si=4VnZwsSCQryY6yHi0UqiNQ'
    deezer.href = 'https://deezer.page.link/LCyUei2DTeorE9CD8'
    youtube.href = 'https://youtu.be/3VB24LYsE60'
} 

function shoremodal() {
    imagem.src = "https://media.pitchfork.com/photos/5f66908a537682947f093866/1:1/w_600/Fleet%20Foxes%20-%20Shore%20-%20Art.jpg";
    nome.innerHTML = "Shore";
    musicas.innerHTML = "<li>Wading In Waist-High Water</li><li>Sunblind</li><li>Can I Belive you?</li><li>Jara</li><li>Featherweight</li><li>A Long Way Past The Past</li><li>For A Week Or Two</li><li>Maestranza</li><li>Young Man's Game</li><li>I'm Not My Season</li><li>Quiet Air/Gioia</li><li>Going-to-the-sun-road</li><li>Thymia</li><li>Cradling Mother, Cradling Woman</li><li>Shore</li><li>Sunblind - Acustic</li><li>Featherweight - Acustic</li><li>Going-to-the-sun-road - Acustic</li>"
    spotify.href = 'https://open.spotify.com/album/5tXJchExPrWfcj1JwoDeZy?si=8_qnrwPLQ2mT2KxlU9hbGg'
    deezer.href = 'https://deezer.page.link/KDgDj1cUzjQZpY6y7'
    youtube.href = 'https://youtu.be/6Jrh1IRv6Pw'
} 

function FCmodal() {
    imagem.src = 'https://cdn.shopify.com/s/files/1/0110/1882/9920/products/fleetfoxes-firstcollection-boxcover-3000_1024x1024.jpg?v=1581645949';
    nome.innerHTML = "First Collection";
    musicas.innerHTML = "<li>Disc 1<ol><li>Sun It Rises</li><li>White Winter Hymnal</li><li>Ragged Wood</li><li>Tiger Mountain Peasant Song</li><li>Quiet Houses</li><li>He Doesn't Know Why</li><li>Heard Them Stirring</li><li>Your Protector</li><li>Meadowlarks</li><li>Blue Ridge Mountains</li><li>Oliver James</li></ol></li><li>Disc 2<ol><li>Sun Giant</li><li>Drops In The River</li><li>English House</li><li>Mykonos</li><li>Innocent Son</li></ol></li><li>Disc 3<ol><li>She Got Dressed</li><li>In The Hot Hot Rays</li><li>Anuone Who's Anyone</li><li>Text Book Love</li><li>So Long to the Headstrong</li><li>Icicle Tusk</li></ol></li><li>Disc 4<ol><li>False Knigh On The Road</li><li>Silver Dagger</li><li>White Lace Regretfully</li><li>Isles</li><li>Ragged Wood - Transition Basement Sketch</li><li>He Doesn't Know Why - Basement Demo</li><li>Hot Air - Basemet Sketch</li></ol></li>"
    spotify.href = 'https://open.spotify.com/album/6ymOerT4d3L6DYJLZSsWze?si=4QcWfKxcQlmzl8LMteAXRg'
    deezer.href = 'https://deezer.page.link/BYsb7VqksSYLhtQJ8'
    youtube.href = 'https://youtube.com/playlist?list=OLAK5uy_m_CjSUXpeLK0TEsc5BhXbHq07H4mE5wa4'
} 

function oceanmodal() {
    imagem.src = 'http://images.genius.com/2ad02a346e003afa2f89362d4985f57f.1000x1000x1.jpg';
    nome.innerHTML = "On Other Ocean";
    musicas.innerHTML = "<li>On Other Ocean (January/June) - Edit</li>"
    spotify.href = 'https://open.spotify.com/album/3ahlOgLiL6gB1B3vPnBBk2?si=VxJolgSsTYenJ69KEf8OeQ'
    deezer.href = 'https://deezer.page.link/jSNGAe7bkbAKmgmG6'
    youtube.href = 'https://youtu.be/9MJr4BnO-g4'
} 

function crackmodal() {
    imagem.src = 'http://images.genius.com/2ad02a346e003afa2f89362d4985f57f.1000x1000x1.jpg';
    nome.innerHTML = "Crack-Up";
    musicas.innerHTML = "<li>I Am All Tall I Need / Arroyo Seco / Thumbprint Scar</li><li>Cassius, -</li><li>- Naiads, Cassadies</li><li>Kept Woman</li><li>Third Of May / Ôdaigahara</li><li>If You Need To, Keep Time On Me</li><li>Mearcstapa</li><li>On Other Ocean (January/June)</li><li>Fool's Errand</li><li>I Should See Memphis</li><li>Crack-Up</li>"
    spotify.href = 'https://open.spotify.com/album/0xtTojp4zfartyGtbFKN3v?si=MIN8ivO9RJKfj2HgTo4grQ'
    deezer.href = 'https://deezer.page.link/ppK7heyTYByQosQHA'
    youtube.href = 'https://youtube.com/playlist?list=OLAK5uy_msaqUimFS5VVKlOFe_nrXoWdI_ulIOzfE'
} 

function maymodal() {
    imagem.src = 'http://images.genius.com/2ad02a346e003afa2f89362d4985f57f.1000x1000x1.jpg';
    nome.innerHTML = "Third Of May";
    musicas.innerHTML = "<li>Third Of May / Ôdaigahara - Edit</li>"
    spotify.href = 'https://open.spotify.com/album/4ch37agV9poERen5tOVHrb?si=6oZqVNOtRMaJIURgaQbyGA'
    deezer.href = 'https://deezer.page.link/vQmSPk5rnUQom8pV6'
    youtube.href = 'https://youtu.be/qYkSUIOoEAg'
} 

function bluesmodal() {
    imagem.src = 'https://m.media-amazon.com/images/I/91lhcK0RdxL._AC_SL1500_.jpg';
    nome.innerHTML = "Helpnessless Blues";
    musicas.innerHTML = "<li>Montezuma</li><li>Bedouin Dress</li><li>Sim Sala Bim</li><li>Batery Kinzie</li><li>The Plains / Bitter Dance</li><li>Helplessness Blues</li><li>The cascades</li><li>Lorelai</li><li>Someone You'd Admire</li><li>The Shrine / An Argument</li><li>Blue Spotted Tail</li><li>Grown Ocean</li>"
    spotify.href = 'https://open.spotify.com/album/7D0rCfJjFj9x0bdgRKtvzb?si=BjZ5wtclRF2CLJj_ouLWVg'
    deezer.href = 'https://deezer.page.link/Cncx82Ph7SDXApvE9'
    youtube.href = 'https://youtube.com/playlist?list=OLAK5uy_mhaB5rxn2fOLSf_ANa9MA4JZl3eK--Wok'
} 

function fleetmodal() {
    imagem.src = 'https://m.media-amazon.com/images/I/81Sw6YOnS9L._AC_SL1200_.jpg';
    nome.innerHTML = "Fleet Foxes";
    musicas.innerHTML = "<li>Sun It Rises</li><li>White Winter Hymnal</li><li>Ragged Wood</li><li>Tiger Mountain Peasant Song</li><li>Quiet Houses</li><li>He Doesn't Know Why</li><li>Heard Them Stirring</li><li>Your Protector</li><li>Meadowlarks</li><li>Blue Ridge Mountains</li><li>Oliver James</li>"
    spotify.href = 'https://open.spotify.com/album/5GRnydamKvIeG46dycID6v?si=-D4DAHNaQLuDaJwaljPz2w'
    deezer.href = 'https://deezer.page.link/oXBfRNFrVi9YbNqi9'
    youtube.href = 'https://youtube.com/playlist?list=PLtXg8ugb7sLHDEwDQjPjvyWyshhGK7eIg'
} 

function sunmodal() {
    imagem.src = 'https://subpop-img.s3.amazonaws.com/asset/productable_images/attachments/000/001/051/max_960/4165.jpg?1389003565';
    nome.innerHTML = "Sun Giant";
    musicas.innerHTML = "<li>Sun Giant</li><li>Drops In The River</li><li>English House</li><li>Mykonos</li><li>Innocent Son</li>"
    spotify.href = 'https://open.spotify.com/album/3vz6xBtlgVdLTRgK1CiPcF?si=GsnOK9hWTK6vB8fYGuIwAg'
    deezer.href = 'https://deezer.page.link/NyodfcB9PW5hoAc37'
    youtube.href = 'https://youtube.com/playlist?list=OLAK5uy_kiF8uShrvOVkxtEu0T2oONw7GsCvjs1jU'
}  

const sky = document.querySelector("#sky");
sky.addEventListener('click', () => inicialmodal('modal') & skymodal());
const solstice = document.querySelector("#solstice");
solstice.addEventListener('click', () => inicialmodal('modal') & solsticemodal());
const shore = document.querySelector("#shore");
shore.addEventListener('click', () => inicialmodal('modal') & shoremodal());
const FC = document.querySelector("#FC");
FC.addEventListener('click', () => inicialmodal('modal') & FCmodal());
const ocean = document.querySelector("#ocean");
ocean.addEventListener('click', () => inicialmodal('modal') & oceanmodal());
const crack = document.querySelector("#crack");
crack.addEventListener('click', () => inicialmodal('modal') & crackmodal());
const may = document.querySelector("#may");
may.addEventListener('click', () => inicialmodal('modal') & maymodal());
const blues = document.querySelector("#blues");
blues.addEventListener('click', () => inicialmodal('modal') & bluesmodal());
const fleet = document.querySelector("#fleet");
fleet.addEventListener('click', () => inicialmodal('modal') & fleetmodal());
const sun = document.querySelector("#sun");
sun.addEventListener('click', () => inicialmodal('modal') & sunmodal());

const login = document.querySelector("#loginbtn");
login.addEventListener('click', () => inicialmodal('modallogin'));

const criar = document.querySelector("#criarbtn");
criar.addEventListener('click', () => inicialmodal('modalcadastrar'));

function mostrarOcultar() {
    const senha = document.getElementById("senha");
    const icon = document.getElementById("icon");
  
    if (senha.type === "password") {
      senha.type = "text";
      icon.setAttribute("class", "fa-solid fa-eye-slash");
    } else {
      senha.type = "password";
      icon.setAttribute("class", "fa-solid fa-eye");
    }
  }
  
  function cadastro() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirmar = document.getElementById("confirmar").value;
  
    if (
      nome == "" ||
      email == "" ||
      senha == "" ||
      confirmar !== senha
    ) {
      // alert("preencha os campos corretamente")
      document.getElementById("erro").style.display = "block";
      document.getElementById("sucesso").style.display = "none";
      document.getElementById("errosenha").style.display = "none";
    } else {
      if (senha.length < 8) {
        // alert("sua senha precisa de no mínimo 8 digitos")
        document.getElementById("errosenha").style.display = "block";
        document.getElementById("erro").style.display = "none";
        document.getElementById("sucesso").style.display = "none";
        return;
      } else {

        document.getElementById("erro").style.display = "none";
        document.getElementById("sucesso").style.display = "none";
        document.getElementById("errosenha").style.display = "none";

        var user = {
          nome: nome,
          email: email,
          senha: senha,
        };
  
        fetch ("http://localhost/lojinha/cadastrar2.php", {
          method: "POST",
          body: JSON.stringify(user),
          headers: {"Content-type": "application/json; charset=UTF-8"},
          mode: 'no-cors'
        })
        .then(() => document.getElementById("sucesso").style.display = "block")
        .catch(() => console.log('falha ao cadastrar')) 
      }
    }
  }

function tentarlogin(params) {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  var user = {
    nome: nome,
    email: email,
  };

  fetch ("http://localhost/lojinha/verificar.php", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {"Content-type": "application/json; charset=UTF-8"},
    mode: 'no-cors'
  })
  .then(() => console.log('enviado'))
  .catch(() => console.log('erro ao enviar')) 
}