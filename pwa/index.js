const app = () => {
  const state = new Proxy(
    {
      data: [],
      isLoaded: false,
      isModalOpen: false,
      currentProductId: null,
    },
    {
      set(target, property, value) {
        target[property] = value;
        if (property === "isLoaded") {
          dataFetch(state);
        }
        if (property === "data") {
          dataRender(state);
        }
        if (property === "isModalOpen") {
          modalRender(state);
        }
      },
    }
  );

  const mainLayoutRender = () => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    const header = document.createElement("header");
    header.classList.add("header");

    const main = document.createElement("main");
    main.classList.add("main");

    const footer = document.createElement("footer");
    footer.classList.add("footer");

    wrapper.appendChild(header);
    wrapper.appendChild(main);
    wrapper.appendChild(footer);

    document.body.appendChild(wrapper);
  };

  const headerRender = () => {
    const header = document.querySelector(".header");

    const logo = document.createElement("img");
    logo.classList.add("logo");
    logo.src = "./img/logo.jpg";

    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = "Кнопка";
    header.appendChild(logo);
    header.appendChild(button);
  };

  const footerRender = () => {
    const footer = document.querySelector(".footer");

    const year = document.createElement("div");
    year.textContent = "2024";

    const madeBy = document.createElement("div");
    madeBy.textContent = "AUthor";

    footer.appendChild(year);
    footer.appendChild(madeBy);
  };

  const dataFetch = (state) => {
    fetch("https://6579dae11acd268f9afa4460.mockapi.io/api/hw/products")
      .then((res) => res.json())
      .then((data) => {
        state.data = data;
      });
  };

  const dataRender = (state) => {
    const main = document.querySelector(".main");
    main.innerHTML = "";

    state.data.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product");

      const img = document.createElement("img");
      img.classList.add("img");
      img.src = product.img;

      const more = document.createElement("button");
      more.classList.add("more");
      more.textContent = "More";
      more.addEventListener("click", () => {
        state.currentProductId = product.id;
        state.isModalOpen = true;
      });

      const header = document.createElement("h2");
      header.classList.add("product-header");
      header.textContent = product.name;

      productCard.appendChild(img);
      productCard.appendChild(header);
      productCard.appendChild(more);

      main.appendChild(productCard);
    });
  };

  const modalRender = (state) => {
    if (state.isModalOpen === true) {
      const activeProduct = state.data.find((product) => product.id === state.currentProductId)
      const modal = document.createElement("div");
      modal.classList.add("modal");

      const modalContent = document.createElement("div");
      modalContent.classList.add("modal-content");
      
      const modalIMG = document.createElement('img')
      modalIMG.classList.add('modal-img')
      modalIMG.src = activeProduct.img;

      const modalHeader= document.createElement('h2')
      modalHeader.classList.add('modal-header')
      modalHeader.innerHTML = activeProduct.name

      const modalDesc= document.createElement('p')
      modalDesc.classList.add('modal-description')
      modalDesc.innerHTML = activeProduct.description

      const modalClose = document.createElement('button')
      modalClose.classList.add('modal-close')
      modalClose.textContent = "Close"

      modalClose.addEventListener('click', () => {
        state.currentProductId = null;
        state.isModalOpen = false;
      })

      modalContent.appendChild(modalHeader)
      modalContent.appendChild(modalDesc)
      modalContent.appendChild(modalIMG)
      modalContent.appendChild(modalClose)


      modal.appendChild(modalContent)

      document.body.appendChild(modal)

    }
    if (state.isModalOpen === false) {
      const modal = document.querySelector('.modal').remove()
    }
  };

  mainLayoutRender();
  headerRender();
  footerRender();

  document.addEventListener("DOMContentLoaded", () => {
    state.isLoaded = true;
  });
};

app();
