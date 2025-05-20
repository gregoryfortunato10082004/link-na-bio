function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img do perfil
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // Modo claro ativo: trocar imagem e alt
    img.setAttribute("src", "./assets/logo-marrom.png")
    img.setAttribute("alt", "Logo Magnolias branco")
  } else {
    // Modo escuro ativo: imagem padrão e alt original
    img.setAttribute("src", "./assets/logo.png")
    img.setAttribute("alt", "Logo Magnolias branco")
  }
}

