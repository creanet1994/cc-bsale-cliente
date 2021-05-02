$(document).ready(function() {

    const listaLi = document.getElementById("list-dynamic");
    const listaCards = document.getElementById("cards-Products");
    const templateLi = document.getElementById("template-li").content;
    const templateCards = document.getElementById("template-cards").content;
    const fragment = document.createDocumentFragment()

    $('#sidebarCollapse').click(function() {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        document.getElementById("bodyContent").style.width = "100%";
    });

    $('#btnProduct').click(function() {
        let key = $('#inputProduct').val()
        fetchProducts({ keyword: key })
    });

    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    });

    const fetchCategory = async() => {
        try {
            const res = await fetch('https://carrera-bsale-api.herokuapp.com/category.php')
            const data = await res.json()
            insertCategory(data);
            $('.sidebar_a').click(function() {
                let id = $(this).attr('id')
                id = id.substr(3)
                fetchProducts({ id: id })
            })
        } catch (error) {
            console.log(error)
        }
    }

    const fetchProducts = async({ id, keyword }) => {
        $("#cards-Products").empty()
        let url
        if (id != null) {
            document.getElementById('formSearch').reset()
            url = `https://carrera-bsale-api.herokuapp.com/product.php?category=${ id }`
        } else {
            url = `https://carrera-bsale-api.herokuapp.com/product.php?search=${ keyword }`
        }
        try {
            const res = await fetch(url)
            const data = await res.json()
            insertProducts(data);
        } catch (error) {
            console.log(error)
        }
    }

    fetchCategory();

    const insertCategory = data => {
        data.forEach(item => {
            templateLi.querySelector('a').textContent = item.name.replace(/^\w/, (c) => c.toUpperCase());
            templateLi.querySelector('a').setAttribute("id", `cat${ item.id }`);
            const clone = templateLi.cloneNode(true)
            fragment.appendChild(clone)
        })
        listaLi.appendChild(fragment)
    }

    const insertProducts = data => {

        data.forEach(item => {
            templateCards.querySelector('.nps').textContent = item.name.replace(/^\w/, (c) => c.toUpperCase());
            templateCards.querySelector('.precio').textContent = formatterPeso.format(Math.trunc((parseInt(item.price) * (1 - (parseInt(item.discount) / 100)))))
            if (parseInt(item.discount) > 0) {
                templateCards.querySelector('.desc').innerHTML = `<p class='disabledPrice'> $${ item.price }</p> `;
            } else {
                templateCards.querySelector('.desc').textContent = '';
            }
            if ((item.url_image == '') || (item.url_image == null)) {
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