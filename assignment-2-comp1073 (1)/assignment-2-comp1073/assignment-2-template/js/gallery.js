  const figure = document.querySelector("figure");
  const thumbnails = document.querySelectorAll("ul li img");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      const src = this.getAttribute("src").replace("-small", "-large");
      const alt = this.getAttribute("alt");

      figure.querySelector("img").setAttribute("src", src);
      figure.querySelector("figcaption").textContent = alt;
    });
  });