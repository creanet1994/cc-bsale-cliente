$(document).ready(function() {

    // Variables del DOM para trabajar de forma dinamica
    const listaLi = document.getElementById("list-dynamic");
    const listaCards = document.getElementById("cards-Products");
    const templateLi = document.getElementById("template-li").content;
    const templateCards = document.getElementById("template-cards").content;
    const fragment = document.createDocumentFragment();

    // Controla la opción de ocultar el sidebar - alternativo
    $('#sidebarCollapse').click(function() {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        document.getElementById("bodyContent").style.width = "100%";
    });

    // A la escucha del click que activa la funcion de busqueda de productos por categoria
    $('#btnProduct').click(function() {
        let key = $('#inputProduct').val()
        if (!key) {
            alert('Ingrese caracteres para ejecutar busqueda')
        } else {
            fetchProducts({ keyword: key })
        }
    });

    $("#formSearch").keypress(function(e) {
        if (e.which == 13) {
            let key = $('#inputProduct').val()
            if (!key) {
                alert('Ingrese caracteres para ejecutar busqueda')
            } else {
                fetchProducts({ keyword: key })
            }
        }
    });

    // Formatea los numeros a pesos
    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    });

    // Petición asincrona que retorna las categorías de productos disponibles
    const fetchCategory = async() => {
        try {
            const res = await fetch('https://carrera-bsale-api.herokuapp.com/category.php')
            const data = await res.json()

            insertCategory(data);
            //Bloque a la "escucha" de un click para activar la función de busqueda de productos por categoria
            $('.sidebar_a').click(function() {

                let id = $(this).attr('id')
                id = id.substr(3)
                fetchProducts({ id: id })
                $('#inputProduct').val('')
            })
        } catch (error) {
            console.log(error);
        }
    }

    // Petición asincrona que retorna los productos disponibles dependiendo de la opción por categoria o por nombre
    const fetchProducts = async({ id, keyword }) => {
        $("#cards-Products").empty()

        let url
        if (id != null) { // Por categoría
            // Se limpia el Dom antes de "pintar" los nuevos productos seleccionados
            url = `https://carrera-bsale-api.herokuapp.com/product.php?category=${ id }`
        } else { // Por nombre
            url = `https://carrera-bsale-api.herokuapp.com/product.php?search=${ keyword }`
        }
        try {
            const res = await fetch(url)
            const data = await res.json()
            insertProducts(data);
            //document.getElementById('formSearch').reset()
        } catch (error) {
            alert("No hay productos asociado a la busqueda")
            console.log(error)
        }
    }

    // Inicializa la petición de obtener las categorías
    fetchCategory();

    // función que permite añadir dinamicamente las categorias en el sidebar
    const insertCategory = data => {
        data.forEach(item => {
            templateLi.querySelector('a').textContent = item.name.replace(/^\w/, (c) => c.toUpperCase());
            templateLi.querySelector('a').setAttribute("id", `cat${ item.id }`);
            const clone = templateLi.cloneNode(true)
            fragment.appendChild(clone)
        })
        listaLi.appendChild(fragment)
    }

    // función que permite añadir dinamicamente los productos en el container
    const insertProducts = data => {

        data.forEach(item => {
            templateCards.querySelector('.nps').textContent = item.name.replace(/^\w/, (c) => c.toUpperCase());
            templateCards.querySelector('.precio').textContent = formatterPeso.format(Math.trunc((parseInt(item.price) * (1 - (parseInt(item.discount) / 100)))))
            if (parseInt(item.discount) > 0) {
                templateCards.querySelector('.desc').innerHTML = `<p class='disabledPrice'> $${ item.price }</p> `;
            } else {
                templateCards.querySelector('.desc').textContent = '';
            }
            if ((item.url_image == '') || (item.url_image == null)) { // Si no trae imagen se inserta una por default
                templateCards.querySelector('img').setAttribute("src", "https://imgclasificados4.emol.com/76859834_0/179/F649671179150224129148255207522352399513179.gif");
            } else {
                templateCards.querySelector('img').setAttribute("src", item.url_image);
            }
            const clone = templateCards.cloneNode(true)
            fragment.appendChild(clone)
        })
        listaCards.appendChild(fragment)
    }

});