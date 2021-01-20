document.addEventListener("DOMContentLoaded", () => {
  // const iconePesquisa = document.querySelector("#SearchIcon");
  // const TelaPesquisa = document.querySelector("#pesquisa");
  // const pesquisaInput = document.querySelector("#pesquisaInput");
  // const closePesquisa = document.querySelector(".closeIcon");
  // const navbar = document.querySelector("#nav-icon3");
  const navigator = document.querySelectorAll(".Navigator");
  // const bandeira = document.querySelectorAll(".flagLen");
  // const bandeiraAtual = document.querySelector("#placeholderFlag");
  // const setaEsquerda = document.querySelector("#esquerda");
  // const setaDireita = document.querySelector("#direita");
  // const anos = document.querySelector("#anos");
  // const backnavbarDisplay = document.querySelector("#NavbarMobileBack");

  // if (anos !== null) {
  //   var i = anos.childNodes.length - 2;

  //   setaDireita.addEventListener("click", () => {
  //     if (anos.childNodes[i].innerHTML == "2020") {
  //       setaDireita.style.color = "#e6e6e6";
  //     } else {
  //       i += 2;
  //       setaEsquerda.style.color = "#ebb92d";
  //     }
  //     anos.childNodes.forEach((element) => {
  //       element.id = "";
  //     });
  //     anos.childNodes[i].id = "anoAtivo";
  //     console.log(i, "direita");
  //   });

  //   setaEsquerda.addEventListener("click", () => {
  //     if (anos.childNodes[i].innerHTML == "2016") {
  //       setaEsquerda.style.color = "#e6e6e6";
  //     } else {
  //       i -= 2;
  //       setaDireita.style.color = "#ebb92d";
  //     }
  //     anos.childNodes.forEach((element) => {
  //       element.id = "";
  //     });
  //     anos.childNodes[i].id = "anoAtivo";
  //     console.log("esquerda");
  //   });
  // }

  navigator.forEach((element) => {
    element.addEventListener("click", function () {
      navigator.forEach((element) => {
        element.style.color = "#adadab";
        element.style.fontWeight = "normal";
      });
      this.style.color = "#60605d";
      this.style.fontWeight = "bold";
    });
  });

  // iconePesquisa.addEventListener("click", () => {
  //   TelaPesquisa.style.visibility = "visible";
  //   TelaPesquisa.style.clipPath = "circle(100%)";
  //   TelaPesquisa.style.backgroundColor = "#ebb92d";
  //   pesquisaInput.style.backgroundColor = "#ebb92d";
  // });

  // closePesquisa.addEventListener("click", () => {
  //   TelaPesquisa.style.visibility = "hidden";
  //   TelaPesquisa.style.clipPath = "circle(0% at 0% 0%)";
  //   TelaPesquisa.style.backgroundColor = " #ffc7a8";
  //   pesquisaInput.style.backgroundColor = " #ffc7a8";
  // });
});
